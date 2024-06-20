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
  console.log(users);

  function onInputEnter(e) {
    console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setCsfInput("");
    }
  }

  return (
    <div className="flex h-full flex-col gap-4 overflow-auto bg-blancoBg p-4">
      <div className="grid grid-cols-10 text-right">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={
              header?.name === "ACTIVITY"
                ? "col-span-2"
                : "" || header?.name === "CSF"
                  ? "pl-2 text-left"
                  : "pl-4 text-center"
            }
          >
            <p className="px-2 text-sm font-semibold text-gris2">
              {header.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid h-12 grid-cols-10 items-center gap-y-6 px-1 text-right">
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
              className="flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-2 focus:border-primario"
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
              <AccordionTrigger className="justify-normal gap-2 bg-grisBg px-4">
                <p className="text-sm font-medium text-grisHeading">
                  {fce?.name}
                </p>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blancoBg text-sm font-medium text-grisHeading">
                  {tasks?.length}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid h-12 grid-cols-10 items-center px-1">
                  <div className="col-span-2 flex justify-end">
                    <TaskForm users={users} csfId={fce.id} />
                  </div>
                </div>
                {tasks?.map(({ task }, i) => (
                  <div
                    key={i}
                    className="grid h-12 grid-cols-10 items-center gap-y-6 border-b-[1px] pr-2 text-right"
                  >
                    <div></div>
                    <div className="col-span-2 flex items-center justify-end gap-2">
                      <p className="text-2xl text-red-500">&bull;</p>
                      <p className="text-[12px] font-normal text-grisHeading">
                        {task?.name}
                      </p>
                    </div>
                    <div>
                      <p className="pr-4 text-[12px] font-normal text-grisHeading">
                        {task?.type == 0 ? "Task" : "Project"}
                      </p>
                    </div>
                    {task?.type == 1 ? (
                      <div className="flex flex-col items-center px-2">
                        <p className="w-full text-right text-[8px] font-normal text-grisHeading">
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
                      <p className="text-[12px] font-normal text-grisHeading">
                        {format(new Date(task?.end), "PP")}
                      </p>
                    </div>
                    <div>
                      <div className="flex justify-end gap-2">
                        <div className="">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
                        <p className="text-[11px] font-semibold">
                          {task?.status || "Pending"}
                        </p>
                      </Badge>
                    </div>
                    <div className="flex justify-center pl-10">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    {task?.type == 0 ? (
                      <div className="flex justify-center">
                        <div className="flex items-center gap-2 text-[#696974]">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="h-5 w-5"
                          ></IonIcon>
                          <IonIcon icon={create} className="h-5 w-5"></IonIcon>
                          <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="flex items-center gap-2 text-[#696974]">
                          <IonIcon
                            icon={informationCircle}
                            className="h-5 w-5"
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
