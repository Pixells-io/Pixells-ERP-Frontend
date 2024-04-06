import React from "react";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Today() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
            <div className="flex gap-2  text-gris2">
                <div className="w-12 h-12">
                    <IonIcon icon={chevronBack} size="large" className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
                <div className="w-12 h-12">
                    <IonIcon icon={chevronForward} size="large"  className="bg-blancoBox p-1 rounded-3xl"></IonIcon>
                </div>
            </div>
            <div className="font-roboto text-sm text-grisText">project manager</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              Today
            </h2>
            <span className="font-medium text-xs text-grisText">
              Activities
            </span>
          </div>
          <div className="flex gap-2 text-[#8F8F8F] self-start">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        {/* outlet */}
        <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
          <div className="grid grid-cols-12 w-full h-fit">
            <div className="col-span-5 text-center"></div>
            <div className="col-span-2 text-center">
              <p>Hoy</p>
            </div>
            <div className="col-span-5 text-center">
              <div>
                <p>SEARCH</p>
              </div>
            </div>

            <div className="col-span-5 text-center"></div>
            <div className="col-span-2 text-center">
              <p>Hoy</p>
            </div>
            <div className="col-span-5 text-center">
              <div>
                <p>SEARCH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
