import React, { useState, useMemo, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  gridOutline,
  list,
  settings,
  settingsOutline,
} from "ionicons/icons";
import AddItemDialog from "../components/AddCostModal";
import DataTable from "@/components/table/DataTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { redirect, useLoaderData } from "react-router-dom";
import {
  destroyCostCenter,
  getCostCenter,
  saveCostCenter,
  updateCostCenter,
} from "./utils";
import ModalDeleteCostCenter from "./Modals/ModalDeleteCostCenter";
import { createPusherClient } from "@/lib/pusher";
import ModalEditCost from "./Modals/ModalEditCost";
import { Button } from "@/components/ui/button";

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
            <ModalEditCost costCenter={row?.original} />
            <ModalDeleteCostCenter
              costCenter_id={row?.original?.id}
              costCenter_name={row?.original?.name}
            />
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
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
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
        <div className="flex items-center justify-end gap-x-2">
        
          <Button
            type={"button"}
            className="flex h-[30px] items-center justify-center rounded-xl bg-[#E8E8E8] px-3 hover:bg-[#E8E8E8] gap-x-2"
          >
            <IonIcon icon={settingsOutline} className="h-4 w-4 text-[#44444F]" />
            <span className="text-xs font-medium text-[#44444F]">
              Configurar
            </span>
          </Button>
          <AddItemDialog />
        </div>

        {/* Data Table */}
          <Tabs
            defaultValue="CENTRO DE COSTOS"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
          <TabsList className="mx-4 flex rounded-none justify-start border-b bg-inherit py-6">
            <TabsTrigger
                className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:bg-inherit"
                value="CENTRO DE COSTOS"
              >
                CENTRO DE COSTOS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="CENTRO DE COSTOS" className="mt-[-70px] p-2">
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
  );
};

export default MainCost;

export async function Action({ request }) {
  const data = await request.formData();
  switch (data.get("type_option")) {
    case "save_costCenter":
      await saveCostCenter(data);
      break;
    case "update_costCenter":
      await updateCostCenter(data);
      break;
    case "destroy_costCenter":
      await destroyCostCenter(data);
      break;
  }

  return redirect(`/accounting/cost`);
}
