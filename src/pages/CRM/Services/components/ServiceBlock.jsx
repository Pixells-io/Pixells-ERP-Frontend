import React from "react";

import { IonIcon } from "@ionic/react";
import { barChart, ellipsisHorizontal } from "ionicons/icons";

function ServiceBlock() {
  return (
    <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
      <div className="flex justify-between">
        <IonIcon icon={barChart} size="large" className="text-gris2"></IonIcon>
        <IonIcon
          icon={ellipsisHorizontal}
          className="text-gris2"
          size="large"
        ></IonIcon>
      </div>
      <div className="text-blue-500 font-bold text-xl">$5,500.00</div>
      <div className="flex justify-between">
        <div className="flex flex-col text-gris2">
          <span className="text-sm font-semibold">SALES</span>
          <span className="text-xs">This Month</span>
        </div>
        <div className="flex flex-col justify-center items-center text-gris2">
          <div className="bg-[#00A25940] text-green-600 font-bold rounded-xl px-2">
            +20%
          </div>
          <span className="text-[8px]">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default ServiceBlock;
