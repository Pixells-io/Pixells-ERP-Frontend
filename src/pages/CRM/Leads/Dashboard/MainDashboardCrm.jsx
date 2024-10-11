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
import {
  add,
  closeCircle,
  ellipsisHorizontalSharp,
  settingsOutline,
} from "ionicons/icons";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import InputForm from "@/components/InputForm/InputForm";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { functionCreateSaleProcessStage, getProcessInfoId } from "../../utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { createPusherClient } from "@/lib/pusher";

function MainDashboardCrm() {
  const { id } = useParams();
  const { data } = useLoaderData();

  const [processId, setProcessId] = useState(id);
  const [infoStages, setInfoStages] = useState(data);

  const [selectTypeFilter, setSelectTypeFilter] = useState("all");
  const [businessNameFilter, setBusinessNameFilter] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState("");

  useEffect(() => {
    setProcessId(id);
    async function getSteps() {
      let newData = await getProcessInfoId(id);
      setInfoStages(newData.data);
    }

    getSteps();
  }, [id]);

  //WEBSOCKETS
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe(`private-get-sales-process-stages.${id}`);

    pusherClient.bind("fill-sales-process-stages", ({ process }) => {
      console.log("2");
      getProcessFill();
    });

    //Function Sync Info
    async function getProcessFill() {
      console.log("3");
      let newData = await getProcessInfoId(id);
      setInfoStages(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-sales-process-stages.${id}`);
    };
  });

  return (
    <div className="flex w-full flex-col gap-y-2 overflow-auto">
      {/* filtrado */}
      <div className="flex gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="flex h-6 w-16 cursor-pointer items-center justify-center rounded-3xl border border-grisDisabled bg-inherit text-[10px] font-medium text-grisSubText"
          >
            <div>Date</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[300px] w-full overflow-auto">
            <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectTypeFilter}
              onValueChange={(event) => {
                setInputNameFilter(event);
              }}
            >
              <DropdownMenuRadioItem value="">
                Clear filter
              </DropdownMenuRadioItem>
              {businessNameFilter?.map((businessNameF, i) => (
                <DropdownMenuRadioItem key={i} value={businessNameF.name}>
                  {businessNameF.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        {inputNameFilter !== "" && (
          <Button
            className="relative h-6 w-16 bg-[#E8E8E8] text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
            onClick={() => {
              setInputNameFilter("");
            }}
          >
            {inputNameFilter}
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-blue-400 p-0 text-blue-400">
              <IonIcon icon={close} size="large"></IonIcon>
            </span>
          </Button>
        )}

        <div className="ml-8 flex items-center gap-2">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={true}
            onCheckedChange={(value) => {}}
          />
          <label className="text-[10px] font-normal text-grisText">
            Mostrar leads que asigné a otro usuario
          </label>
        </div>
      </div>
      {/*  */}
      <div className="flex h-screen w-full gap-4 overflow-auto">
        {infoStages.map((stage, i) => (
          <div
            className={`h-full w-60 flex-shrink-0 rounded-xl px-2 py-4`}
            key={i}
            style={
              stage.color != null
                ? { backgroundColor: `${stage.color}0D` }
                : { backgroundColor: "#00A9B315" }
            } // 5% de opacidad
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-lg px-2 py-1 font-roboto text-xs font-normal`}
                style={
                  stage.color != null
                    ? { backgroundColor: `${stage.color}4D` }
                    : { backgroundColor: "#00A9B340" }
                } // 30% de opacidad
              >
                {stage.name}
              </span>
              <IonIcon
                icon={ellipsisHorizontalSharp}
                className="rounded-md border border-blancoBox bg-white px-2 py-1 text-sm text-grisText drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)]"
              ></IonIcon>
            </div>
            {stage.data?.map((lead, index) => (
              <div
                className="group relative my-4 rounded-lg bg-white px-2 py-2"
                key={index}
              >
                <span
                  className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                  title={"Nombre"}
                >
                  {lead.name}
                </span>
                <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                  <div className="flex h-[22px] items-center">
                    <IonIcon
                      icon={settingsOutline}
                      className="h-full cursor-pointer border-r px-1.5"
                    ></IonIcon>
                    <IonIcon
                      icon={ellipsisHorizontalSharp}
                      className="h-full cursor-pointer px-1.5"
                    ></IonIcon>
                  </div>
                </div>

                <div className="mb-2 mt-2 flex gap-2">
                  {lead.status == 1 ? (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                      Activo
                    </span>
                  ) : lead.stages == 2 ? (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                      Suspendido
                    </span>
                  ) : lead.status == 3 ? (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                      Cancelado
                    </span>
                  ) : lead.status == 4 ? (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                      Completado
                    </span>
                  ) : (
                    false
                  )}
                  {lead.type == 1 ? (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                      Persona Fisica
                    </span>
                  ) : (
                    <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                      Persona Moral
                    </span>
                  )}
                </div>
                <span className="font-normal- font-roboto text-xs text-grisHeading">
                  Informacion de Actividades Prueba de largo lo
                </span>
                <div className="grid grid-cols-12">
                  <div className="col-span-5 flex items-end gap-x-2">
                    <Progress
                      value={80}
                      className="mb-[5px] h-[4px] bg-[#D7D7D7]"
                      color="bg-[#5B84FF]"
                    />
                    <span className="h-fit text-[10px] font-medium text-[#696974B2]">
                      80%
                    </span>
                  </div>
                  <div className="col-span-7 flex justify-end">
                    <Avatar className="size-6">
                      <AvatarImage
                        src={lead.assigned?.img}
                        title={lead.assigned?.name}
                      />
                    </Avatar>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex">
              <Button variant="ghost" className="rounded-lg hover:bg-[#F0F0F0]">
                <IonIcon
                  icon={add}
                  size={32}
                  className="text-3xl text-grisHeading"
                ></IonIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="overflow-auto px-3 pb-6">
              <DropdownMenuLabel>Crear Etapa</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="flex flex-col gap-2">
                <Form
                  action={`/crm/dashboard/${id}`}
                  method="post"
                  className="flex h-full flex-col gap-2"
                >
                  <input
                    type="hidden"
                    value="create-process-stage"
                    name="action"
                  />
                  <input type="hidden" value={id} name="sale_process_id" />
                  <div className="px-4 pt-4">
                    <InputForm placeholder={"Nombre"} name={"name"} />
                    <InputForm
                      placeholder={"Descripcion"}
                      name={"description"}
                    />
                    <InputForm
                      placeholder={"Color"}
                      name={"color"}
                      type={"color"}
                    />
                  </div>
                  <div className="flex self-end px-4 pt-4">
                    <Button
                      type="submit"
                      className="w-fit bg-primarioBotones px-6"
                    >
                      Agregar
                    </Button>
                  </div>
                </Form>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
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
