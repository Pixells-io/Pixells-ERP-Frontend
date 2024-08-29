import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormProduct from "./FormProduct";
import { Button } from "@/components/ui/button";
import { createPusherClient } from "@/lib/pusher";
import { getAttributes } from "../utils";

const ProductAttributeTabs = ({attributes, setModalNewAttribute}) => {
  const [attributesInfo, setAttributeInfo] = useState(attributes);

  const pusherClient = createPusherClient();

  async function getAttributesList() {
    let newData = await getAttributes();
    setAttributeInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-product-attributes");

    pusherClient.bind("fill-product-attributes", ({ message }) => {
      getAttributesList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-product-attributes");
    };
  }, []);


  return (
    <Tabs className="flex h-full w-full flex-col">
      <TabsList className="mb-4 flex flex-wrap justify-start gap-6 bg-transparent overflow-auto">
        <div className="flex flex-wrap justify-start gap-3">
          {attributesInfo.map((attribute, index) => (
            <TabsTrigger
              key={index}
              value={attribute.id}
              className="flex items-center justify-center rounded-full bg-blancoBox2 px-4 py-1 text-center text-[#44444F] font-roboto text-xs font-medium transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:py-1.5 data-[state=active]:text-white"
            >
              {attribute.name}
            </TabsTrigger>
          ))}
        </div>
        <div>
          <Button
            className="h-7 rounded-full border border-primarioBotones bg-inherit px-6 py-1 text-center text-xs font-light text-primarioBotones hover:bg-inherit"
            type="button"
            onClick={() => setModalNewAttribute(true)}
          >
            Agregar
          </Button>
        </div>
      </TabsList>
      {
        attributesInfo.map((attribute, index) => (
          <TabsContent
            key={index}
            value={attribute.id}
            className="w-full flex-1 rounded-[10px] bg-blancoBg p-4"
          >
            <FormProduct attribute_id={attribute.id} attribute_name={attribute.name} slots={attribute.slots} />
          </TabsContent>
        ))
      }
    </Tabs>
  );
};

export default ProductAttributeTabs;
