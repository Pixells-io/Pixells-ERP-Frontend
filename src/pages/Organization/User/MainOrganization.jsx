import React, { useState, useEffect } from "react";
import {
  NavLink,
  redirect,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";

import { add, searchOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";
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

  function WrappedMain({ children }) {
    return (
      <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 bg-[#FBFBFB] px-14 py-3">
        {children}
      </div>
    );
  }

  return (
    <WrappedMain>
      <FormCreateArea modal={modal} setModal={setModal} />
      <FormImport modal={modalImport} setModal={setModalImport} />
      {/* navigation inside */}
      <NavigationHeader />

      {/* top content */}
      <div className="flex items-center gap-16">
        <h2 className="font-poppins font-bold text-[#44444F]">
         ORGANIZACIÓN
        </h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">{counter.data["users"]} usuarios</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["positions"]} posiciones</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["areas"]} areas</div>
        </div>
      </div>
      <div>
      <span className="font-poppins font-bold text-[20px] text-[#44444F]">
          Gestión de Usuarios
        </span>
      </div>
      {/*button create reg*/}
      {create == true ? (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type={"button"}
                className="flex h-[30px] items-center justify-center gap-1 rounded-xl bg-primarioBotones px-3 hover:bg-primarioBotones"
              >
                <IonIcon icon={add} className="h-4 w-4" />
                <span className="text-xs font-medium">Nuevo</span>
              </Button>
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
                  Posiciones
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink className="w-full" to={"/organization/create-user"}>
                  Usuarios
                </NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="w-full hover:cursor-pointer"
                onClick={() => setModalImport(true)}
              >
                Importar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        false
      )}
      {/*component accion*/}
      <div className="h-full overflow-auto rounded-xl bg-[#FBFBFB] p-7">
        <div className="flex">
          <Tabs defaultValue="users" className="bg-[#FBFBFB] h-full w-full overflow-auto">
            <TabsList className="mb-3 w-full bg-[#FBFBFB] ">
              <div className="flex w-full">
                <div className="w-4/5">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="users"
                  >
                    USUARIOS
                  </TabsTrigger>
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="positions"
                  >
                    POSICIONES
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
                      placeholder="BUSCAR EMAILS"
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
    </WrappedMain>
  );
}
export default MainOrganization;

export async function action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-area":
      await saveNewArea(data);
      return redirect("/organization");
      break;

    case "edit-area":
      await editArea(data);
      return redirect("/organization");
      break;

    case "destroy-area":
      await destroyArea(data);
      return redirect("/organization");
      break;

    case "import-org":
      await importOrganization(data);
      return redirect("/organization");
      break;

    case "delete-user":
      await deleteUser(data);
      return redirect("/organization");
      break;

    case "delete-position":
      await deletePosition(data);
      return redirect("/organization");
      break;
  }

  return redirect("/organization");
}
