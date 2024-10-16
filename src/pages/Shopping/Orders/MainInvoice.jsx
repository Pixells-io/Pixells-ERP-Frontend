import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MenuItem from "./Components/Menu";

const MainInvoices = () => {
  const data = [
    {
      ndocumento: "DOC001",
      codproveedor: "PROV001",
      nproveedor: "Proveedor A",
      importe: 1000.0,
      impuesto: 160.0,
      fechac: "2024-07-15",
      fechad: "2024-07-10",
      tipo: "Factura",
      estatus: "En progreso",
    },
    {
      ndocumento: "DOC002",
      codproveedor: "PROV002",
      nproveedor: "Proveedor B",
      importe: 1500.5,
      impuesto: 240.08,
      fechac: "2024-07-16",
      fechad: "2024-07-12",
      tipo: "Nota de crédito",
      estatus: "Finalizada",
    },
    {
      ndocumento: "DOC003",
      codproveedor: "PROV003",
      nproveedor: "Proveedor C",
      importe: 750.25,
      impuesto: 120.04,
      fechac: "2024-07-17",
      fechad: "2024-07-14",
      tipo: "Factura",
      estatus: "En progreso",
    },
  ];

  const getMenuItems = (id) => [
    {
      label: "Edit",
      isLink: true,
      to: `/shopping/invoices-orders/edit/${id}`, // Incluye el id en la URL
    },
    {
      label: "Cancel",
      isLink: false,
      onClick: () => {},
    },
  ];

  const columns = [
    {
      accessorKey: "ndocumento",
      header: "No. Doc",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.ndocumento}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "codproveedor",
      header: "Cod. de Prov",
      meta: { filterButton: true },
    },
    {
      accessorKey: "nproveedor",
      header: "Nombre Prov",
      meta: { filterButton: true },
    },
    {
      accessorKey: "importe",
      header: "Importe",
    },
    {
      accessorKey: "impuesto",
      header: "Impuesto",
    },
    {
      accessorKey: "fechac",
      header: "fecha cont.",
    },
    {
      accessorKey: "fechad",
      header: "Fecha doc.",
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
    },
    {
      accessorKey: "estatus",
      header: "Estatus",
    },
    {
      accessorKey: "acciones",
      header: "Acciones",
      cell: ({ row }) => {
        const index = row.original.ndocumento;
        const menuItems = getMenuItems(index);

        return (
          <div className="flex items-center justify-center">
            <MenuItem menuItems={menuItems} />
          </div>
        );
      },
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
            Facturas de compra
          </p>
          <div className="flex items-start justify-end">
            <Link to="/shopping/invoices-orders/create">
            <Button
              type="button"
              className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
              <IonIcon icon={add} className="h-4 w-4" />
              <span className="text-xs font-medium">Nuevo</span>
            </Button>
            </Link>
          </div>
        </div>
        {/*content */}
          <div className="w-full h-full">
            <Tabs
              defaultValue="invoices"
              className="h-full overflow-hidden rounded-lg bg-blancoBg pt-2"
              >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                <TabsTrigger
                  value="invoices"
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  >
                  FACTURAS
                </TabsTrigger>
                <TabsTrigger
                  value="OTRO"
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"

                >
                  OTROS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="invoices" className="mt-[-70px] h-full w-full pt-2">
                <DataTable
                  data={data}
                  columns={columns}
                  searchFilter="ndocumento"
                  searchNameFilter="Buscar por No. Documento"
                  isCheckAll={true}
                />
              </TabsContent>
              <TabsContent value="OTRO" className="w-full">
                <p>CONTENIDO</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
  );
};

export default MainInvoices;
