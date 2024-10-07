import React from "react";
import { IonIcon } from "@ionic/react";
import {  add } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";
import DataTable from "@/components/table/DataTable";
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { TraceabilityColumns } from "./Components/Table/TraceabilityColumns";

const MainTraceabilityReport = () => {

    const info = {
        entraces: [
          {
            id: "001",
            code: "INV-001",
            name:"example 1",
            type: "1", // Compra
            status: "1", // Pendiente
            inventory_in: "Almacén A",
            createdBy: {
              img: "https://example.com/user1.jpg",
              iname: "Juan Pérez"
            },
            date: "2024-10-01"
          },
          {
            id: "002",
            code: "INV-002",
            name:"example 2",
            type: "2", // Producción
            status: "2", // Enviado
            inventory_in: "Almacén B",
            createdBy: {
              img: "https://example.com/user2.jpg",
              iname: "María Gómez"
            },
            date: "2024-10-02"
          },
          {
            id: "003",
            code: "INV-003",
            name:"example 3",
            type: "3", // Transferencia
            status: "3", // Recibido
            inventory_in: "Almacén C",
            createdBy: {
              img: "https://example.com/user3.jpg",
              iname: "Luis Rodríguez"
            },
            date: "2024-10-03"
          },
          {
            id: "004",
            code: "INV-004",
            name:"example 4",
            type: "4", // Salida
            status: "4", // Parcial
            inventory_in: "Almacén D",
            createdBy: {
              img: "https://example.com/user4.jpg",
              iname: "Ana Torres"
            },
            date: "2024-10-04"
          }
        ],
        entraces_pending: [
          {
            id: "005",
            code: "INV-005",
            type: "1", // Compra
            status: "1", // Pendiente
            inventory_in: "Almacén E",
            createdBy: {
              img: "https://example.com/user5.jpg",
              iname: "Carlos Sánchez"
            },
            date: "2024-10-05"
          },
          {
            id: "006",
            code: "INV-006",
            type: "2", // Producción
            status: "5", // Problema
            inventory_in: "Almacén F",
            createdBy: {
              img: "https://example.com/user6.jpg",
              iname: "Laura Jiménez"
            },
            date: "2024-10-06"
          }
        ]
      };
      
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="text-md font-poppins font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <Tabs
          defaultValue="entry"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
              Reportes de trazabilidad
            </p>
            <div className="flex justify-end gap-6">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                <TabsTrigger
                  value="entry"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Entradas
                </TabsTrigger>
                <TabsTrigger
                  value="egress"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Salidas
                </TabsTrigger>
                <TabsTrigger
                  value="transfer"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Transpasos
                </TabsTrigger>
              </TabsList>
             <Link to={"/inventory/traceability-reports/create"}>
             <Button   className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones">
          <IonIcon icon={add} className="h-4 w-4" />
          <span className="text-xs font-medium">Nuevo</span>
              </Button>
             </Link>
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
                  value="pending"
                >
                  PENDIENTES
                </TabsTrigger>
              </TabsList>
              <TabsContent value="entries" className="mt-[-70px] w-full pt-2">
                <DataTable
                  data={info.entraces}
                  columns={TraceabilityColumns}
                  searchNameFilter={"Nombre"}
                  searchFilter={"name"}
                  isCheckAll={true}
                />
              </TabsContent>
              <TabsContent value="pending" className="mt-[-70px] w-full pt-2">
                <DataTable
                  data={info.entraces_pending}
                  columns={TraceabilityColumns}
                  searchNameFilter={"Nombre"}
                  searchFilter={"name"}
                  isCheckAll={true}
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainTraceabilityReport;
