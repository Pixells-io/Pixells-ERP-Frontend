import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FinancialCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [months, setMonths] = useState([new Date()]);
  const [selectedDay, setSelectedDay] = useState(null);
  const observerRef = useRef(null);
  const weekDays = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB", "DOM"];

  const getDaysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const totalDays = lastDay.getDate();
    const initialDays = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    return Array.from({ length: 42 }, (_, i) => {
      const day = i - initialDays + 1;
      return {
        day: day > 0 && day <= totalDays ? day : "",
        positive: day === 9 ? 57000.0 : null,
        negative: day === 9 ? 32000.0 : null,
        documents:
          day === 9
            ? [
                {
                  number: "FA203",
                  client: "Rigosaurios SA de CV",
                  amount: 280000.0,
                },
                {
                  number: "FA315",
                  client: "Cocacola SA de CV",
                  amount: 100000.0,
                },
              ]
            : [],
      };
    });
  };

  const loadNextMonth = () => {
    setMonths((prevMonths) => {
      const lastMonth = prevMonths[prevMonths.length - 1];
      const nextMonth = new Date(
        lastMonth.getFullYear(),
        lastMonth.getMonth() + 1,
        1
      );
      const isMonthLoaded = prevMonths.some(
        (month) => month.getMonth() === nextMonth.getMonth() && month.getFullYear() === nextMonth.getFullYear()
      );
      return isMonthLoaded ? prevMonths : [...prevMonths, nextMonth];
    });
  };

  const formatMonthYear = (date) => {
    return date
      .toLocaleString("es", { month: "long", year: "numeric" })
      .toUpperCase();
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadNextMonth();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (months.length > 0) {
      setCurrentDate(months[months.length - 1]);
    }
  }, [months]);

  return (
    <div className="flex h-full w-full overflow-hidden">
      <Card className="flex h-full w-full flex-col overflow-hidden border-none bg-white">
        <CardHeader className="flex-shrink-0 items-center justify-between border-b pb-2">
          {/* WEEK */}
          <div className="grid w-full grid-cols-7 gap-4">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-light text-[#8F8F8F]"
              >
                {day}
              </div>
            ))}
          </div>
        </CardHeader>

        {/*PAST MONTHS */}
        {months.map((month, index) => (
          <div key={index} className="ml-4 mt-2 flex flex-shrink-0 justify-start gap-6">
            <span className="font-poppins text-sm font-semibold text-[#44444F]">
              {formatMonthYear(month)}
            </span>
            <span className="font-poppins text-sm font-light text-[#44444F]">
              $450,000.00
            </span>
          </div>
        ))}
        {/* MONTHS */}
        <CardContent className="flex-grow overflow-auto p-4">
          {months.map((month, index) => {
            const daysInMonth = getDaysInMonth(month);
            return (
              <div key={index} className="mb-4">
                {/* Month Title */}
                <div className="ml-4 mt-2 flex flex-shrink-0 justify-start gap-6">
                  <span className="font-poppins text-sm font-semibold text-[#44444F]">
                    {formatMonthYear(month)}
                  </span>
                  <span className="font-poppins text-sm font-light text-[#44444F]">
                    $450,000.00
                  </span>
                </div>
                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-[2px]">
                  {daysInMonth.map(
                    ({ day, positive, negative, documents }, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`h-[110px] cursor-pointer border p-1 ${
                          selectedDay && selectedDay.day === day
                            ? "bg-gray-100"
                            : ""
                        }`}
                        onClick={() =>
                          handleDayClick({ day, positive, negative, documents })
                        }
                      >
                        {day && (
                          <div className="p-2 font-poppins text-sm font-light text-[#44444F]">
                            {day}
                          </div>
                        )}
                        {positive && (
                          <div className="mt-1 h-[33px] text-center font-poppins text-xs font-light text-[#00A259]">
                            +${positive.toFixed(2)}
                          </div>
                        )}
                        {negative && (
                          <div className="mb-2 h-[33px] text-center font-poppins text-xs font-light text-[#D7586B]">
                            -${negative.toFixed(2)}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            );
          })}
          {/* Scroll observer target */}
          <div ref={observerRef} className="h-10"></div>
        </CardContent>
      </Card>
      {selectedDay && (
        <div className="flex h-full w-full max-w-[450px] flex-col overflow-hidden border-l">
          <Tabs
            defaultValue="collect"
            className="flex h-full flex-col overflow-hidden"
          >
            <TabsList className="mx-0 flex flex-shrink-0 justify-start rounded-none border-b bg-inherit py-6">
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-semibold data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="collect"
              >
                POR COBRAR
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-semibold data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="pay"
              >
                POR PAGAR
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-semibold data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="balance"
              >
                SALDO
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="collect"
              className="flex flex-grow flex-col overflow-hidden"
            >
              <div className="flex-grow overflow-auto px-5 pr-4">
                <div className="grid grid-cols-12 border-b border-[#44444F]">
                  <div className="col-span-4">
                    <span className="font-poppins text-xs font-normal text-[#44444F]">
                      Documento
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="font-poppins text-xs font-normal text-[#44444F]">
                      Cliente
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="font-poppins text-xs font-normal text-[#44444F]">
                      Monto
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#D7D7D7] py-4">
                  <div className="col-span-4">
                    <span className="text-xs font-semibold text-[#44444F] underline">
                      FA203
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-xs font-normal text-[#44444F]">
                      Rigosaurios SA de CV
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-xs font-normal text-[#44444F]">
                      $280,000.00
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#D7D7D7] py-4">
                  <div className="col-span-4">
                    <span className="text-xs font-semibold text-[#44444F] underline">
                      FA315
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-xs font-normal text-[#44444F]">
                      Cocacola SA de CV
                    </span>
                  </div>
                  <div className="col-span-4">
                    <span className="text-xs font-normal text-[#44444F]">
                      $100,000.00
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-b border-[#D7D7D7] py-4">
                  <div className="col-span-4">
                    <span className="text-sm font-medium text-[#44444F]">
                      TOTAL
                    </span>
                  </div>
                  <div className="col-span-4"></div>
                  <div className="col-span-4">
                    <span className="text-sm font-medium text-[#44444F]">
                      $380,000.00
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex-shrink-0 px-5 py-2">
                <div className="flex w-full items-center justify-between">
                  <label className="text-xs font-light text-[#8F8F8F]">
                    Actualizado 07 septiembre 2024
                  </label>
                  <Button
                    className="h-[31px] rounded-xl bg-[#E0E0E0] px-8 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
                    type="button"
                    onClick={() => setSelectedDay(null)}
                  >
                    Listo
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="pay" className="flex-grow overflow-auto">
              <h2>pay</h2>
            </TabsContent>
            <TabsContent value="balance" className="flex-grow overflow-auto">
              <h2>balance</h2>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default FinancialCalendar;
