import React, { useState } from "react";
import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StatisticsBlock from "./components/StatisticsBlocks";
import DataTable from "./components/Table/DataTable";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward} from "ionicons/icons";

import Table from "@/components/DataTable";

function MainCRM() {
  const { data: loaderLeads } = useLoaderData();
  const { data: loaderServices } = useRouteLoaderData("side_services");

  const [leads, setLeads] = useState(loaderLeads);
  const [services, setServices] = useState(loaderServices);

  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">

        {/* navigation inside */}
        <div className="flex gap-4 items-center">
            <div className="flex gap-2  text-gris2">
                <div className="w-12 h-12">
                    <IonIcon icon={chevronBack} size="large" className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
                <div className="w-12 h-12">
                    <IonIcon icon={chevronForward} size="large"  className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
            </div>
            <div className="font-roboto text-sm text-grisText">crm</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
            <div>
                <h2 className="font-poppins font-bold text-xl text-[#44444F]">
                    USER HOMEPAGE
                </h2>
            </div>
            <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
                <div className="text-xs">{services.length} {services.length > 1 ? "services" : "service"}</div>
                <div className="text-2xl">&bull;</div>
                <div className="text-xs">{leads.length} {leads.length > 1 ? "customers" : "customer"}</div>
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

        <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="account">Leads</TabsTrigger>
            <TabsTrigger value="password">Clients</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="">
            <DataTable services={services} />
          </TabsContent>
          <TabsContent value="password">
            <Table />
          </TabsContent>
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
}

export default MainCRM;
