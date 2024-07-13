import React, { useState } from "react";

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

function AgreementsConsoleContracts({ info }) {
  const TABS = [];
  tabsFill(info, TABS);
  const [modal, setModal] = useState(false);
  const [agreementId, setAgreement] = useState(false);

  function tabsFill(data, array) {
    data.forEach((element) => {
      array.push({
        id: element.id,
        name: element.name,
        icon: globeOutline,
        agreements: element.contracts,
      });
    });
  }

  return (
    <div className="flex h-full w-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
      <Tabs defaultValue="inbox" className="w-full">
        <div className="flex h-full w-full">
          <TabsList className="flex h-full flex-col justify-normal gap-2 bg-transparent">
            <p className="text-center font-poppins text-[28px] font-medium text-grisHeading">
              Contracts
            </p>
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
              className="flex h-fit flex-wrap justify-center gap-6 overflow-visible"
            >
              {tab.agreements.map((agreement, i) => (
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
                          <Link
                            to={`${import.meta.env.VITE_SERVER_URL}agreements/print-contract/${agreement.id}`}
                          >
                            Print
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Link to={`/crm/agreements/show/${agreement.id}`}>
                            Show
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
                    <p className="flex text-[10px] text-grisHeading">
                      {agreement.customer}
                    </p>
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

export default AgreementsConsoleContracts;
