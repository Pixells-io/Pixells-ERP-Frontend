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
      {/* navigation inside */}
      <NavigationHeader />

      {/* top content */}
      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">ORGANIZACIÓN</h2>
        {/* <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">{counter.data["users"]} usuarios</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["positions"]} posiciones</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["areas"]} areas</div>
        </div> */}
      </div>
      <div>
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Control de Acceso
        </span>
      </div>
      {/*component accion*/}
      <Tabs
        defaultValue="Organization"
        className="flex  flex-col overflow-auto rounded-lg"
      >
        <div className="flex justify-between">
        <TabsList className="flex w-fit overflow-y-auto gap-x-2 rounded-none bg-blancoBg px-0">
            {modulos.map((area, i) => (
              <TabsTrigger
                key={"tt" + i}
                className="h-[30px] rounded-xl px-2 font-roboto text-xs font-normal text-black data-[state=active]:bg-[#F1F1F1] data-[state=active]:shadow-none"
                value={area.name}
              >
                {area.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="flex gap-x-4">
            <div className="flex items-center justify-center">
              <IonIcon
                icon={searchOutline}
                className="h-6 w-6 text-[#CCCCCC]"
              />
            </div>

            <Button
              type={"button"}
              className="flex h-[30px] items-center justify-center rounded-xl bg-[#00A9B3] px-3 hover:bg-[#00A9B3]"
            >
              <span className="text-xs font-medium">Compartir</span>
            </Button>
            <Button
              type={"button"}
              className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
            >
              <IonIcon icon={add} className="h-4 w-4" />
              <span className="text-xs font-medium">Nuevo</span>
            </Button>
          </div>
        </div>
        {modulos.map((area, i) => (
          <TabsContent
            key={"tc" + i}
            value={area.name}
          >
            <ProjectTab tasks={areas.data} module_id={area.id} />
          </TabsContent>
        ))}
      </Tabs>
    </WrappedMain>
  );
}
export default MainAccess;
