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
  const [
    lead,
    services,
    info,
    follow_ups,
    main_lead,
    closing,
    pay,
    onBoarding,
  ] = useOutletContext();
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
          {follow_ups?.map((follow, i) => (
            <CardFollowUp info={follow} />
          ))}
          {/* Here is the cards */}
          {closing != null ? (
            <div className="my-6 flex w-[510px] shrink-0 flex-col rounded-lg bg-gris pb-2 shadow-sm drop-shadow-sm">
              {/* card header */}
              <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
                <div className="flex items-center gap-2 p-1">
                  <IonIcon
                    icon={document}
                    size="large"
                    className="text-primario"
                  ></IonIcon>

                  <p className="text-[15px] font-medium text-gris2">
                    Closing Up
                  </p>
                </div>
                <div className="flex items-center gap-2 p-1 text-grisSubText">
                  <div className="flex items-center gap-1">
                    <IonIcon icon={time} className=""></IonIcon>
                    <span className="text-[10px]">{closing.date} </span>
                  </div>
                </div>
              </div>
              {/* card content */}
              <div className="flex justify-between px-3">
                <div className="mt-2 flex gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-grisSubText">
                      Recurrent Pay
                    </p>
                    <p className="text-xs font-medium text-grisSubText">
                      Total Ammount
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-grisHeading">
                      Recurrent Pay
                    </span>
                    <span className="text-xs text-grisHeading">
                      ${closing.month_billing}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-3">
                {closing.sales.map((sale, i) => (
                  <div className="mt-3 flex gap-6" key={i}>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-medium text-grisSubText">
                        Service {i + 1}
                      </p>
                      <p className="text-xs font-medium text-grisSubText">
                        Price
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-grisHeading">
                        {sale.name}
                      </span>
                      <span className="text-xs text-grisHeading">
                        ${sale.ammount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {pay != null ? (
            <div className="my-6 flex w-[510px] shrink-0 flex-col rounded-lg bg-gris pb-2 shadow-sm drop-shadow-sm">
              {/* card header */}
              <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
                <div className="flex items-center gap-2 p-1">
                  <IonIcon
                    icon={card}
                    size="large"
                    className="text-primario"
                  ></IonIcon>

                  <p className="text-[15px] font-medium text-gris2">Pay</p>
                </div>
                <div className="flex items-center gap-2 p-1 text-grisSubText">
                  <div className="flex items-center gap-1">
                    <IonIcon icon={time} className=""></IonIcon>
                    <span className="text-[10px]">{closing.date} </span>
                  </div>
                </div>
              </div>
              {/* card content */}
              <div className="flex justify-between px-3">
                <div className="mt-2 flex gap-6">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-medium text-grisSubText">Date</p>
                    <p className="text-xs font-medium text-grisSubText">
                      Total
                    </p>
                    <p className="text-xs font-medium text-grisSubText">
                      Comments
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-grisHeading">
                      $ {pay.total}
                    </span>
                    <span className="text-xs text-grisHeading">
                      {pay.comments}
                    </span>
                    <span className="text-xs text-grisHeading">
                      {pay.date_of_pay}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {onBoarding != null ? (
            <div className="my-6 flex w-[510px] shrink-0 flex-col rounded-lg bg-gris pb-2 shadow-sm drop-shadow-sm">
              {/* card header */}
              <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
                <div className="flex items-center gap-2 p-1">
                  <IonIcon
                    icon={checkmarkCircle}
                    size="large"
                    className="text-primario"
                  ></IonIcon>

                  <p className="text-[15px] font-medium text-gris2">
                    On Boarding
                  </p>
                </div>
                <div className="flex items-center gap-2 p-1 text-grisSubText">
                  <div className="flex items-center gap-1">
                    <IonIcon icon={time} className=""></IonIcon>
                    <span className="text-[10px]">{onBoarding.date} </span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MainLead;
