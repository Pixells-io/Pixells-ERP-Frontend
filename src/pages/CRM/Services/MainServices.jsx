import React, { useState } from "react";
import { NavLink, useLoaderData, Outlet } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  addCircleOutline,
  searchOutline,
} from "ionicons/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ServicesBlocks from "./components/ServicesBlocks";
import NewServiceForm from "./components/Forms/NewServiceForm";

import { saveCategory, saveService, savePackage } from "./utils";

import {
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";
import NewCategoryForm from "./components/Forms/NewCategoryForm";
import CategoriesTable from "./components/Tables/CategoriesTable";
import ServicesTable from "./components/Tables/ServicesTable";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import NewPackageForm from "./components/Forms/NewPackageForm";

function MainServices() {

  /* Set Modals Open */
  const [modalCategories, setModalCategories] = useState(false);

  const [modalServices, setModalServices] = useState(false);

  const [modalPackages, setModalPackages] = useState(false);

  /* Get Info */
  const { categories, positions, services, categoriesServices } = useLoaderData();

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
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">services</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              SERVICES
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">4 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">9 costumers</div>
          </div>
        </div>

        <ServicesBlocks />

        <div>
          <DropdownMenu>
              <DropdownMenuTrigger className="text-start width">
                  <IonIcon icon={addCircleOutline} size="large"  className="text-blue-500"></IonIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setModalServices(true)}>
                      Services
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setModalCategories(true)}>
                      Categories
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setModalPackages(true)} >
                      Packages
                  </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
        </div>

          {/*<NewServiceForm/>*/ }

          <Tabs defaultValue="services" className="w-full bg-blancoBg rounded-2xl p-4">
              <TabsList className="bg-transparent w-full mb-3">
                  <div className="flex w-full">
                      <div className="w-4/5">
                          <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="services">SERVICES</TabsTrigger>
                          <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="categories">CATEGORIES</TabsTrigger>
                          <TabsTrigger className="rounded-none text-sm font-normal data-[state=active]:text-primarioBotones data-[state=active]:bg-transparent data-[state=active]:font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500 font-roboto  text-grisSubText border-b-2 border-slate-300 p-3" value="packages">PACKAGES</TabsTrigger>
                      </div>
                      <div className="w-1/5">
                        <div className="flex items-end rounded-3xl border-[1px] border-[#44444F] text-[10px] h-10 w-44 py-2 px-2 mt-5">
                            <Label htmlFor="search">
                                <IonIcon
                                icon={searchOutline}
                                className="text-[#696974] w-6 h-6 stroke-1"
                                ></IonIcon>
                            </Label>
                            <Input
                                id="search"
                                className="h-full w-full border-0 bg-transparent placeholder:text-[#696974] placeholder:text-sm !ring-0 !ring-offset-0 focus:border-b-2 focus:border-slate-400 focus:rounded-none"
                                placeholder="SEARCH EMAILS"
                            />
                        </div>
                      </div>
                  </div>
              </TabsList>
              <TabsContent value="services">
                <ServicesTable
                  services={services.data}
                />
              </TabsContent>
              <TabsContent value="categories">
                <CategoriesTable
                  categories={categories.data}
                />
              </TabsContent>
              <TabsContent value="packages">

              </TabsContent>
          </Tabs>
        <Outlet />
      </div>
    </div>
  );
}

export default MainServices;



export async function Action({request}) {

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
  
    default:
      break;
  }

  return data;
  
}