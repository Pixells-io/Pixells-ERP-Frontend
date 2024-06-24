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
import { useLoaderData } from "react-router-dom";

function Today() {
  const { data } = useLoaderData();

  function changeInputToday(projectId) {
    console.log(projectId);
  }
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
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              Today
            </h2>
            <span className="text-xs font-medium text-grisText">
              Activities
            </span>
          </div>
        </div>

        {/* outlet */}
        <div className="h-full justify-center overflow-auto rounded-xl bg-blancoBg p-4">
          <div className="grid h-fit w-full grid-cols-12 gap-6">
            <div className="col-span-5 text-center"></div>
            <div className="col-span-2 text-center">
              <p className="font-poppins text-base font-semibold text-[#171725]">
                Today
              </p>
            </div>
            <div className="col-span-5 flex justify-center">
              <div className="flex w-fit items-center gap-4 rounded-full border border-grisText px-6 py-2">
                <IonIcon icon={searchOutline} className="h-6 w-6"></IonIcon>
                <p>SEARCH</p>
              </div>
            </div>

            <div>
              <div className="col-span-5 justify-center">
                <div className="w-96 rounded-lg border border-grisDisabled p-4">
                  <p className="text-xs text-grisSubText">
                    Mis actividades de hoy
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <p className="text-[15px] font-light text-grisHeading">
                        Actividades{" "}
                        <span className="font-medium">Individuales</span>
                      </p>
                    </div>
                    <div className="text-grisSubText">
                      <IonIcon icon={ellipsisHorizontal} size="large"></IonIcon>
                    </div>
                  </div>
                  <div className="flex h-20 flex-col gap-2 overflow-scroll pl-8">
                    {data.today.map((activitie, i) => (
                      <>
                        {activitie.progress === 1 ? (
                          <div
                            className="flex items-center gap-1"
                            onClick={changeInputToday(activitie.id)}
                          >
                            <Checkbox
                              defaultChecked
                              className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                            />
                            <div className="leading-none">
                              <label
                                htmlFor="terms1"
                                className="text-[15px] leading-none text-grisHeading line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {activitie.name}
                              </label>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="flex items-center gap-1"
                            onClick={changeInputToday(activitie.id)}
                          >
                            <Checkbox className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]" />
                            <div className="leading-none">
                              <label
                                htmlFor="terms3"
                                className="text-[15px] leading-none text-grisHeading peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {activitie.name}
                              </label>
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-red-600 text-center">
                <h2 className="text-center font-poppins text-xl font-bold text-[#44444F]">
                  Yesterday
                </h2>
              </div>
            </div>
            {/*
            <div className="col-span-5 flex justify-center">
              <div className="w-96 rounded-lg border border-grisDisabled p-4">
                <p className="text-xs text-grisSubText">
                  Mis actividades de hoy
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-[15px] font-light text-grisHeading">
                      Actividades{" "}
                      <span className="font-medium">Individuales</span>
                    </p>
                  </div>
                  <div className="text-grisSubText">
                    <IonIcon icon={ellipsisHorizontal} size="large"></IonIcon>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pl-8">
                  <div className="flex items-center gap-1">
                    <Checkbox
                      id="terms1"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className="leading-none">
                      <label
                        htmlFor="terms1"
                        className="text-[15px] leading-none text-grisHeading line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Checkbox
                      id="terms2"
                      defaultChecked
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className="leading-none">
                      <label
                        htmlFor="terms2"
                        className="text-[15px] leading-none text-grisHeading line-through peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Checkbox
                      id="terms3"
                      className="border-[#3DD598] data-[state=checked]:bg-[#3DD598]"
                    />
                    <div className="leading-none">
                      <label
                        htmlFor="terms3"
                        className="text-[15px] leading-none text-grisHeading peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Realizar Investigación
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
