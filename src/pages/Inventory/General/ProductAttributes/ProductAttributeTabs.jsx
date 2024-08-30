import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormProduct from "./FormProduct";
import { Button } from "@/components/ui/button";
import { createPusherClient } from "@/lib/pusher";
import { getAttributes } from "../utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import ModalDeleteAttribute from "./Modals/ModalDeleteAttribute";
import EditAttribute from "./Modals/EditAttribute";

const ProductAttributeTabs = ({ attributes, setModalNewAttribute }) => {
  const [attributesInfo, setAttributeInfo] = useState(attributes);
  const [openModalDeleteAttribute, setOpenModalDeleteAttribute] =
    useState(false);
  const [attributeIdSelect, setAttributeIdSelect] = useState(0);
  const [attributeNameSelect, setAttributeNameSelet] = useState("");
  const [openModalEditAttribute, setOpenModalEditAttribute] = useState(false);
  const [attributeSelect, setAttributeSelect] = useState({});

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

  const openModalDelete = (id, name) => {
    setAttributeIdSelect(id);
    setAttributeNameSelet(name);
    setOpenModalDeleteAttribute(true);
  };

  const openModalEdit = (attribute) => {
    setOpenModalEditAttribute(true);
    setAttributeSelect(attribute);
  }

  return (
    <>
      {/* Modals */}
      <ModalDeleteAttribute
        modal={openModalDeleteAttribute}
        setModal={setOpenModalDeleteAttribute}
        attribute_id={attributeIdSelect}
        attribute_name={attributeNameSelect}
      />
      <EditAttribute 
        modal={openModalEditAttribute}
        setModal={setOpenModalEditAttribute}
        attribute={attributeSelect}
        setAttribute={setAttributeIdSelect}
      />

      <Tabs className="flex h-full w-full flex-col">
        <TabsList className="mb-4 flex w-full flex-row justify-start gap-6 bg-transparent">
          <div className="flex h-full w-fit flex-wrap justify-start gap-3 overflow-auto">
            {attributesInfo.map((attribute, index) => (
              <TabsTrigger
                key={index}
                value={attribute.id}
                className="m-0 h-8 w-24 min-w-fit cursor-pointer rounded-full bg-blancoBox2 p-0 px-4 text-center font-roboto text-xs font-medium text-[#44444F] transition-colors hover:bg-gray-300 data-[state=active]:bg-primario data-[state=active]:py-1.5 data-[state=active]:text-white"
              >
                <ContextMenu className="m-0 h-full w-full p-0">
                  <ContextMenuTrigger className="flex h-full w-full items-center justify-center px-2">
                    {attribute?.name}
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem
                      onClick={() => {
                        openModalEdit(attribute);
                      }}
                      className="cursor-pointer"
                    >
                      Edit
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => {
                        openModalDelete(attribute.id, attribute.name);
                      }}
                      className="cursor-pointer"
                    >
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              </TabsTrigger>
            ))}
          </div>
          <div className="w-fit">
            <Button
              className="h-7 rounded-full border border-primarioBotones bg-inherit px-6 py-1 text-center text-xs font-light text-primarioBotones hover:bg-inherit"
              type="button"
              onClick={() => setModalNewAttribute(true)}
            >
              Agregar
            </Button>
          </div>
        </TabsList>
        {attributesInfo.map((attribute, index) => (
          <TabsContent
            key={index}
            value={attribute.id}
            className="w-full flex-1 rounded-[10px] bg-blancoBg p-4"
          >
            <FormProduct
              attribute_id={attribute.id}
              attribute_name={attribute.name}
              slots={attribute.slots}
            />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default ProductAttributeTabs;
