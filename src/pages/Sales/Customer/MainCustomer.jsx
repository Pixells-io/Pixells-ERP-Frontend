import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircle,
  add,
  informationCircleOutline,
} from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const MainCustomer = () => {
  const { data } = useLoaderData();
  // const data = [
  //   {
  //     id: 1,
  //     nombre: "Haleon SA de CV",
  //     tipo: "Inmigracion",
  //     nacionalidad: "Americana",
  //     contacto: "01-432-143-12",
  //     email: "haleonadmin@mail.com",
  //   },
  //   {
  //     id: 2,
  //     nombre: "SONEPAR RL",
  //     tipo: "Inmigracion",
  //     nacionalidad: "Americana",
  //     contacto: "01-733-342-12",
  //     email: "halenonrho@mail.com",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Merpol",
  //     tipo: "Inmigracion",
  //     nacionalidad: "Nacional",
  //     contacto: "01-650-983-12",
  //     email: "supporthaleon@mail.com",
  //   },
  // ];

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
    },
    {
      accessorKey: "name",
      header: "NOMBRE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "type",
      header: "TIPO",
      meta: { filterButton: true },
    },
    {
      accessorKey: "nationality",
      header: "NACIONALIDAD",
      meta: { filterButton: true },
    },
    {
      accessorKey: "contact",
      header: "CONTACTO",
    },
    {
      accessorKey: "status",
      header: "ESTATUS",
      cell: ({ row }) => {
        return (
          <div>
            {row?.original?.status == "1" ? (
              <div className="w-[77px] rounded-3xl bg-[#CBF4C9] py-1">
                <p className="text-center text-xs font-medium text-[#0E6245]">
                  Activo
                </p>
              </div>
            ) : (
              row?.original?.status == "0" && (
                <div className="w-[77px] rounded-3xl bg-[#F4CEC9] py-1">
                  <p className="text-center text-xs font-medium text-[#A63737]">
                    Inactivo
                  </p>
                </div>
              )
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: "E-mail",
    },
    {
      id: "acciones",
      header: <div className="text-center">ACCIONES</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link to={`/sales/customer/edit/${row.original.id}`}>
            <Button
              type="button"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={informationCircleOutline}
                className="h-5 w-5 text-[#696974]"
              />
            </Button>
          </Link>
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
            <div>Invoice - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            VENTAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
            CLIENTES GENERAL
          </p>
          <div className="flex justify-end gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type={"button"}
                  className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
                >
                  <IonIcon icon={add} className="h-4 w-4" />
                  <span className="text-xs font-medium">Nuevo</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-xl">
                <DropdownMenuItem className="w-full hover:cursor-pointer focus:bg-hoverModal">
                  <Link to="/sales/customer/new" className="inline-block">
                    Nuevo Cliente
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="w-full hover:cursor-pointer focus:bg-hoverModal">
                  Proveedor Existente
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/*content */}
        <div className="w-full">
          <Tabs
            defaultValue="customer"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="customer"
              >
                CLIENTES GENERAL
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="OTRO"
              >
                OTRO
              </TabsTrigger>
            </TabsList>
            <TabsContent value="customer" className="mt-[-70px] w-full pt-2">
              <DataTable
                data={data}
                columns={columns}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
            <TabsContent value="OTRO" className="w-full pt-2">
              <p>CONTENIDO</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainCustomer;
