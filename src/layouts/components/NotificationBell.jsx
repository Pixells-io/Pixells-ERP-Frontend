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

import { notifications } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

function NotificationBell({ notifications, user }) {
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
            <div className="w-full flex gap-1 hover:bg-[#7794F926] hover:rounded-lg">
              <div>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <p className="text-grisText text-sm font-medium flex items-center gap-1">
                  CRM &bull;{" "}
                  <span className="text-grisSubText text-[10px]">
                    Hace 2 días
                  </span>
                </p>
                <span className="text-grisSubText text-xs font-medium">
                  Clarissa creó un nuevo cliente
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="rounded-full bg-[#D7586B] text-white h-5 w-5 flex justify-center">
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

export default NotificationBell;
