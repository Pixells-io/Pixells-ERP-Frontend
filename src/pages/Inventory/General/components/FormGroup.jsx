import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
import InventoryForm from "./Forms/InventoryForm";
import WarehouseForm from "./Forms/WarehouseForm";
import CheckForm from "./Forms/CheckForm";
import VariableForm from "./Forms/VariablesForm";

const FormGroup = ({
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
  setBuyData
}) => {
  return (
    <div className="w-full overflow-hidden rounded-[10px] p-4">
      <Tabs defaultValue="general" className="w-full flex ">
        <TabsList className="mb-4 flex flex-col justify-start gap-y-5 bg-transparent w-full max-w-[310px] h-full">
          {[
            { value: "principal", label: "Principal", subLabel: "Información inicial del artículo" },
            { value: "general", label: "General", subLabel: "Ajusta los parámetros básicos" },
            { value: "variables", label: "Variables", subLabel: "Gestiona las variables de tus artículos" },
            { value: "inventory", label: "Inventario", subLabel: "Configura el método de valoración" },
            { value: "storage", label: "Inv. Por Almacén", subLabel: "Consulta el inventario del artículo" },
            { value: "shopping", label: "Compras", subLabel: "Configura parametros para compras" },
          ].map(({ value, label, subLabel }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={`w-full py-2.5 rounded-[14px] flex px-6 items-center justify-center bg-[#F1F1F1] transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
                value === "variables" && productType !== "2"
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              <div className="flex flex-col justify-start w-full">
                  <p className="text-start font-roboto font-medium text-sm text-[#44444F] leading-tight">{label}</p>
                  <p className="text-start font-roboto font-normal text-[11px] text-[#8F8F8F] leading-tight">{subLabel}</p>
              </div>
              <div>

              </div>
            </TabsTrigger>
          ))}
        </TabsList>
          <TabsContent value="general">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              GENERAL
            </h2>
            <div className="flex flex-wrap pl-2">
              <GeneralForm data={inputsData} setData={setInputsData} />
            </div>
          </TabsContent>
          <TabsContent value="variables">
            {productType === "2" && (
              <VariableForm
                attrb={attrb}
                variableData={variableData}
                setVariableData={setVariableData} 
              />
            )}
          </TabsContent>
          <TabsContent value="inventory">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              INVENTARIO
            </h2>
            <div className="flex flex-wrap pl-2">
              <InventoryForm data={inventory} setData={setInventory} />
            </div>
          </TabsContent>
          <TabsContent value="storage">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              ALMACÉN
            </h2>
            <div className="flex pl-2">
              <WarehouseForm  />
            </div>
          </TabsContent>
          <TabsContent value="shopping">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              COMPRAS
            </h2>
            <div className="flex w-full pl-2">
              <CheckForm suppliers={suppliers} data={buyData} setData={setBuyData} />
            </div>
          </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormGroup;
