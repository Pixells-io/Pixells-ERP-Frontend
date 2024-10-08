import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircleOutline,
  add,
} from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
const MainOrders = () => {
  // const { data } = useLoaderData();

  const columns = [
    {
      accessorKey: "folio",
      header: "FOLIO",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.folio}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "date",
      header: "FECHA",
      meta: { filterButton: true },
    },
    {
      accessorKey: "customer",
      header: "CLIENTE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "description",
      header: "DESCRIPCIÓN",
    },
    {
      accessorKey: "total",
      header: "TOTAL",
    },
    {
      accessorKey: "comments",
      header: "COMENTARIOS",
    },
    // {
    //   accessorKey: "total",
    //   header: "TOTAL",
    // },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link to={`/sales/orders/edit/${row.original.id}`}>
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
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            VENTAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Pedidos
          </p>
          <div className="flex justify-end gap-6">
            <Link to="/sales/orders/new">
              <Button
                type={"button"}
                className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">Nuevo</span>
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <Tabs
          defaultValue="orders"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="orders"
            >
              PEDIDOS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="orders" className="mt-[-70px] w-full pt-2">
            <DataTable
              data={[]}
              columns={columns}
              searchFilter="folio"
              searchNameFilter="Buscar por folio"
              isCheckAll={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainOrders;
