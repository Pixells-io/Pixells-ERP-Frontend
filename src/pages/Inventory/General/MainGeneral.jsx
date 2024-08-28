import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircle,
  addCircleOutline,
} from "ionicons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { redirect, useLoaderData } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import NewCategory from "./Modals/NewCategory";
import { destroyCategory, editCategory, saveCategory } from "./utils";
import Category from "./components/Tabs/Category";
const MainGeneral = () => {
  const { categories } = useLoaderData();

  const [modalNewCategory, setModalNewCategory] = useState(false);
  const data = [
    {
      codigo: "0987",
      categoria: "Metales",
      nombre: "Tornillos",
      unidadMedida: "Pieza",
      cuentaContable: "Activos",
      tipo: "Inventario",
      creadoPor: "usuario1.jpg",
      creacion: "21/07/2024",
    },
    {
      codigo: "0988",
      categoria: "Metales",
      nombre: "Tuercas",
      unidadMedida: "Pieza",
      cuentaContable: "Activos",
      tipo: "Inventario",
      creadoPor: "usuario3.jpg",
      creacion: "19/07/2024",
    },
    {
      codigo: "0989",
      categoria: "Metales",
      nombre: "Rondanas",
      unidadMedida: "Pieza",
      cuentaContable: "Activos",
      tipo: "Inventario",
      creadoPor: "usuario1.jpg",
      creacion: "12/04/2024",
    },
  ];

  const columns = [
    {
      accessorKey: "codigo",
      header: "Código",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.codigo}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "categoria",
      header: "Categoría",
      meta: { filterButton: true },
    },
    {
      accessorKey: "nombre",
      header: "Nombre",
      meta: { filterButton: true },
    },
    {
      accessorKey: "unidadMedida",
      header: "Unidad Medida",
    },
    {
      accessorKey: "cuentaContable",
      header: "Cuenta Contable",
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
    },
    {
      accessorKey: "creadoPor",
      header: "Creado Por",
      cell: ({ row }) => (
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: "creacion",
      header: "Creación",
    },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={informationCircle}
              className="h-5 w-5 text-[#696974]"
            />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full">
      {/* Modals */}
      <NewCategory
        modal={modalNewCategory}
        setModal={setModalNewCategory}
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
                  <DropdownMenuItem
                    className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
                  >
                    Artículo
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
                    onClick={() => setModalNewCategory(true)}
                  >
                    Categoría
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
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
            </TabsList>
            <TabsContent value="ARTÍCULOS" className="mt-[-60px] p-2">
              <DataTable
                data={data}
                columns={columns}
                searchFilter="codigo"
                searchNameFilter="Buscar por código"
                isCheckAll={true}
              />
            </TabsContent>
            <TabsContent value="CATEGORIAS" className="mt-[-60px] p-2">
              <Category
              categories={categories.data}
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
  }

  return redirect(`/inventory`);
}

