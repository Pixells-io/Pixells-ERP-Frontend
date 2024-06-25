import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  attachOutline,
  calendarOutline,
  checkmarkCircleOutline,
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  listCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Progress } from "@/components/ui/progress";
import { useLoaderData } from "react-router-dom";

function Status() {
  const { data } = useLoaderData();
  console.log(data);
  const [progress, setProgress] = useState(80);
  return (
    <div className="flex w-full overflow-auto">
      <div className="ml-4 flex w-full flex-col space-y-4 overflow-hidden rounded-lg bg-gris px-8 py-4">
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
          <div className="font-roboto text-sm text-grisText">
            project manager
          </div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex items-center gap-3 text-[#8F8F8F]">
            <div className="text-xs">4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-xs">43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-poppins text-2xl font-bold text-[#44444F]">
              Status
            </h2>
            <span className="text-sm font-medium text-grisText">
              Activities
            </span>
          </div>
          <div className="flex gap-2 self-start text-[#8F8F8F]">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        {/* outlet */}
        <div className="flex h-full justify-center overflow-auto bg-blancoBg p-4">
          <div className="flex gap-3">
            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#D7586B]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  VENCIDAS
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.expirated.map((expirated, i) => (
                  <div className="m-4 flex flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="font-poppins text-[15px] font-semibold">
                        {expirated.name}
                      </p>
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="h-5 w-5 text-grisDisabled"
                      ></IonIcon>
                    </div>
                    <div className="flex items-center gap-2 text-grisText">
                      {expirated.type === "1" ? (
                        <>
                          <IonIcon
                            icon={listCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">
                            Proyecto Macro
                          </p>
                        </>
                      ) : (
                        <>
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">Activity</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-grisText">
                      <div className="flex">
                        {expirated.type === "1" ? (
                          <>
                            <IonIcon
                              icon={attachOutline}
                              className="h-5 w-5"
                            ></IonIcon>
                            <p className="text-[12px]">12</p>
                          </>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-4 py-1">
                        <IonIcon
                          icon={calendarOutline}
                          className="h-5 w-5"
                        ></IonIcon>
                        <p className="text-[12px]"> {expirated.date} </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {expirated.progress === 1 ? (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            100%
                          </p>
                          <Progress value="100" className="h-1" />
                        </>
                      ) : (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            0%
                          </p>
                          <Progress value="0" className="h-1" />
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={expirated.assigned.img}
                          alt="@shadcn"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#FAA364]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  PENDIENTES
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.pending.map((expirated, i) => (
                  <div className="m-4 flex flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="font-poppins text-[15px] font-semibold">
                        {expirated.name}
                      </p>
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="h-5 w-5 text-grisDisabled"
                      ></IonIcon>
                    </div>
                    <div className="flex items-center gap-2 text-grisText">
                      {expirated.type === "1" ? (
                        <>
                          <IonIcon
                            icon={listCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">
                            Proyecto Macro
                          </p>
                        </>
                      ) : (
                        <>
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">Activity</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-grisText">
                      <div className="flex">
                        {expirated.type === "1" ? (
                          <>
                            <IonIcon
                              icon={attachOutline}
                              className="h-5 w-5"
                            ></IonIcon>
                            <p className="text-[12px]">12</p>
                          </>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-4 py-1">
                        <IonIcon
                          icon={calendarOutline}
                          className="h-5 w-5"
                        ></IonIcon>
                        <p className="text-[12px]"> {expirated.date} </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {expirated.progress === 1 ? (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            100%
                          </p>
                          <Progress value="100" className="h-1" />
                        </>
                      ) : (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            0%
                          </p>
                          <Progress value="0" className="h-1" />
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={expirated.assigned.img}
                          alt="@shadcn"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-[320px] flex-col rounded-lg bg-grisBg">
              <div className="rounded-t-lg bg-[#00A259]">
                <p className="py-1 text-center text-sm font-bold text-[#F5F5F5]">
                  COMPLETADAS
                </p>
              </div>
              <div className="overflow-scroll">
                {data?.complete.map((expirated, i) => (
                  <div className="m-4 flex flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
                    <div className="flex items-center justify-between">
                      <p className="font-poppins text-[15px] font-semibold">
                        {expirated.name}
                      </p>
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="h-5 w-5 text-grisDisabled"
                      ></IonIcon>
                    </div>
                    <div className="flex items-center gap-2 text-grisText">
                      {expirated.type === "1" ? (
                        <>
                          <IonIcon
                            icon={listCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">
                            Proyecto Macro
                          </p>
                        </>
                      ) : (
                        <>
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <p className="text-[12px] font-normal">Activity</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-grisText">
                      <div className="flex">
                        {expirated.type === "1" ? (
                          <>
                            <IonIcon
                              icon={attachOutline}
                              className="h-5 w-5"
                            ></IonIcon>
                            <p className="text-[12px]">12</p>
                          </>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-4 py-1">
                        <IonIcon
                          icon={calendarOutline}
                          className="h-5 w-5"
                        ></IonIcon>
                        <p className="text-[12px]"> {expirated.date} </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {expirated.progress === 1 ? (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            100%
                          </p>
                          <Progress value="100" className="h-1" />
                        </>
                      ) : (
                        <>
                          <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">
                            0%
                          </p>
                          <Progress value="0" className="h-1" />
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={expirated.assigned.img}
                          alt="@shadcn"
                        />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
