import React from "react";
import { Link } from "react-router-dom";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  add,
} from "ionicons/icons";
import DataTable from "@/components/table/DataTable";
import { MovEntryColumns } from "./Entry/Table/MovEntryColumns";
import { MovEgressColumns } from "./Egress/Table/MovEgressColumns";
import { MovTransferColumns } from "./Transfer/Table/MovTransferColumns";
import MenuMovements from "./Components/MenuDrop";

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
    <div className="ml-2 flex w-full">
      <div className="ml-2 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="flex justify-between">
            <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
              Movimientos de Mercancía
            </p>
            <div className="flex justify-end gap-6">
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

           <MenuMovements/>
            </div>
          </div>
          <TabsContent value="entry" className="rounded-md bg-blancoBg p-2">
            <Tabs
              defaultValue="entries"
              className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="entries"
                >
                  ENTRADAS
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="scheduled"
                >
                  PROGRAMADAS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="entries" className="mt-[-70px] w-full pt-2">
                <DataTable
                  data={data}
                  columns={MovEntryColumns}
                  searchNameFilter={"Nombre"}
                  searchFilter={"name"}
                  isCheckAll={true}
                />
              </TabsContent>
              <TabsContent value="scheduled" className="mt-4 w-full pt-2">
                <span>OTRA TABLA</span>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="egress" className="rounded-md bg-blancoBg p-2">
            <Tabs
              defaultValue="egress"
              className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="egress"
                >
                  SALIDAS
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="scheduled"
                >
                  PROGRAMADAS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="egress" className="mt-[-70px] w-full pt-2">
                <DataTable
                  data={dataEgress}
                  columns={MovEgressColumns}
                  searchNameFilter={"Nombre"}
                  searchFilter={"name"}
                  isCheckAll={true}
                />
              </TabsContent>
              <TabsContent value="scheduled" className="mt-4 w-full pt-2">
                <span>OTRA TABLA</span>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="transfer" className="rounded-md bg-blancoBg p-2">
            <Tabs
              defaultValue="request"
              className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="request"
                >
                  SOLICITUDES
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="transfers"
                >
                  TRASPASOS
                </TabsTrigger>
              </TabsList>
              <TabsContent value="request" className="mt-[-70px] w-full pt-2">
                <DataTable
                  data={dataEgress}
                  columns={ MovTransferColumns}
                  searchNameFilter={"Nombre"}
                  searchFilter={"name"}
                  isCheckAll={true}
                />
              </TabsContent>
              <TabsContent value="transfers" className="mt-4 w-full pt-2">
                <span>OTRA TABLA</span>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default MainMerchandiseMovements;
