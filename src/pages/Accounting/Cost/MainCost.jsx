import React, { useState, useMemo, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  create,
  gridOutline,
  list,
  settings,
} from "ionicons/icons";
import AddItemDialog from "../components/AddCostModal";
import DataTable from "@/components/table/DataTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { destroyCostCenter, getCostCenter, saveCostCenter } from "./utils";
import ModalDeleteCostCenter from "./Modals/ModalDeleteCostCenter";
import { createPusherClient } from "@/lib/pusher";

const MainCost = () => {
  const { data } = useLoaderData();
  const [costCenterList, setCostCenterList] = useState(data);

  const pusherClient = createPusherClient();

  async function getCostCenterList() {
    let newData = await getCostCenter();
    setCostCenterList(newData.data);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-cost-center");

    pusherClient.bind("fill-cost-center", ({ message }) => {
      getCostCenterList();
    });

    return () => {
      pusherClient.unsubscribe("private-get-cost-center");
    };
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "code",
        accessorKey: "code",
        header: "Código",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "name",
        accessorKey: "name",
        header: "Nombre",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "created",
        accessorKey: "created",
        header: "Creación",
        meta: {
          filterButton: true,
        },
        filterFn: "includesString",
      },
      {
        id: "description",
        accessorKey: "description",
        header: "Descripción",
      },
      {
        id: "acciones",
        accessorKey: "acciones",
        header: () => <div className="text-center">Acciones</div>,
        cell: ({ row }) => (
          <div className="flex items-center justify-center gap-1 text-[#696974]">
            <Link
              to={`/bank-management/edit-bank/` + row?.original?.id}
              className="flex items-center"
            >
              <IonIcon icon={create} className="h-5 w-5"></IonIcon>
            </Link>
            <ModalDeleteCostCenter
              costCenter_id={row?.original?.id}
              costCenter_name={row?.original?.name}
            />
            {/* <ModalDeleteBank bank_id={row?.original?.id} bank_name={row?.original?.name} /> */}
          </div>
        ),
      },
    ],
    [],
  );

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
            <div>Accounting - policy</div>
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CONTABILIDAD
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-poppins text-xl font-bold text-[#44444F]">
              Centro de Costos
            </p>
          </div>
          <div className="mr-12 flex gap-x-2 text-[#8F8F8F]">
            <IonIcon icon={gridOutline} className="h-5 w-5"></IonIcon>
            <IonIcon icon={list} className="h-5 w-5"></IonIcon>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <AddItemDialog />
          <div className="mr-24 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-center hover:bg-gray-400">
            <IonIcon icon={settings} size="small" className="text-grisText" />
          </div>
        </div>

        {/* Data Table */}
        <div className="w-full overflow-auto">
          <Tabs
            defaultValue="CENTRO DE COSTOS"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="ml-4 flex w-fit rounded-none bg-blancoBg">
              <TabsTrigger
                className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
                value="CENTRO DE COSTOS"
              >
                CENTRO DE COSTOS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="CENTRO DE COSTOS" className="mt-[-60px] p-2">
              <DataTable
                data={costCenterList}
                columns={columns}
                searchFilter={"code"}
                searchNameFilter={"Ingrese el código"}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainCost;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "save_costCenter":
      await saveCostCenter(data);
      break;
    case "destroy_costCenter":
      await destroyCostCenter(data);
      break;
  }

  return redirect(`/accounting/cost`);
}
