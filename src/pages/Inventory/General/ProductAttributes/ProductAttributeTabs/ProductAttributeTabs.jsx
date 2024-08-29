import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormProduct from "./FormProduct";

const ProductAttributeTabs = () => {
  return (
    <Tabs defaultValue="general" className="flex h-full w-full flex-col">
      <TabsList className="mb-4 flex flex-wrap justify-start gap-3 bg-transparent">
        {[{ value: "general", label: "General" }].map(({ value, label }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center font-roboto text-xs font-medium text-white transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:py-1.5 data-[state=active]:text-white"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        value="general"
        className="w-full flex-1 rounded-[10px] bg-blancoBg p-4"
      >
        <FormProduct />
      </TabsContent>
    </Tabs>
  );
};

export default ProductAttributeTabs;
