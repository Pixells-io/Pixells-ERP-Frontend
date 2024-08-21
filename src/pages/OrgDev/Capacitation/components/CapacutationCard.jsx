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
  return (
    <div
      className={
        "group relative m-4 flex w-[280px] flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3 " +
        (!card?.status && card?.exam_id !== 0
          ? "shadow-[0px_0px_0px_3px_rgba(91,137,255,0.5)]"
          : "")
      }
    >
      {card.status === true ? (
        <div className="">
          <IonIcon
            icon={checkmarkCircle}
            className="absolute -right-3 -top-3 size-8 text-[#00A259]"
          ></IonIcon>
        </div>
      ) : (
        false
      )}

      <div className="flex items-center justify-between">
        {card.status == true ? (
          <p className="flex w-[65px] items-center justify-center rounded-full bg-[#00A25940] text-[11px] font-semibold text-[#00A259]">
            {card.status == true ? "Hecho" : "Pendiente"}
          </p>
        ) : (
          <p className="flex w-[65px] items-center justify-center rounded-full bg-[#7794F940] text-[11px] font-semibold text-[#7794F9]">
            {card.status == true ? "Hecho" : "Pendiente"}
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
        <p className="line-clamp-none rounded-full border-[1px] border-[#696974B2] px-2 py-0.5 text-[12px] font-normal">
          {card.type}
        </p>
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
        <>
          {card?.status != true ? (
            <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primarioBotones opacity-0 shadow-xl shadow-slate-300 transition-opacity duration-300 group-hover:opacity-100">
              <Link to={`/org-development/answer-exam/${card?.exam_id}`}>
                <IonIcon
                  icon={caretForwardOutline}
                  className="flex pl-1 text-white"
                  size="large"
                ></IonIcon>
              </Link>
            </div>
          ) : (
            false
          )}
        </>
      )}
    </div>
  );
}

export default CapacutationCard;
