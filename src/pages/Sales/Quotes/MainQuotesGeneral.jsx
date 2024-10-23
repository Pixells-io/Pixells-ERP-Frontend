import React from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  add,
  informationCircleOutline,
} from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { WrappedMain } from "@/layouts/Masters/WrappedMain/WrappedMain";
import NavigationHeader from "@/components/navigation-header";
const MainQtGeneral = () => {
  // const { data } = useLoaderData();
  const dataAux = [
    {
      id: 1,
      folio: "123",
      date: "11/03/1998",
      customer: "Agustin",
      description: "none",
      total: "100",
      comments: "Comentario",
    },
  ];

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
          <Link to={`/sales/quotes/edit/${row.original.id}`}>
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
        {/* navigation inside */}
     <NavigationHeader/>
        {/* top content */}
        <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">VENTAS</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">&bull; 4 objective </div>
          <div className="text-xs">&bull; 25 SFC </div>
          <div className="text-xs">&bull; 43 Activities</div>
        </div>
      </div>

        <div className="flex justify-between">
          <p className="font-poppins text-[20px] font-bold text-[#44444F]">
            Cotizaciones Generales
          </p>
          <div className="flex justify-end gap-6">
            <Link to="/sales/quotes/new">
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
          className="h-full overflow-auto bg-[#FBFBFB] pt-2"
        >
          <TabsList className="ml-6 flex justify-start gap-6 rounded-none border-b bg-blancoBox bg-inherit p-0 py-6">
            <TabsTrigger
             className="mb-[-12px] rounded-none border-[#44444F] border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="quotes"
            >
              COTIZACIONES
            </TabsTrigger>
          </TabsList>
          <TabsContent value="quotes" className="mt-[-70px] w-full pt-2">
            <DataTable
              data={dataAux}
              columns={columns}
              searchFilter="folio"
              searchNameFilter="Buscar por folio"
              isCheckAll={true}
            />
          </TabsContent>
        </Tabs>
        </WrappedMain>
  );
};

export default MainQtGeneral;
