import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

import {
  chevronBack,
  chevronForward,
  ellipsisHorizontal,
  searchOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function Today() {
  return (
    <div className="flex w-full overflow-auto">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  text-gris2">
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronBack}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
              ></IonIcon>
            </div>
            <div className="w-12 h-12">
              <IonIcon
                icon={chevronForward}
                size="large"
                className="bg-blancoBox p-1 rounded-3xl"
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
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              PROJECT MANAGER
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
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
            <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
              Today
            </h2>
            <span className="font-medium text-xs text-grisText">
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
        <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
          <div className="grid grid-cols-12 w-full h-fit gap-6">
            <div className="col-span-5 text-center"></div>
            <div className="col-span-2 text-center">
              <p className="font-poppins text-base font-semibold text-[#171725]">
                Hoy
              </p>
            </div>
            <div className="col-span-5 justify-center flex">
              <div className="border-grisText border rounded-full px-6 py-2 flex w-fit items-center gap-4">
                <IonIcon icon={searchOutline} className="w-6 h-6"></IonIcon>
                <p>SEARCH</p>
              </div>
            </div>

            <div className="col-span-5 flex justify-center">
              <div className="border border-grisDisabled rounded-lg w-96 p-4">
                <p className="text-grisSubText text-xs">
                  Mis actividades de hoy
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-grisHeading font-light text-[15px]">
                      Actividades{" "}
                      <span className="font-medium">Individuales</span>
                    </p>
                  </div>
                  <div className="text-grisSubText ">
                    <IonIcon icon={ellipsisHorizontal} size="large"></IonIcon>
                  </div>
                </div>
                <div className="flex flex-col pl-8 gap-2">
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms1"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-[15px] text-grisHeading line-through leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms2"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms2"
                        className="text-[15px] text-grisHeading line-through leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms3"
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms3"
                        className="text-[15px] text-grisHeading leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 text-center"></div>
            <div className="col-span-5 text-center">
              <div></div>
            </div>

            <div className="col-span-5 flex justify-center">
              <div className="border border-grisDisabled rounded-lg w-96 p-4">
                <p className="text-grisSubText text-xs">
                  Mis actividades de hoy
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-grisHeading font-light text-[15px]">
                      Actividades{" "}
                      <span className="font-medium">Individuales</span>
                    </p>
                  </div>
                  <div className="text-grisSubText ">
                    <IonIcon icon={ellipsisHorizontal} size="large"></IonIcon>
                  </div>
                </div>
                <div className="flex flex-col pl-8 gap-2">
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms1"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-[15px] text-grisHeading line-through leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms2"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms2"
                        className="text-[15px] text-grisHeading line-through leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Checkbox
                      id="terms3"
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className=" leading-none">
                      <label
                        htmlFor="terms3"
                        className="text-[15px] text-grisHeading leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 text-center"></div>
            <div className="col-span-5 text-center">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
