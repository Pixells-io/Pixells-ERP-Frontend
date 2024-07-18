import React, { useState } from "react";

import { IonIcon } from "@ionic/react";
import {
  barChart,
  ellipsisHorizontal,
  personAdd,
  push,
  walk,
} from "ionicons/icons";
import FormImportClient from "../Clients/FormImportClient";

function StatisticsBlock({ data }) {
  console.log(data);
  const [modal, setModal] = useState(false);
  return (
    <div className="flex gap-8">
      <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
        <div className="flex justify-between">
          <IonIcon
            icon={barChart}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-xl text-grisSubText"
          ></IonIcon>
        </div>
        <div className="truncate text-xl font-bold text-blue-500">
          ${Number(data.new_sales).toFixed(2)}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">SALES</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gris2">
            <div className="py rounded-xl bg-[#00A25940] px-2 font-roboto text-sm font-medium text-green-600">
              +100%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
        <div className="flex justify-between">
          <IonIcon icon={walk} size="large" className="text-gris2"></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-xl text-grisSubText"
          ></IonIcon>
        </div>
        <div className="text-xl font-bold text-blue-500">
          {data.new_clients}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-gris2">
            <span className="text-sm font-semibold">NEW CLIENTS</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gris2">
            <div className="py rounded-xl bg-[#00A25940] px-2 font-roboto text-sm font-medium text-green-600">
              +100%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>

      <div className="flex w-52 flex-col justify-center gap-2 rounded-lg bg-[#E8E8E8] px-4 py-3">
        <div className="flex justify-between">
          <IonIcon
            icon={personAdd}
            size="large"
            className="text-gris2"
          ></IonIcon>
          <IonIcon
            icon={ellipsisHorizontal}
            className="text-xl text-grisSubText"
          ></IonIcon>
        </div>
        <div className="text-xl font-bold text-blue-500">{data.new_leads}</div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gris2">NEW LEADS</span>
            <span className="text-xs text-grisSubText">This Month</span>
          </div>
          <div className="flex flex-col items-center justify-center text-gris2">
            <div className="py rounded-xl bg-[#00A25940] px-2 font-roboto text-sm font-medium text-green-600">
              +100%
            </div>
            <span className="text-[8px]">vs last month</span>
          </div>
        </div>
      </div>
      <div className="flex w-52 flex-col justify-end gap-2 rounded-lg px-4 py-3">
        <button
          className="ml-28 mt-16 h-10 w-10 rounded-full bg-[#E8E8E8]"
          onClick={() => setModal(true)}
        >
          <IonIcon
            icon={push}
            className="mt-2 text-xl text-grisSubText"
          ></IonIcon>
        </button>
      </div>
      <FormImportClient modal={modal} setModal={setModal} />
    </div>
  );
}

export default StatisticsBlock;
