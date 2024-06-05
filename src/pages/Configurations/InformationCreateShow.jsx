import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import BusinessInformationForm from "./Components/BusinessInformationForm";

function InformationCreateShow() {
  const { data } = useLoaderData();
  return (
    <div className="flex w-full">
      {/* FollowUp Div */}
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">Configuration</div>
        </div>
        {/* Titles */}
        <div className="mt-2">
          <div>
            <span className="text- font-poppins text-2xl font-bold text-grisHeading">
              Business
            </span>
          </div>
          <div className="mt-3">
            <span className="text- font-poppins text-xl font-bold text-grisHeading">
              General Information
            </span>
          </div>
        </div>
        {/* Form */}
        <BusinessInformationForm users={data} />
      </div>
    </div>
  );
}

export default InformationCreateShow;
