import React, { useState } from "react";
import NavigationHeader from "@/components/navigation-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import PrincipalForm from "../Components/Forms/PrincipalForm";
import { saveNewService } from "../utils";
const CreateService = () => {
  const tabOptions = [
    {
      value: "principal",
      label: "Principal",
      subLabel: "Información inicial del servicio",
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
      subLabel: "Determina el responsable y los participantes",
      disabled: true,
      update: null,
    },
    {
      value: "process",
      label: "Proceso",
      subLabel: "Establece los pasos a seguir por el equipo",
      disabled: true,
      update: null,
    },
    {
      value: "shopping",
      label: "Compras",
      subLabel: "Configura parametros para compras",
      disabled: true,
      update: null,
    },
  ];
  const { categories, costCenter, priceList, users } = useLoaderData();
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Servicio
          </p>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-[#FBFBFB]">
          <div className="flex items-center gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
            <span className="font-poppins text-lg font-medium text-[#44444F]">
              INFORMACIÓN DEL SERVICIO
            </span>
          </div>
          <Tabs
            defaultValue="principal"
            className="flex h-full w-full flex-1 overflow-hidden"
          >
            <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 overflow-auto border-r bg-transparent p-6">
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
            <TabsContent value="principal" className="w-full">
              <PrincipalForm 
              categories={categories.data}
              costCenter={costCenter.data}
              priceList={priceList.data}/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CreateService;
export async function Action({ request }) {
  const data = await request.formData();

  const response = await saveNewService(data);

  return "0";///inventory/general-services/service/edit
}