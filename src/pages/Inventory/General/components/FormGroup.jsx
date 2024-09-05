import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
import InventoryForm from "./Forms/InventoryForm";
import WarehouseForm from "./Forms/WarehouseForm";
import CheckForm from "./Forms/CheckForm";
import VariableForm from "./Forms/VariablesForm";

const FormGroup = ({ productType, suppliers, attrb }) => {
  const [generalData, setGeneralData] = useState({
    sImpuesto: false,
    devo: false,
    fabricante: "",
    comentarios: "",
    activo: false,
    inactivo: false,
    desde: "",
    hasta: "",
  });

  const [inventoryData, setInventoryData] = useState({
    costeo: "",
    costo: "0.00",
    minimo: "",
    maximo: "",
  });

  const [checkData, setCheckData] = useState({
    proveedor: "",
  });

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
                value === "variables" && productType !== "option2"
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
              <GeneralForm data={generalData} setData={setGeneralData} />
            </div>
          </TabsContent>
          <TabsContent value="variables">
            {productType === "option2" && (
              <>
                <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
                  VARIABLES
                </h2>
                <VariableForm attrb={attrb} />
              </>
            )}
          </TabsContent>

          <TabsContent value="inventory">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              INVENTARIO
            </h2>
            <div className="flex flex-wrap pl-2">
              <InventoryForm data={inventoryData} setData={setInventoryData} />
            </div>
          </TabsContent>
          <TabsContent value="storage">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              ALMACÉN
            </h2>
            <div className="flex pl-2">
              <WarehouseForm />
            </div>
          </TabsContent>
          <TabsContent value="shopping">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              COMPRAS
            </h2>
            <div className="flex w-full pl-2">
              <CheckForm
                suppliers={suppliers}
                data={checkData}
                setData={setCheckData}
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
