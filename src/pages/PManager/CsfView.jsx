import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { calendarOutline, ellipsisHorizontal } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CsfView() {
  const percentage = 30;
  return (
    <div className="flex justify-center bg-blancoBg h-full overflow-auto p-4">
      <div className="grid grid-cols-2 gap-6 h-fit py-2">
        {/* card */}
        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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

        <div className="flex flex-col w-[378px] h-[168px] border border-grisDisabled rounded-2xl shrink-0 px-4 py-1">
          <div className="flex justify-between items-center ">
            <p className="text-[12px] text-grisSubText flex items-center gap-2">
              FCE <span className="text-2xl ">&bull;</span> Cumplir con las
              codiciones comerciales
            </p>
            <div className="flex text-grisSubText">
              <IonIcon icon={ellipsisHorizontal} className="w-8 h-8"></IonIcon>
            </div>
          </div>
          <div className="flex w-fit bg-blancoBox py-1 px-4 rounded-full">
            <div className="flex items-center text-grisSubText gap-2">
              <IonIcon icon={calendarOutline} className="w-5 h-5"></IonIcon>
              <p className="text-xs">05 dic 2024</p>
            </div>
          </div>
          <div className="flex justify-between pt-1">
            <div>
              <p className="text-grisHeading font-xs font-medium">
                Actividades
              </p>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-xs text-grisHeading line-through">
                    Realizar Investigación
                  </p>
                  <div className="flex">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
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
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-5 h-5">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>

            {/* circular progress bar */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-grisHeading font-xs font-medium">Advance</p>
              <CircularProgressbar
                counterClockwise={true}
                strokeWidth={15}
                className="w-12 h-12 font-semibold"
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
      </div>
    </div>
  );
}

export default CsfView;
