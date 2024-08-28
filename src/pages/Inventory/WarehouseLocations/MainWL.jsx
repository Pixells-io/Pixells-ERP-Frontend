import React, { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import { columnsWL } from "./Components/Table/LocationTable";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MainWL = () => {
  const data = [
    {
      id: 1,
      inventory_code: "12131d122",
      categoria: "Metales",
      name: "Tornnillos",
      unidadMedida: "KG",
      cuentaContable: "Sí",
      tipo: "Material",
      creator: "Lopez Díaz",
      created: "28-Ago-2024",
    },
  ];

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
          <div className="font-roboto text-sm text-grisText">
            <div>Inventory - General</div>
          </div>
        </div>
        {/* top content */}

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-xl font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Ubicaciones de Almacén
          </p>
          <Link to="/inventory/warehouse-locations/create">
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
        {/*content */}

        <div className="w-full overflow-auto">
          <Tabs
            defaultValue="warehouse"
            className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
          >
            <TabsList className="ml-4 flex w-fit rounded-none bg-blancoBg">
              <TabsTrigger
                className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
                value="warehouse"
              >
                UBICACIONES
              </TabsTrigger>
            </TabsList>
            <TabsContent value="warehouse" className="mt-[-60px] p-2">
              <DataTable
                data={data}
                columns={columnsWL}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainWL;
