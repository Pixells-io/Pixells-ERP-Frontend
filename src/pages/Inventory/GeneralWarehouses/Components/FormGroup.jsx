import React, {useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralForm from "./Forms/GeneralForm";
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

  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="flex flex-wrap gap-3 justify-start bg-transparent mb-4">
          {[
            { value: "general", label: "General" },
            { value: "account", label: "Asociar Cuentas Contables" },
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
            <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">GENERAL</h2>

           <GeneralForm/>
          </TabsContent>
          <TabsContent value="inventory">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">ASOCIAR CUENTAS CONTABLES</h2>
           
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;