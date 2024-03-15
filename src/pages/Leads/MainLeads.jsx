import React from "react";

import { Outlet } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  chevronBackCircle,
  chevronForwardCircle,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";

function MainLeads() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris p-8 ml-4 rounded-lg space-y-4 gap-4 w-full">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-gris2">
            <IonIcon icon={chevronBackCircle} className="w-12 h-12"></IonIcon>
            <IonIcon
              icon={chevronForwardCircle}
              className="w-12 h-12"
            ></IonIcon>
          </div>
          <div>crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              LEADS DASHBOARD
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div>4 services</div>
            <div className="text-2xl">&bull;</div>
            <div>9 Leads</div>
          </div>
        </div>

        <div
          className={`flex items-center space-evenly gap-4 bg-grisHeading rounded-full p-2 w-fit`}
        >
          <div className="flex ml-2 text-red-500">
            <IonIcon
              icon={globeOutline}
              className=" w-6 h-6 stroke-1"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-4">
            <p className={`text-red-500 text-2xl`}>&bull;</p>
            <p className="text-white uppercase text-sm font-semibold">LEADS</p>
          </div>
          <div className="flex">
            <IonIcon
              icon={ellipsisVertical}
              className="text-white w-6 h-6 stroke-1"
            ></IonIcon>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLeads;
