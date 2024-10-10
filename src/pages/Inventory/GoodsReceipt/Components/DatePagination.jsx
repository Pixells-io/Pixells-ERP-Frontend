import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, searchOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import InputForm from "@/components/InputForm/InputForm";
import { Label } from "@/components/ui/label";

const DatePagination = ({ onDateChange, initialDate }) => {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [dateRange, setDateRange] = useState([]);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const dayNames = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  useEffect(() => {
    generateDateRange(currentDate);
    onDateChange(currentDate);
  }, [currentDate, onDateChange]);

  const generateDateRange = (date) => {
    setDateRange(
      Array.from({ length: 10 }, (_, i) => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + i - 4);
        return newDate;
      }),
    );
  };

  const formatDate = (date) => `${date.getDate()} ${dayNames[date.getDay()]}`;

  const navigateDate = (direction) => {
    setCurrentDate(
      new Date(currentDate.setDate(currentDate.getDate() + direction)),
    );
  };

  const isToday = (date) => date.toDateString() === new Date().toDateString();

  const isMiddleDate = (index) => index === 4;

  return (
    <div className="flex pb-1 h-[47px] overflow-x-auto overflow-y-auto items-center justify-between px-2">
      <div className="flex-1" /> {/* Espaciador izquierdo */}
      
      {/* Paginación centrada */}
      <div className="flex items-center justify-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => navigateDate(-1)}
        >
          <IonIcon icon={chevronBack} className="h-4 w-4" />
        </Button>
        {dateRange.map((date, index) => (
          <Button
            key={date.toISOString()}
            variant="ghost"
            size="sm"
            className={`px-1 py-1 font-poppins ${
              isMiddleDate(index)
                ? "h-10 min-w-[70px] rounded-lg border border-[#44444F] bg-[#E8E8E8] text-sm"
                : "h-8 min-w-[50px] text-xs text-[#44444F]"
            }`}
            onClick={() => setCurrentDate(date)}
          >
            <div className="text-center text-xs font-medium">
              {isToday(date) ? (
                <>
                  <div className="font-poppins text-base font-semibold text-[#44444F]">
                    HOY
                  </div>
                  <div>{formatDate(date)}</div>
                </>
              ) : (
                formatDate(date)
              )}
            </div>
          </Button>
        ))}
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => navigateDate(1)}
        >
          <IonIcon icon={chevronForward} className="h-4 w-4" />
        </Button>
      </div>

      {/* Botón de fecha y input de búsqueda */}
      <div className="flex flex-1 items-center justify-end space-x-12">
        <div className="flex justify-between items-center gap-24">
        <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-[24px] rounded-full border-[#D7D7D7] bg-transparent px-4 text-center text-sm text-[#8F8F8F]"
            >
              Fecha
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={currentDate}
              onSelect={(date) => {
                setCurrentDate(date);
                setCalendarOpen(false);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="flex h-9 w-44 items-center justify-end rounded-3xl border-[1px] border-[#D7D7D7] px-2 py-2 text-[10px]">
          <Label htmlFor="search">
            <IonIcon
              icon={searchOutline}
              className="h-6 w-6 stroke-1 text-[#8F8F8F]"
            />
          </Label>
          <InputForm
            name="search"
            className="h-full w-full border-0 bg-transparent text-sm font-normal text-[#8F8F8F] !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
          />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DatePagination;
