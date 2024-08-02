import React from "react";

import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import Pending from "../../Components/status/Pending";
import InProgress from "../../Components/status/InProgress";
import Finalized from "../../Components/status/Finalized";

function CardProcess({ id, status, title, advance }) {
  return (
    <Link
      to={"/transformation/work-orders/order-cut/" + id}
      className="flex h-[160px] w-[280px] flex-col justify-between rounded-xl border border-grisDisabled bg-blancoBg px-4 py-3 hover:cursor-pointer"
    >
      <div className="flex w-full justify-between">
        <div>
          {status == 1 ? (
            <Pending />
          ) : status == 2 ? (
            <InProgress />
          ) : (
            status == 3 && <Finalized />
          )}
        </div>
        <IonIcon
          icon={ellipsisHorizontal}
          className="h-6 w-6 cursor-pointer text-grisDisabled"
        ></IonIcon>
      </div>
      <div>
        <h2 className="font-poppins text-[15px] font-semibold text-[#44444F]">
          {title}
        </h2>
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

export default CardProcess;
