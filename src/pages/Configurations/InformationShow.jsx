import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import BusinessInformationForm from "./Components/BusinessInformationForm";
import ShowInformationCard from "./Components/ShowInformationCard";
import NavigationHeader from "@/components/navigation-header";

function InformationShow() {
  const { data } = useLoaderData();
  return (
    <div className="flex w-full">
      {/* FollowUp Div */}
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
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
          <Link to={"/configuration/create"}>
            <IonIcon
              icon={addCircleOutline}
              size="large"
              className="text-blue-500"
            ></IonIcon>
          </Link>
        </div>
        {/* Form */}
        <ShowInformationCard />
      </div>
    </div>
  );
}

export default InformationShow;
