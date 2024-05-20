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
          <DropdownMenuItem className="">
            <div className="FLEX">
              {notificationsData?.map((item, i) => {
                {
                  item.count == 0 ? (
                    ""
                  ) : (
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`item-${i}`}>
                        <AccordionTrigger>
                          <div className="w-full flex gap-1 hover:bg-[#7794F926] hover:rounded-lg">
                            <div>
                              <Avatar>
                                <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                            </div>
                            <div>
                              <div className="flex">
                                <span className="text-grisText text-sm font-medium flex items-center gap-1 overflow-hidden">
                                  {item.name} &bull;{" "}
                                </span>
                                <span className="text-grisSubText text-[10px]">
                                  Hace 2 días
                                </span>
                              </div>
                              <span className="text-grisSubText text-xs font-normal overflow-hidden w-9">
                                Clarissa creó un nuevo clientet
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="rounded-full bg-[#D7586B] text-white h-5 w-5 flex justify-center">
                                {item.count}
                              </span>
                              <span className="text-grisSubText text-[10px]">
                                13:27
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>{item.name}:)</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  );
                }
              })}
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationBell;
