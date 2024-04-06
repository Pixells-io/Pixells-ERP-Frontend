import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { globeOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const TABS = [
  { id: 1, name: "immigration", icon: globeOutline },
  { id: 2, name: "bookeeping", icon: globeOutline },
  { id: 3, name: "Tax Prep.", icon: globeOutline },
  { id: 4, name: "audits", icon: globeOutline },
  { id: 5, name: "Pay Roll", icon: globeOutline },
  { id: 6, name: "Plan Infor.", icon: globeOutline },
];

function AgreementsConsole() {
  return (
    <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid grid-cols-12 w-full h-full">
          <TabsList className="col-span-2 flex flex-col gap-2 justify-normal bg-transparent h-full">
            <div className="flex flex-col gap-2 border-r pr-2 h-full ">
              {TABS?.map((tab, i) => (
                <TabsTrigger
                  key={i}
                  value={tab.name}
                  className="text-sm py-1 text-grisText data-[state=active]:bg-blancoBox data-[state=active]:sm-none  data-[state=active]:font-semibold  font-normal data-[state=active]:text-primarioBotones"
                >
                  <div className="flex pl-3 gap-2 items-center w-32">
                    <IonIcon icon={tab.icon} className="h-8 w-8"></IonIcon>
                    <p className="w-full text-left">
                      {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                    </p>
                  </div>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {TABS.map((tab, i) => (
            <TabsContent
              key={i}
              value={tab.name}
              className="col-span-10 overflow-scroll h-full"
            >
              Content of {tab.name}
              <div className="flex gap-6">
                <div className="flex flex-col h-36 w-36 bg-blancoBox rounded-lg">
                  <div className="h-full p-2">
                    <div className="h-full bg-blancoBg"></div>
                  </div>
                  <div className="flex justify-center flex-col rounded-lg bg-blancoBox h-14 p-3 ">
                    <p className="flex text-[10px] text-grisHeading">
                      Acuse Cita para renovar licencia.pdf
                    </p>
                    <div className="flex justify-around text-[8px] text-grisSubText line-clamp-none">
                      <span>2 pages</span>
                      <span>&bull;</span>
                      <span>XLSX</span>
                      <span>&bull;</span>
                      <span>134 KB</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-36 w-36 bg-blancoBox rounded-lg">
                  <div className="h-full p-2">
                    <div className="h-full bg-blancoBg"></div>
                  </div>
                  <div className="flex justify-center flex-col rounded-lg bg-blancoBox h-14 p-3 ">
                    <p className="flex text-[10px] text-grisHeading">
                      Acuse Cita para renovar licencia.pdf
                    </p>
                    <div className="flex justify-around text-[8px] text-grisSubText line-clamp-none">
                      <span>2 pages</span>
                      <span>&bull;</span>
                      <span>XLSX</span>
                      <span>&bull;</span>
                      <span>134 KB</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col h-36 w-36 bg-blancoBox rounded-lg">
                  <div className="h-full p-2">
                    <div className="h-full bg-blancoBg"></div>
                  </div>
                  <div className="flex justify-center flex-col rounded-lg bg-blancoBox h-14 p-3 ">
                    <p className="flex text-[10px] text-grisHeading">
                      Acuse Cita para renovar licencia.pdf
                    </p>
                    <div className="flex justify-around text-[8px] text-grisSubText line-clamp-none">
                      <span>2 pages</span>
                      <span>&bull;</span>
                      <span>XLSX</span>
                      <span>&bull;</span>
                      <span>134 KB</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default AgreementsConsole;
