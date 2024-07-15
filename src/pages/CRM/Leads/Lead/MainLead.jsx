import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  card,
  checkmarkCircle,
  chevronBack,
  chevronForward,
  cloud,
  document,
  mail,
  person,
  syncCircle,
  time,
} from "ionicons/icons";
import CardFollowUp from "./CardFollowUp";

function MainLead() {
  const [lead, services, info, follow_ups, main_lead] = useOutletContext();
  const step = main_lead.step;

  return (
    <div className="flex w-full">
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
          <div className="font-roboto text-sm text-grisText">crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              LEADS INFORMATION
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

        <div className="flex items-center gap-64 pl-3 pt-4">
          <div>
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              Follow Up
            </h2>
          </div>
        </div>

        {/* icons line */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primario">
            <IonIcon icon={person} className="h-6 w-6 text-grisBg"></IonIcon>
          </div>
          <div className="w-[70px] border-t border-primario"></div>
          {/*
          {step >= 1 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={cloud}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon icon={cloud} className="h-6 w-6 text-gris2"></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}
            
          {step >= 2 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={syncCircle}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon
                  icon={syncCircle}
                  className="h-6 w-6 text-gris2"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}

          {step >= 3 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={mail}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon icon={mail} className="h-6 w-6 text-gris2"></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}*/}

          {step >= 4 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={document}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon
                  icon={document}
                  className="h-6 w-6 text-gris2"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}

          {step >= 5 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={card}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon icon={card} className="h-6 w-6 text-gris2"></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}

          {step >= 6 ? (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-primario">
                <IonIcon
                  icon={checkmarkCircle}
                  className="h-6 w-6 text-primario"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-primario"></div>
            </>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1px] border-gris2">
                <IonIcon
                  icon={checkmarkCircle}
                  className="h-6 w-6 text-gris2"
                ></IonIcon>
              </div>
              <div className="w-[70px] border-t border-grisDisabled"></div>
            </>
          )}
        </div>

        <div className="flex items-center gap-64 pl-3 pt-4">
          <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
            Updates
          </h2>
        </div>

        {/* cards */}
        <div className="flex h-full w-full flex-col items-center overflow-auto bg-blancoBg">
          {/* Here is the cards */}
          {follow_ups?.map((follow, i) => (
            <CardFollowUp info={follow} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainLead;
