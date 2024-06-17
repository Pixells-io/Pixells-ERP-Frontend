import React from "react";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useLoaderData } from "react-router-dom";
import AgreementsPanel from "./components/AgreementPanel";

function ShowAgreements() {
  const { data } = useLoaderData();
  console.log(data);
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
              AGREEMENT - {data.name}
            </h2>
          </div>
        </div>
        <div className="">
          <AgreementsPanel data={data} />
        </div>
      </div>
    </div>
  );
}

export default ShowAgreements;
