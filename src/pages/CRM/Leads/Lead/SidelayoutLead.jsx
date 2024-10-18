import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  Outlet,
  useSubmit,
  useParams,
  redirect,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import { IonIcon } from "@ionic/react";
import { create } from "ionicons/icons";

import TopMenuCRM from "@/layouts/CRM/components/TopMenuCRM";
import EditLeadInformation from "./Modals/EditLeadInformation";
import {
  editLead,
  functionCreateSaleProcessStage,
  functionDestroySaleProcessStage,
  functionEditSaleProcessStage,
  getOneLeadId,
  modalConvertClient,
  saveLeadActivity,
  saveLeadComments,
} from "../../utils";
import { createPusherClient } from "@/lib/pusher";

function SidelayoutLead() {
  const params = useParams();
  const submit = useSubmit();
  const { data } = useLoaderData();

  const [lead, setLead] = useState(data);
  const [modalEdit, setModalEdit] = useState(false);

  function changeLeadStatus(e, type) {
    submit(
      { status: type, lead_id: params.id, action: "edit-status" },
      { method: "post", action: `/crm/leads/${params.id}` },
    );
  }

  //WEBSOCKETS
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe(`private-get-lead.${lead.id}`);

    pusherClient.bind("fill-lead", ({ lead }) => {
      getLeadData();
    });

    //Function Sync Info
    async function getLeadData(process) {
      let newData = await getOneLeadId(lead.id);
      setLead(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-lead.${lead.id}`);
    };
  }, []);

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <EditLeadInformation
        modal={modalEdit}
        setModal={setModalEdit}
        lead={lead}
      />
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* Top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-[14px] py-4">
          <TopMenuCRM />
        </div>

        {/* Bottom block */}
        <div className="flex h-full flex-col gap-4 overflow-auto rounded-md bg-gris px-[14px] py-4">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            Informacion General
          </p>

          <div className="flex justify-between rounded-lg bg-blancoBox2 px-7 py-4">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-[15px] font-medium text-grisText">
                  Nombre del Negocio
                </p>
                <span className="text-xs text-grisSubText">
                  {lead?.business_name}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Nombre del Contacto
                </p>
                <span className="text-xs text-grisSubText">
                  {lead?.contact_name} {lead?.contact_middle_name}{" "}
                  {lead?.contact_last_name}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Telefono del Contacto
                </p>
                <span className="text-xs text-grisSubText">
                  {lead?.contact_phone} <br />
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Telefono del Negocio
                </p>
                <span className="text-xs text-grisSubText">
                  {lead?.business_phone} <br />
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">Email</p>
                <span className="text-xs text-grisSubText">
                  {lead?.contact_email}
                </span>
              </div>
            </div>
            <div className="text-grisText">
              <IonIcon
                icon={create}
                size=""
                onClick={() => setModalEdit(true)}
              ></IonIcon>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-[10px]">
            <div className="flex flex-col gap-2">
              <span className="font-roboto text-base font-medium text-grisText">
                Servicios
              </span>
              <div className="mb-4 flex gap-4 overflow-scroll">
                {lead?.services.map((service, i) => (
                  <button
                    key={i}
                    className="my-4 line-clamp-1 flex-shrink-0 rounded-3xl bg-primario px-2 py-1 text-xs text-white"
                    title={service.name}
                    type="button"
                  >
                    {service.name}
                  </button>
                ))}
              </div>
              <span className="font-roboto text-base font-medium text-grisText">
                Productos
              </span>
              <div className="mb-4 flex gap-4 overflow-scroll">
                {lead?.products.map((product, i) => (
                  <button
                    key={i}
                    className="my-4 line-clamp-1 flex-shrink-0 rounded-3xl bg-primario px-2 py-1 text-xs text-white"
                    title={product.name}
                    type="button"
                  >
                    {product.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                  <img src={lead?.assigned?.img} className="rounded-md" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-grisText">
                    Agente
                  </p>
                  <span className="text-xs text-grisSubText">
                    {lead?.assigned?.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <p className="font-poppins text-lg font-semibold text-grisHeading">
                  Estado
                </p>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-fit">
                    {lead?.status == "1" ? (
                      <Badge className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario hover:bg-blue-200">
                        Activo
                      </Badge>
                    ) : lead?.status == "2" ? (
                      <Badge className="rounded-2xl bg-yellow-200 px-2 py-1 text-xs text-yellow-600 hover:bg-yellow-300">
                        Suspendido
                      </Badge>
                    ) : lead?.status == "3" ? (
                      <Badge className="rounded-2xl bg-red-200 px-2 py-1 text-xs text-red-600 hover:bg-red-300">
                        Cancelado
                      </Badge>
                    ) : (
                      <Badge className="rounded-2xl bg-green-200 px-2 py-1 text-xs text-green-600 hover:bg-green-300">
                        Completo
                      </Badge>
                    )}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={(e) => changeLeadStatus(e, "1")}>
                      Activo
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => changeLeadStatus(e, "2")}>
                      Suspendido
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => changeLeadStatus(e, "3")}>
                      Cancelado
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={(e) => changeLeadStatus(e, "4")}>
                      Completo
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[lead]} />
    </div>
  );
}

export default SidelayoutLead;

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "edit-lead":
      await editLead(data);
      return redirect(`/crm/leads/${params.id}`);
      break;

    case "edit-status":
      await editLead(data);
      return redirect(`/crm/leads/${params.id}`);
      break;

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

    case "create-comment":
      await saveLeadComments(data);
      return "201";
      break;
  }
}
