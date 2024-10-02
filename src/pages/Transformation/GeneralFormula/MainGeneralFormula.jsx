import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  add,
} from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { GeneralFormulaColumns } from "./Table/GeneralFormulaColumns";
import NavigationHeader from "@/components/navigation-header";

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
    <div className="flex h-full w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-base font-bold text-grisHeading">
              TRANSFORMACIÓN
            </h2>
          </div>
          {/* <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div> */}
        </div>

        <div className="flex items-center justify-between">
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Formulas General
          </p>
          <Link to="/transformation/create">
            <Button
              type="button"
              className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
            >
              <IonIcon icon={add} className="h-4 w-4" />
              <span className="text-xs font-medium">Nuevo</span>
            </Button>
          </Link>
        </div>

        <Tabs
          defaultValue="formulas"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
        >
          <TabsList className="2 ml-4 flex w-fit rounded-none bg-blancoBg">
            <TabsTrigger
              value="formulas"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              FORMULAS
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="rounded-none border-b-2 px-4 text-sm font-normal text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
            >
              OTRO
            </TabsTrigger>
          </TabsList>
          <TabsContent value="formulas" className="mt-[-60px] p-2">
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
