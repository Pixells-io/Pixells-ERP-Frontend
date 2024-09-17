import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  add,
} from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, redirect, useLoaderData } from "react-router-dom";
import MenuItem from "./Components/Menu";
import { createPusherClient } from "@/lib/pusher";
import { destroyQuoteOrder, getQuotesOrder } from "../utils";
import ModalDeleteQuote from "./Modals/ModalDeleteQuote";

const MainQuotesOrder = () => {
  const { data } = useLoaderData();
  const [quotesInfo, setQuotesInfo] = useState(data);
  const [modalDeleteQuote, setModalDeleteQuote] = useState(false);
  const [selectQuote, setSelectQuote] = useState({ id: 0, name: "" });

  const pusherClient = createPusherClient();

  const getMenuItems = (id, name) => [
    {
      label: "Detalles Orden",
      isLink: true,
      to: `/shopping/quotes-orders/edit/${id}`,
    },
    {
      label: "Eliminar",
      isLink: false,
      onClick: () => {
        setModalDeleteQuote(true);
        setSelectQuote({ id: id, name: name });
      },
    },
  ];
  const columns = [
    {
      accessorKey: "document_number",
      header: "No. Doc",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.document_number}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "supplier_code",
      header: "Cod. de Prov",
      meta: { filterButton: true },
    },
    {
      accessorKey: "supplier_name",
      header: "Nombre Prov",
      meta: { filterButton: true },
    },
    {
      accessorKey: "total",
      header: "Importe",
    },
    {
      accessorKey: "tax",
      header: "Impuesto",
    },
    {
      accessorKey: "delivery_date",
      header: "fecha cont.",
    },
    {
      accessorKey: "document_created",
      header: "Fecha doc.",
    },
    {
      accessorKey: "type",
      header: "Tipo",
    },
    {
      accessorKey: "status",
      header: "Estatus",
      cell: ({ row }) => {
        return (
          <div>
            {row?.original?.status == 1 ? (
              <label className="rounded-xl bg-[#FAA364] bg-opacity-25 p-2 px-2 py-1 text-center text-xs font-semibold text-[#FAA364]">
                Pendiente
              </label>
            ) : row?.original?.status == 2 ? (
              <label className="rounded-xl bg-[#00A259] bg-opacity-25 p-2 px-2 py-1 text-center text-xs font-semibold text-[#00A259]">
                Aceptado</label>
            ) : (
              row?.original?.status == 3 && 
              <label className="rounded-xl bg-[#DC1C3B] bg-opacity-25 p-2 px-2 py-1 text-center text-xs font-semibold text-[#DC1C3B]">
                Cancelado</label>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "acciones",
      header: "Acciones",
      cell: ({ row }) => {
        const menuItems = getMenuItems(
          row?.original?.id,
          row?.original?.document_number,
        );

        return (
          <div className="flex items-center justify-center">
            <MenuItem menuItems={menuItems} />
          </div>
        );
      },
    },
  ];

  async function getQuotesList() {
    let newData = await getQuotesOrder();
    setQuotesInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-shopping-quotes");

    pusherClient.bind("fill-shopping-quotes", ({ message }) => {
      getQuotesList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-shopping-quotes");
    };
  }, []);

  return (
    <div className="flex w-full">
      {/* modals */}
      <ModalDeleteQuote
        id={selectQuote.id}
        name={selectQuote.name}
        modal={modalDeleteQuote}
        setModal={setModalDeleteQuote}
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
            <div>Shopping - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COMPRAS
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Cotizaciones
          </p>
          <div className="flex items-start justify-start">
            <Link to="/shopping/quotes-orders/create">
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
          defaultValue="quotes"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
            <TabsTrigger
              className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="quotes"
            >
              COTIZACIONES
            </TabsTrigger>
          </TabsList>
          <TabsContent value="quotes" className="mt-[-70px] w-full pt-2">
            <DataTable
              data={quotesInfo}
              columns={columns}
              searchFilter="document_number"
              searchNameFilter="Buscar por No. Documento"
              isCheckAll={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainQuotesOrder;

export async function Action({ request }) {
  const formData = await request.formData();
  const response = await destroyQuoteOrder(formData);

  return redirect("/shopping/quotes-orders");
}
