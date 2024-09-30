import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrincipalForm from "./Forms/PrincipalForm";
import GeneralForm from "./Forms/GeneralForm";


const ServiceForm = ({
    productType,
    suppliers,
    attrb,
    inputsData,
    setInputsData,
    variableData,
    setVariableData,
    inventory,
    setInventory,
    buyData,
    setBuyData,
    categories,
    warehouses,
    principalInputs,
    setPrincipalInputs,
}) => {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-[10px] p-4">
      <Tabs defaultValue="principal" className="flex w-full">
        <TabsList className="mb-4 flex h-full w-full max-w-[310px] flex-col justify-start gap-y-5 bg-transparent">
          {[
            {
              value: "principal",
              label: "Principal",
              subLabel: "Información inicial del servicio",
            },
            {
              value: "general",
              label: "General",
              subLabel: "Ajusta los parámetros básicos",
            },
            {
              value: "users",
              label: "Usuarios",
              subLabel: "Determina el responsable y los equipos",
            },
            {
              value: "process",
              label: "Proceso",
              subLabel: "Establece los pasos a seguir por el equipo",
            },
            {
              value: "shopping",
              label: "Compras",
              subLabel: "Configura parametros para compras",
            },
          ].map(({ value, label, subLabel }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1]`}
            >
              <div className="flex w-full flex-col justify-start">
                <p className="text-start font-roboto text-sm font-medium leading-tight text-[#44444F]">
                  {label}
                </p>
                <p className="text-start font-roboto text-[11px] font-normal leading-tight text-[#8F8F8F]">
                  {subLabel}
                </p>
              </div>
              <div></div>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="principal" className="w-full">
        <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
            Principal
          </h2>
          <div className="flex w-full pl-2">
         <PrincipalForm
          categories={categories}
          warehouses={warehouses}
          inputsData={principalInputs}
          setInputsData={setPrincipalInputs}/>
          </div>
        </TabsContent>

        <TabsContent value="general" className="w-full">
          <GeneralForm
          data={inputsData} 
          setData={setInputsData}
          />
        </TabsContent>

        <TabsContent value="users" className="w-full">
        
        </TabsContent>

        <TabsContent value="process" className="w-full">
        
        </TabsContent>

        <TabsContent value="shopping" className="w-full">
         
        </TabsContent>

      
      </Tabs>
    </div>
  );
};

export default ServiceForm;
