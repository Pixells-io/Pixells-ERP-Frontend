import React, { useState, useEffect } from "react";
import NavigationHeader from "@/components/navigation-header";
import ServiceMenu from "./Components/MenuDropList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTable from "@/components/table/DataTable";
import { CategoriesColumns } from "./Components/Table/CategoriesColumns";
import { CombosColumns } from "./Components/Table/CombosColumns";
import NewCategoryForm from "./Components/Forms/NewCategory";
import NewComboForm from "./Components/Forms/NewComboForm";
import { Link, useLoaderData, redirect } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import ModalDeleteService from "./Components/Modals/ModalDeleteService";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IonIcon } from "@ionic/react";
import { informationCircleOutline, trashOutline } from "ionicons/icons";
import {
  getServices,
  saveCategory,
  savePackage,
  DestroyService,
} from "./utils";
const tabItems = [
  { value: "services", label: "SERVICIOS" },
  { value: "categories", label: "CATEGORÍAS" },
  { value: "combos", label: "COMBOS" },
];

const MainGeneralServices = () => {
  /* Get Info */
  const { services, categories, packages, categoriesServices } =
    useLoaderData();

  const [modalCategories, setModalCategories] = useState(false);
  const [modalPackages, setModalPackages] = useState(false);
  const [serviceInfo, setServiceInfo] = useState([...services.data].reverse());
  const [serviceId, setServiceId] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [serviceDestroyModal, setServiceDestroyModal] = useState(false);

  const pusherClient = createPusherClient();
  // ADD WEB SOCKET
  async function getServiceFunction() {
    let newData = await getServices();
    setServiceInfo([...newData.data].reverse());
  }

  //CHANNEL
  useEffect(() => {
    pusherClient.subscribe("private-get-services");

    pusherClient.bind("fill-services", ({ message }) => {
      getServiceFunction();
    });

    return () => {
      pusherClient.unsubscribe("private-get-services");
    };
  }, []);

  const ServiceColumns = [
    {
      id: "name",
      accessorKey: "name",
      header: "NOMBRE",
      meta: { filterButton: true },
    },
    {
      id: "category",
      accessorKey: "category",
      header: "CATEGORIAS",
      meta: { filterButton: true },
    },
    {
      id: "price",
      accessorKey: "price",
      header: "PRECIO",
      meta: { filterButton: true },
    },

    {
      id: "acciones",
      header: <div className="text-center">Acciones</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center gap-1">
          <Link
            to={`/inventory/general-services/service/edit/${row?.original?.id}`}
          >
            <Button
              type="button"
              className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            >
              <IonIcon
                icon={informationCircleOutline}
                className="h-5 w-5 text-[#696974]"
              />
            </Button>
          </Link>
          <Button
            type="button"
            className="flex h-5 w-5 items-center justify-center rounded-full bg-transparent p-0 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
            onClick={() =>
              openDestroyServiceModal(row.original?.name, row.original?.id)
            }
          >
            <IonIcon icon={trashOutline} className="h-5 w-5 text-[#696974]" />
          </Button>
        </div>
      ),
    },
  ];

  function openDestroyServiceModal(name, id) {
    setServiceName(name);
    setServiceId(id);
    setServiceDestroyModal(true);
  }

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
      <ModalDeleteService
        modal={serviceDestroyModal}
        setModal={setServiceDestroyModal}
        service_name={serviceName}
        service_id={serviceId}
      />
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
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

        <Tabs
          defaultValue="services"
          className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
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

          <TabsContent
            value="services"
            className="mt-[-70px] w-full overflow-auto pt-2"
          >
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
              data={[...categories.data].reverse()}
              columns={CategoriesColumns}
              searchFilter={"name"}
              searchNameFilter={"Name"}
              isCheckAll={false}
            />
          </TabsContent>
          <TabsContent value="combos" className="mt-[-70px] w-full pt-2">
            <DataTable
              data={[...packages.data].reverse()}
              columns={CombosColumns}
              searchFilter={"name"}
              searchNameFilter={"Name"}
              isCheckAll={false}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MainGeneralServices;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "destroy_service":
      //Service Case
      await DestroyService(data);
      break;
    case "2":
      //Category Case
      await saveCategory(data);
      break;
    case "3":
      //Package Case
      await savePackage(data);
      break;
  }

  return redirect("/inventory/general-services");
}
