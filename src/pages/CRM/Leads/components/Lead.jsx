import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IonIcon } from "@ionic/react";
import { chatbubbleEllipses } from "ionicons/icons";
import { Link } from "react-router-dom";

function Lead({ lead, index, stageId, setModal, stageName }) {
  // console.log(lead.id);
  return (
    <li
      className="cursor-grab active:cursor-grabbing"
      id={lead.id}
      draggable
      onDragStart={(event) => {
        event.dataTransfer.setData("text", event.target.id);
      }}
    >
      <Link to={`/crm/leads/${lead.id}`} id={lead.id}>
        <div className="bg-white p-2 rounded-lg">
          <div className="flex flex-col gap-2">
            <p className="text-[13px] text-grisText border-b-[1px] border-[#D7D7D7]">
              {lead.business_name}
            </p>
            <div className="flex justify-between text-[10px] text-primario">
              <p>Phone Call</p>
              <p>22 Feb 2024</p>
            </div>

            <div className="text-[10px] text-grisHeading line-clamp-5">
              {stageName}
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="flex gap-1 justify-between items-center pl-4">
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