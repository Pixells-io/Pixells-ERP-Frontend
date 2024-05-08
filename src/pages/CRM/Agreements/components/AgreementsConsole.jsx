import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { globeOutline, ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function AgreementsConsole({ services }) {
  const TABS = [];

  tabsFill(services, TABS);

  function tabsFill(data, array) {
    data.forEach((element) => {
      array.push({
        id: element.id,
        name: element.name,
        icon: globeOutline,
        agreements: element.agreements,
      });
    });
  }

  console.log(TABS[0].agreements);

  return (
    <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid grid-cols-12 w-full h-full">
          <TabsList className="col-span-2 flex flex-col gap-2 justify-normal bg-transparent h-full">
            <div className="flex flex-col gap-2 border-r pr-2 h-full ">
              {TABS?.map((tab, i) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.name}
                  className="text-sm py-1 text-grisText data-[state=active]:bg-blancoBox data-[state=active]:sm-none  data-[state=active]:font-semibold  font-normal data-[state=active]:text-primarioBotones"
                >
                  <div className="flex  gap-2 items-center w-32">
                    <div>
                      <IonIcon icon={tab.icon} className="h-6 w-6"></IonIcon>
                    </div>
                    <div className="truncate">
                      <p
                        className="w-full text-left truncate"
                        title={
                          tab.name.charAt(0).toUpperCase() + tab.name.slice(1)
                        }
                      >
                        {tab.name.charAt(0).toUpperCase() + tab.name.slice(1)}
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {TABS.map((tab, i) => (
            <TabsContent
              key={tab.id}
              value={tab.name}
              className="col-span-10 overflow-visible h-full"
            >
              {tab.agreements.map((agreement, i) => (
                <div className="flex gap-6">
                  <div className="flex flex-col h-36 w-36 bg-blancoBox rounded-lg">
                    <div className="h-full p-2 text-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <IonIcon
                            icon={ellipsisHorizontal}
                            size="medium"
                            className="text-grisHeading"
                          ></IonIcon>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Link to={`/crm/agreements/edit/${agreement.id}`}>
                              Edit
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link
                              to={`/crm/agreements/new-contract/${agreement.id}`}
                            >
                              Create
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div className="h-full bg-blancoBg"></div>
                    </div>
                    <div className="flex justify-center flex-col rounded-lg bg-blancoBox h-14 p-3 ">
                      <p className="flex text-[10px] text-grisHeading">
                        {agreement.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default AgreementsConsole;
