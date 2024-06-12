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

  // console.log(TABS[0]?.agreements);

  return (
    <div className="flex h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="grid h-full w-full grid-cols-12">
          <TabsList className="col-span-2 flex h-full flex-col justify-normal gap-2 bg-transparent">
            <div className="flex h-full flex-col gap-2 border-r pr-2">
              {TABS?.map((tab, i) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.name}
                  className="data-[state=active]:sm-none py-1 text-sm font-normal text-grisText data-[state=active]:bg-blancoBox data-[state=active]:font-semibold data-[state=active]:text-primarioBotones"
                >
                  <div className="flex w-32 items-center gap-2">
                    <div>
                      <IonIcon icon={tab.icon} className="h-6 w-6"></IonIcon>
                    </div>
                    <div className="truncate">
                      <p
                        className="w-full truncate text-left"
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
          {TABS?.map((tab, i) => (
            <TabsContent
              key={tab.id}
              value={tab.name}
              className="col-span-10 h-full overflow-visible"
            >
              {tab.agreements.map((agreement, i) => (
                <div className="flex gap-6">
                  <div className="flex h-36 w-36 flex-col rounded-lg bg-blancoBox">
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
                    <div className="flex h-14 flex-col justify-center rounded-lg bg-blancoBox p-3">
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
