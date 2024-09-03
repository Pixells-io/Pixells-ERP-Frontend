import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, addCircleOutline } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData, redirect } from "react-router-dom";
import { getLocations, getsubLocation } from "./utils";
import { createPusherClient } from "@/lib/pusher";
import { LocationColumns } from "./Components/Table/LocationColumns";
import { ConfigColumns } from "./Components/Table/ConfiglvlTable";
import ConfigureSublv from "./Components/Modal/SubConfigurationModal";
import { saveNewConfigSlots } from "./utils";

const MainWL = () => {
  const { locationData, subLocationData } = useLoaderData();

  const [locationInfo, setLocationInfo] = useState(locationData.data);
  const [configInfo, setConfigInfo] = useState(subLocationData.data);
  
  const pusherClient = createPusherClient();
  const [length,setLength]=useState(configInfo.length);

  async function getLocationFunction() {
    let newData = await getLocations();
    setLocationInfo(newData);
    setLength(configInfo.length)
  }

  async function getSubLocationFunction() {
    let newData = await getsubLocation();
    setConfigInfo(newData);
  }

  useEffect(() => {
    pusherClient.subscribe("private-get-sub-ubications");

    pusherClient.bind("fill-sub-ubications", ({ message }) => {
      getLocationFunction();
      getSubLocationFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-sub-ubications");
    };
  }, []);

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
          <div className="flex items-start justify-start space-x-6">
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
            <ConfigureSublv configlevel={length} />

          </div>
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
              <TabsTrigger
                className="rounded-none border-b-2 px-4 font-roboto text-sm text-grisSubText data-[state=active]:border-primarioBotones data-[state=active]:bg-blancoBg data-[state=active]:font-semibold data-[state=active]:text-primarioBotones data-[state=active]:shadow-none"
                value="config"
              >
                CONFIGURACIONES
              </TabsTrigger>
            </TabsList>
            <TabsContent value="warehouse" className="mt-[-60px] p-2">
              <DataTable
                data={locationInfo}
                columns={LocationColumns}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
            <TabsContent value="config" className="mt-[-60px] p-2">
            <DataTable
                data={configInfo}
                columns={ConfigColumns}
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

export async function Action({ request }) {
  const formData = await request.formData();
  
  // Obtener los IDs únicos de los formularios
  const variableIds = [...new Set(
    [...formData.keys()].filter(key => key.startsWith('variable_id_'))
  ).map(key => formData.get(key))];

  // Preparar los datos para cada variable_id
  const sublevelData = variableIds.map(variableId => {
    return {
      codes: formData.getAll(`code_${variableId}[]`),
      names: formData.getAll(`name_${variableId}[]`),
      variable_id: variableId
    };
  });

  await saveNewConfigSlots(sublevelData);
  return redirect("/inventory/warehouse-locations");
}
