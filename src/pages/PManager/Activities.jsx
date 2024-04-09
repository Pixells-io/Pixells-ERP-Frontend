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
  return (
    <div className="flex w-full overflow-scroll">
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
              Activities
            </h2>
            <span className="font-medium text-xs text-grisText">General</span>
          </div>
          <div className="flex gap-1 text-[#8F8F8F] self-start">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        <div className="flex flex-col bg-blancoBg h-full overflow-auto p-4">
          <div className="grid grid-cols-11 text-right">
            {HEADERS?.map((header, i) => (
              <div
                key={i}
                className={
                  header?.name === "ACTIVITY" ? "col-span-2" : "col-span-1"
                }
              >
                <p className="text-gris2 text-sm font-semibold px-2">
                  {header.name}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-11 text-right gap-y-6 items-center border-b-[1px] px-1 h-12">
            <div className="col-span-10"></div>
          </div>
          <div>
            {DATA?.map((client, i) => (
              <Accordion key={i} type="single" collapsible className="">
                <AccordionItem value={`item-${client.id}`}>
                  <AccordionTrigger className="bg-grisBg px-4 grid grid-cols-11">
                    <p className="text-sm font-medium text-grisHeading col-span-5 text-right pr-2">
                      15 Feb 2024
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-11 items-center border-b-[1px] px-1 h-12">
                      <div className="flex justify-end col-span-2"></div>
                    </div>
                    {client?.activities.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-11 text-right gap-y-6 items-center border-b-[1px] px-1 h-12"
                      >
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
                        <div></div>
                        <div></div>
                        <div>
                          <Badge className="bg-orange-200 hover:bg-orange-100 text-[#FAA364]">
                            <p className=" text-[11px] font-semibold">
                              {item.status}
                            </p>
                          </Badge>
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
