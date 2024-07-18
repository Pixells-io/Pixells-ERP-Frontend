import React from "react";
import { IonIcon } from "@ionic/react";
import { time } from "ionicons/icons";

function AverageTimeCard({hours}) {
  return (
    <div className="rounded-md border border-blancoBox bg-white p-6">
      <div className="mb-4 flex justify-between">
        <span className="font-roboto text-xl font-semibold text-grisText">
          Average Time
        </span>
        <IonIcon className="text-grisText" size="large" icon={time} />
      </div>
      <div>
        <span className="text-md font-roboto font-medium text-grisSubText">
          This Month
        </span>
      </div>
      <div className="">
        <span className="text-3xl font-bold text-primarioBotones">{hours}</span>
      </div>
    </div>
  );
}

export default AverageTimeCard;
