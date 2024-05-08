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
  const { leads: loaderLeads, clients: loaderClients } = useLoaderData();
  const { data: loaderServices } = useRouteLoaderData("side_services");

  const [leads, setLeads] = useState(loaderLeads);
  const [services, setServices] = useState(loaderServices);
  const [clients, setClients] = useState(loaderClients);

  console.log(clients);

  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">crm</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-xl text-[#44444F]">
              CRM HOMEPAGE
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
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
        <StatisticsBlock />
        {/* <div className="flex gap-8">
          {statistics.map((item, i) => (
            <StatisticsBlock
              key={i}
              icon={item.icon}
              number={item.number}
              subtext={item.subtext}
              percentage={item.percentage}
            />
          ))}
        </div> */}

        <Tabs defaultValue="leads" className="bg-blancoBg rounded-lg pt-2">
          <TabsList className="bg-blancoBg flex 2 w-fit rounded-none ml-4">
            <TabsTrigger
              value="leads"
              className="border-b-2 rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
            >
              LEADS
            </TabsTrigger>
            <TabsTrigger
              value="clients"
              className="border-b-2 rounded-none text-sm text-grisSubText data-[state=active]:text-primarioBotones data-[state=active]:font-semibold font-normal data-[state=active]:shadow-none data-[state=active]:bg-blancoBg data-[state=active]:border-primarioBotones"
            >
              CLIENTS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="leads" className="p-2 mt-[-60px] ">
            <DataTable services={services} leads={leads} />
          </TabsContent>
          <TabsContent className="p-2 mt-[-60px]" value="clients">
            {/* <Table className="w-full" /> */}
            <TableClients services={services} clients={clients} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCRM;
