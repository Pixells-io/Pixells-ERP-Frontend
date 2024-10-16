import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralTab from "./GeneralTab";

const ConfigurationPos = () => {
  const tabOptions = [
    {
      value: "general",
      label: "General",
      subLabel: "Información inicial del artículo",
      disabled: false,
      update: {
        day: "Hoy",
        date: "14:36",
      },
    },
    {
      value: "timeStart",
      label: "Horarios de Entrada",
      subLabel: "Ajusta los parámetros básicos",
      disabled: false,
      update: null,
    },
    {
      value: "categories",
      label: "Categorías",
      subLabel: "Determina el responsable y los participantes",
      disabled: false,
      update: null,
    },
    {
      value: "ticket",
      label: "Ticket",
      subLabel: "Establece los pasos a seguir por el equipo",
      disabled: false,
      update: null,
    },
    {
      value: "multiPayment",
      label: "Multipago",
      subLabel: "Configura parametros para compras",
      disabled: false,
      update: null,
    },
    {
      value: "giftCard",
      label: "Gift Card",
      subLabel: "Configura parametros para compras",
      disabled: false,
      update: null,
    },
    {
      value: "cards",
      label: "Tarjeta Prepago",
      subLabel: "Configura parametros para compras",
      disabled: false,
      update: null,
    },
  ];

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            CONFIGURACIÓN
          </h2>
        </div>

        <div className="flex flex-1 flex-col overflow-auto rounded-xl bg-white">
          <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              CONFIGURACIÓN DEL PUNTO DE VENTA
            </span>
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              SUCURSAL ANDARES
            </span>
          </div>

          <Tabs
            defaultValue="general"
            className="flex w-full flex-1 overflow-auto"
          >
            <TabsList className="flex h-full w-full max-w-[365px] rounded-none flex-col justify-start gap-y-5 overflow-auto bg-transparent p-6 border-r">
              {tabOptions.map(
                ({ value, label, subLabel, disabled, update }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    disabled={disabled}
                    className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                      value === "variables"
                        ? "pointer-events-none opacity-50"
                        : ""
                    }`}
                  >
                    <div className="flex w-full flex-col justify-start">
                      <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                        {label}
                      </p>
                      <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                        {subLabel}
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      {!!update ? (
                        <>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.day}
                          </label>
                          <label className="text-xs font-light text-[#8F8F8F]">
                            {update?.date}
                          </label>
                        </>
                      ) : (
                        <label className="text-xs font-light text-[#8F8F8F]">
                          New
                        </label>
                      )}
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
            <TabsContent value="general" className="w-full">
              <GeneralTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPos;
