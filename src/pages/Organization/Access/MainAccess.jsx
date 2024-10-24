import React from "react";
import { IonIcon } from "@ionic/react";
import { add, searchOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import AccordionModule from "./Components/AccordionModule";
import NavigationHeader from "@/components/navigation-header";
import ProjectTab from "./Components/AccordionGroup";

function MainAccess() {
  const { users, areas } = useLoaderData();
  const modulos = [
    {
      name: "Organization",
      id: 1,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Project Manager",
      id: 2,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "CRM",
      id: 3,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Chat",
      id: 4,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Analitycs",
      id: 5,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Desarrollo Org.",
      id: 6,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Tickets",
      id: 7,
      org_m: "1",
      tran_m: "0",
    },
    {
      name: "Bank Management",
      id: 9,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Accounting",
      id: 10,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Inventory",
      id: 11,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Sales",
      id: 12,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Shopping",
      id: 13,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Transformation",
      id: 14,
      org_m: "0",
      tran_m: "1",
    },
    {
      name: "Pos",
      id: 15,
      org_m: "0",
      tran_m: "1",
    },
  ];

  function WrappedMain({ children }) {
    return (
      <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 overflow-auto bg-[#FBFBFB] px-14 py-3">
        {children}
      </div>
    );
  }

  return (
    <WrappedMain>
      <NavigationHeader />

      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">ORGANIZACIÓN</h2>
      </div>
      
      <div>
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Control de Acceso
        </span>
      </div>

      <Tabs
        defaultValue="Organization"
        className="flex flex-col rounded-lg"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="relative w-full max-w-[950px] overflow-x-auto">
            <TabsList className="inline-flex w-full min-w-max space-x-2 rounded-none bg-transparent px-0">
              {modulos.map((area, i) => (
                <TabsTrigger
                  key={"tt" + i}
                  className="h-[30px] shrink-0 rounded-xl px-4 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
                  value={area.name}
                >
                  {area.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <div className="flex items-center gap-x-4 shrink-0">
            <div className="flex items-center justify-center">
              <IonIcon
                icon={searchOutline}
                className="h-6 w-6 text-[#CCCCCC]"
              />
            </div>

            <Button
              type="button"
              className="flex h-[30px] items-center justify-center rounded-xl bg-[#44444F] px-3 hover:bg-[#44444F]"
            >
              <span className="text-xs font-medium">Restablecer</span>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          {modulos.map((area, i) => (
            <TabsContent
              key={"tc" + i}
              value={area.name}
              className="mt-0"
            >
              <ProjectTab tasks={areas.data} module_id={area.id} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </WrappedMain>
  );
}

export default MainAccess;