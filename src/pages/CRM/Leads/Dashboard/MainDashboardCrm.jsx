import React, { useEffect, useState } from "react";

import {
  useLoaderData,
  Form,
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";

import { IonIcon } from "@ionic/react";
import { add, ellipsisHorizontalSharp, settingsOutline } from "ionicons/icons";

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
import {
  changeLeadStage,
  editLead,
  functionCreateSaleProcessStage,
  functionDestroySaleProcessStage,
  functionEditSaleProcessStage,
  getProcessInfoId,
  modalConvertClient,
  saveLeadActivity,
  saveLeadComments,
} from "../../utils";
import { Checkbox } from "@/components/ui/checkbox";
import { createPusherClient } from "@/lib/pusher";
import CommentsLead from "../components/CommentsLead";
import ModalCreateActivity from "./Modal/ModalCreateActivity";
import ModalConvertClient from "./Modal/ModalConvertClient";
import ModalEditLead from "./Modal/ModalEditLead";
import ModalChangeAssignedLead from "./Modal/ModalChangeAssignedLead";
import ModalEditStage from "./Modal/ModalEditStage";
import ModalDestroyStage from "./Modal/ModalDestroyStage";
import DropZoneForm from "@/components/DropZoneForm/DropZoneForm";

function MainDashboardCrm() {
  const { id } = useParams();
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const [processId, setProcessId] = useState(id);
  const [infoStages, setInfoStages] = useState(data.process);
  const [dragLeadId, setDragLeadId] = useState(0);
  const [dragLeadColumn, setDragLeadColumn] = useState(0);

  const [selectTypeFilter, setSelectTypeFilter] = useState("all");
  const [businessNameFilter, setBusinessNameFilter] = useState([]);
  const [inputNameFilter, setInputNameFilter] = useState("");

  const [modalActivity, setModalActivity] = useState(false);
  const [modalConvertClient, setModalConvertClient] = useState(false);
  const [modalEditLead, setModalEditLead] = useState(false);
  const [modalChangeAssigned, setModalChangeAssigned] = useState(false);
  const [lead, setLead] = useState(false);
  const [leadId, setLeadId] = useState(false);
  const [leadName, setLeadName] = useState(false);
  const [typeActivity, setTypeActivity] = useState(false);
  const [activityName, setActivityName] = useState(false);

  //Stages Status
  const [stageInfo, setStageInfo] = useState(false);
  const [stageModalEdit, setStageModalEdit] = useState(false);
  const [stageModalDestroy, setStageModalDestroy] = useState(false);

  //FUNCTIONS DRAG AND DROP

  const startDrag = (evt, item, column) => {
    setDragLeadId(item.id);
    setDragLeadColumn(column);
  };

  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    if (dragLeadColumn != list) {
      changeLeadStep(list, dragLeadId);
    }
  };

  async function changeLeadStep(process, lead) {
    await changeLeadStage(process, lead);
  }

  //REASIGN THE INFO
  useEffect(() => {
    setInfoStages(data.process);
  }, [data]);

  //WEBSOCKETS
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe(`private-get-sales-process-stages.${id}`);

    pusherClient.bind("fill-sales-process-stages", ({ process }) => {
      getProcessFill(process);
    });

    //Function Sync Info
    async function getProcessFill(process) {
      let newData = await getProcessInfoId(process);
      setInfoStages(newData.data.process);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-sales-process-stages.${id}`);
    };
  }, [id]);

  //Function open modal action
  function openModalAction(id, type, name) {
    switch (type) {
      case 1:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Dimensionar Oportunidad");
        break;
      case 2:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Enviar Correo");
        break;
      case 3:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Programar Correo");
        break;
      case 4:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Programar Mensaje");
        break;
      case 5:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Agendar Actividad");
        break;
      case 6:
        navigate("/sales/quotes");
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Crear Cotizacion");
        break;
      case 7:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Asociar Producto / Servicio");
        break;
      case 8:
        setModalActivity(true);
        setLeadId(id);
        setTypeActivity(type);
        setActivityName("Recordatorio para Mover al Lead");
        break;
      case 9:
        setModalConvertClient(true);
        setLeadId(id);
        setLeadName(name);
        setActivityName("Convertir a Cliente");
        break;
    }
  }

  function openModalEdit(lead) {
    setLead(lead);
    setModalEditLead(true);
  }

  function openModalChangeAssigned(lead) {
    setLead(lead);
    setModalChangeAssigned(true);
  }

  function openModalEditStage(stage) {
    setStageInfo(stage);
    setStageModalEdit(true);
  }

  function openModalDestroyStage(stage) {
    setStageInfo(stage);
    setStageModalDestroy(true);
  }

  return (
    <div className="flex w-full flex-1 flex-col gap-y-2 overflow-auto">
      {/* filtrado */}
      <ModalCreateActivity
        modal={modalActivity}
        setModal={setModalActivity}
        lead_id={leadId}
        type={typeActivity}
        activity_name={activityName}
        services={data.services}
        products={data.products}
        url={"/crm/dashboard/"}
      />
      <ModalConvertClient
        modal={modalConvertClient}
        setModal={setModalConvertClient}
        lead_id={leadId}
        lead_name={leadName}
        url={"/crm/dashboard/"}
      />
      <ModalEditLead
        modal={modalEditLead}
        setModal={setModalEditLead}
        lead={lead}
      />
      <ModalChangeAssignedLead
        modal={modalChangeAssigned}
        setModal={setModalChangeAssigned}
        lead={lead}
        users={data.users}
        url={"/crm/dashboard/"}
      />
      <ModalEditStage
        modal={stageModalEdit}
        setModal={setStageModalEdit}
        stage={stageInfo}
      />
      <ModalDestroyStage
        modal={stageModalDestroy}
        setModal={setStageModalDestroy}
        stage={stageInfo}
      />
      <div className="flex gap-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="flex h-6 w-16 cursor-pointer items-center justify-center rounded-3xl border border-grisDisabled bg-inherit text-[10px] font-medium text-grisSubText"
          >
            <div>Fecha</div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[300px] w-full overflow-auto">
            <DropdownMenuLabel>Filtrar</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={selectTypeFilter}
              onValueChange={(event) => {
                setInputNameFilter(event);
              }}
            >
              <DropdownMenuRadioItem value="">
                Borra Filtro
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
      {/* contenido */}
      <div className="flex h-full w-full gap-4 overflow-auto">
        <div className="flex flex-col gap-x-4">
          {/* headers */}
          <div className="flex w-full gap-4">
            {infoStages.map((stage, i) => (
              <div
                className={`h-fit w-60 flex-shrink-0 rounded-t-xl ${stage.data.length == 0 && "rounded-xl"} px-2 py-4 group`}
                key={i}
                style={
                  stage.color != null
                    ? { backgroundColor: `${stage.color}0D` }
                    : { backgroundColor: "#00A9B315" }
                } // 5% de opacidad
                onDragOver={(evt) => draggingOver(evt)}
                onDrop={(evt) => onDrop(evt, stage.id)}
              >
                <div className="w-full flex items-center justify-between relative">
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
                  <span className="text-sm font-semibold	text-black px-4">{stage.data.length}</span>
                  <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex">
                        <IonIcon
                          icon={ellipsisHorizontalSharp}
                          className="rounded-md border border-blancoBox bg-white px-2 py-1 text-sm text-grisText drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)]"
                        ></IonIcon>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-52 overflow-auto rounded-3xl px-0 pb-4 pt-4 text-start">
                        <button
                          type="button"
                          className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                          onClick={() => openModalEditStage(stage)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                          onClick={() => openModalDestroyStage(stage)}
                        >
                          Eliminar
                        </button>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex">
                  <Button
                    variant="ghost"
                    className="rounded-lg hover:bg-[#F0F0F0]"
                  >
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
          {/* content */}
          <div className="flex w-full gap-4 overflow-auto">
            {infoStages.map((stage, i) => (
              <div
                className={`h-fit w-60 flex-shrink-0 overflow-auto px-2 ${stage.data.length > 0 && "rounded-b-xl pb-4"}`}
                key={i}
                style={
                  stage.color != null
                    ? { backgroundColor: `${stage.color}0D` }
                    : { backgroundColor: "#00A9B315" }
                } // 5% de opacidad
                onDragOver={(evt) => draggingOver(evt)}
                onDrop={(evt) => onDrop(evt, stage.id)}
              >
                {stage.data?.map((lead, index) => (
                  <div
                    className="group relative my-4 rounded-lg bg-white px-2 py-2"
                    key={index}
                    onDragStart={(evt) => startDrag(evt, lead, stage.id)}
                    draggable="true"
                  >
                    <Link
                      to={`/crm/leads/${lead.id}`}
                      className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
                      title={"Nombre"}
                    >
                      {lead.name}
                    </Link>
                    <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                      <div className="flex h-[22px] items-center">
                        <div className="flex items-center justify-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <div className="flex items-center justify-center">
                                <IonIcon
                                  icon={settingsOutline}
                                  className="px-1.5"
                                ></IonIcon>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-52 overflow-auto rounded-3xl px-0 pb-4 pt-4 text-start">
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalChangeAssigned(lead)}
                              >
                                Asignar a otro usuario
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalEdit(lead)}
                              >
                                Editar
                              </button>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <div className="flex h-full items-center justify-center border-l">
                          <DropdownMenu>
                            <DropdownMenuTrigger>
                              <div className="flex items-center justify-center">
                                <IonIcon
                                  icon={ellipsisHorizontalSharp}
                                  className="px-1.5"
                                ></IonIcon>
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-52 overflow-auto rounded-3xl px-0 pt-4 text-start">
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 1)}
                              >
                                Dimensionar Oportunidad
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 2)}
                              >
                                Enviar Correo
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 3)}
                              >
                                Programar Correo
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 4)}
                              >
                                Programar Mensaje
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 5)}
                              >
                                Agendar Actividad
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 6)}
                              >
                                Crear Cotizacion
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 7)}
                              >
                                Asociar Producto / Servicio
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                                onClick={() => openModalAction(lead.id, 8)}
                              >
                                Recordatorio Para Mover al Lead
                              </button>
                              <button
                                type="button"
                                className="w-full rounded-none border-t border-grisDisabled px-4 py-4 pl-6 text-start font-roboto text-xs font-semibold text-grisText hover:bg-[#F0F0F0]"
                                onClick={() =>
                                  openModalAction(lead.id, 9, lead.name)
                                }
                              >
                                Convertir a Cliente
                              </button>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
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
                    <p className="mt-4 font-roboto text-xs font-normal text-grisHeading">
                      Informacion de Actividades Prueba de largo lo
                    </p>
                    <div className="grid grid-cols-12">
                      <div className="col-span-5 flex items-end gap-x-2">
                        <span
                          className="flex h-[18px] items-center rounded-full bg-[#FFC7C7] px-2 py-2 text-[10px] font-normal text-[#620E0E]"
                          title="Dias desde la creacion"
                        >
                          {lead?.created}
                        </span>
                        <span
                          className="flex h-[18px] items-center rounded-full bg-[#FFEDC7] px-2 py-2 text-[10px] font-normal text-[#624E0E]"
                          title="Dias desde la ultima edicion"
                        >
                          {lead?.edited}
                        </span>
                      </div>
                      <div className="col-span-7 flex items-center justify-end gap-3">
                        {/* <CommentsLead
                            leadId={lead?.id}
                            comments={lead?.comments}
                            process={id}
                          /> */}
                        <DropZoneForm />
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
          </div>
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
    case "edit-stage":
      await functionEditSaleProcessStage(data);
      return "201";
      break;
    case "destroy-stage":
      await functionDestroySaleProcessStage(data);
      return "201";
      break;
    case "add-comment-lead":
      await saveLeadComments(data);
      return "201";
      break;
    case "action-lead":
      await saveLeadActivity(data);
      return "201";
      break;
    case "convert-client":
      await modalConvertClient(data);
      return "201";
      break;
    case "edit-lead":
      await editLead(data);
      return "201";
      break;
  }
}
