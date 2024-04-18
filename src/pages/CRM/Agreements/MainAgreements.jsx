import React from "react";

import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import AgreementsConsole from "./components/AgreementsConsole";

function MainAgreements() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
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
          </div>
          <div className="font-roboto text-sm text-grisText">agreements</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              AGREEMENTS CONSOLE
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">6 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">36 templates</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center h-6 bg-primario rounded-xl px-4">
            <p className="text-[10px] text-white font-semibold">Templates</p>
          </div>
          <div className="hidden justify-center items-center h-6 bg-blancoBox2 rounded-xl px-4">
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

        <AgreementsConsole />
      </div>
    </div>
  );
}

export default MainAgreements;
