import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  attachOutline,
  calendarOutline,
  chevronBackCircle,
  chevronForwardCircle,
  ellipsisHorizontal,
  listCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Progress } from "@/components/ui/progress";

function Status() {
  const [progress, setProgress] = useState(80);
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-gris2">
            <IonIcon icon={chevronBackCircle} className="w-12 h-12"></IonIcon>
            <IonIcon
              icon={chevronForwardCircle}
              className="w-12 h-12"
            ></IonIcon>
          </div>
          <div>project-manager </div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div>4 objectives</div>
            <div className="text-2xl">&bull;</div>
            <div>25 SCF</div>
            <div className="text-2xl">&bull;</div>
            <div>43 Activities</div>
          </div>
        </div>

        {/* top content sub */}
        <div className="flex items-center gap-32 pl-3 pt-4">
          <div className="flex flex-col gap-2">
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              Status
            </h2>
            <span className="font-medium text-sm text-grisText">
              Activities
            </span>
          </div>
          <div className="flex gap-2 text-[#8F8F8F] self-start">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        {/* outlet */}
        <div className="flex justify-center bg-blancoBg h-full overflow-auto p-4">
          <div className="flex gap-3">
            <div className="flex flex-col w-[320px] bg-grisBg rounded-lg">
              <div className="bg-[#D7586B] rounded-t-lg">
                <p className="font-bold text-sm text-center text-[#F5F5F5] py-1">
                  VENCIDAS
                </p>
              </div>
              <div className="bg-blancoBg border border-grisDisabled rounded-lg px-4 m-4 flex flex-col gap-2 py-3">
                <div className="flex justify-between items-center">
                  <p className="font-poppins text-[15px] font-semibold">
                    Actividad 1
                  </p>
                  <IonIcon
                    icon={ellipsisHorizontal}
                    className="w-5 h-5 text-grisDisabled"
                  ></IonIcon>
                </div>
                <div className="flex items-center gap-2 text-grisText">
                  <IonIcon
                    icon={listCircleOutline}
                    className="w-5 h-5"
                  ></IonIcon>
                  <p className="text-[12px] font-normal">Proyecto Macro</p>
                </div>
                <div className="flex items-center gap-4 text-grisText">
                  <div className="flex">
                    <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
                    <p className="text-[12px]">12</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F1F1F5] rounded-full px-4 py-1">
                    <IonIcon
                      icon={calendarOutline}
                      className="w-5 h-5"
                    ></IonIcon>
                    <p className="text-[12px]">05 Dic 24</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="self-end text-[8px] text-[#CCCCCC] pr-2">
                    {progress}%
                  </p>
                  <Progress value={progress} className="h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[320px] bg-grisBg rounded-lg">
              <div className="bg-[#FAA364] rounded-t-lg">
                <p className="font-bold text-sm text-center text-[#F5F5F5] py-1">
                  PENDIENTES
                </p>
              </div>
              <div className="bg-blancoBg border border-grisDisabled rounded-lg px-4 m-4 flex flex-col gap-2 py-3">
                <div className="flex justify-between items-center">
                  <p className="font-poppins text-[15px] font-semibold">
                    Actividad 1
                  </p>
                  <IonIcon
                    icon={ellipsisHorizontal}
                    className="w-5 h-5 text-grisDisabled"
                  ></IonIcon>
                </div>
                <div className="flex items-center gap-2 text-grisText">
                  <IonIcon
                    icon={listCircleOutline}
                    className="w-5 h-5"
                  ></IonIcon>
                  <p className="text-[12px] font-normal">Proyecto Macro</p>
                </div>
                <div className="flex items-center gap-4 text-grisText">
                  <div className="flex">
                    <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
                    <p className="text-[12px]">12</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F1F1F5] rounded-full px-4 py-1">
                    <IonIcon
                      icon={calendarOutline}
                      className="w-5 h-5"
                    ></IonIcon>
                    <p className="text-[12px]">05 Dic 24</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="self-end text-[8px] text-[#CCCCCC] pr-2">
                    {progress}%
                  </p>
                  <Progress value={progress} className="h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[320px] bg-grisBg rounded-lg">
              <div className="bg-[#00A259] rounded-t-lg">
                <p className="font-bold text-sm text-center text-[#F5F5F5] py-1">
                  COMPLETADAS
                </p>
              </div>
              <div className="bg-blancoBg border border-grisDisabled rounded-lg px-4 m-4 flex flex-col gap-2 py-3">
                <div className="flex justify-between items-center">
                  <p className="font-poppins text-[15px] font-semibold">
                    Actividad 1
                  </p>
                  <IonIcon
                    icon={ellipsisHorizontal}
                    className="w-5 h-5 text-grisDisabled"
                  ></IonIcon>
                </div>
                <div className="flex items-center gap-2 text-grisText">
                  <IonIcon
                    icon={listCircleOutline}
                    className="w-5 h-5"
                  ></IonIcon>
                  <p className="text-[12px] font-normal">Proyecto Macro</p>
                </div>
                <div className="flex items-center gap-4 text-grisText">
                  <div className="flex">
                    <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
                    <p className="text-[12px]">12</p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#F1F1F5] rounded-full px-4 py-1">
                    <IonIcon
                      icon={calendarOutline}
                      className="w-5 h-5"
                    ></IonIcon>
                    <p className="text-[12px]">05 Dic 24</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="self-end text-[8px] text-[#CCCCCC] pr-2">
                    {progress}%
                  </p>
                  <Progress value={progress} className="h-1" />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
