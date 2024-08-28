import React, {useState} from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AreaForm from "../../WarehouseLocations/Components/Forms/AreaForm";
const FormGroup = () => {


  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="area" className="w-full">
        <TabsList className="flex flex-wrap gap-3 justify-start bg-transparent mb-4">
          {[
            { value: "area", label: "Area" },
            { value: "hallway", label: "Pasillo" },
            { value: "shelf", label: "Estante" },
            { value: "other", label: "Otro" },
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
          <TabsContent value="area">
            <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">AREA</h2>
            <div className="flex flex-wrap pl-2">
              <AreaForm/>
            </div>
          </TabsContent>
          <TabsContent value="hallway">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">PASILLO</h2>
            <div className="flex flex-wrap pl-2">
            </div>
          </TabsContent>
          <TabsContent value="shelf">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">ESTANTE</h2>
            <div className="flex pl-2">
            </div>
          </TabsContent>
          <TabsContent value="other">
          <h2 className="justify-start font-poppins text-[16px] pl-2 mb-4">OTRO</h2>
          <div className="flex w-full pl-2">
         
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
