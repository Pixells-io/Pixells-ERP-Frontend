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
}) => {
  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
          {[
            { value: "general", label: "General" },
            { value: "variables", label: "Variables" },
            { value: "inventory", label: "Inventario" },
            { value: "storage", label: "Inv. Por Almacén" },
            { value: "shopping", label: "Compras" },
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className={`flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:text-white ${
                value === "variables" && productType !== "1"
                  ? "pointer-events-none opacity-50"
                  : ""
              }`}
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full rounded-[10px] bg-white p-4">
          <TabsContent value="general">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              GENERAL
            </h2>
            <div className="flex flex-wrap pl-2">
              <GeneralForm data={inputsData} setData={setInputsData} />
            </div>
          </TabsContent>
          <TabsContent value="variables">
            {productType === "1" && (
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
              <InventoryForm data={inputsData} setData={setInputsData} />
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
              <CheckForm suppliers={suppliers} data={inputsData} setData={setInputsData} />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
