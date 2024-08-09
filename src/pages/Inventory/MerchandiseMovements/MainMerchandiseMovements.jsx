import React from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  informationCircle,
} from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function MainMerchandiseMovements() {
  //datos de prueba --------------------------

  const data = [
    {
      id: 1,
      code: "0987",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "usuario1.jpg",
      createdAt: "21/07/2024",
    },
    {
      id: 2,
      code: "0988",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "usuario1.jpg",
      createdAt: "21/07/2024",
    },
    {
      id: 3,
      code: "0989",
      category: "Metales",
      name: "Clavos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "usuario1.jpg",
      createdAt: "21/07/2024",
    },
    {
      id: 4,
      code: "0990",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "usuario1.jpg",
      createdAt: "21/07/2024",
    },
  ];

  const columns = [
    {
      accessorKey: "code",
      header: "CÓDIGO",
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
      header: "CATEGORÍA",
      meta: { filterButton: true },
    },
    {
      accessorKey: "name",
      header: "NOMBRE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "unitMeasurement",
      header: "UNIDAD MEDIDA",
    },
    {
      accessorKey: "accountingAccount",
      header: "CUENTA CONTABLE",
    },
    {
      accessorKey: "type",
      header: "TIPO",
    },
    {
      accessorKey: "createdBy",
      header: "CREADO POR",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "CREACIÓN",
    },
    {
      id: "acciones",
      header: "Acciones",
      cell: ({ row }) => (
        <Link
          to={"/inventory/merchandise-movements/record/" + row?.original?.id}
          className="flex w-full items-center justify-center"
        >
          <IonIcon
            icon={informationCircle}
            className="text-gris2-500 h-6 w-6"
          />
        </Link>
      ),
    },
  ];

  //-------------------------------------------

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
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Movimientos de Mercancía
          </p>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <IonIcon
                  icon={addCircleOutline}
                  size="large"
                  className="mt-5 cursor-pointer text-blue-500"
                ></IonIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="hover:cursor-pointer focus:bg-hoverModal">
                  <Link
                    to="/inventory/merchandise-movements/new-entry"
                    className="w-full"
                  >
                    Entrada
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full hover:cursor-pointer focus:bg-hoverModal">
                  <Link
                    to="/inventory/merchandise-movements/"
                    className="w-full"
                  >
                    Salida
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs
          defaultValue="inputs"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="inputs"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              ENTRADAS
            </TabsTrigger>
            <TabsTrigger
              value="outputs"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              SALIDAS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="inputs" className="mt-[-60px] p-2">
            <DataTable
              data={data}
              columns={columns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={true}
            />
          </TabsContent>
          <TabsContent value="outputs" className="mt-[-60px] p-2"></TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainMerchandiseMovements;
