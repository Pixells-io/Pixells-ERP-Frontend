import React, { useEffect, useState } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createPusherClient } from "@/lib/pusher";
import { getSalesTicket } from "./utils";
import NavigationHeader from "@/components/navigation-header";
import { WrappedMain } from "@/layouts/Masters/WrappedMain/WrappedMain";
const MainSalesTicket = () => {
  const { data } = useLoaderData();

  const [saleTicketsList, setSaleTicketsList] = useState([...data].reverse());

  const pusherClient = createPusherClient();

  async function getSaleTicketList() {
    let newData = await getSalesTicket();
    setSaleTicketsList([...newData.data].reverse());
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-sales");

    pusherClient.bind("fill-sales", ({ message }) => {
      getSaleTicketList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-sales");
    };
  }, []);

  const columns = [
    {
      accessorKey: "id",
      header: "FOLIO",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.id}</label>
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
      accessorKey: "client",
      header: "CLIENTE",
      meta: { filterButton: true },
    },
    {
      accessorKey: "status",
      header: "ESTATUS",
      cell: ({ row }) => (
        <div>
          {row?.original?.status == "Creada" ? (
            <span className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario">
              Creada
            </span>
          ) : (
            <span></span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "total",
      header: "TOTAL",
    },
    {
      accessorKey: "seller",
      header: () => <div className="text-center">VENDEDOR</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Avatar className="size-7">
            <AvatarImage
              src={row?.original?.seller?.img}
              title={row?.original?.seller?.name}
            />
          </Avatar>
        </div>
      ),
    },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link to={`/sales/tickets/edit/${row.original.id}`}>
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
    <WrappedMain>
      <NavigationHeader/>
      {/* navigation inside */}
      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">VENTAS</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">&bull; 4 objective </div>
          <div className="text-xs">&bull; 25 SFC </div>
          <div className="text-xs">&bull; 43 Activities</div>
        </div>
      </div>
     

      <div className="flex justify-between">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Ticket/Remisíon de ventas
        </span>
        <div className="flex justify-end gap-6">
          <Link to="/sales/tickets/new">
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
        defaultValue="tickets"
        className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
      >
        <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
          <TabsTrigger
            className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            value="tickets"
          >
            TICKETS/REMISIONES
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tickets" className="mt-[-70px] w-full pt-2">
          <DataTable
            data={saleTicketsList}
            columns={columns}
            searchFilter="id"
            searchNameFilter="Buscar por folio"
            isCheckAll={true}
          />
        </TabsContent>
      </Tabs>
    </WrappedMain>
  );
};

export default MainSalesTicket;
