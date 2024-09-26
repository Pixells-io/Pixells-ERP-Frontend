import React, { useState } from "react";
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
import { editLeadForm, editStatusLead } from "../utils";

function SidelayoutLead() {
  const params = useParams();
  const submit = useSubmit();
  const { leadLoader, servicesLoader } = useLoaderData();

  const {
    data: lead,
    services,
    follow_ups,
    user_assigned,
    extra_information: info,
    main_lead,
    closing,
    pay,
    onBoarding,
  } = leadLoader;

  const [modalEdit, setModalEdit] = useState(false);

  function Capitalize(string) {
    if (string == undefined) return "";
    return (string = string[0]?.toUpperCase() + string?.slice(1));
  }

  function changeLeadStatus(e, type) {
    submit(
      { status: type, lead_id: params.id, action: "edit-status" },
      { method: "post", action: `/crm/leads/${params.id}` },
    );
  }

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <EditLeadInformation
        modal={modalEdit}
        setModal={setModalEdit}
        info={info}
        lead={lead}
        serviceSelected={services}
        services={servicesLoader}
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

          <div className="flex justify-between rounded-lg bg-blancoBox px-7 py-4">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-[15px] font-medium text-grisText">
                  Nombre del Negocio
                </p>
                <span className="text-xs text-grisSubText">
                  {Capitalize(info?.business_name)}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Nombre del Contacto
                </p>
                <span className="text-xs text-grisSubText">
                  {Capitalize(info?.contact_name)}{" "}
                  {Capitalize(info?.contact_middle_name)}{" "}
                  {Capitalize(info?.contact_last_name)}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">Celular</p>
                <span className="text-xs text-grisSubText">
                  {info?.contact_phone} <br />
                  {info?.business_phone}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">Email</p>
                <span className="text-xs text-grisSubText">
                  {info?.contact_email}
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
              <p className="font-poppins text-lg font-semibold text-grisHeading">
                Metodo de Contacto
              </p>

              <p className="text-base font-medium text-grisText">
                Servicio de Interes
              </p>

              <div className="flex gap-2 overflow-auto">
                {services?.map((service, i) => (
                  <Badge
                    key={i}
                    className="shrink-0 bg-primario py-[6px] text-[10px] text-blancoBox"
                  >
                    {service?.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                  <img
                    src={user_assigned?.user_image}
                    className="rounded-md"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-grisText">
                    Agente
                  </p>
                  <span className="text-xs text-grisSubText">
                    {user_assigned?.name} {user_assigned?.last_name}
                  </span>
                </div>
              </div>
              {/* 
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox text-grisText">
                  <div className="flex">
                    <IonIcon icon={person} className="h-8 w-8"></IonIcon>
                  </div>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-grisText">
                    {follow_ups[0]?.way_of_contact}
                  </p>
                  <span className="text-xs text-grisSubText">
                    Contact Method
                  </span>
                </div>
              </div> 
              */}
              <div className="flex flex-col gap-2 pt-2">
                <p className="font-poppins text-lg font-semibold text-grisHeading">
                  Estado
                </p>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-fit">
                    {main_lead?.active == "1" ? (
                      <Badge className="w-fit bg-[#00A259]">Activo</Badge>
                    ) : main_lead?.active == "2" ? (
                      <Badge className="w-fit bg-[#FAA364]">Suspendido</Badge>
                    ) : main_lead?.active == "3" ? (
                      <Badge className="w-fit bg-[#D7586B]">Cancelado</Badge>
                    ) : (
                      <Badge className="w-fit bg-primario">Completo</Badge>
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
      <Outlet
        context={[
          lead,
          services,
          info,
          follow_ups,
          main_lead,
          closing,
          pay,
          onBoarding,
        ]}
      />
    </div>
  );
}

export default SidelayoutLead;

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "edit-lead":
      const response1 = await editLeadForm(data);
      console.log(response1);
      return redirect(`/crm/leads/${response1.data}`);
      break;

    case "edit-status":
      const response2 = await editStatusLead(data);
      return redirect(`/crm/leads/${response2.data}`);
      break;
  }
}
