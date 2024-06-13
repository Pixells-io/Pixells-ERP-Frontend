import React from "react";

import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import AgreementsConsole from "./components/AgreementsConsole";
import { Link, useLoaderData } from "react-router-dom";

function MainAgreements() {
  const { services, customers } = useLoaderData();
  const data = services.data;

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
          <div className="font-roboto text-sm text-grisText">agreements</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              AGREEMENTS CONSOLE
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">6 services</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">36 templates</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-6 items-center justify-center rounded-xl bg-primario px-4">
            <p className="text-[10px] font-semibold text-white">Templates</p>
          </div>
          <div className="hidden h-6 items-center justify-center rounded-xl bg-blancoBox2 px-4">
            <p className="text-[10px] font-semibold text-grisHeading">
              Templates
            </p>
          </div>
          <Link to={"/crm/agreements/create"}>
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="text-primarioBotones"
            ></IonIcon>
          </Link>
        </div>
        <AgreementsConsole services={data} customers={customers.data} />
      </div>
    </div>
  );
}

export default MainAgreements;
