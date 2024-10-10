import React, { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

import { IonIcon } from "@ionic/react";
import NavigationHeader from "@/components/navigation-header";
import CreateProcessSaleModal from "./components/Modals/CreateProcessSaleModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { add } from "ionicons/icons";
import SalesProcessTable from "./components/Table/SalesProcessTable";
import LeadsTable from "./components/Table/LeadsTable";

function MainCRM() {
  const { leads, process, permissions } = useLoaderData();

  const [leadsData, setLeadsData] = useState(leads.data);
  const [processData, setProcessData] = useState(process.data);

  //MODALS STATES
  const [modalCreateProcess, setModalCreateProcess] = useState(false);

  //PERMISSIONS
  const [edit, setEdit] = useState(true); //2
  const [destroy, setDestroy] = useState(true); //4

  //CHANGE PERMISSIONS
  useEffect(() => {
    const editQuery = permissions.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEdit(false);
    }

    const destroyQuery = permissions.data.filter(
      (item) => item.permision_capability == "4",
    );

    if (destroyQuery.length == 0) {
      setDestroy(false);
    }
  });

  return (
    <div className="flex h-full w-full">
      <CreateProcessSaleModal
        modal={modalCreateProcess}
        setModal={setModalCreateProcess}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

        <div className="flex justify-between gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            CRM HOMEPAGE
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                className="flex h-[30px] w-24 items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">Nuevo</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-2xl">
              <DropdownMenuItem
                className="w-full px-3 hover:cursor-pointer focus:bg-hoverModal"
                onClick={() => setModalCreateProcess(true)}
              >
                Proceso de Venta
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Tabs
          defaultValue="leads"
          className="relative h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          {/*  z-index para colocar los TabsTrigger encima */}
          <TabsList className="relative z-10 mx-4 flex w-1/3 justify-start rounded-none border-b bg-transparent py-6">
            <TabsTrigger
              value="leads"
              className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            >
              LEADS
            </TabsTrigger>
            <TabsTrigger
              value="process"
              className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
            >
              PROCESOS DE VENTA
            </TabsTrigger>
          </TabsList>

          {/* Enviar el contenido hacia atrás */}
          <div className="relative z-0 mt-[-60px] p-2">
            <TabsContent value="leads">
              <LeadsTable leads={leadsData} edit={edit} destroy={destroy} />
            </TabsContent>
            <TabsContent value="process">
              <SalesProcessTable
                process={processData}
                edit={edit}
                destroy={destroy}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCRM;
