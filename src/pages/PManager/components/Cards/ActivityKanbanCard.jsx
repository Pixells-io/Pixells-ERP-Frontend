import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  attachOutline,
  calendarOutline,
  checkmarkCircleOutline,
  ellipsisHorizontal,
  listCircleOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ActivityKanbanCard({ task }) {
  return (
    <div className="m-4 flex flex-col gap-2 rounded-lg border border-grisDisabled bg-blancoBg px-4 py-3">
      <div className="flex items-center justify-between">
        <p className="font-poppins text-[15px] font-semibold">{task.name}</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <IonIcon
              icon={ellipsisHorizontal}
              className="h-5 w-5 text-grisDisabled"
            ></IonIcon>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="w-full hover:cursor-pointer">
              Complete
            </DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Destroy</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-2 text-grisText">
        {task.type === "1" ? (
          <>
            <IonIcon icon={listCircleOutline} className="h-5 w-5"></IonIcon>
            <p className="text-[12px] font-normal">Proyecto Macro</p>
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
          {task.type === "1" ? (
            <>
              <IonIcon icon={attachOutline} className="h-5 w-5"></IonIcon>
              <p className="text-[12px]">12</p>
            </>
          ) : (
            <div></div>
          )}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-[#F1F1F5] px-4 py-1">
          <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
          <p className="text-[12px]"> {task.date} </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {task.progress === 1 ? (
          <>
            <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">100%</p>
            <Progress value="100" className="h-1" />
          </>
        ) : (
          <>
            <p className="self-end pr-2 text-[8px] text-[#CCCCCC]">0%</p>
            <Progress value="0" className="h-1" />
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="h-6 w-6">
          <AvatarImage src={task.assigned.img} alt="@shadcn" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default ActivityKanbanCard;
