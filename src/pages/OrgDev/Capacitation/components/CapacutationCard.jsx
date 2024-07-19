import React from "react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IonIcon } from "@ionic/react";
import {
  calendarOutline,
  caretForwardOutline,
  checkmarkCircle,
  ellipsisHorizontal,
} from "ionicons/icons";

function CapacutationCard({ card }) {
  console.log(card);
  return (
    <div className="relative m-4 flex w-[280px] flex-col gap-1 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
      {card.status == "Hecho" ? (
        <div className="">
          <IonIcon
            icon={checkmarkCircle}
            className="absolute -right-2 -top-2 h-5 w-5 text-[#00A259]"
          ></IonIcon>
        </div>
      ) : (
        ""
      )}
      <div className="flex items-center justify-between">
        {card.status == "Pendiente" ? (
          <p className="flex w-[65px] items-center justify-center rounded-full bg-[#7794F940] text-[11px] font-semibold text-[#7794F9]">
            {card.status}
          </p>
        ) : (
          <p className="flex w-[65px] items-center justify-center rounded-full bg-[#00A25940] text-[11px] font-semibold text-[#00A259]">
            {card.status}
          </p>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon
              icon={ellipsisHorizontal}
              className="h-5 w-5 text-grisDisabled"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Documents</DropdownMenuLabel>
            {card.documents.map((docu, i) => (
              <DropdownMenuItem key={i}>
                <Link to={docu?.document} target="_blank">
                  {docu?.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <p className="font-poppins text-[15px] font-semibold">{card.name}</p>
      </div>
      <div className="flex items-center text-[#696974B2]">
        <p className="line-clamp-none text-[12px] font-normal">{card.type}</p>
      </div>
      <div className="flex items-center gap-2 text-grisText">
        <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-3">
          <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
          <p className="text-[12px]">{card.date}</p>
        </div>
        {card.real_date && (
          <div className="flex items-center gap-2 rounded-full bg-[#00A25940] px-3 text-[#00A259]">
            <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
            <p className="text-[12px]">{card.date}</p>
          </div>
        )}
      </div>
      {card?.exam_id !== 0 && (
        <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primarioBotones shadow-xl shadow-slate-300">
          <Link to={`/org-development/answer-exam/${card?.exam_id}`}>
            <IonIcon
              icon={caretForwardOutline}
              className="flex pl-1 text-white"
              size="large"
            ></IonIcon>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CapacutationCard;
