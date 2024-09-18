import React from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  add,
} from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MovEntryColumns } from "./Entry/Table/MovEntryColumns";
import { MovEgressColumns } from "./Egress/Table/MovEgressColumns";

function MainMerchandiseMovements() {
  //datos de prueba --------------------------

  const data = [
    {
      id: 1,
      code: "0987",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 2,
      code: "0988",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 3,
      code: "0989",
      category: "Metales",
      name: "Clavos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 4,
      code: "0990",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
  ];

  const dataEgress = [
    {
      id: 1,
      code: "0990",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 2,
      code: "0991",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
    {
      id: 3,
      code: "0992",
      category: "Metales",
      name: "Clavos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
  ];

  const dataPendings = [
    {
      id: 10,
      code: "0999",
      category: "Metales",
      name: "Tornillos",
      unitMeasurement: "Pieza",
      accountingAccount: "Activos",
      type: "Inventario",
      createdBy: "https://github.com/shadcn.png",
      createdAt: "21/07/2024",
    },
  ];

  //-------------------------------------------

  return (
    <div className="ml-4 flex w-full rounded-md bg-blancoForms">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            Movimientos de Mercancia{" "}
          </div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              INVENTARIO
            </h2>
          </div>
        </div>

        <Tabs
          defaultValue="entry"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex">
            <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
              Movimientos de Mercancía
            </p>
            <TabsList className="2 ml-4 flex w-fit rounded-lg bg-blancoBox px-1 py-1">
              <TabsTrigger
                value="entry"
                className="text-grisSubTextdata-[state=active]:bg-white rounded-md border-b-2 px-4 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
              >
                Entradas
              </TabsTrigger>
              <TabsTrigger
                value="egress"
                className="text-grisSubTextdata-[state=active]:bg-white rounded-md border-b-2 px-4 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
              >
                Salidas
              </TabsTrigger>
              <TabsTrigger
                value="transfer"
                className="text-grisSubTextdata-[state=active]:bg-white leading- rounded-md border-b-2 px-4 font-roboto text-sm font-normal data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
              >
                Transpasos
              </TabsTrigger>
            </TabsList>
            <Button className="text gap-2 rounded-xl bg-primarioBotones font-roboto text-sm text-white hover:bg-primario">
              <IonIcon icon={add} className="text-lg"></IonIcon>
              Nuevo
            </Button>
          </div>
          <TabsContent value="entry" className="rounded-md bg-blancoBg p-2">
            <DataTable
              data={data}
              columns={MovEntryColumns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={true}
            />
          </TabsContent>
          <TabsContent value="egress" className="p-2">
            <DataTable
              data={dataEgress}
              columns={MovEgressColumns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={true}
            />
          </TabsContent>
          <TabsContent value="transfer" className="p-2">
            <DataTable
              data={dataPendings}
              columns={MovEntryColumns}
              searchNameFilter={"Nombre"}
              searchFilter={"name"}
              isCheckAll={true}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainMerchandiseMovements;
