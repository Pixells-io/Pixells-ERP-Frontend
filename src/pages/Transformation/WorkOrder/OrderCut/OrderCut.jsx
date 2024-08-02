import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  checkmark,
  chevronBack,
  chevronForward,
  closeCircle,
  pause,
} from "ionicons/icons";
import OnlyTable from "../../Components/OnlyTable";
import { WordOrderColumns } from "../Table/WordOrderColumns";

function OrderCut() {
  return (
    <div className="flex w-full">
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
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-grisHeading">
              TRANSFORMACIÓN
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-grisSubText">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 activities</div>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="font-poppins text-xl font-bold text-grisHeading">
            Ordenes de Corte
          </p>

          <div className="flex items-end justify-center">
            <Link to={"/transformation/work-orders"}>
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
              ></IonIcon>
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-[#FBFBFB] h-full px-4 py-2">
          <OnlyTable
            columns={WordOrderColumns}
            data={[
              {
                id: 1,
                operation: "Corte",
                operationProcess: "Corte",
                product: "Tamal",
                amount: "",
                date: "",
                estimatedDuration: "30:00",
                realDuration: "08:32",
                state: 1,
              },
            ]}
          />
          <div className="mt-6 flex justify-center gap-x-8">
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F9D994] shadow-[0_0_4px_2px_rgba(215,215,215,1)]">
              <IonIcon
                icon={pause}
                className="h-7 w-7 cursor-pointer text-white"
              ></IonIcon>
            </button>
            <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00A259] shadow-[0_0_4px_2px_rgba(215,215,215,1)]">
              <IonIcon
                icon={checkmark}
                className="h-7 w-7 cursor-pointer text-white"
              ></IonIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCut;
