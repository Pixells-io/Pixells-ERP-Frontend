import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLoaderData } from "react-router-dom";
import AccordionModule from "./Components/AccordionModule";

function MainAccess() {
  const { users, areas } = useLoaderData();

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full bg-gris p-8 ml-4 rounded-lg space-y-4 overflow-x-auto gap-4">
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
          <div className="font-roboto text-grisText">organization</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins font-bold text-2xl text-[#44444F]">
              ACCESS CONTROL
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center font-roboto">
            <div>4 service</div>
            <div className="text-2xl">&bull;</div>
            <div>9 costumers</div>
          </div>
        </div>
        {/*component accion*/}
        <div className="bg-white rounded-xl p-7">
          <div className="flex">
            <Tabs className="w-full">
              <TabsList className="bg-transparent w-full mb-3">
                <div className="flex w-full">
                  {areas.data?.map((area, i) => (
                    <TabsTrigger
                      className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3"
                      value={area.id}
                    >
                      {" "}
                      {area.nombre}{" "}
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
              {areas.data?.map((area, i) => (
                <TabsContent value={area.id}>
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
