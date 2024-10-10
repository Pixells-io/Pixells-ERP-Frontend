import React, { useEffect, useState } from "react";

import {
  NavLink,
  useLocation,
  Outlet,
  useLoaderData,
  Form,
  redirect,
  Link,
  useParams,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { add, closeCircle, ellipsisHorizontalSharp } from "ionicons/icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { functionCreateSaleProcessStage, getProcessInfoId } from "../../utils";

function MainDashboardCrm() {
  const { id } = useParams();
  const { data } = useLoaderData();

  const [processId, setProcessId] = useState(id);
  const [infoStages, setInfoStages] = useState(data);

  useEffect(() => {
    setProcessId(id);
    async function getSteps() {
      let newData = await getProcessInfoId(id);
      setInfoStages(newData.data);
    }

    getSteps();
  }, [id]);

  return (
    <div className="flex w-full overflow-auto">
      {infoStages.map((stage, i) => (
        <div className="w-60 rounded-md bg-[#00A9B315] px-2 py-4" key={i}>
          <div className="flex items-center justify-between">
            <span className="rounded-lg bg-[#00A9B330] px-2 py-1 font-roboto text-sm font-normal">
              {stage.name}
            </span>
            <IonIcon
              icon={ellipsisHorizontalSharp}
              className="rounded-lg bg-white px-2 text-2xl text-grisHeading"
            ></IonIcon>
          </div>
          {stage.data?.map((lead, index) => (
            <div className="my-4 rounded-lg bg-white px-2 py-2" key={index}>
              <span
                className="line-clamp-1 font-poppins text-base font-medium text-grisHeading"
                title={"Nombre"}
              >
                {lead.name}
              </span>
              <div className="mb-2 mt-2 flex gap-2">
                {lead.status == 1 ? (
                  <span className="flex items-center rounded-3xl bg-[#CBF4C9] px-2 text-xs text-[#0E6245]">
                    Activo
                  </span>
                ) : lead.stages == 2 ? (
                  <span className="flex items-center rounded-3xl bg-[#CBF4C9] px-2 text-xs text-[#0E6245]">
                    Suspendido
                  </span>
                ) : lead.status == 3 ? (
                  <span className="flex items-center rounded-3xl bg-[#CBF4C9] px-2 text-xs text-[#0E6245]">
                    Cancelado
                  </span>
                ) : lead.status == 4 ? (
                  <span className="flex items-center rounded-3xl bg-[#CBF4C9] px-2 text-xs text-[#0E6245]">
                    Finalizado
                  </span>
                ) : (
                  false
                )}
                <span className="flex items-center rounded-3xl bg-[#3EC5FF30] px-2 text-xs text-[#0D4381]">
                  {lead.type == 1 ? "Persona Fisica" : "Persona Moral"}
                </span>
              </div>
              <span className="font-normal- font-roboto text-sm text-grisHeading">
                Informacion de Actividades Prueba de largo
              </span>
              <div className="flex justify-between">
                <span>.</span>
                <Avatar className="size-6">
                  <AvatarImage
                    src={lead.assigned?.img}
                    title={lead.assigned?.name}
                  />
                </Avatar>
              </div>
            </div>
          ))}
        </div>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex">
          <Button variant="ghost">
            <IonIcon
              icon={add}
              size={32}
              className="text-3xl text-grisHeading"
            ></IonIcon>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-[-100px] overflow-auto px-3 pb-6">
          <DropdownMenuLabel>Crear Etapa</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex flex-col gap-2">
            <Form
              action={`/crm/dashboard/${id}`}
              method="post"
              className="flex h-full flex-col gap-2"
            >
              <input type="hidden" value="create-process-stage" name="action" />
              <input type="hidden" value={id} name="sale_process_id" />
              <div className="px-4 pt-4">
                <InputForm placeholder={"Nombre"} name={"name"} />
                <InputForm placeholder={"Descripcion"} name={"description"} />
                <InputForm
                  placeholder={"Color"}
                  name={"color"}
                  type={"color"}
                />
              </div>
              <div className="flex self-end px-4 pt-4">
                <Button type="submit" className="w-fit bg-primarioBotones px-6">
                  Agregar
                </Button>
              </div>
            </Form>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MainDashboardCrm;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "create-process-stage":
      await functionCreateSaleProcessStage(data);
      return "201";
      break;
  }
}
