import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import AccordionModule from "./Components/AccordionModule";
import NavigationHeader from "@/components/navigation-header";

function MainAccess() {
  const { users, areas } = useLoaderData();
  function WrappedMain({ children }) {
    return (
      <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 bg-[#FBFBFB] px-14 py-3">
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
        <div className="rounded-xl bg-white p-7">
          <div className="flex">
            <Tabs className="w-full">
              <TabsList className="mb-3 w-full overflow-auto bg-transparent pb-7">
                <div className="flex h-[25px] w-full">
                  {areas.data?.map((area, i) => (
                    <TabsTrigger
                      key={"tt" + i}
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value={area.id}
                    >
                      {" "}
                      {area.nombre}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
              {areas.data?.map((area, i) => (
                <TabsContent key={"tc" + i} value={area.id}>
                  <AccordionModule area={area} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      
    </WrappedMain>
  );
}
export default MainAccess;
