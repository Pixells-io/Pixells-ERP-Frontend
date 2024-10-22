import React, { useEffect, useState } from "react";
import { Form, useNavigate, useOutletContext } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { ellipseSharp, ellipsisHorizontalSharp } from "ionicons/icons";
import NavigationHeader from "@/components/navigation-header";
import CardFollowUp from "./CardFollowUp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModalConvertClient from "../Dashboard/Modal/ModalConvertClient";
import ModalEditLead from "../Dashboard/Modal/ModalEditLead";
import ModalChangeAssignedLead from "../Dashboard/Modal/ModalChangeAssignedLead";
import ModalCreateActivity from "../Dashboard/Modal/ModalCreateActivity";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { createPusherClient } from "@/lib/pusher";
import { getOneLeadId } from "../../utils";

function MainLead() {
  const [lead] = useOutletContext();
  const [mainLeadData, setMainLeadData] = useState(lead);

  const [modalActivity, setModalActivity] = useState(false);
  const [modalConvertClient, setModalConvertClient] = useState(false);
  const [modalChangeAssigned, setModalChangeAssigned] = useState(false);
  const [leadInfo, setLead] = useState(false);
  const [leadId, setLeadId] = useState(false);
  const [leadName, setLeadName] = useState(false);
  const [typeActivity, setTypeActivity] = useState(false);
  const [activityName, setActivityName] = useState(false);

  const navigate = useNavigate();

  //WEBSOCKET
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe(`private-get-lead.${mainLeadData.id}`);

    pusherClient.bind("fill-lead", ({ lead }) => {
      getLeadData();
    });

    //Function Sync Info
    async function getLeadData(process) {
      let newData = await getOneLeadId(mainLeadData.id);
      setMainLeadData(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-lead.${mainLeadData.id}`);
    };
  }, []);

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

  return (
    <div className="flex w-full">
      <ModalCreateActivity
        modal={modalActivity}
        setModal={setModalActivity}
        lead_id={leadId}
        type={typeActivity}
        activity_name={activityName}
        services={mainLeadData.services_bulk}
        products={mainLeadData.products_bulk}
        url={"/crm/leads/"}
      />
      <ModalConvertClient
        modal={modalConvertClient}
        setModal={setModalConvertClient}
        lead_id={leadId}
        lead_name={leadName}
        url={"/crm/leads/"}
      />
      <ModalChangeAssignedLead
        modal={modalChangeAssigned}
        setModal={setModalChangeAssigned}
        lead={leadInfo}
        users={mainLeadData.users_bulk}
        url={"/crm/leads/"}
      />
      <div className="ml-4y flex w-full flex-col space-y-4 bg-inherit border-l border-[#D7D7D7] px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              LEADS INFORMACION
            </h2>
          </div>
        </div>
        {/* icons line */}
        <div className="flex h-20 justify-center overflow-auto align-middle border-b border-[#D7D7D7]">
          <div className="flex w-10/12 overflow-auto">
            {mainLeadData.steps?.map((step, i) => (
              <div className="flex-shrink-0">
                {step.id > mainLeadData.process_sale_step ? (
                  <div className="flex flex-shrink-0 items-start justify-center gap-4">
                    <div className="items-start text-center">
                      <IonIcon
                        icon={ellipseSharp}
                        className="h-2 w-2 text-grisDisabled"
                      ></IonIcon>
                      <br />
                      <span
                        className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading"
                        title={step.name}
                      >
                        {step.name}
                      </span>
                    </div>
                    {i === mainLeadData.steps.length - 1 ? null : (
                      <div className="mt-3 w-[70px] border-t border-grisDisabled"></div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-start justify-center gap-4">
                    <div className="items-start text-center">
                      <IonIcon
                        icon={ellipseSharp}
                        className="h-2 w-2 text-grisHeading"
                      ></IonIcon>
                      <br />
                      <span
                        className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading"
                        title={step.name}
                      >
                        {step.name}
                      </span>
                    </div>
                    {i === mainLeadData.steps.length - 1 ? null : (
                      <div className="mt-3 w-[70px] border-t border-grisHeading"></div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* cards */}
        <div className="flex h-full justify-center gap-1 overflow-hidden align-middle">
          <div className="group relative h-full w-9/12 overflow-auto bg-inherit px-10">
            <div className="absolute sticky top-4 z-10 float-end w-fit rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  <IonIcon
                    icon={ellipsisHorizontalSharp}
                    className="px-1.5"
                  ></IonIcon>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 overflow-auto rounded-3xl px-0 pt-4 text-start">
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 1)}
                  >
                    Dimensionar Oportunidad
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 2)}
                  >
                    Enviar Correo
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 3)}
                  >
                    Programar Correo
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 4)}
                  >
                    Programar Mensaje
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 5)}
                  >
                    Agendar Actividad
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 6)}
                  >
                    Crear Cotizacion
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 7)}
                  >
                    Asociar Producto / Servicio
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                    onClick={() => openModalAction(mainLeadData.id, 8)}
                  >
                    Recordatorio Para Mover al Lead
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none border-t border-grisDisabled px-4 py-4 pl-6 text-start font-roboto text-xs font-semibold text-grisText hover:bg-[#F0F0F0]"
                    onClick={() =>
                      openModalAction(
                        mainLeadData.id,
                        9,
                        mainLeadData.business_name,
                      )
                    }
                  >
                    Convertir a Cliente
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {lead.action?.map((action, i) => (
              <CardFollowUp info={action} key={i} />
            ))}
          </div>
          <div className="w-3/12 bg-inherit border-l border-[#E8E8E8] px-6 py-4">
            {/*Comments Card */}
            <div className="h-5/6 overflow-auto">
              {mainLeadData.comments?.map((comment, i) => (
                <div className="border-b-[1px] border-[#D7D7D7] py-2">
                  <div className="line-clamp-1 flex items-center gap-2">
                    <Avatar className="size-6">
                      <AvatarImage src={comment?.img} title={comment?.name} />
                    </Avatar>
                    <span
                      className="font-roboto text-xs font-medium text-grisText"
                      title={comment.name}
                    >
                      {comment.name}&nbsp;&bull;
                    </span>
                    <span
                      className="font-roboto text-xs font-normal text-[#ABABAB]"
                      title={comment.diff}
                    >
                      Hace {comment.diff} días
                    </span>
                  </div>
                  <span className="font-roboto text-xs font-normal text-grisHeading">
                    {comment.comment}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid h-1/6 place-items-end px-2">
              <Form method="POST" action={`/crm/leads/${mainLeadData.id}`} className="w-full">
                <input type="hidden" name="action" value="create-comment" />
                <input type="hidden" name="lead_id" value={mainLeadData.id} />
                <div className="flex rounded-lg bg-grisBg px-2 py-2">
                  <input
                    type="text"
                    name="comment"
                    className="w-10/12 bg-transparent font-roboto text-xs text-[#8F8F8F] ring-0 focus:outline-none"
                    placeholder="Comentario"
                  />
                  <button
                    className="rounded-md bg-primarioBotones px-2 h-4 font-roboto text-[10px] text-white font-normal"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLead;
