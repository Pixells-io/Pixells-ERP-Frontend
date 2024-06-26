import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  checkmarkCircle,
  ellipsisHorizontal,
} from "ionicons/icons";
import { Progress } from "@/components/ui/progress";

function CapacutationCard({ card }) {
  const [progress, setProgress] = useState(80);

  return (
    <div className="bg-blancoBg border border-grisDisabled rounded-lg px-4 m-4 flex flex-col gap-1 py-3 w-[280px] relative">
      {card.status == "Hecho" ? (
        <div className="">
          <IonIcon
            icon={checkmarkCircle}
            className="w-5 h-5 text-[#00A259] absolute -top-2 -right-2"
          ></IonIcon>
        </div>
      ) : (
        ""
      )}
      <div className="flex justify-between items-center">
        {card.status == "Pendiente" ? (
          <p className="text-[11px] font-semibold text-[#7794F9] bg-[#7794F940] rounded-full flex w-[65px] justify-center items-center">
            {card.status}
          </p>
        ) : (
          <p className="text-[11px] font-semibold text-[#00A259] bg-[#00A25940] rounded-full flex w-[65px] justify-center items-center">
            {card.status}
          </p>
        )}

        <IonIcon
          icon={ellipsisHorizontal}
          className="w-5 h-5 text-grisDisabled"
        ></IonIcon>
      </div>
      <div>
        <p className="font-poppins text-[15px] font-semibold">{card.name}</p>
      </div>
      <div className="flex items-center text-[#696974B2]">
        <p className="text-[12px] font-normal line-clamp-none">{card.type}</p>
      </div>
      <div className="flex items-center text-grisText gap-2">
        <div className="flex items-center gap-2 bg-[#F1F1F5] rounded-full px-3">
          <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
          <p className="text-[12px]">{card.date}</p>
        </div>
        {card.real_date && (
          <div className="flex items-center gap-2 bg-[#00A25940] text-[#00A259] rounded-full px-3">
            <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px]">{card.date}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="self-end text-[8px] text-[#CCCCCC] pr-2">
          {card.progreso}%
        </p>
        <Progress value={card.progreso} className="h-1" />
        <p className="text-right text-[#92929C] text-[8px] font-semibold">
          Porcentaje de avance INDUCCIÓN
        </p>
      </div>
      <div className="flex items-center gap-[-4px]">
        <Avatar className="w-6 h-6">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-6 h-6 right-2">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="w-6 h-6 right-4">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-[10px] text-[#92929C] font-semibold">+ 25 más</p>
      </div>
    </div>
  );
}

export default CapacutationCard;
