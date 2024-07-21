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
import { redirect, useNavigate } from "react-router-dom";
import { destroyNotification } from "@/lib/actions";

function NotificationBell({ notificationsData, user }) {
  const navigate = useNavigate();

  async function destroyNotificationTwo(noti, url) {
    await destroyNotification(noti);
    return navigate(url);
  }

  return (
    <div>
      <DropdownMenu className="overflow-auto">
        <DropdownMenuTrigger>
          <IonIcon
            icon={notifications}
            size="large"
            className="text-primario"
          ></IonIcon>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-h-96 overflow-auto">
          {notificationsData?.map((item, i) => (
            <>
              {item.count != "0" ? (
                <div className="flex flex-col gap-1" key={i}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${i}`}>
                      <AccordionTrigger className="hover:bg-[#7794F926] hover:no-underline active:bg-[#7794F926]">
                        <div className="flex h-7 w-full gap-2 hover:rounded-lg">
                          <div>
                            <Avatar>
                              <AvatarImage src={item.latest.img} />
                            </Avatar>
                          </div>
                          <div>
                            <div className="flex gap-2">
                              <span className="flex items-center gap-1 overflow-hidden text-xs font-medium text-grisText">
                                {item.name} &bull;{" "}
                              </span>
                              <span className="text-[10px] text-grisSubText">
                                {item.latest.created}
                              </span>
                            </div>
                            <span className="w-9 overflow-hidden text-xs font-normal text-grisSubText">
                              {item.latest.message}
                            </span>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="h-5 w-5 rounded-full bg-[#D7586B]">
                              <span className="mt-[2px] flex justify-center rounded-full text-xs text-white">
                                {item.count}
                              </span>
                            </div>
                            <span className="text-[10px] text-grisSubText">
                              {item.latest.created}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.notifications.map((noti, i) => (
                          <button
                            type="button"
                            key={i}
                            className="flex w-full gap-1 py-2 hover:rounded-lg hover:bg-[#7794F926]"
                            onClick={() =>
                              destroyNotificationTwo(noti.id, noti.url)
                            }
                          >
                            <div>
                              <Avatar>
                                <AvatarImage src={noti.img} />
                              </Avatar>
                            </div>
                            <div>
                              <div className="flex gap-2">
                                <span className="flex items-center gap-1 overflow-hidden text-sm font-medium text-grisText">
                                  {noti.name}
                                </span>
                                <span className="text-[10px] text-grisSubText">
                                  {noti.creator} - {noti.created}
                                </span>
                              </div>
                              <span className="w-9 overflow-hidden text-ellipsis text-xs font-normal text-grisSubText">
                                {noti.message}
                              </span>
                            </div>
                          </button>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : null}
            </>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationBell;
