import React, { useState } from "react";

import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import StatisticsBlock from "./components/StatisticsBlocks";

import { IonIcon } from "@ionic/react";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import DataTable from "./components/Table/DataTable";

import Table from "@/components/DataTable";

function MainCRM() {
  const { data: loaderLeads } = useLoaderData();
  const { data: loaderServices } = useRouteLoaderData("side_services");

  const [leads, setLeads] = useState(loaderLeads);
  const [services, setServices] = useState(loaderServices);

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full bg-gris p-8 ml-4 rounded-lg space-y-4 overflow-x-auto gap-4">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <IonIcon icon={chevronBackCircle} className="w-12 h-12"></IonIcon>
            <IonIcon
              icon={chevronForwardCircle}
              className="w-12 h-12"
            ></IonIcon>
          </div>
          <div>crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-2xl text-[#44444F]">
              CRM HOMEPAGE
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div>
              {services.length} {services.length > 1 ? "services" : "service"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div>
              {leads.length} {leads.length > 1 ? "customers" : "customer"}
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
        <DataTable services={services} />
        <Outlet />
      </div>
    </div>
  );
}

export default MainCRM;
