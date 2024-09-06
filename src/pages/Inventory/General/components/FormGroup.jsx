import React, { useState } from "react";
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
  const [generalData, setGeneralData] = useState({
    sImpuesto: inputsData.sujetoAImpuesto,
    devo: inputsData.disponibleParaDevolucion,
    fabricante: inputsData.fabricante,
    comentarios: "",
    activo: inputsData.activo,
    inactivo: false,
    desde: inputsData.desde,
    hasta: inputsData.hasta,
  });

  const [inventoryData, setInventoryData] = useState({
    costeo: inputsData.metodoValoracion,
    costo: "0.00",
    minimo: inputsData.stockMinimo,
    maximo: inputsData.stockMaximo,
  });

  const [checkData, setCheckData] = useState({
    proveedorDefault: inputsData.proveedor || "",
  });
  // Actualizar inputsData cuando los datos generales cambian
  const handleGeneralDataChange = (name, value) => {
    setGeneralData((prevData) => ({ ...prevData, [name]: value }));
    setInputsData((prevInputsData) => ({ ...prevInputsData, [name]: value }));
  };

  // Actualizar inputsData cuando los datos cambien
  const handleInventoryDataChange = (name, value) => {
    setInventoryData((prevData) => ({ ...prevData, [name]: value }));
    setInputsData((prevInputsData) => ({ ...prevInputsData, [name]: value }));
  };

  const handleCheckDataChange = (name, value) => {
    setCheckData((prevData) => ({ ...prevData, [name]: value }));
    setInputsData((prevInputsData) => ({ ...prevInputsData, [name]: value }));
  };

  const handleVariableDataChange = (newData) => {
    setVariableData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name, 
    }));
    setVariableData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...files],
    }));
  };

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
              <GeneralForm
                data={generalData}
                setData={handleGeneralDataChange} 
              />
            </div>
          </TabsContent>
          <TabsContent value="variables">
            {productType === "1" && (
              <VariableForm
                attrb={attrb}
                variableData={variableData}
                onDataChange={handleVariableDataChange}
              />
            )}
          </TabsContent>
          <TabsContent value="inventory">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              INVENTARIO
            </h2>
            <div className="flex flex-wrap pl-2">
              <InventoryForm
                data={inventoryData}
                setData={handleInventoryDataChange} 
              />
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
                setData={handleCheckDataChange} 
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
