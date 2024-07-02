import React from "react";

import { syncCircle, time } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import "react-circular-progressbar/dist/styles.css";

function CardFollowUp({ info }) {
  return (
    <div className="my-6 flex h-[112px] w-[510px] shrink-0 flex-col rounded-lg bg-gris shadow-sm drop-shadow-sm">
      {/* card header */}
      <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
        <div className="flex items-center gap-2 p-1">
          <IonIcon
            icon={syncCircle}
            size="large"
            className="text-primario"
          ></IonIcon>

          <p className="text-[15px] font-medium text-gris2">
            {info.way_of_contact}
          </p>
        </div>
        <div className="flex items-center gap-2 p-1 text-grisSubText">
          <div className="flex items-center gap-1">
            <IonIcon icon={time} className=""></IonIcon>
            <span className="text-[10px]">{info.date_of_contact} </span>
          </div>
        </div>
      </div>
      {/* card content */}
      <div className="flex justify-between px-3">
        <div className="mt-2 flex gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-grisSubText">
              Way of contact
            </p>
            <p className="text-xs font-medium text-grisSubText">Comment</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-grisHeading">
              {info.way_of_contact}{" "}
            </span>
            <span className="text-xs text-grisHeading">{info.comments} </span>
          </div>
        </div>
        <div className="flex h-4 w-4 items-center justify-center self-end rounded-full border-[1px] border-grisSubText text-grisSubText">
          <span className="text-[10px] font-medium">1</span>
        </div>
      </div>
    </div>
  );
}

export default CardFollowUp;
