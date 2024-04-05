import React from "react";

import { IonIcon } from "@ionic/react";
import {
  addCircleOutline,
  chevronBack,
  chevronForward,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";
import EmailConsole from "./components/EmailConsole";

function MainEmail() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12">
            <IonIcon
              icon={chevronBack}
              size="large"
              className="bg-blancoBox p-1 rounded-3xl"
            ></IonIcon>
          </div>
          <div className="w-12 h-12">
            <IonIcon
              icon={chevronForward}
              size="large"
              className="bg-blancoBox p-1 rounded-3xl"
            ></IonIcon>
          </div>
          <div>crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              EMAIL CONSOLE
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center h-6 bg-primarioBotones rounded-xl px-4">
            <p className="text-[10px] text-white font-semibold">Emails</p>
          </div>
          <div className="flex justify-center items-center h-6 bg-blancoBox2 rounded-xl px-4">
            <p className="text-[10px] text-grisHeading font-semibold">
              Templates
            </p>
          </div>
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="text-primarioBotones"
          ></IonIcon>
        </div>

        <EmailConsole />
      </div>
    </div>
  );
}

export default MainEmail;
