import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { call, chatbubbleEllipses, mailOpen } from "ionicons/icons";

import { format } from "date-fns";

import CommentsLead from "./CommentsLead";

function Lead({ lead, setModal }) {
  console.log(lead);
  return (
    <div className="rounded-lg bg-white p-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between border-b-[1px] border-[#D7D7D7] text-[13px] text-grisText">
          <div className="flex w-full flex-col gap-1 pb-1">
            <p>{lead?.business_name}</p>
            {lead?.type == 1 ? (
              <div className="flex w-full justify-between">
                <span className="w-fit gap-1 rounded-full border border-[#00a9b3] px-2 text-[8px] text-[#00a9b3]">
                  Individual
                </span>

                {lead?.status == "1" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#00A259] px-2 text-[8px] text-[#00A259]">
                    Active
                  </span>
                ) : lead?.status == "2" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#FAA364] px-2 text-[8px] text-[#FAA364]">
                    Suspended
                  </span>
                ) : lead?.status == "3" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#D7586B] px-2 text-[8px] text-[#D7586B]">
                    Canceled
                  </span>
                ) : (
                  <span className="w-fit gap-1 rounded-full border border-primarioBotones px-2 text-[8px] text-primarioBotones">
                    Done
                  </span>
                )}
              </div>
            ) : (
              <div className="flex w-full justify-between">
                <span className="w-fit gap-1 rounded-full border border-primarioBotones px-2 text-[8px] text-primario">
                  Business
                </span>

                {lead?.status == "1" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#00A259] px-2 text-[8px] text-[#00A259]">
                    Active
                  </span>
                ) : lead?.status == "2" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#FAA364] px-2 text-[8px] text-[#FAA364]">
                    Suspended
                  </span>
                ) : lead?.status == "3" ? (
                  <span className="w-fit gap-1 rounded-full border border-[#D7586B] px-2 text-[8px] text-[#D7586B]">
                    Canceled
                  </span>
                ) : (
                  <span className="w-fit gap-1 rounded-full border border-primarioBotones px-2 text-[8px] text-primarioBotones">
                    Done
                  </span>
                )}
              </div>
            )}
          </div>
          <button
            type="button"
            className="flex"
            onClick={() => {
              setModal({
                prospect: false,
                potential: false,
                followup: true,
                proposal: false,
                closing: false,
                pay: false,
                kickoff: false,
              });
            }}
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
                {lead.services.map((service, i) => (
                  <span className="line-clamp-none text-[12px] text-grisHeading">
                    {service.service} {service.recurency} {service.ammount}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-medium text-grisText">
                  Comments
                </p>
                <span className="line-clamp-none text-[12px] text-grisHeading">
                  {lead?.closing?.comments}
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
              <CommentsLead leadId={lead?.id} comments={lead?.comments} />
            </div>
            {/*
              <div className="flex">
                <IonIcon
                  icon={chatbubbleEllipses}
                  className="h-6 w-6 text-[#40BD72]"
                ></IonIcon>
              </div>
              */}
          </div>

          <div>
            <Avatar className="h-6 w-6">
              <AvatarImage src={lead?.assigned?.image} />
              <AvatarFallback>??</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lead;
