import React, { useState, useEffect } from "react";
import { NavLink, redirect, useLoaderData } from "react-router-dom";
import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  searchOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { editArea, importOrganization, saveNewArea } from "../utils";
import UsersTable from "./Tables/Users";
import PositionsTable from "./Tables/Positions";
import AreasTable from "./Tables/Areas";
import FormCreateArea from "./FormCreateArea";
import FormImport from "./FormImport";

function MainOrganization() {
  const [modal, setModal] = useState(false);
  const [modalImport, setModalImport] = useState(false);

  const { users, positions, areas, counter } = useLoaderData();

  return (
    <div className="flex w-full">
      <FormCreateArea modal={modal} setModal={setModal} />
      <FormImport modal={modalImport} setModal={setModalImport} />
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
          <div className="font-roboto text-sm text-grisText">organization</div>
        </div>
        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              USER MANAGEMENT
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            <div className="text-xs">{counter.data["users"]} users</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">{counter.data["positions"]} positions</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">{counter.data["areas"]} areas</div>
          </div>
        </div>
        {/*button create reg*/}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <IonIcon
                icon={addCircleOutline}
                size="large"
                className="text-blue-500"
              ></IonIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="w-full hover:cursor-pointer"
                onClick={() => setModal(true)}
              >
                Areas
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink
                  className="w-full"
                  to={"/organization/create-position"}
                >
                  Position
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink className="w-full" to={"/organization/create-user"}>
                  User
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full hover:cursor-pointer"
                onClick={() => setModalImport(true)}
              >
                Import
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/*component accion*/}
        <div className="h-full overflow-auto rounded-xl bg-white p-7">
          <div className="flex">
            <Tabs defaultValue="users" className="h-full w-full overflow-auto">
              <TabsList className="mb-3 w-full bg-transparent">
                <div className="flex w-full">
                  <div className="w-4/5">
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="users"
                    >
                      USERS
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="positions"
                    >
                      POSITIONS
                    </TabsTrigger>
                    <TabsTrigger
                      className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                      value="areas"
                    >
                      AREAS
                    </TabsTrigger>
                  </div>
                  <div className="flex w-1/5 pt-1">
                    <div className="flex h-10 items-center rounded-3xl border-[1px] border-[#44444F] px-4 text-[10px]">
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
              <TabsContent value="users">
                <UsersTable users={users?.data} />
              </TabsContent>
              <TabsContent value="positions">
                <PositionsTable positions={positions?.data} />
              </TabsContent>
              <TabsContent value="areas">
                <AreasTable areas={areas?.data} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainOrganization;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type")) {
    case "1":
      await saveNewArea(data);
      break;
    case "2":
      await editArea(data);
      break;
    case "4":
      await importOrganization(data);
      break;
  }

  return redirect("/organization");
}
