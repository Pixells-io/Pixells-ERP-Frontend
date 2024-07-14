import React, { useState } from "react";
import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StatisticsBlock from "./components/StatisticsBlocks";
import DataTable from "./components/Table/DataTable";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

import Table from "@/components/DataTable";
import TableClients from "./components/Table/TableClients";

function MainCRM() {
  const {
    leads: loaderLeads,
    clients: loaderClients,
    dashboard,
  } = useLoaderData();
  const { data: loaderServices } = useRouteLoaderData("side_services");

  const [leads, setLeads] = useState(loaderLeads);
  const [services, setServices] = useState(loaderServices);
  const [clients, setClients] = useState(loaderClients);

  return (
    <div className="flex h-full w-full">
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
          <div className="font-roboto text-sm text-grisText">crm</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              CRM HOMEPAGE
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">
              {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
              {leads?.data.length == 1 ? "lead" : "leads"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">
              {loaderClients?.data.length == 0
                ? "0"
                : loaderClients?.data.length}{" "}
              {loaderClients?.data.length == 1 ? "client" : "clients"}
            </div>
          </div>
        </div>

        {/* statistics content */}
        <StatisticsBlock data={dashboard.data} />

        <Tabs
          defaultValue="leads"
          className="h-full w-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="leads"
              className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              LEADS
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="rounded-none border-b-2 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              CLIENTS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="leads" className="mt-[-60px] w-full p-2">
            <DataTable services={services} leads={leads} />
          </TabsContent>
          <TabsContent className="mt-[-60px] p-2" value="clients">
            {/* <Table className="w-full" /> */}
            <TableClients services={services} clients={clients} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCRM;
