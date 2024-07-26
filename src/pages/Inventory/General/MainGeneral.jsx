import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircle,
  addCircleOutline
} from "ionicons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
const MainGeneral = () => {
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
        <Avatar className="w-6 h-6">
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
      header: "Acciones",
      cell: ({ row }) => (
        <div className="flex w-full items-center justify-center">
          <IonIcon
            icon={informationCircle}
            className="h-6 w-6 text-gris2-500"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full">
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
            Artículos general
          </p>
          <Link to="/inventory/create">
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="mt-5 text-blue-500"
            ></IonIcon>
          </Link>
        </div>
        {/*content */}
        <div className="overflow-auto rounded-xl bg-white p-4">
          <div className="w-full">
            <Tabs
              defaultValue="ARTÍCULOS"
              className="flex h-full flex-col rounded-lg pt-2"
            >
              <TabsList className="mb-3 flex justify-start bg-transparent">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="ARTÍCULOS"
                >
                  ARTÍCULOS
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="CATEGORIAS"
                >
                  CATEGORÍAS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="ARTÍCULOS" className="w-full">
                <div className="flex w-full justify-center">
                  <div className="w-full max-w-4xl">
                    <DataTable
                      data={data}
                      columns={columns}
                      searchFilter="codigo"
                      searchNameFilter="Buscar por código"
                      isCheckAll={true}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="CATEGORIAS" className="w-full">
                <div className="flex w-full justify-center">
                  <div className="w-full max-w-4xl">
                  <DataTable
                      data={data}
                      columns={columns}
                      searchFilter="codigo"
                      searchNameFilter="Buscar por código"
                      isCheckAll={true}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGeneral;
