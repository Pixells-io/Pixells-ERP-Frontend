import React, { useState, useEffect } from "react";
import {
  NavLink,
  redirect,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";

import { addCircleOutline, searchOutline } from "ionicons/icons";
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

import {
  deletePosition,
  deleteUser,
  destroyArea,
  editArea,
  importOrganization,
  saveNewArea,
} from "../utils";

import UsersTable from "./Tables/Users";
import PositionsTable from "./Tables/Positions";
import AreasTable from "./Tables/Areas";
import FormCreateArea from "./FormCreateArea";
import FormImport from "./FormImport";
import NavigationHeader from "@/components/navigation-header";

import { useToast } from "@/components/ui/use-toast";

function MainOrganization() {
  const { users, positions, areas, counter, permission } = useLoaderData();
  const { actionInfo } = useOutletContext();
  const { toast } = useToast();

  useEffect(() => {
    if (actionInfo?.code == 201) {
      toast({
        title: actionInfo?.message,
      });
    }
  }, [actionInfo]);

  //MODAL STATES
  const [modal, setModal] = useState(false);
  const [modalImport, setModalImport] = useState(false);

  //PERMISSIONS
  const [edit, setEdit] = useState(true); //2
  const [create, setCreate] = useState(true); //3
  const [destroy, setDestroy] = useState(true); //4

  //CHANGE PERMISSIONS
  useEffect(() => {
    const editQuery = permission.data.filter(
      (item) => item.permision_capability == "2",
    );

    if (editQuery.length == 0) {
      setEdit(false);
    }

    const createQuery = permission.data.filter(
      (item) => item.permision_capability == "3",
    );

    if (createQuery.length == 0) {
      setCreate(false);
    }

    const destroyQuery = permission.data.filter(
      (item) => item.permision_capability == "4",
    );

    if (destroyQuery.length == 0) {
      setDestroy(false);
    }
  });

  return (
    <div className="flex w-full">
      <FormCreateArea modal={modal} setModal={setModal} />
      <FormImport modal={modalImport} setModal={setModalImport} />
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

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
        {create == true ? (
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
                    Positions
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink className="w-full" to={"/organization/create-user"}>
                    Users
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
        ) : (
          false
        )}
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
                <UsersTable users={users?.data} edit={edit} />
              </TabsContent>
              <TabsContent value="positions">
                <PositionsTable positions={positions?.data} edit={edit} />
              </TabsContent>
              <TabsContent value="areas">
                <AreasTable areas={areas?.data} edit={edit} destroy={destroy} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainOrganization;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-area":
      await saveNewArea(data);
      redirect("/organization");

    case "edit-area":
      await editArea(data);
      redirect("/organization");

    case "destroy-area":
      await destroyArea(data);
      redirect("/organization");

    case "import-org":
      await importOrganization(data);
      redirect("/organization");

    case "delete-user":
      await deleteUser(data);
      redirect("/organization");

    case "delete-position":
      await deletePosition(data);
      redirect("/organization");
  }

  return redirect("/organization");
}
