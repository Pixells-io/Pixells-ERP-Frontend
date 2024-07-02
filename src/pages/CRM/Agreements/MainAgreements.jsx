import React from "react";

import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import AgreementsConsole from "./components/AgreementsConsole";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgreementsConsoleContracts from "./components/AgreementsConsoleContracts";

function MainAgreements() {
  const { services, customers, contracts } = useLoaderData();
  const data = services.data;
  const contracts_data = contracts.data;

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">agreements</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              AGREEMENTS CONSOLE
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">6 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">36 templates</div>
          </div>
        </div>

        <Tabs defaultValue="template" className="h-full w-full">
          <div className="flex items-center gap-3">
            <TabsList className="gap-3 bg-transparent">
              <TabsTrigger
                value={"template"}
                className="flex h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4 text-grisHeading data-[state=active]:bg-primario data-[state=active]:text-white"
              >
                <p className="text-[10px] font-semibold">Templates</p>
              </TabsTrigger>
              <TabsTrigger
                value={"contracts"}
                className="flex h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4 text-grisHeading data-[state=active]:bg-primario data-[state=active]:text-white"
              >
                <p className="text-[10px] font-semibold">Contracts</p>
              </TabsTrigger>
            </TabsList>
            <Link to={"/crm/agreements/create"}>
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="text-primarioBotones"
              ></IonIcon>
            </Link>
          </div>
          <TabsContent value={"template"} className="h-full">
            <AgreementsConsole services={data} customers={customers.data} />
          </TabsContent>
          <TabsContent value={"contracts"} className="h-full">
            <AgreementsConsoleContracts info={contracts_data} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainAgreements;

export async function Action({ request }) {
  const data = await request.formData();

  const agreement = data.get("agreement_id");
  const customer = data.get("customer_id");

  return redirect(`/crm/agreements/new-contract/${agreement}/${customer}`);
}
