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

import { chatbubble } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function NotificationChat() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IonIcon
            icon={chatbubble}
            size="large"
            className="text-primario"
          ></IonIcon>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="">
          <DropdownMenuItem className="">
            <div className="w-full flex gap-1 hover:bg-[#7794F926] hover:rounded-lg">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-grisText text-sm font-medium">
                  Don Fomularo
                </p>
                <span className="text-grisSubText text-xs font-medium">
                  Hey man, how is it going today?
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="rounded-full bg-[#00A259] text-white h-5 w-5 flex justify-center">
                  2
                </span>
                <span className="text-grisSubText text-[10px]">13:27</span>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationChat;
