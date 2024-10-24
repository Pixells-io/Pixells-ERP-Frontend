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
        <h2 className="font-poppins font-bold text-[#44444F]">ORGANIZACIÓN</h2>
        <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
          <div className="text-xs">{counter.data["users"]} usuarios</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["positions"]} posiciones</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">{counter.data["areas"]} areas</div>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="font-poppins text-[20px] font-bold text-[#44444F]">
          Gestión de Usuarios
        </span>
     
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
       </div>
      {/*component accion*/}
     
        <Tabs
          defaultValue="users"
          className="h-full overflow-auto bg-[#FBFBFB] pt-2"
        >
          <TabsList className="ml-6 flex justify-start rounded-none gap-6 border-b bg-blancoBox bg-inherit p-0 py-6">
            <TabsTrigger
              className="mb-[-12px] rounded-none border-[#44444F] border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="users"
            >
              USUARIOS
            </TabsTrigger>
            <TabsTrigger
              className="mb-[-12px] rounded-none border-[#44444F] border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="positions"
            >
              POSICIONES
            </TabsTrigger>
            <TabsTrigger
              className="mb-[-12px] rounded-none border-[#44444F] border-transparent pl-0 pr-0 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-b-[#44444F] data-[state=active]:bg-inherit data-[state=active]:font-medium data-[state=active]:text-[#44444F] data-[state=active]:shadow-none"
              value="areas"
            >
              AREAS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="users" className="mx-3 mt-[-60px]">
            <UsersTable users={users?.data} edit={edit} />
          </TabsContent>
          <TabsContent value="positions" className="mx-3 mt-[-60px]">
            <PositionsTable positions={positions?.data} edit={edit} />
          </TabsContent>
          <TabsContent value="areas" className="mx-3 mt-[-60px]">
            <AreasTable areas={areas?.data} edit={edit} destroy={destroy} />
          </TabsContent>
        </Tabs>
    
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
