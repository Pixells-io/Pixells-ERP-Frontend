import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import AccordionModule from "./Components/AccordionModule";
import NavigationHeader from "@/components/navigation-header";

function MainAccess() {
  const { users, areas } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col gap-4 space-y-4 overflow-x-auto rounded-lg bg-gris p-8">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              ACCESS CONTROL
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div>4 service</div>
            <div className="text-2xl">&bull;</div>
            <div>9 costumers</div>
          </div>
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
      </div>
    </div>
  );
}
export default MainAccess;
