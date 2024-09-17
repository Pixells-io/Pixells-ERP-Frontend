import React from "react";

import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import EmailConsole from "./components/EmailConsole";
import { useLoaderData } from "react-router-dom";

function MainEmail() {
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              EMAIL CONSOLE
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-6 items-center justify-center rounded-xl bg-primario px-4">
            <p className="text-[10px] font-semibold text-white">Emails</p>
          </div>
          <div className="flex h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4">
            <p className="text-[10px] font-semibold text-grisHeading">
              Templates
            </p>
          </div>
          <IonIcon
            icon={addCircleOutline}
            size="large"
            className="text-primario"
          ></IonIcon>
        </div>

        <EmailConsole data={data} />
      </div>
    </div>
  );
}

export default MainEmail;
