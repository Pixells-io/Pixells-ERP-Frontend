import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipses } from "ionicons/icons";
import { format } from "date-fns";

function Customer({ customer, stepId }) {
  // console.log("customer ", customer.customer);
  // console.log("stepId ", stepId);
  return (
    <li className="cursor-grab active:cursor-grabbing flex flex-col w-full shrink-0">
      <div
        id={customer.customer.id}
        draggable
        className="bg-white p-2 rounded-lg"
        onDragStart={(event) => {
          event.dataTransfer.setData("text", event.target.id);
          event.dataTransfer.setData("step_id", stepId.id);
          event.dataTransfer.setData("step_order", stepId.order);
        }}
      >
        <div className="flex flex-col gap-2">
          <p className="text-[13px] text-grisText border-b-[1px] border-[#D7D7D7]">
            {customer?.info.business_name}
          </p>

          <div className="text-[10px] text-grisHeading line-clamp-5">
            Service ready to start
            <br />
            {format(customer.customer.created_at, "PP")}
          </div>

          <div className="flex w-full justify-between items-center">
            <div className="flex gap-1 justify-between items-center">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#D7586B] text-white text-sm font-semibold">
                <p>0</p>
              </div>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F9D994] text-white text-sm font-semibold">
                <p>0</p>
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
    </li>
  );
}

export default Customer;
