import React, { useState } from "react";
import Cookies from "js-cookie";

import VisibilitySensor from "react-visibility-sensor";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IonIcon } from "@ionic/react";
import {
  checkmarkDoneOutline,
  ellipsisVerticalOutline,
  happyOutline,
} from "ionicons/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function MenssageCard({ message, type }) {
  return (
    <>
      {type === "0" ? (
        <div className="w-full">
          {/* CRISPIN */}
          <div
            className={
              "mb-1 flex w-fit max-w-[65%] gap-4 rounded-b-xl rounded-t-xl bg-transparent px-2 py-1"
            }
          >
            <IonIcon icon={happyOutline} className="text-3xl text-primario" />
            <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
              {message}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full">
          {/* USER */}
          <div
            className={
              "float-end mb-1 flex w-fit max-w-[65%] gap-4 rounded-s-xl rounded-t-xl bg-[#F1F1F1] px-2 py-1"
            }
          >
            <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
              {message}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default MenssageCard;
