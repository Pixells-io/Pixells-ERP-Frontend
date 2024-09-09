import React from "react";

import { IonIcon } from "@ionic/react";
import { happyOutline } from "ionicons/icons";

function MenssageCard({ message, type }) {
  return (
    <>
      {type === "0" ? (
        <div className="w-full">
          {/* CRISPIN */}
          <div
            className={
              "mb-1 flex w-fit max-w-[80%] gap-2 rounded-b-xl rounded-t-xl bg-transparent px-2 py-1"
            }
          >
            <IonIcon
              icon={happyOutline}
              className="shrink-0 text-3xl text-primario"
            />
            <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
              {message}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full">
          {/* USER */}
          <div
            className={
              "float-end mb-1 flex w-fit max-w-[80%] gap-2 rounded-s-xl rounded-t-xl bg-[#F1F1F1] px-2 py-1"
            }
          >
            <span className="w-fit text-wrap break-words font-roboto text-sm font-normal text-[#44444F]">
              {message}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default MenssageCard;
