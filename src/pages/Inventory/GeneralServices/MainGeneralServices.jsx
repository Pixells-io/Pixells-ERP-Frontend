import React, { useState, useEffect } from "react";
import NavigationHeader from "@/components/navigation-header";
import ServiceMenu from "./Components/MenuDropList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { ServiceColumns } from "./Components/Table/ServiceColumns";
import { CategoriesColumns } from "./Components/Table/CategoriesColumns";
import { CombosColumns } from "./Components/Table/CombosColumns";
import NewCategoryForm from "./Components/Forms/NewCategory";
import NewComboForm from "./Components/Forms/NewComboForm";
import { useLoaderData } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import { getServices } from "./utils";
const tabItems = [
  { value: "services", label: "SERVICIOS" },
  { value: "categories", label: "CATEGORÍAS" },
  { value: "combos", label: "COMBOS" },
];


const MainGeneralServices = () => {
  /* Get Info */
  const { services,categories, packages, categoriesServices } = useLoaderData();

  const [modalCategories, setModalCategories] = useState(false);
  const [modalPackages, setModalPackages] = useState(false);
  



  const [serviceInfo, setServiceInfo] = useState(services.data);
  
  const pusherClient = createPusherClient();

  async function getServiceFunction() {
    let newData = await getServices();
    setServiceInfo(newData);
  }


  useEffect(() => {
    pusherClient.subscribe("private-get-services");

    pusherClient.bind("fill-services", ({ message }) => {
      getServiceFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-services");
    };
  }, []);

  return (
    <div className="flex w-full">
      <NewCategoryForm
        modalCategories={modalCategories}
        setModalCategories={setModalCategories}
      />
      <NewComboForm
        modalPackage={modalPackages}
        setModalPackage={setModalPackages}
        info={categoriesServices.data}
      />
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

        <div className="flex justify-between">
          <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
            Servicios General
          </p>
          <div className="flex justify-end gap-6">
            <ServiceMenu
              setModalCategories={setModalCategories}
              setModalPackages={setModalPackages}
            />
          </div>
        </div>
        <div className="flex h-full w-full flex-col rounded-xl bg-white p-6">
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="mx-3 flex justify-start gap-6 rounded-none border-b bg-inherit p-0 py-6">
              {tabItems.map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  className="mb-[-12px] rounded-none border-slate-300 border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value={value}
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="services" className="mt-[-70px] w-full pt-2">
              <DataTable
                data={serviceInfo}
                columns={ServiceColumns}
                searchFilter="name"
                searchNameFilter="Buscar por nombre"
                isCheckAll={true}
              />
            </TabsContent>
            <TabsContent value="categories" className="mt-[-70px] w-full pt-2">
              <DataTable
                data={categories.data}
                columns={CategoriesColumns}
                searchFilter={"name"}
                searchNameFilter={"Name"}
                isCheckAll={false}
              />
            </TabsContent>
            <TabsContent value="combos" className="mt-[-70px] w-full pt-2">
              <DataTable
                data={packages.data}
                columns={CombosColumns}
                searchFilter={"name"}
                searchNameFilter={"Name"}
                isCheckAll={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MainGeneralServices;
