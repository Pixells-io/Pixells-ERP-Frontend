import React from "react";

import { IonIcon } from "@ionic/react";
import { barChart, ellipsisHorizontal, personAdd, walk } from "ionicons/icons";

function StatisticsBlock() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon
            icon={barChart}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-grisSubText text-xl"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">$13,500.00</div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">SALES</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-roboto font-medium text-sm py rounded-xl px-2">
              +40%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon icon={walk} size="large" className="text-gris2"></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-grisSubText text-xl"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">05</div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">NEW CLIENTS</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-roboto rounded-xl px-2 py font-medium text-sm">
              +10%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon
            icon={personAdd}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-grisSubText text-xl"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">13</div>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <span className="text-sm font-semibold text-gris2">NEW LEADS</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-roboto rounded-xl px-2 py font-medium text-sm">
              +20%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsBlock;
