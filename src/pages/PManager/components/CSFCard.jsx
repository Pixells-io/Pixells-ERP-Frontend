import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { calendarOutline, ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CSFCard({ card }) {
  const percentage = 30;
  console.log(card);

  return (
    <div className="flex h-[168px] w-[378px] shrink-0 flex-col rounded-2xl border border-grisDisabled px-4 py-1">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[12px] text-grisSubText">
          FCE <span className="text-2xl">&bull;</span> {card?.goal.name}
        </p>
        <div className="flex text-grisSubText">
          <IonIcon icon={ellipsisHorizontal} className="h-8 w-8"></IonIcon>
        </div>
      </div>
      <div className="flex w-fit rounded-full bg-blancoBox px-4 py-1">
        <div className="flex items-center gap-2 text-grisSubText">
          <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
          <p className="text-xs">05 dic 2024</p>
        </div>
      </div>
      <div className="flex justify-between pt-1">
        <div>
          <p className="font-xs font-medium text-grisHeading">Actividades</p>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="text-xs text-grisHeading line-through">
                Realizar Investigación
              </p>
              <div className="flex">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-grisHeading line-through">
                Realizar Investigación
              </p>
              <div className="flex">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-xs text-grisHeading line-through">
                Realizar Investigación
              </p>
              <div className="flex">
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>

        {/* circular progress bar */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-xs font-medium text-grisHeading">Advance</p>
          <CircularProgressbar
            counterClockwise={true}
            strokeWidth={15}
            className="h-12 w-12 font-semibold"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#696974",
              pathColor: "#7794F9",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default CSFCard;
