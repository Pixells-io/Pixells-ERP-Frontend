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
  return (
    <div id={customer.customer_id} className="rounded-lg bg-white p-2">
      <div className="flex flex-col gap-2">
        <p className="border-b-[1px] border-[#D7D7D7] text-[13px] text-grisText">
          {customer.customer_name}
        </p>

        <div className="line-clamp-5 text-[10px] text-grisHeading">
          {customer.step_latest}
          <br />
          {customer.latest_updated_date}
        </div>

        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-between gap-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7586B] text-sm font-semibold text-white">
              <HoverCard>
                <HoverCardTrigger>
                  <p className="">{customer.latest_created}</p>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <p>
                    Created{" "}
                    {customer.latest_created == 0
                      ? "Today"
                      : customer.latest_created == 1
                        ? customer.latest_created + " day ago"
                        : customer.latest_created + " days ago"}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-sm font-semibold text-white">
              <HoverCard>
                <HoverCardTrigger>
                  <p>{customer.latest_updated}</p>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <p>
                    {customer.latest_updated == 0
                      ? "No updates"
                      : customer.latest_updated == 1
                        ? "Updated " + customer.latest_updated + " day ago"
                        : "Updated " + customer.latest_updated + " days ago"}
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
  );
}

export default Customer;
