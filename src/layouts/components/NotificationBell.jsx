import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { notifications } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function NotificationBell({ notificationsData, user }) {
  console.log(notificationsData);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IonIcon
            icon={notifications}
            size="large"
            className="text-primario"
          ></IonIcon>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          {notificationsData?.map((item, i) => (
            <div className="flex flex-col gap-1" key={i}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${i}`}>
                  <AccordionTrigger>
                    <div className="flex w-full gap-1 hover:rounded-lg hover:bg-[#7794F926]">
                      <div>
                        <Avatar>
                          <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <div className="flex gap-2">
                          <span className="flex items-center gap-1 overflow-hidden text-sm font-medium text-grisText">
                            {item.name} &bull;{" "}
                          </span>
                          <span className="text-[10px] text-grisSubText">
                            {item.latest.created}
                          </span>
                        </div>
                        <span className="w-9 overflow-hidden text-xs font-normal text-grisSubText">
                          Clarissa creó un nuevo cliente
                        </span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="flex h-5 w-5 justify-center rounded-full bg-[#D7586B] text-sm text-white">
                          {item.count}
                        </span>
                        <span className="text-[10px] text-grisSubText">
                          {item.latest.created}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{item.name}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationBell;
