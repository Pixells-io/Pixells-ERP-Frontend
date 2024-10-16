import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward,  informationCircleOutline, } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import MenuSuppliers from "./Components/Dropdownmenu";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import { getSuppliers } from "./utils";

const MainSupplier = () => {
  const { data } = useLoaderData();
  const [suppliersInfo, setSuppliersInfo] = useState(data);

  const pusherClient = createPusherClient();

  async function getSuppliersFunction() {
    let newData = await getSuppliers();
    setSuppliersInfo(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-suppliers");

    pusherClient.bind("fill-suppliers-list", ({ message }) => {
      getSuppliersFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-suppliers");
    };
  }, []);

  const columns = [
    {
      accessorKey: "name",
      header: "Nombre",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
            />
            <label>{row?.original?.name}</label>
          </div>
        );
      },
      meta: { filterButton: true },
    },
    {
      accessorKey: "type",
      header: "Tipo",
      meta: { filterButton: true },
    },
    {
      accessorKey: "nationality",
      header: "Nacionalidad",
      meta: { filterButton: true },
    },
    {
      accessorKey: "contact",
      header: "Contacto",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <Link
            to={"/shopping/supplier/edit/" + row?.original?.id}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
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
            <div>Shopping - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            COMPRAS
          </h2>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Proveedores
          </p>

          <div className="flex justify-end gap-6">
          <MenuSuppliers />
          </div>
          
        </div>
        {/*content */}

        
        <div className="w-full h-full overflow-auto">
          <Tabs
            defaultValue="PROVEEDOR"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
              <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                value="PROVEEDOR"
              >
                PROVEEDOR
              </TabsTrigger>
            </TabsList>
            <TabsContent value="PROVEEDOR" className="mt-[-70px] w-full pt-2">
              <DataTable
                data={suppliersInfo}
                columns={columns}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainSupplier;
