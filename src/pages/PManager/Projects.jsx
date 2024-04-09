import React, { useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import {
  attachOutline,
  ellipsisHorizontal,
  listCircleOutline,
  timeOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Projects() {
  const [progress, setProgress] = useState(80);

  return (
    <div className="bg-blancoBg h-full overflow-auto p-4 flex justify-center">
      <div className="flex flex-wrap gap-8">
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-[280px] h-[160px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-[15px] font-semibold">
              4 Fases &bull; 16 Actividades
            </p>
            <IonIcon
              icon={ellipsisHorizontal}
              className="w-5 h-5 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="flex items-center gap-2 text-grisText">
            <IonIcon icon={listCircleOutline} className="w-5 h-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
          </div>
          <div className="flex items-center gap-4 text-grisText">
            <div className="flex">
              <IonIcon icon={attachOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </div>
            <div className="flex items-center gap-2 bg-[#D7586B1F] rounded-full px-4 py-1 text-[#D7586B]">
              <IonIcon icon={timeOutline} className="w-5 h-5"></IonIcon>
              <p className="text-[12px] text-[#D7586B]">05 Dic 24</p>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
