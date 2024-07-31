import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { GeneralFormulaColumns } from "./Table/GeneralFormulaColumns";

function MainGeneralFormula() {
  //datos de prueba --------------------------

  const data = [
    {
      id: "1",
      name: "Original Constructors1",
      type: "IMMIGRATION, TAX Preparation1",
      nationality: "Ernest Robles1",
      contact: "981-476-2244",
      email: "ernest1@gmail.com",
    },
    {
      id: "2",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "3",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "4",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "5",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "6",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
  ];

  const data2 = [
    {
      id: "1",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "2",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "3",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "4",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "5",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
    },
    {
      id: "6",
      name: "Original Constructors",
      type: "IMMIGRATION, TAX Preparation",
      nationality: "Ernest Robles",
      contact: "981-476-2245",
      email: "ernest@gmail.com",
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
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              TRANSFORMACIÓN
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
            Formulas General
          </p>
          <Link to="/transformation/create">
            <IonIcon
              icon={addCircleOutline}
              className="mt-5 h-7 w-7 text-blue-500"
            ></IonIcon>
          </Link>
        </div>

        <Tabs
          defaultValue="suppliers"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="suppliers"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              PROVEEDORES
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              OTRO
            </TabsTrigger>
          </TabsList>
          <TabsContent value="suppliers" className="mt-[-60px] p-2">
            <DataTable
              data={data}
              columns={GeneralFormulaColumns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={true}
            />
          </TabsContent>
          <TabsContent value="other" className="mt-[-60px] p-2">
            <DataTable
              data={data2}
              columns={GeneralFormulaColumns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainGeneralFormula;
