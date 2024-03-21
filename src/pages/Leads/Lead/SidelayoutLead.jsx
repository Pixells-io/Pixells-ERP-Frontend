import React from "react";
import { Outlet } from "react-router-dom";
import TopMenuCRM from "@/layouts/CRM/components/TopMenuCRM";

import { IonIcon } from "@ionic/react";
import { create, mail } from "ionicons/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function SidelayoutLead() {
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        {/* Top block */}
        <div className="flex flex-col bg-gris gap-4 rounded-lg px-[14px] py-4">
          <TopMenuCRM />
        </div>

        {/* Bottom block */}
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md px-[14px] py-4 overflow-auto">
          <p className="font-semibold text-lg font-poppins text-grisHeading">
            General Information
          </p>

          <div className="bg-blancoBox rounded-lg py-4 px-7 flex justify-between">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-grisText text-[15px] font-medium">
                  Business Name
                </p>
                <span className="text-grisSubText text-xs">
                  Original Constructor
                </span>
              </div>
              <div>
                <p className="text-grisText text-[15px] font-medium">
                  Contact Name
                </p>
                <span className="text-grisSubText text-xs">
                  Pedro Valenzuela
                </span>
              </div>
              <div>
                <p className="text-grisText text-[15px] font-medium">
                  Celphone
                </p>
                <span className="text-grisSubText text-xs">456 780 342</span>
              </div>
              <div>
                <p className="text-grisText text-[15px] font-medium">Email</p>
                <span className="text-grisSubText text-xs">
                  pedrito@gmai.com
                </span>
              </div>
            </div>
            <div className="text-grisText">
              <IonIcon icon={create} size=""></IonIcon>
            </div>
          </div>

          <div className="px-[10px] flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg font-poppins text-grisHeading">
                Way of Contact
              </p>

              <p className="text-grisText text-base font-medium">
                Service of Interest
              </p>

              <div className="flex gap-2 overflow-auto">
                <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
                  Immigration
                </Badge>
                <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
                  Entity
                </Badge>
                <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
                  Pay Roll
                </Badge>
                <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
                  Pay Roll
                </Badge>
                <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
                  Pay Roll
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex justify-center items-center rounded-lg bg-blancoBox w-12 h-12">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <p className="text-grisText text-[15px] font-medium">
                    Follow By
                  </p>
                  <span className="text-grisSubText text-xs">Don Fomularo</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-grisText rounded-lg bg-blancoBox flex justify-center items-center w-12 h-12">
                  <div className="flex">
                    <IonIcon icon={mail} className="h-8 w-8"></IonIcon>
                  </div>
                </div>
                <div>
                  <p className="text-grisText text-[15px] font-medium">Email</p>
                  <span className="text-grisSubText text-xs">
                    Contact Method
                  </span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-lg font-poppins text-grisHeading">
                Way of Contact
              </p>
              <span className="text-grisSubText text-xs">
                A statement or a piece of writing that tells what something or
                someone is like: [ C ] Your description of Della was hilarious.
                [ U ] Boats.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default SidelayoutLead;
