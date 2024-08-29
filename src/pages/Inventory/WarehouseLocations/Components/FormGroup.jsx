import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AreaForm from "../../WarehouseLocations/Components/Forms/AreaForm";

const FormGroup = () => {
  return (
    <div className="w-full overflow-hidden">
      <Tabs defaultValue="area" className="w-full">
        <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
          {[{ value: "area", label: "Ubicaciones" }].map(({ value, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-[14px] text-grisHeading transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:text-white"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full rounded-[10px] bg-white p-4">
          <TabsContent value="area">
            <h2 className="mb-4 justify-start pl-2 font-poppins text-[16px]">
              AREA
            </h2>
            <div className="flex flex-wrap pl-2">
              <AreaForm />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default FormGroup;
