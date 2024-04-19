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
            <div className="w-full flex">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p>Don Fomularo</p>
                <span>Hey man, how is it going today?</span>
              </div>
              <div className="flex flex-col">
                <span>2</span>
                <span>13:27</span>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NotificationChat;
