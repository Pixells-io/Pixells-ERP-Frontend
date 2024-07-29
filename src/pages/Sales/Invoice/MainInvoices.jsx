import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  informationCircle,
  addCircleOutline,
  chatbubbleEllipses,
  bookmark,
} from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const MainInvoice = () => {
  const data = [
    {
      nombre: "Original Constructors",
      tipo: "Inmigracion",
      nacionalidad: "Ernest Robles",
      contacto: "01-700-123-12",
      email: "correo@mail.com",
    },
    {
      nombre: "Original Constructors",
      tipo: "Inmigracion",
      nacionalidad: "Ernest Robles",
      contacto: "01-700-123-12",
      email: "correo@mail.com",
    },
    {
      nombre: "Original Constructors",
      tipo: "Inmigracion",
      nacionalidad: "Ernest Robles",
      contacto: "01-700-123-12",
      email: "correo@mail.com",
    },
  ];

  const columns = [
    {
      accessorKey: "nombre",
      header: "Nombre",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.nombre}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
      meta: { filterButton: true },
    },
    {
      accessorKey: "nacionalidad",
      header: "Nacionalidad",
      meta: { filterButton: true },
    },
    {
      accessorKey: "contacto",
      header: "Contacto",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      id: "acciones",
      header: "Acciones",
      cell: ({ row }) => (
        <div className="flex w-full items-center justify-center space-x-3">
          <IonIcon icon={informationCircle} className="h-6 w-6 text-grisText" />
          <IonIcon
            icon={chatbubbleEllipses}
            className="h-6 w-6 text-grisText"
          />
          <IonIcon icon={bookmark} className="h-6 w-6 text-grisText" />
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

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Facturas de Venta
          </p>
          <Link to="/sales/quotes/new" className="inline-block">
            <Button
              type="button"
              className="rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
              />
            </Button>
          </Link>
        </div>
        {/*content */}
        <div className="overflow-auto rounded-xl bg-white p-4">
          <div className="w-full">
            <Tabs
              defaultValue="PROVEEDOR"
              className="flex h-full flex-col rounded-lg pt-2"
            >
              <TabsList className="mb-3 flex justify-start bg-transparent">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="PROVEEDOR"
                >
                  PROVEEDOR
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="OTRO"
                >
                  OTRO
                </TabsTrigger>
              </TabsList>
              <TabsContent value="PROVEEDOR" className="w-full">
                <div className="flex w-full justify-center">
                  <div className="w-full max-w-4xl">
                    <DataTable
                      data={data}
                      columns={columns}
                      searchFilter="nombre"
                      searchNameFilter="Buscar por nombre"
                      isCheckAll={true}
                    />
                  </div>
                </div>
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

export default MainInvoice;
