import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  card,
  checkmarkCircle,
  chevronBack,
  chevronForward,
  cloud,
  document,
  ellipseSharp,
  mail,
  person,
  syncCircle,
  time,
} from "ionicons/icons";
import CardFollowUp from "./CardFollowUp";

import { format } from "date-fns";
import NavigationHeader from "@/components/navigation-header";

function MainLead() {
  const [lead] = useOutletContext();

  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />
        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              LEADS INFORMACION
            </h2>
          </div>
          {/* <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div>4 services</div>
            <div className="text-2xl">&bull;</div>
            <div>9 Leads</div>
            <div className="text-2xl">&bull;</div>
            <div>43 activities</div>
          </div> */}
        </div>
        {/* icons line */}
        <div className="flex h-20 justify-center overflow-auto align-middle">
          <div className="flex w-10/12 overflow-auto">
            {lead.steps?.map((step, i) => (
              <div className="flex-shrink-0">
                {step.id > lead.process_sale_step ? (
                  <div className="flex flex-shrink-0 items-start justify-center gap-4">
                    <div className="items-start text-center">
                      <IonIcon
                        icon={ellipseSharp}
                        className="h-2 w-2 text-grisDisabled"
                      ></IonIcon>
                      <br />
                      <span
                        className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading"
                        title={step.name}
                      >
                        {step.name}
                      </span>
                    </div>
                    {i === lead.steps.length - 1 ? null : (
                      <div className="mt-3 w-[70px] border-t border-grisDisabled"></div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-start justify-center gap-4">
                    <div className="items-start text-center">
                      <IonIcon
                        icon={ellipseSharp}
                        className="h-2 w-2 text-grisHeading"
                      ></IonIcon>
                      <br />
                      <span
                        className="line-clamp-1 font-roboto text-sm font-normal text-grisHeading"
                        title={step.name}
                      >
                        {step.name}
                      </span>
                    </div>
                    {i === lead.steps.length - 1 ? null : (
                      <div className="mt-3 w-[70px] border-t border-grisHeading"></div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* cards */}
        <div className="flex h-full w-full flex-col items-center overflow-auto bg-blancoBg">
          <div className="my-6 flex w-[510px] shrink-0 flex-col rounded-lg bg-gris pb-2 shadow-sm drop-shadow-sm">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center gap-2 p-1">
                <IonIcon
                  icon={addCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-[15px] font-medium text-gris2">Registro</p>
              </div>
              <div className="flex items-center gap-2 p-1 text-grisSubText">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">Fecha</span>
                </div>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="mt-2 flex gap-6">
                <div className="gap-1"></div>
              </div>
            </div>
          </div>
          {/*
          {follow_ups?.map((follow, i) => (
            <CardFollowUp info={follow} key={i} />
          ))}*/}
          {/* Here is the cards */}
        </div>
      </div>
    </div>
  );
}

export default MainLead;
