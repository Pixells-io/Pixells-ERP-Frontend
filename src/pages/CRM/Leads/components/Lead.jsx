import React from "react";
import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { IonIcon } from "@ionic/react";
import { call, chatbubbleEllipses } from "ionicons/icons";
import { format } from "date-fns";

function Lead({ lead, stageId, setModal, stageName }) {
  return (
    <li
      className="cursor-grab active:cursor-grabbing flex flex-col w-full shrink-0"
      id={lead.id}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text", event.target.id);
        event.dataTransfer.setData("stage_id", stageId);
      }}
    >
      <Link to={`/crm/leads/${lead.id}`} id={lead.id}>
        <div className="bg-white p-2 rounded-lg">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-grisText border-b-[1px] border-[#D7D7D7]">
              {lead.business_name}
            </p>

            {lead?.step_id == 0 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Contact Name</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Contact Phone</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_phone}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Email</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_email}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 7 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Contact Name</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Contact Phone</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_phone}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Email</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_email}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 1 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Contact Name</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Comments</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.prospect.comments}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Date of Contact</p>
                  <span className="text-xs line-clamp-none">
                    {format(lead?.prospect.date_of_contact, "PP")}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 2 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Payment recurrency</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.potencial_grading.field_one == "1"
                      ? "Anual"
                      : "Mensual"}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Total ammount</p>
                  <span className="text-xs line-clamp-none">
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
                  <p className="text-[10px]">Contact Name</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.contact_name} {lead?.contact_middle_name}{" "}
                    {lead?.contact_last_name}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Way of Contact</p>
                  <span className="text-xs line-clamp-none">
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
                  <p className="text-[10px]">Comments</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.follow_up[0].comments}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Date of Contact</p>
                  <span className="text-xs line-clamp-none">
                    {format(lead?.follow_up[0].date_of_contact, "PP")}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 4 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Confirmed Email</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.proposal.confirm_email}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Comments</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.proposal.comments}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 5 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Month Billing</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.closing.month_billing}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Comments</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.closing.comments}
                  </span>
                </div>
              </div>
            )}

            {lead?.step_id == 6 && (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[10px]">Payment Total</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.pay.total}
                  </span>
                </div>
                <div>
                  <p className="text-[10px]">Comments</p>
                  <span className="text-xs line-clamp-none">
                    {lead?.pay.comments}
                  </span>
                </div>
              </div>
            )}

            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 justify-between items-center">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D7586B] text-white text-sm font-semibold">
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
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F9D994] text-white text-sm font-semibold">
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
                    className="w-6 h-6 text-[#40BD72]"
                  ></IonIcon>
                </div>
              </div>

              <div>
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </Link>
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
