import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { CollectionsColumns } from "./Table/CollectionsColumns";
import NavigationHeader from "@/components/navigation-header";
import BillingSummary from "./Tabs/BillingSummaries";

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

  const tabsContents = [
    { value: "collections", label: "Cobros" },
    { value: "summary", label: "Resumen" },
  ];

  const tabItems = [
    { value: "collection", label: "COBROS" },
    { value: "others", label: "OTROS" },
  ];

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-md font-poppins font-bold text-[#44444F]">
              GESTIÓN DE BANCOS
            </h2>
          </div>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>
        <Tabs
          defaultValue="collections"
          className="h-full w-full overflow-hidden rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <div className="flex justify-start">
              <p className="font-poppins text-xl font-bold text-grisHeading">
                Cobros General
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                {tabsContents.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                    value={value}
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <Link to="/bank-management/collection/create">
                <Button
                  type="button"
                  className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
                >
                  <IonIcon icon={add} className="h-4 w-4" />
                  <span className="text-xs font-medium">Nuevo</span>
                </Button>
              </Link>
            </div>
          </div>
          <TabsContent value="collections" className="h-full">
            <Tabs
              defaultValue="collection"
              className="h-full overflow-hidden rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                {tabItems.map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                    value={value}
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
              <TabsContent value="collection" className="mt-[-70px] p-2">
                <DataTable
                  data={data}
                  columns={CollectionsColumns}
                  names={[]}
                  searchFilter="concept"
                />
              </TabsContent>
              <TabsContent className="mt-[-70px] p-2" value="others">
                <DataTable
                  data={data2}
                  columns={CollectionsColumns}
                  names={[]}
                  searchFilter="concept"
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="summary" className="h-full overflow-hidden">
            <BillingSummary />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainCollectionBankManag;
