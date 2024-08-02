import React from "react";

import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

function CardOrder({ id, status, title, process, advance }) {
  return (
    <Link
      to={"/transformation/work-orders/order-process/" + id}
      className="flex h-[160px] w-[280px] flex-col rounded-xl border border-grisDisabled bg-blancoBg px-4 py-3 hover:cursor-pointer"
    >
      <div className="flex w-full justify-between">
        <div>
          {status == 1 ? (
            <label className="rounded-full bg-[#FAA364] bg-opacity-25 px-3 py-2 text-xs font-semibold text-[#FAA364]">
              Pendiente
            </label>
          ) : status == 2 ? (
            <label className="rounded-full bg-[#FAA364] bg-opacity-25 px-3 py-2 text-xs font-semibold text-[#FAA364]">
              En Progreso
            </label>
          ) : (
            status == 3 && (
              <label className="rounded-full bg-[#00A259] bg-opacity-25 px-3 py-2 text-xs font-semibold text-[#00A259]">
                Finalizado
              </label>
            )
          )}
        </div>
        <IonIcon
          icon={ellipsisHorizontal}
          className="h-6 w-6 cursor-pointer text-grisDisabled"
        ></IonIcon>
      </div>
      <div className="mt-2">
        <h2 className="font-poppins text-[15px] font-semibold text-[#44444F]">
          {title}
        </h2>
        <h3 className="text-xs font-normal text-[#696974] opacity-70">
          {process} {process == 1 ? "Proceso" : "Procesos"}
        </h3>
      </div>
      <div className="flex flex-col gap-y-0.5">
        <div className="flex justify-end">
          <label className="text-[10px] font-medium text-[#CCCCCC]">
            {advance}%
          </label>
        </div>
        <Progress
          value={advance}
          className="h-[4px] bg-[#D7D7D7]"
          color="bg-[#A7FFBC]"
        />
        <div className="flex justify-end">
          <label className="text-[9px] font-semibold text-[#92929C]">
            Porcentaje de avance PROCESO
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0CADF3] text-[9px] font-semibold text-white">
              DG
            </div>
            <div className="ml-[-8px] flex h-6 w-6 items-center justify-center rounded-full bg-[#A058CE] text-[9px] font-semibold text-white">
              DG
            </div>
            <div className="ml-[-8px] flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] text-[9px] font-semibold text-white">
              DG
            </div>
          </div>
          <label className="text-[9px] font-semibold text-[#92929C]">
            + 25 más
          </label>
        </div>
      </div>
    </Link>
  );
}

export default CardOrder;
