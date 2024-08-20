import React, { useEffect, useState } from "react";
import { useLoaderData, useRouteLoaderData, Outlet } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import StatisticsBlock from "./components/StatisticsBlocks";
// import DataTable from "./components/Table/DataTable";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { columns } from "./components/Table/Columns";
import { clientColumns } from "./components/Table/ClientColumns";
import DataTable from "@/components/table/DataTable";
import NavigationHeader from "@/components/navigation-header";
import { createPusherClient } from "@/lib/pusher";
import { getLeads } from "@/lib/actions";

// import Table from "@/components/DataTable";
// import TableClients from "./components/Table/TableClients";

function MainCRM() {
  const {
    leads: loaderLeads,
    clients: loaderClients,
    dashboard,
    permissions,
  } = useLoaderData();
  const { data: loaderServices } = useRouteLoaderData("side_services");

  const [leads, setLeads] = useState(loaderLeads);
  const [services, setServices] = useState(loaderServices);
  const [clients, setClients] = useState(loaderClients);

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

  const pusherClient = createPusherClient();

  async function getLeadsInfo() {
    let newData = await getLeads();

    setLeads(newData);
  }

  useEffect(() => {
    pusherClient.subscribe("private-fill-table-leads");

    pusherClient.bind("make-table-leads", ({ message }) => {
      getLeadsInfo();
    });

    return () => {
      pusherClient.unsubscribe("private-fill-table-leads");
    };
  }, []);

  return (
    <div className="flex h-full w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

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
            <DataTable
              data={leads.data}
              columns={columns}
              searchFilter={"email"}
              searchNameFilter={"EMAIL"}
              isCheckAll={false}
            />
            {/* <DataTable services={services} leads={leads} /> */}
          </TabsContent>
          <TabsContent className="mt-[-60px] p-2" value="clients">
            {/* <Table className="w-full" /> */}
            {/* <TableClients services={services} clients={clients} /> */}
            <DataTable
              data={clients.data}
              columns={clientColumns}
              searchFilter={"contact_email"}
              searchNameFilter={"EMAIL"}
              isCheckAll={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCRM;
