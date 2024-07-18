import React from "react";

import { IonIcon } from "@ionic/react";
import { barChart, ellipsisHorizontal } from "ionicons/icons";

function ServiceBlock() {
  return (
    <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
      <div className="flex justify-between">
        <IonIcon icon={barChart} size="large" className="text-gris2"></IonIcon>
        {/* <IonIcon
          icon={ellipsisHorizontal}
          className="text-gris2"
          size="large"
        ></IonIcon> */}
      </div>
      <div className="text-xl font-bold text-blue-500">FALTA AQUI BACK</div>
      <div className="flex justify-between">
        <div className="flex flex-col text-gris2">
          <span className="text-sm font-semibold">SALES</span>
          <span className="text-xs">This Month</span>
        </div>
        <div className="flex flex-col items-center justify-center text-gris2">
          <div className="rounded-xl bg-[#00A25940] px-2 font-bold text-green-600">
            +20%
          </div>
          <span className="text-[8px]">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceBlock;
