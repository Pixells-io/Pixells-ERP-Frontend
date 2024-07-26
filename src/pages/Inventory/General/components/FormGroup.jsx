import React, {useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
import InventoryForm from "./Forms/InventoryForm";
import WarehouseForm from "./Forms/WarehouseForm";
import CheckForm from"./Forms/CheckForm"
const FormGroup = () => {

  const [generalData, setGeneralData] = useState({
    sImpuesto: false,
    fabricante: "",
    comentarios: "",
    activo: false,
    inactivo: false,
    desde: "",
    hasta: ""
  });

  const [inventoryData, setInventoryData] = useState({
    costeo: "",
    minimo: "",
    maximo: ""
  });

  const [checkData, setCheckData] = useState({
    proveedor: ""
  });


  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="flex flex-wrap gap-3 justify-start bg-transparent mb-4">
          {[
            { value: "general", label: "General" },
            { value: "inventory", label: "Inventario" },
            { value: "storage", label: "Inv. Por Almacén" },
            { value: "shopping", label: "Compras" },
          ].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="px-4 py-1 data-[state=active]:bg-primario data-[state=active]:text-white bg-blancoBox2 text-grisHeading hover:bg-gray-300 rounded-full transition-colors text-center flex items-center justify-center text-[14px] font-roboto"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full bg-white rounded-[10px] p-4">
          <TabsContent value="general">
            <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">General</h2>
            <div className="flex flex-wrap pl-2">
            <GeneralForm data={generalData} setData={setGeneralData} />
            </div>
          </TabsContent>
          <TabsContent value="inventory">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">Inventario</h2>
            <div className="flex flex-wrap pl-2">
            <InventoryForm data={inventoryData} setData={setInventoryData} />
            </div>
          </TabsContent>
          <TabsContent value="storage">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">Almacén</h2>
            <div className="flex flex-wrap pl-2">
            < WarehouseForm/>
            </div>
          </TabsContent>
          <TabsContent value="shopping">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">Compras</h2>
          <div className="flex flex-wrap pl-2">
          <CheckForm data={checkData} setData={setCheckData} />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
