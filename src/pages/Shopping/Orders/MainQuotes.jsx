import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MenuItem from "./Components/Menu";

const MainQuotesOrder = () => {
  const data = [
    {
      ndocumento: "DOC001",
      codproveedor: "PROV001",
      nproveedor: "COCA COLA COMPANY",
      importe: 35232.3,
      impuesto: 160.0,
      fechac: "2024-07-15",
      fechad: "2024-07-04",
      tipo: "Factura",
      estatus: "En progreso"
    },
    {
      ndocumento: "DOC002",
      codproveedor: "PROV002",
      nproveedor: "COCA COLA COMPANY",
      importe: 32433,
      impuesto: 240.08,
      fechac: "2024-07-16",
      fechad: "2024-07-15",
      tipo: "Nota de crédito",
      estatus: "Finalizado"
    },
  ];
  const getMenuItems = (id) => [
    {
      label: 'Edit',
      isLink: true,
      to: `/shopping/quotes-orders/edit/${id}`, 
    },
    {
      label: 'Cancel',
      isLink: false,
      onClick: () => console.log("Cancel action"),
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
        const index = row.original.ndocumento; // Obtén el índice de la fila
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

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Cotizaciones
          </p>
          <div className="flex items-start justify-start">
            <Link to="/shopping/quotes-orders/create">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
              >
                <IonIcon
                  icon={addCircleOutline}
                  size="large"
                  className="text-primarioBotones"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        </div>
        {/*content */}
        <div className="overflow-auto rounded-xl bg-white p-4">
          <div className="w-full">
            <Tabs
              defaultValue="quotes"
             className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList  className="ml-4 flex w-fit rounded-none bg-blancoBg">
                <TabsTrigger
                  className="rounded-none border-b-2 px-4 text-sm font-roboto text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
                  value="quotes"
                >
                  COTIZACIONES
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 px-4 text-sm font-roboto text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
                  value="OTRO"
                >
                  OTRO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="quotes"  className="mt-[-60px] p-2">
                    <DataTable
                      data={data}
                      columns={columns}
                      searchFilter="ndocumento"
                      searchNameFilter="Buscar por No. Documento"
                      isCheckAll={true}
                    />
              </TabsContent>
              <TabsContent value="OTRO" className="w-full">
                <div className="flex w-full justify-center">
                  <div className="w-full max-w-4xl">
                    <p>CONTENIDO</p>
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

export default MainQuotesOrder;