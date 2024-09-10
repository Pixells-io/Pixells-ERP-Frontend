import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircle,
  addCircleOutline,
  trash,
} from "ionicons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NewCategory from "./Modals/NewCategory";
import {
  destroyAttribute,
  destroyAttributeSlot,
  destroyCategory,
  destroyProduct,
  editAttribute,
  editCategory,
  getProducts,
  saveAttribute,
  saveAttributeSlots,
  saveCategory,
  updateAttributeSlot,
} from "./utils";
import Category from "./components/Tabs/Category";
import NewAttribute from "./Modals/NewAttribute";
import ProductAttributeTabs from "./ProductAttributes/ProductAttributeTabs";
import { Link } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import ModalDeleteProduct from "./Modals/ModalDeleteProduct";

const MainGeneral = () => {
  const { categories, attributes, products } = useLoaderData();

  const [modalNewCategory, setModalNewCategory] = useState(false);
  const [modalNewAttribute, setModalNewAttribute] = useState(false);

  const [productState, setProductState] = useState(products.data);

  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productDestroyModal, setProductDestroyModal] = useState(false);

  const pusherClient = createPusherClient();

  async function getProductsFuncion() {
    let newData = await getProducts();
    setProductState(newData?.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-products");

    pusherClient.bind("fill-products", ({ message }) => {
      getProductsFuncion();
    });

    return () => {
      pusherClient.unsubscribe("private-get-products");
    };
  }, []);

  const columns = [
    {
      accessorKey: "code",
      header: "Código",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.code}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "category",
      header: "Categoría",
      meta: { filterButton: true },
    },
    {
      accessorKey: "name",
      header: "Nombre",
      meta: { filterButton: true },
    },
    {
      accessorKey: "measure",
      header: "Unidad Medida",
    },
    {
      accessorKey: "type",
      header: "Tipo",
      cell: ({ row }) => {
        return (
          <>
            {row.original?.type == 0 ? (
              <span>Simple</span>
            ) : (
              <span>Variable</span>
            )}
          </>
        );
      },
    },
    {
      accessorKey: "created",
      header: "Creación",
    },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center gap-1">
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={informationCircle}
              className="h-5 w-5 text-[#696974]"
            />
          </Button>
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            onClick={() =>
              openDestroyProductModal(row.original?.name, row.original?.id)
            }
          >
            <IonIcon icon={trash} className="h-5 w-5 text-[#696974]" />
          </Button>
        </div>
      ),
    },
  ];

  function openDestroyProductModal(name, id) {
    setProductName(name);
    setProductId(id);
    setProductDestroyModal(true);
  }

  return (
    <div className="flex w-full">
      {/* Modals */}
      <NewCategory modal={modalNewCategory} setModal={setModalNewCategory} />
      <NewAttribute modal={modalNewAttribute} setModal={setModalNewAttribute} />
      <ModalDeleteProduct
        modal={productDestroyModal}
        setModal={setProductDestroyModal}
        product_name={productName}
        product_id={productId}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Artículos General
          </p>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
                >
                  <IonIcon
                    icon={addCircleOutline}
                    className="h-7 w-7 text-primarioBotones"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl">
                <DropdownMenuItem className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal">
                  <Link
                    to="/inventory/create"
                    className="flex w-full items-center"
                  >
                    <span>Artículo</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
                  onClick={() => setModalNewCategory(true)}
                >
                  Categoría
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
                  onClick={() => setModalNewAttribute(true)}
                >
                  Atributos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/*content */}
        <Tabs
          defaultValue="ARTÍCULOS"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="ARTÍCULOS"
            >
              ARTÍCULOS
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="CATEGORIAS"
            >
              CATEGORÍAS
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
              value="ATTRIBUTES"
            >
              ATRIBUTOS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ARTÍCULOS" className="mt-[-60px] p-2">
            <DataTable
              data={productState}
              columns={columns}
              searchFilter="codigo"
              searchNameFilter="Buscar por código"
              isCheckAll={true}
            />
          </TabsContent>
          <TabsContent value="CATEGORIAS" className="mt-[-60px] p-2">
            <Category categories={categories.data} />
          </TabsContent>
          <TabsContent value="ATTRIBUTES" className="p-2">
            <ProductAttributeTabs
              attributes={attributes.data}
              setModalNewAttribute={setModalNewAttribute}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainGeneral;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "save_category":
      await saveCategory(data);
      break;
    case "destroy_category":
      await destroyCategory(data);
      break;
    case "edit_category":
      await editCategory(data);
      break;
    case "save_attribute":
      await saveAttribute(data);
      break;
    case "edit_attribute":
      await editAttribute(data);
      break;
    case "destroy_attribute":
      await destroyAttribute(data);
      break;
    case "save_attributeSlots":
      await saveAttributeSlots(data);
      break;
    case "destroy_attributeSlot":
      await destroyAttributeSlot(data);
      break;
    case "update_attributeSlot":
      await updateAttributeSlot(data);
      break;
    case "destroy_product":
      await destroyProduct(data);
      break;
  }

  return redirect(`/inventory`);
}
