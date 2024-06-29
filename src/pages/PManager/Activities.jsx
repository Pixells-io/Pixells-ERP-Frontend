import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import { chevronBack, chevronForward } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useLoaderData } from "react-router-dom";
import { completeTask, destroyTask } from "./utils";

const HEADERS = [
  { name: "ACTIVITY" },
  { name: "TYPE" },
  { name: "PROGRESS" },
  { name: "EXPIRATION" },
  { name: "RESPONSABLE" },
  { name: "CSF" },
  { name: "SO" },
  { name: "STATUS" },
  { name: "CREATED" },
  { name: "ACTIONS" },
];

function Activities() {
  const { data } = useLoaderData();

  return (
    <div className="flex w-full overflow-scroll">
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
              Activities
            </h2>
            <span className="text-xs font-medium text-grisText">General</span>
          </div>
          <div className="flex gap-1 self-start text-[#8F8F8F]">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        <div className="flex h-full flex-col overflow-auto bg-blancoBg p-4">
          <div className="grid grid-cols-11 text-right">
            {HEADERS?.map((header, i) => (
              <div
                key={i}
                className={
                  header?.name === "ACTIVITY" ? "col-span-2" : "col-span-1"
                }
              >
                <p className="px-2 text-sm font-semibold text-gris2">
                  {header.name}
                </p>
              </div>
            ))}
          </div>
          <div className="grid h-12 grid-cols-11 items-center gap-y-6 border-b-[1px] px-1 text-right">
            <div className="col-span-10"></div>
          </div>
          <div>
            {data?.days.map((day, i) => (
              <Accordion key={i} type="single" collapsible className="">
                <AccordionItem value={`item-${day.id}`}>
                  <AccordionTrigger className="grid grid-cols-11 bg-grisBg px-4">
                    <p className="col-span-5 pr-2 text-right text-sm font-medium text-grisHeading">
                      {day.day} {data?.month} {data?.year}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    {day?.task.map((task, i) => (
                      <div
                        key={i}
                        className="grid h-12 grid-cols-11 items-center gap-y-6 border-b-[1px] px-1 text-right"
                      >
                        <div className="col-span-2 flex items-center justify-end gap-2">
                          <p className="text-2xl text-red-500">&bull;</p>
                          <p className="text-[12px] font-normal text-grisHeading">
                            {task.name}
                          </p>
                        </div>
                        <div>
                          <p className="pr-4 text-[12px] font-normal text-grisHeading">
                            {task.type_name}
                          </p>
                        </div>
                        <div className="flex flex-col items-center px-2">
                          {task.type === 1 ? (
                            <div>
                              <p className="w-full text-right text-[8px] font-normal text-grisHeading">
                                80%
                              </p>
                              <Progress
                                value={80}
                                className="h-[4px] bg-grisDisabled fill-primario"
                              />
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                        <div>
                          <p className="text-[12px] font-normal text-grisHeading">
                            {task.start}
                          </p>
                        </div>
                        <div>
                          <div className="flex justify-end gap-2">
                            <div className="">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={task.assigned.img} />
                                <AvatarFallback></AvatarFallback>
                              </Avatar>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        <div></div>
                        <div>
                          {task.progress === 0 ? (
                            <Badge className="hover:bg-bg-[#FAA364] bg-[#faa26442] text-[#FAA364]">
                              <p className="text-[11px] font-semibold">
                                Pending
                              </p>
                            </Badge>
                          ) : (
                            <Badge className="bg-green-300 text-green-700 hover:bg-green-200">
                              <p className="text-[11px] font-semibold">
                                Complete
                              </p>
                            </Badge>
                          )}
                        </div>
                        <div className="flex justify-center pl-10">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={task.creator.img} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>

                        <div>ACTIONS</div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activities;

export async function Action({ request }) {
  const data = await request.formData();

  switch (data.get("type_of_request")) {
    case "1":
      completeTask(data);
      break;
    case "2":
      break;
    case "3":
      destroyTask(data);
      break;
  }

  return 1;
}
