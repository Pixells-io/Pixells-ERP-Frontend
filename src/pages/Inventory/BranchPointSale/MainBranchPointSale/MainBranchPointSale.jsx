import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, add } from "ionicons/icons";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import BranchesTab from "./Tabs/BranchesTab";
import { Link } from "react-router-dom";

const newBranch = () => {
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
          defaultValue="branches"
          className="h-full overflow-auto rounded-lg pt-2"
        >
          <div className="flex justify-between">
            <p className="mt-1 font-poppins text-xl font-bold text-grisHeading">
              Sucursales Generales
            </p>
            <div className="flex justify-end gap-6">
              <TabsList className="ml-4 flex h-[30px] w-fit items-center rounded-lg bg-blancoBox px-1">
                <TabsTrigger
                  value="branches"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Sucursales
                </TabsTrigger>
                <TabsTrigger
                  value="resume"
                  className="text-grisSubTextdata-[state=active]:bg-white h-[24px] rounded-md py-0 font-roboto text-sm font-normal leading-4 data-[state=active]:text-grisHeading data-[state=active]:shadow-none"
                >
                  Resumen
                </TabsTrigger>
              </TabsList>
              <Link to="/inventory/branch-points-sale/create">
              <Button
                type={"button"}
                className="flex h-[30px] items-center justify-center rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">
                  Nuevo
                </span>
              </Button>
            </Link>
            </div>
          </div>
          <TabsContent value="branches" className="rounded-md bg-blancoBg p-2">
            <Tabs
              defaultValue="branches-tap"
              className="h-full overflow-auto rounded-lg bg-blancoBg pt-2"
            >
              <TabsList className="mx-4 flex justify-start rounded-none border-b bg-inherit py-6">
                <TabsTrigger
                  className="rounded-none border-b-2 border-slate-300 px-4 py-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
                  value="branches-tap"
                >
                  SUCURSALES
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="branches-tap"
                className="mt-[-70px] w-full pt-2"
              >
                <BranchesTab />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="resume" className="rounded-md bg-blancoBg p-2">
            <h2>resumen</h2>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default newBranch;
