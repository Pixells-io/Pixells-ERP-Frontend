import React from "react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { IonIcon } from "@ionic/react";
import { call, chatbubbleEllipses, mailOpen } from "ionicons/icons";
import { format } from "date-fns";

function Lead({ lead, stageId, setModal, stageName }) {
  return (
    <li
      className="flex w-full shrink-0 cursor-grab flex-col active:cursor-grabbing"
      id={lead.id}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("stage_id", stageId);
      }}
    >
      <div className="rounded-lg bg-white p-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between border-b-[1px] border-[#D7D7D7] text-[13px] text-grisText">
            <p>{lead.business_name}</p>
            <button
              type="button"
              className="flex"
              onClick={() =>
                setModal({
                  prospect: false,
                  potential: false,
                  followup: true,
                  proposal: false,
                  closing: false,
                  pay: false,
                  kickoff: false,
                })
              }
            >
              {lead?.step_id == 3 && (
                <IonIcon
                  icon={mailOpen}
                  className="z-99 pr-2 text-primarioBotones"
                />
              )}
            </button>
          </div>
          <Link to={`/crm/leads/${lead.id}`} id={lead.id}>
            {lead?.step_id == 0 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Name
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Phone
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_phone}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">Email</p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_email}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 7 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Name
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Phone
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_phone}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">Email</p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_email}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 1 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Name
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Comments
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.prospect.comments}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Date of Contact
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {format(lead?.prospect.date_of_contact, "PP")}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 2 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Payment recurrency
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.potencial_grading.field_one == "1"
                      ? "Anual"
                      : "Mensual"}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Total ammount
                  </p>
                  <span className="line-clamp-none text-xs text-grisHeading">
                    {lead?.potencial_grading.field_two == "3"
                      ? "$1000+"
                      : lead?.potencial_grading.field_two == "2"
                        ? "$500 - $999"
                        : "$200 - $499"}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 3 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Contact Name
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Way of Contact
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.follow_up[0].way_of_contact == "1"
                      ? "Call"
                      : lead?.follow_up[0].way_of_contact == "2"
                        ? "Face to Face"
                        : lead?.follow_up[0].way_of_contact == "3"
                          ? "Email"
                          : lead?.follow_up[0].way_of_contact == "4"
                            ? "Whatsapp"
                            : lead?.follow_up[0].way_of_contact == "5"
                              ? "Instagram"
                              : "Facebook"}
                  </span>
                </div>
                <div className="">
                  <p className="text-[10px] font-medium text-grisText">
                    Comments
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.follow_up[0].comments}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Date of Contact
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {format(lead?.follow_up[0].date_of_contact, "PP")}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 4 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Confirmed Email
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.proposal.confirm_email}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Comments
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.proposal.comments}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 5 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Month Billing
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.closing.month_billing}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Comments
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.closing.comments}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 6 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Payment Total
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.pay.total}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-grisText">
                    Comments
                  </p>
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {lead?.pay.comments}
                  </span>
                </div>
              </div>
            )}
          </Link>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7586B] text-sm font-semibold text-white">
                <HoverCard>
                  <HoverCardTrigger>
                    <p className="">{lead.created}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit">
                    <p>
                      Created{" "}
                      {lead.created == 0
                        ? "Today"
                        : lead.created == 1
                          ? lead.created + " day ago"
                          : lead.created + " days ago"}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-sm font-semibold text-white">
                <HoverCard>
                  <HoverCardTrigger>
                    <p>{lead.updated}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit">
                    <p>
                      {lead.updated == 0
                        ? "No updates"
                        : lead.updated == 1
                          ? "Updated " + lead.updated + " day ago"
                          : "Updated " + lead.updated + " days ago"}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex">
                <IonIcon
                  icon={chatbubbleEllipses}
                  className="h-6 w-6 text-[#40BD72]"
                ></IonIcon>
              </div>
            </div>

            <div>
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Lead;

// onDragOver={(event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log(event);
// }}
// onDragLeave={(event) => {
//     event.stopPropagation();
//     console.log(event);
//     console.log("ondragleave");
// }}

{
  /* <a
  href={`tel: ${lead?.contact_phone}`}
  className="text-primario flex items-center gap-2"
>
  <IonIcon icon={call} className="w-4 h-4 text-primario"></IonIcon>
  <p className=" text-xs">Phone Call</p>
</a>; */
}
