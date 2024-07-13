import React, { useState } from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  searchOutline,
} from "ionicons/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ServicesBlocks from "./components/ServicesBlocks";
import NewServiceForm from "./components/Forms/NewServiceForm";

import {
  saveCategory,
  saveService,
  savePackage,
  editCategory,
  editPackage,
  editService,
} from "./utils";
import NewCategoryForm from "./components/Forms/NewCategoryForm";
import CategoriesTable from "./components/Tables/CategoriesTable";
import ServicesTable from "./components/Tables/ServicesTable";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import NewPackageForm from "./components/Forms/NewPackageForm";
import PackagesTable from "./components/Tables/PackagesTable";

function MainServices() {
  /* Set Modals Open */
  const [modalCategories, setModalCategories] = useState(false);

  const [modalServices, setModalServices] = useState(false);

  const [modalPackages, setModalPackages] = useState(false);

  /* Get Info */
  const {
    categories,
    positions,
    services,
    categoriesServices,
    packages,
    analytic,
  } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <NewServiceForm
        modalServices={modalServices}
        setModalServices={setModalServices}
        categories={categories}
        positions={positions}
      />
      <NewCategoryForm
        modalCategories={modalCategories}
        setModalCategories={setModalCategories}
      />
      <NewPackageForm
        modalPackage={modalPackages}
        setModalPackage={setModalPackages}
        info={categoriesServices.data}
      />
      <div className="ml-4 flex h-full w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">services</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              SERVICES
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">
              {services.data?.length}{" "}
              {services.data?.length > 1 ? "services" : "service"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">
              {categories.data?.length}{" "}
              {categories.data?.length > 1 ? "categories" : "category"}
            </div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">
              {packages.data?.length}{" "}
              {packages.data?.length > 1 ? "packages" : "package"}
            </div>
          </div>
        </div>

        <ServicesBlocks data={analytic.data} />

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="width text-start">
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="text-blue-500"
              ></IonIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setModalServices(true)}>
                Services
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setModalCategories(true)}>
                Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setModalPackages(true)}>
                Membership
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/*<NewServiceForm/>*/}

        <Tabs
          defaultValue="services"
          className="h-full w-full overflow-scroll rounded-2xl bg-blancoBg p-4"
        >
          <TabsList className="mb- w-full bg-transparent">
            <div className="flex w-full">
              <div className="w-4/5">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="services"
                >
                  SERVICES
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="categories"
                >
                  CATEGORIES
                </TabsTrigger>
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                  value="packages"
                >
                  MEMBERSHIP
                </TabsTrigger>
              </div>
              <div className="w-1/5">
                <div className="mt-5 flex h-10 w-44 items-end rounded-3xl border-[1px] border-[#44444F] px-2 py-2 text-[10px]">
                  <Label htmlFor="search">
                    <IonIcon
                      icon={searchOutline}
                      className="h-6 w-6 stroke-1 text-[#696974]"
                    ></IonIcon>
                  </Label>
                  <Input
                    id="search"
                    className="h-full w-full border-0 bg-transparent !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#696974] focus:rounded-none focus:border-b-2 focus:border-slate-400"
                    placeholder="SEARCH EMAILS"
                  />
                </div>
              </div>
            </div>
          </TabsList>
          <TabsContent value="services">
            <ServicesTable services={services.data} />
          </TabsContent>
          <TabsContent value="categories">
            <CategoriesTable categories={categories.data} />
          </TabsContent>
          <TabsContent value="packages" className="">
            <PackagesTable packages={packages.data} />
          </TabsContent>
        </Tabs>
        <Outlet />
      </div>
    </div>
  );
}

export default MainServices;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "1":
      //Service Case
      await saveService(data);
      break;
    case "2":
      //Category Case
      await saveCategory(data);
      break;
    case "3":
      //Package Case
      await savePackage(data);
      break;
    case "4":
      //Package Case
      await editCategory(data);
      break;
    case "5":
      //Package Case
      await editPackage(data);
      break;
    case "6":
      //Package Case
      await editService(data);
      break;

    default:
      break;
  }

  return data;
}
