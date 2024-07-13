import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipses } from "ionicons/icons";

function Lead({ lead, index, stageId, setModal }) {
  return (
    <li className="cursor-grab active:cursor-grabbing">
      <div
        draggable
        className="rounded-lg bg-white p-2"
        onDragOver={(event) => {
          event.preventDefault();
          event.stopPropagation();
          // console.log(event);
        }}
        onDragLeave={(event) => {
          event.stopPropagation();
          // console.log(event);
          // console.log("ondragleave");
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="border-b-[1px] border-[#D7D7D7] text-[13px] text-grisText">
            {lead.name}
          </p>
          <div className="flex justify-between text-[10px] text-primario">
            <p>Phone Call</p>
            <p>22 Feb 2024</p>
          </div>

          <div className="line-clamp-5 text-[10px] text-grisHeading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aut
            commodi, tenetur esse eos reiciendis quod sequi ipsam quasi saepe
            iure animi sit illum voluptas amet quae perferendis, dolorum
            nesciunt.
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-1 pl-4">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D7586B] text-sm font-semibold text-white">
                <p>0</p>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-sm font-semibold text-white">
                <p>0</p>
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
