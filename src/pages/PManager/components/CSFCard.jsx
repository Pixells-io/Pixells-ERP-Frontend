import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { calendarOutline, ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CSFCard({ card }) {
  return (
    <div className="flex h-[168px] w-[378px] shrink-0 flex-col rounded-2xl border border-grisDisabled px-4 py-1">
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-2 text-[12px] text-grisSubText">
          FCE <span className="text-2xl">&bull;</span>
          {card.name}
        </p>
      </div>
      <div className="flex w-fit rounded-full bg-blancoBox px-4 py-1">
        <div className="flex items-center gap-2 text-grisSubText">
          <IonIcon icon={calendarOutline} className="h-5 w-5"></IonIcon>
          <p className="text-xs">{card.date}</p>
        </div>
      </div>
      <div className="flex justify-between pt-1">
        <div>
          <p className="font-xs font-medium text-grisHeading">Actividades</p>
          <div className="flex h-16 w-56 flex-col overflow-scroll">
            {card?.task.map((task, i) => (
              <>
                {task.progress === 0 ? (
                  <div className="my-1 flex items-center gap-2">
                    <div className="flex">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={task.img} />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-xs text-grisHeading">{task.name}</p>
                  </div>
                ) : (
                  <div className="my-1 flex items-center gap-2">
                    <div className="flex">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={task.img} />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-xs text-grisHeading line-through">
                      {task.name}
                    </p>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* circular progress bar */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-xs font-medium text-grisHeading">Advance</p>
          <CircularProgressbar
            counterClockwise={true}
            strokeWidth={15}
            className="h-12 w-12 font-semibold"
            value={card.percent}
            text={`${card.percent}%`}
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
