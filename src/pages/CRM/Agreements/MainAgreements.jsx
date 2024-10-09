import React, { useEffect, useState } from "react";

import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import AgreementsConsole from "./components/AgreementsConsole";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgreementsConsoleContracts from "./components/AgreementsConsoleContracts";
import NavigationHeader from "@/components/navigation-header";

function MainAgreements() {
  const { services, customers, contracts, permissions } = useLoaderData();
  const data = services.data;
  const contracts_data = contracts.data;

  const [edit, setEdit] = useState(true); //2
  const [create, setCreate] = useState(true); //3

  useEffect(() => {
    const editQuery = permissions.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEdit(false);
    }

    const createQuery = permissions.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }
  });

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              CONTRATOS
            </h2>
          </div>
        </div>

        <Tabs
          defaultValue="template"
          className="flex h-full w-full flex-col overflow-auto"
        >
          <div className="flex w-full items-center gap-3">
            <TabsList className="gap-3 bg-transparent">
              <TabsTrigger
                value={"template"}
                className="flex h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4 text-grisHeading data-[state=active]:bg-primario data-[state=active]:text-white"
              >
                <p className="text-[10px] font-semibold">Plantillas</p>
              </TabsTrigger>
              <TabsTrigger
                value={"contracts"}
                className="flex h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4 text-grisHeading data-[state=active]:bg-primario data-[state=active]:text-white"
              >
                <p className="text-[10px] font-semibold">Contratos</p>
              </TabsTrigger>
            </TabsList>
            {create == true ? (
              <Link to={"/sales/agreements/create"}>
                <IonIcon
                  icon={addCircleOutline}
                  size="large"
                  className="text-primarioBotones"
                ></IonIcon>
              </Link>
            ) : (
              false
            )}
          </div>
          <TabsContent
            value={"template"}
            className="h-full w-full overflow-auto"
          >
            <AgreementsConsole
              services={data}
              customers={customers.data}
              edit={edit}
              create={create}
            />
          </TabsContent>
          <TabsContent value={"contracts"} className="h-full w-full">
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

  return redirect(`/sales/agreements/new-contract/${agreement}/${customer}`);
}
