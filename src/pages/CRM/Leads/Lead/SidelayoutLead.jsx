import React from "react";
import { useLoaderData, Outlet } from "react-router-dom";
import TopMenuCRM from "@/layouts/CRM/components/TopMenuCRM";

import { IonIcon } from "@ionic/react";
import { create, person } from "ionicons/icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

function SidelayoutLead() {
  const {
    data: lead,
    services,
    follow_ups,
    user_assigned,
    extra_information: info,
  } = useLoaderData();

  function Capitalize(string) {
    if (string == undefined) return "";
    return (string = string[0]?.toUpperCase() + string?.slice(1));
  }

  return (
    <div className="flex h-full px-4 pb-4 font-roboto">
      <div className="flex w-[280px] shrink-0 flex-col gap-4">
        {/* Top block */}
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-[14px] py-4">
          <TopMenuCRM />
        </div>

        {/* Bottom block */}
        <div className="flex h-full flex-col gap-4 overflow-auto rounded-md bg-gris px-[14px] py-4">
          <p className="font-poppins text-lg font-semibold text-grisHeading">
            General Information
          </p>

          <div className="flex justify-between rounded-lg bg-blancoBox px-7 py-4">
            <div className="flex flex-col gap-2">
              <div className="">
                <p className="text-[15px] font-medium text-grisText">
                  Business Name
                </p>
                <span className="text-xs text-grisSubText">
                  {Capitalize(info?.business_name)}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Contact Name
                </p>
                <span className="text-xs text-grisSubText">
                  {Capitalize(info?.contact_name)}{" "}
                  {Capitalize(info?.contact_middle_name)}{" "}
                  {Capitalize(info?.contact_last_name)}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">
                  Cellphone
                </p>
                <span className="text-xs text-grisSubText">
                  {info?.contact_phone} <br />
                  {info?.business_phone}
                </span>
              </div>
              <div>
                <p className="text-[15px] font-medium text-grisText">Email</p>
                <span className="text-xs text-grisSubText">
                  {info?.contact_email}
                </span>
              </div>
            </div>
            <div className="text-grisText">
              <IonIcon icon={create} size=""></IonIcon>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-[10px]">
            <div className="flex flex-col gap-2">
              <p className="font-poppins text-lg font-semibold text-grisHeading">
                Way of Contact
              </p>

              <p className="text-base font-medium text-grisText">
                Service of Interest
              </p>

              <div className="flex gap-2 overflow-auto">
                {services?.map((service, i) => (
                  <Badge
                    key={i}
                    className="shrink-0 bg-primario py-[6px] text-[10px] text-blancoBox"
                  >
                    {service?.name}
                  </Badge>
                ))}
                {/* <Badge className="bg-primario text-blancoBox text-[10px] py-[6px] shrink-0">
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
                </Badge> */}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox">
                  <img
                    src={user_assigned?.user_image}
                    className="rounded-md"
                    alt=""
                  />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-grisText">
                    Follow By
                  </p>
                  <span className="text-xs text-grisSubText">
                    {user_assigned?.name} {user_assigned?.last_name}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blancoBox text-grisText">
                  <div className="flex">
                    <IonIcon icon={person} className="h-8 w-8"></IonIcon>
                  </div>
                </div>
                <div>
                  <p className="text-[15px] font-medium text-grisText">
                    {follow_ups[0]?.way_of_contact}
                  </p>
                  <span className="text-xs text-grisSubText">
                    Contact Method
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[lead, services, info, follow_ups]} />
    </div>
  );
}

export default SidelayoutLead;
