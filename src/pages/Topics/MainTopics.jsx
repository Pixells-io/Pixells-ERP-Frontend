import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import Publication from "./Components/Publication";
import Categories from "./Components/Categories";

function MainTopics() {
  return (
    <div className="flex w-full gap-x-4">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 text-gris2">
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
            <div className="h-12 w-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="rounded-3xl bg-blancoBox p-1"
              ></IonIcon>
            </div>
          </div>
          <div className="font-roboto text-sm text-grisText">tickets </div>
        </div>
        {/* top content */}
        <div className="flex flex-col gap-y-2">
          <h2 className="font-poppins text-xl font-bold text-grisHeading">
            Topics
          </h2>
          <div className="font-roboto text-grisSubText">
            <div className="text-xs">General Notices</div>
          </div>
        </div>

        <div className="flex items-center flex-col gap-y-4">
            <Publication />
            <Publication />
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default MainTopics;
