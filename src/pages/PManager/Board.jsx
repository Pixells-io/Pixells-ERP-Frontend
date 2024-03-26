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
import CsfForm from "./components/Form/CsfForm";

const DATA = [
  {
    id: 0,
    csf: "Original Constructors",
    activities: [
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
    ],
  },
  {
    id: 1,
    csf: "New Constructors",
    activities: [
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
    ],
  },
  {
    id: 2,
    csf: "Old Constructors",
    activities: [
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
      {
        activity: "Immigration, Tax Preparation",
        type: "Activity",
        expiration: "02/19/2024",
        responsable: "don fomularo",
        status: "pending",
        created: "don fomularo",
      },
    ],
  },
];
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

function Board({ goal }) {
  return (
    <div className="flex flex-col bg-blancoBg h-full overflow-auto p-4">
      <div className="grid grid-cols-10 text-right">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={header?.name === "ACTIVITY" ? "col-span-2" : ""}
          >
            <p className="text-gris2 text-sm font-semibold px-2">
              {header.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-10 text-right gap-y-6 items-center border-b-[1px] px-1 h-12">
        <div className="col-span-10">
          <CsfForm goalId={goal.id} objectiveId={goal.strategic_objetive_id} />
        </div>
      </div>
      <div>
        {DATA?.map((client, i) => (
          <Accordion key={i} type="single" collapsible className="">
            <AccordionItem value={`item-${client.id}`}>
              <AccordionTrigger className="bg-grisBg px-4 justify-normal gap-2">
                <p className="text-sm font-medium text-grisHeading">
                  {client?.csf}
                </p>
                <span className="bg-blancoBg w-6 h-6 flex justify-center items-center rounded-full text-sm font-medium text-grisHeading">
                  {client?.activities.length}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="">
                  {client?.activities.map((item, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-10 text-right gap-y-6 items-center border-b-[1px] px-1 h-12"
                    >
                      <div></div>
                      <div className="col-span-2 flex justify-end items-center gap-2">
                        <p className="text-2xl text-red-500">&bull;</p>
                        <p className="text-grisHeading text-[12px] font-normal">
                          {item.activity}
                        </p>
                      </div>
                      <div>
                        <p className="text-grisHeading text-[12px] font-normal pr-4">
                          {item.type}
                        </p>
                      </div>
                      <div className="flex flex-col items-center px-2">
                        <p className="text-grisHeading text-[8px] font-normal text-right w-full">
                          80%
                        </p>
                        <Progress
                          value={80}
                          className="h-[4px] bg-grisDisabled fill-primario"
                        />
                      </div>
                      <div>
                        <p className="text-grisHeading text-[12px] font-normal">
                          15 Feb 2024
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
                          <div>
                            <Avatar className="w-6 h-6">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-grisHeading text-[11px] font-semibold">
                          <Badge className="bg-orange-200 text-[#FAA364]">
                            {item.status}
                          </Badge>
                        </p>
                      </div>
                      <div className="flex justify-center pl-10">
                        <Avatar className="w-6 h-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>ACTIONS</div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Board;
