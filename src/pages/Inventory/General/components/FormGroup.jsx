import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
import InventoryForm from "./Forms/InventoryForm";
import WarehouseForm from "./Forms/WarehouseForm";
import CheckForm from "./Forms/CheckForm";
import VariableForm from "./Forms/VariablesForm";
import Inputs from "./InputGroup";

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
  setBuyData,
  categories,
  warehouses,
  principalInputs,
  setPrincipalInputs,
}) => {
  return (
    <Tabs defaultValue="principal" className="flex w-full flex-1 overflow-auto">
      <TabsList className="flex h-full w-full max-w-[365px] flex-col justify-start gap-y-5 overflow-auto bg-transparent p-6">
        {[
          {
            value: "principal",
            label: "Principal",
            subLabel: "Información inicial del artículo",
          },
          {
            value: "general",
            label: "General",
            subLabel: "Ajusta los parámetros básicos",
          },
          {
            value: "variables",
            label: "Variables",
            subLabel: "Gestiona las variables de tus artículos",
          },
          {
            value: "inventory",
            label: "Inventario",
            subLabel: "Configura el método de valoración",
          },
          {
            value: "storage",
            label: "Inv. Por Almacén",
            subLabel: "Consulta el inventario del artículo",
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
            className={`flex w-full items-center justify-center rounded-[14px] bg-[#F1F1F1] px-6 py-2.5 transition-colors hover:bg-gray-300 data-[state=active]:border data-[state=active]:border-[#44444F] data-[state=active]:bg-[#F1F1F1] ${
              value === "variables" && productType !== "2"
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
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value="principal" className="w-full">
        <div className="flex h-full w-full flex-col py-4">
          <div className="overflow-auto px-6">
            <h2 className="font-poppins text-sm font-medium text-[#44444F]">
              PRINCIPAL
            </h2>
            <Inputs
              categories={categories}
              warehouses={warehouses}
              inputsData={principalInputs}
              setInputsData={setPrincipalInputs}
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="general" className="w-full">
        <div className="flex h-full w-full flex-col py-4">
          <div className="overflow-auto px-6">
            <h2 className="font-poppins text-sm font-medium text-[#44444F]">
              GENERAL
            </h2>
            <GeneralForm data={inputsData} setData={setInputsData} />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="variables" className="w-full">
        {productType === "2" && (
          <div className="flex h-full w-full flex-col py-4">
            <div className="overflow-auto px-6">
              <h2 className="font-poppins text-sm font-medium text-[#44444F]">
                Variables
              </h2>
              <VariableForm
                attrb={attrb}
                variableData={variableData}
                setVariableData={setVariableData}
              />
            </div>
          </div>
        )}
      </TabsContent>

      <TabsContent value="inventory" className="w-full">
        <div className="flex h-full w-full flex-col py-4">
          <div className="overflow-auto px-6">
            <h2 className="font-poppins text-sm font-medium text-[#44444F]">
              INVENTARIO
            </h2>
            <InventoryForm data={inventory} setData={setInventory} />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="storage" className="w-full">
        <div className="flex h-full w-full flex-col py-4">
          <div className="overflow-auto px-6">
            <h2 className="font-poppins text-sm font-medium text-[#44444F]">
              ALMACÉN
            </h2>
            <WarehouseForm />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="shopping" className="w-full">
        <div className="flex h-full w-full flex-col py-4">
          <div className="overflow-auto px-6">
            <h2 className="font-poppins text-sm font-medium text-[#44444F]">
              COMPRAS
            </h2>
            <CheckForm
              suppliers={suppliers}
              data={buyData}
              setData={setBuyData}
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default FormGroup;
