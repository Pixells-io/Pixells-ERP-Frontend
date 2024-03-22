import React from "react";

import { calendarOutline, ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function CsfView() {
  return (
    <div className="flex justify-center bg-blancoBg h-full overflow-auto p-4">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-2 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p>05 dic 2024</p>
            </div>
          </div>
        </div>

        <div className="w-[378px] h-[168px] border border-grisDisabled rounded-2xl"></div>
      </div>
    </div>
  );
}

export default CsfView;
