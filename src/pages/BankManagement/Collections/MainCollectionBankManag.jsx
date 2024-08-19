import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import DataTable from "../Components/Table/DataTable";
import { CollectionsColumns } from "./Table/CollectionsColumns";

function MainCollectionBankManag() {
  //datos de prueba --------------------------

  const data = [
    {
      id: "1",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "done",
    },
    {
      id: "2",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "inProgress",
    },
    {
      id: "3",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "done",
    },
    {
      id: "4",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "done",
    },
  ];

  const data2 = [
    {
      id: "5",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "inProgress",
    },
    {
      id: "6",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "done",
    },
    {
      id: "7",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "inProgress",
    },
    {
      id: "8",
      concept: "Concept del doc",
      noDoc: "0918",
      typeDoc: "FA",
      paymentMethod: "Transferencia",
      total: "54620.00",
      status: "done",
    },
  ];

  //-------------------------------------------

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">Tickets</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              GESTIÓN DE BANCOS
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Cobros General
          </p>
          <Link to="/bank-management/collection/create">
          <Button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={addCircleOutline}
                className="h-7 w-7 text-primarioBotones"
              />
            </Button>
          </Link>
        </div>

        <Tabs
          defaultValue="accounts"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="accounts"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              COBROS
            </TabsTrigger>
            <TabsTrigger
              value="banks"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              OTRO
            </TabsTrigger>
          </TabsList>
          <TabsContent value="accounts" className="mt-[-60px] p-2">
            <DataTable
              data={data}
              columns={CollectionsColumns}
              names={[]}
              searchFilter="concept"
            />
          </TabsContent>
          <TabsContent className="mt-[-60px] p-2" value="banks">
            <DataTable
              data={data2}
              columns={CollectionsColumns}
              names={[]}
              searchFilter="concept"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCollectionBankManag;
