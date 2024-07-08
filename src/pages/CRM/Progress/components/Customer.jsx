import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { IonIcon } from "@ionic/react";
import { call, chatbubbleEllipses, mailOpen } from "ionicons/icons";

function Customer({ customer, stepId }) {
  // console.log("customer ", customer);
  // console.log("stepId ", stepId);
  return (
    <li className="flex w-full shrink-0 cursor-grab flex-col active:cursor-grabbing">
      <div
        id={customer.customer.id}
        draggable
        className="rounded-lg bg-white p-2"
        onDragStart={(event) => {
          event.dataTransfer.setData("text", event.target.id);
          event.dataTransfer.setData("step_id", stepId.id);
          event.dataTransfer.setData("step_order", stepId.order);
        }}
      >
        <div className="flex flex-col gap-2">
          <p className="border-b-[1px] border-[#D7D7D7] text-[13px] text-grisText">
            {customer?.info.business_name}
          </p>

          <div className="line-clamp-5 text-[10px] text-grisHeading">
            Service ready to start
            <br />
            {format(customer.customer.created_at, "PP")}
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7586B] text-sm font-semibold text-white">
                <HoverCard>
                  <HoverCardTrigger>
                    <p className="">{customer.customer.create}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit">
                    <p>
                      Created{" "}
                      {customer.created == 0
                        ? "Today"
                        : customer.created == 1
                          ? customer.created + " day ago"
                          : customer.created + " days ago"}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-sm font-semibold text-white">
                <HoverCard>
                  <HoverCardTrigger>
                    <p>{customer.updated}</p>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit">
                    <p>
                      {customer.updated == 0
                        ? "No updates"
                        : customer.updated == 1
                          ? "Updated " + customer.updated + " day ago"
                          : "Updated " + customer.updated + " days ago"}
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
                <AvatarImage src={customer?.assigned?.image} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Customer;
