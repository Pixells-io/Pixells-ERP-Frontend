import React, { useEffect, useRef, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CalendarioFinanciero from "./Components/Calendar";

function MainPlan() {
  const [selectCollection, setSelectCollection] = useState(null);
  const calendarRef = useRef(null);

  const updateCurrentDate = (event) => {
    if (calendarRef.current) {
      setTimeout(() => {
        const calendarApi = calendarRef.current.getApi();
        const targetDate = new Date(event.event.start);
        calendarApi.gotoDate(targetDate);
      }, 1000);
    }
  };

  function renderEventContent(eventInfo) {
    return (
      <div
        className="flex h-full w-full flex-1 cursor-pointer flex-col items-center justify-center gap-y-3 hover:bg-[#F6F6F6]"
        onClick={() => {
          setSelectCollection(eventInfo);
          updateCurrentDate(eventInfo);
        }}
      >
        <span
          className="font-poppins text-sm font-light text-[#00A259]"
          title={eventInfo.event.extendedProps.pay}
        >
          {eventInfo.event.extendedProps.pay}
        </span>
        <span
          className="font-poppins text-sm font-light text-[#D7586B]"
          title={eventInfo.event.extendedProps.collect}
        >
          {eventInfo.event.extendedProps.collect}
        </span>
      </div>
    );
  }

  
  
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">Tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              GESTIÓN DE BANCOS
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Cobros General
          </p>
        </div>

        <div className="flex w-full flex-col overflow-hidden rounded-xl bg-blancoBg px-4 py-2">
          <h2 className="font-poppins text-lg font-medium text-grisHeading my-2">
            RESUMEN DE CUENTAS
          </h2>
          <div className="w-full overflow-hidden">
          <CalendarioFinanciero/>
            <div className="w-full">
             
            </div>
            {/* <div className="w-full">
              <FullCalendar
            
                ref={calendarRef}
                plugins={[multiMonthPlugin, dayGridPlugin]}
                locale="es"
                initialView="multiMonthYear"
                multiMonthMaxColumns={1}
                editable={false}
                headerToolbar={false}
                events={[
                  {
                    title: "hola",
                    date: "2024-10-09",
                    collect: "- $32,000.00",
                    pay: "+ $57,000.00",
                    allDay: true,
                  },
                  {
                    title: "hola",
                    date: "2024-06-09",
                    collect: "- $323,000.00",
                    pay: "+ $557,000.00",
                    allDay: true,
                  },
                ]}
                eventContent={renderEventContent}
              
              />
            </div>
            {!!selectCollection && (
              <div className="h-full w-full max-w-[450px] overflow-auto border-l">
                <Tabs
                  defaultValue="collect"
                  className="flex h-full flex-col overflow-auto rounded-lg"
                >
                  <TabsList className="mx-0 flex justify-start rounded-none border-b bg-inherit py-6">
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
                  <TabsContent value="collect" className="flex flex-1 flex-col">
                    <div className="mt-4 flex-1 px-5 pr-4">
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
                    <div className="flex w-full items-end px-5 py-2">
                      <div className="flex w-full items-center justify-between">
                        <label className="text-xs font-light text-[#8F8F8F]">
                          Actualizado 07 septiembre 2024
                        </label>
                        <Button
                          className="h-[31px] rounded-xl bg-[#E0E0E0] px-8 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
                          type="button"
                          onClick={() => {
                            updateCurrentDate(selectCollection);
                            setSelectCollection(null);
                          }}
                        >
                          Listo
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="pay" className="w-full pt-2">
                    <h2>pay</h2>
                  </TabsContent>
                  <TabsContent value="balance" className="w-full pt-2">
                    <h2>balance</h2>
                  </TabsContent>
                </Tabs>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPlan;
