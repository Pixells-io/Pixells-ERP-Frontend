import React, { useState } from "react";
import { Form, useSubmit } from "react-router-dom";
import { format } from "date-fns";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import TaskForm from "./components/Form/TaskForm";

import {
  checkmarkCircleOutline,
  create,
  informationCircle,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const HEADERS = [
  { name: "CSF" },
  { name: "ACTIVITY" },
  { name: "TYPE" },
  { name: "PROGRESS" },
  { name: "EXPIRATION" },
  { name: "RESPONSABLE" },
  { name: "STATUS" },
  { name: "CREATED" },
  { name: "ACTIONS" },
];

function Board({ goal, users, csfs }) {
  const submit = useSubmit();
  const [csfInput, setCsfInput] = useState("");
  console.log(csfs);

  function onInputEnter(e) {
    console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setCsfInput("");
    }
  }

  return (
    <div className="flex flex-col bg-blancoBg h-full overflow-auto p-4 gap-4">
      <div className="grid grid-cols-10 text-right">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={
              header?.name === "ACTIVITY"
                ? "col-span-2"
                : "" || header?.name === "CSF"
                ? "text-left pl-2"
                : ""
            }
          >
            <p className="text-gris2 text-sm font-semibold px-2">
              {header.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-10 text-right gap-y-6 items-center border-b-[1px] px-1 h-12">
        <div className="col-span-10">
          <Form
            onKeyDown={onInputEnter}
            id="csf-form"
            action={`/project-manager/${goal.strategic_objetive_id}`}
            method="post"
            name="csf"
          >
            <input
              type="text"
              name="csf"
              placeholder="+ CRITICAL SUCCES FACTOR"
              className="flex w-full px-2 bg-blancoBg placeholder:text-grisSubText placeholder:text-sm placeholder:font-normal"
              value={csfInput}
              onChange={(e) => setCsfInput(e.target.value)}
            />
            <input className="hidden" name="action" value="csf" readOnly />
            <input className="hidden" name="goalId" value={goal.id} readOnly />
          </Form>
          {/* <CsfForm goalId={goal.id} objectiveId={goal.strategic_objetive_id} /> */}
        </div>
      </div>
      <div className="h-full overflow-auto">
        {csfs?.map(({ fce, tasks }, i) => (
          <Accordion key={i} type="single" collapsible className="">
            <AccordionItem value={`item-${fce?.id}`}>
              <AccordionTrigger className="bg-grisBg px-4 justify-normal gap-2">
                <p className="text-sm font-medium text-grisHeading">
                  {fce?.name}
                </p>
                <span className="bg-blancoBg w-6 h-6 flex justify-center items-center rounded-full text-sm font-medium text-grisHeading">
                  {tasks?.length}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-10 items-center border-b-[1px] px-1 h-12">
                  <div className="flex justify-end col-span-2">
                    <TaskForm users={users} csfId={fce.id} />
                  </div>
                </div>
                {tasks?.map(({ task }, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-10 text-right gap-y-6 items-center border-b-[1px] pr-2 h-12"
                  >
                    <div></div>
                    <div className="col-span-2 flex justify-end items-center gap-2">
                      <p className="text-2xl text-red-500">&bull;</p>
                      <p className="text-grisHeading text-[12px] font-normal">
                        {task?.name}
                      </p>
                    </div>
                    <div>
                      <p className="text-grisHeading text-[12px] font-normal pr-4">
                        {task?.type == 0 ? "Task" : "Project"}
                      </p>
                    </div>
                    {task?.type == 1 ? (
                      <div className="flex flex-col items-center px-2">
                        <p className="text-grisHeading text-[8px] font-normal text-right w-full">
                          {task?.progress}%
                        </p>
                        <Progress
                          value={task?.progress}
                          className="h-[4px] bg-grisDisabled fill-primario"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center px-2"></div>
                    )}
                    <div>
                      <p className="text-grisHeading text-[12px] font-normal">
                        {format(new Date(task?.end), "PP")}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end gap-2">
                        <div className="">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-orange-200 hover:bg-orange-100 text-[#FAA364]">
                        <p className=" text-[11px] font-semibold">
                          {task?.status || "Pending"}
                        </p>
                      </Badge>
                    </div>
                    <div className="flex justify-center pl-10">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    {task?.type == 0 ? (
                      <div>
                        <div className="flex items-center gap-2 text-[#696974]">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="w-5 h-5"
                          ></IonIcon>
                          <IonIcon icon={create} className="w-5 h-5"></IonIcon>
                          <IonIcon icon={trash} className="w-5 h-5"></IonIcon>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-center gap-2 text-[#696974]">
                          <IonIcon
                            icon={informationCircle}
                            className="w-5 h-5"
                          ></IonIcon>
                        </div>
                      </div>
                    )}
                    {/* <div>
                      <div className="flex items-center gap-2 text-[#696974]">
                        <IonIcon
                          icon={checkmarkCircleOutline}
                          className="w-5 h-5"
                        ></IonIcon>
                        <IonIcon icon={create} className="w-5 h-5"></IonIcon>
                        <IonIcon icon={trash} className="w-5 h-5"></IonIcon>
                      </div>
                    </div> */}
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Board;

// const DATA = [
//   {
//     id: 0,
//     csf: "Original Constructors",
//     activities: [
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//     ],
//   },
//   {
//     id: 1,
//     csf: "New Constructors",
//     activities: [
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//     ],
//   },
//   {
//     id: 2,
//     csf: "Old Constructors",
//     activities: [
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//       {
//         activity: "Immigration, Tax Preparation",
//         type: "Activity",
//         expiration: "02/19/2024",
//         responsable: "don fomularo",
//         status: "pending",
//         created: "don fomularo",
//       },
//     ],
//   },
// ];
