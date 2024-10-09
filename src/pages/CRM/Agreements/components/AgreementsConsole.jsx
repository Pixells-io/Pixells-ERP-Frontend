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
import FormCreateContract from "./FormCreateContract";

function AgreementsConsole({ services, customers, edit, create }) {
  const TABS = [];
  tabsFill(services, TABS);
  const [modal, setModal] = useState(false);
  const [agreementId, setAgreement] = useState(false);

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

  function openModalFunction(agreement) {
    setAgreement(agreement);
    setModal(true);
  }

  return (
    <div className="flex h-full w-full overflow-auto rounded-xl bg-blancoBg p-4">
      <FormCreateContract
        modal={modal}
        setModal={setModal}
        customers={customers}
        agreement={agreementId}
      />
      <Tabs defaultValue="inbox" className="flex h-full w-full">
        <TabsList className="flex h-full flex-col gap-2 bg-transparent">
          <p className="text-center font-poppins text-[28px] font-medium text-grisHeading">
            Plantillas
          </p>
          <div className="flex h-full flex-col gap-2 overflow-auto border-r pr-2">
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
            className="flex h-full flex-wrap gap-6 overflow-scroll"
          >
            {tab.agreements.map((agreement, i) => (
              <div
                className="flex h-36 w-36 flex-col rounded-lg bg-blancoBox"
                key={i}
              >
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
                      {edit == true ? (
                        <DropdownMenuItem>
                          <Link to={`/sales/agreements/edit/${agreement.id}`}>
                            Editar
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        false
                      )}
                      {create == true ? (
                        <DropdownMenuItem>
                          <button
                            onClick={() => openModalFunction(agreement.id)}
                          >
                            Crear
                          </button>
                        </DropdownMenuItem>
                      ) : (
                        false
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="h-full bg-blancoBg"></div>
                </div>
                <div className="flex h-14 flex-col justify-center rounded-lg bg-blancoBox p-3">
                  <p className="text-[10px] text-grisHeading">Nombre</p>
                  <p className="flex truncate text-[10px] text-grisHeading">
                    {agreement.name}
                  </p>
                </div>
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default AgreementsConsole;
