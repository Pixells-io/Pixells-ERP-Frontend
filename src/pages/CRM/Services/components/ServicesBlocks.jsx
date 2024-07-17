import React from "react";

import { IonIcon } from "@ionic/react";
import {
  cashOutline,
  ellipsisHorizontal,
  folder,
  globeOutline,
} from "ionicons/icons";

function ServicesBlocks(data) {
  console.log(data.data);
  return (
    <div className="flex h-full w-full gap-8 overflow-auto">
      <div className="flex w-52 shrink-0 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
        <div className="flex justify-between">
          <IonIcon icon={folder} size="large" className="text-gris2"></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-xl text-grisSubText"
          ></IonIcon>
        </div>
        <div className="text-xl font-bold text-blue-500">
          {data.data.services_count}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">Active</span>
            <span className="text-xs text-grisSubText">Services</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gris2">
            <div className="py rounded-xl bg-[#00A25940] px-2 font-roboto text-sm font-medium text-green-600">
              +20%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="border-r-2"></div>

      {data.data.services.map((service, i) => (
        <div className="flex w-52 shrink-0 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
          <div className="flex justify-between">
            <IonIcon
              icon={globeOutline}
              size="large"
              className="text-gris2"
            ></IonIcon>
            <IonIcon
              icon={ellipsisHorizontal}
              className="text-xl text-grisSubText"
            ></IonIcon>
          </div>
          <div className="text-xl font-bold text-blue-500">
            $ {service.ammount}{" "}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col text-gris2">
              <span className="text-sm font-semibold"> {service.name} </span>
              <span className="text-xs text-grisSubText">Service</span>
            </div>
            <div className="flex flex-col items-center justify-center text-gris2">
              <div className="py rounded-xl bg-[#00A25940] px-2 font-roboto text-sm font-medium text-green-600">
                +100%
              </div>
              <span className="text-[8px]">vs last month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesBlocks;
