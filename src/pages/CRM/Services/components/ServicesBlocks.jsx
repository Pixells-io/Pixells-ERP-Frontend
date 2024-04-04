import React from "react";

import { IonIcon } from "@ionic/react";
import {
  cashOutline,
  ellipsisHorizontal,
  folder,
  globeOutline,
} from "ionicons/icons";

function ServicesBlocks() {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon icon={folder} size="large" className="text-gris2"></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-gris2"
            size="large"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">7</div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">Active</span>
            <span className="text-xs">Services</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-bold rounded-xl px-2">
              +20%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="h-full border-l border border-grisText"></div>

      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon
            icon={globeOutline}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-gris2"
            size="large"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">$700.00</div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">Immigration</span>
            <span className="text-xs">Service</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-bold rounded-xl px-2">
              +20%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-52 py-3 px-4 gap-2 bg-[#E8E8E8] rounded-lg justify-center">
        <div className="flex justify-between">
          <IonIcon
            icon={cashOutline}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-gris2"
            size="large"
          ></IonIcon>
        </div>
        <div className="text-blue-500 font-bold text-xl">$450.00</div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">Pay Roll</span>
            <span className="text-xs">Service</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gris2">
            <div className="bg-[#00A25940] text-green-600 font-bold rounded-xl px-2">
              +20%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesBlocks;
