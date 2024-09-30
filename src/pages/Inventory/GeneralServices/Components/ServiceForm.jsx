import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrincipalForm from "./Forms/PrincipalForm";
import GeneralForm from "./Forms/GeneralForm";

const ServiceForm = ({}) => {
  const tabOptions = [
    {
      value: "principal",
      label: "Principal",
      subLabel: "Información inicial de la sucursal",
      disabled: false,
      update: {
        day: "Hoy",
        date: "14:36",
      },
    },
    {
      value: "general",
      label: "General",
      subLabel: "Ajusta los parámetros básicos",
      disabled: true,
      update: null,
    },
    {
      value: "users",
      label: "Usuarios",
      subLabel: "Gestiona los usuarios que usarán el sistema",
      disabled: true,
      update: null,
    },
    {
      value: "cashBoxes",
      label: "Cajas",
      subLabel: "Configura las cajas que tendrás disponibles",
      disabled: true,
      update: null,
    },
    {
      value: "payment",
      label: "Pago",
      subLabel: "Habilita los métodos de pago deseados",
      disabled: true,
      update: null,
    },
    {
      value: "accounting",
      label: "Contabilidad",
      subLabel: "Configura parametros para contabilidad",
      disabled: true,
      update: null,
    },
    {
      value: "invoicesAndReceipts",
      label: "Facturas y Recibos",
      subLabel: "Configura parametros para los tickets",
      disabled: true,
      update: null,
    },
    {
      value: "devices",
      label: "Dispositivos",
      subLabel: "Confirma los dispositivos que estarán activos",
      disabled: true,
      update: null,
    },
    {
      value: "stock",
      label: "Stock",
      subLabel: "Consulta el inventario en tiempo real",
      disabled: true,
      update: null,
    },
  ];

  return (
    <Tabs defaultValue="principal" className="flex w-full flex-1 overflow-auto">
      <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 overflow-auto bg-transparent p-6">
        {tabOptions.map(({ value, label, subLabel, disabled, update }) => (
          <TabsTrigger
            key={value}
            value={value}
            disabled={disabled}
            className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
              value === "variables" ? "pointer-events-none opacity-50" : ""
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
                <label className="text-xs font-light text-[#8F8F8F]">New</label>
              )}
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="principal" className="w-full">
        <PrincipalTab
          whareHouses={whareHouses.data}
          costCenter={costCenter.data}
          priceList={priceList.data}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ServiceForm;
