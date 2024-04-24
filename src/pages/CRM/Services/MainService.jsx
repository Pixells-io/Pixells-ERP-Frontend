import React from "react";

import { IonIcon } from "@ionic/react";
import {
  chevronBack,
  chevronForward,
  ellipsisVertical,
  globeOutline,
} from "ionicons/icons";
import ServiceBlock from "./components/ServiceBlock";

import { useLoaderData} from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function MainService() {

  const { data } = useLoaderData();

  console.log(data[0]);

  return (
    <>
      <div className="flex w-full overflow-auto">
        <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden">
          <div className="flex gap-4 items-center">
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
            <div>crm</div>
          </div>

          {/* top content */}
          <div className="flex items-center gap-4">
            <div>
              <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
                SERVICES
              </h2>
            </div>
            <div className="flex gap-3 text-[#8F8F8F] items-center">
              <div className="text-xs">4 services</div>
              <div className="text-2xl">&bull;</div>
              <div className="text-xs">9 costumers</div>
              <div className="text-2xl">&bull;</div>
              <div className="text-xs">43 actvitties</div>
            </div>
          </div>

          {/* top content sub */}
          <div className="flex items-center gap-32 pl-3 pt-4">
            <div className="flex flex-col gap-2">
              <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
                Immigration
              </h2>
              <span className="font-medium text-xs text-grisText">
                Information
              </span>
            </div>
            <div className="flex gap-2 text-[#8F8F8F] self-start">
              <div className="text-xl">&bull;</div>
              <div className="text-xl">&bull;</div>
              <div className="text-xl">&bull;</div>
            </div>
          </div>

          {/* content */}
          <div className="flex justify-center bg-blancoBg h-full rounded-xl overflow-auto p-4">
            <div className="flex flex-col gap-6 w-full">
              <div className="bg-blancoForms rounded-lg p-4 flex flex-col gap-5">
                <p className="text-grisText text-sm font-medium">
                  Category Information
                </p>

                <div className="flex flex-col">
                  <p className="text-grisText text-[12px] font-medium">Name</p>
                  <span className="text-grisSubText text-[12px]">
                    {data[0].name}
                  </span>
                </div>

                <div>
                  <p className="text-grisText text-[12px] font-medium">
                    Description
                  </p>
                  <span className="text-grisSubText text-[12px]">
                      {data[0].description}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-grisText text-[12px] font-medium">
                    Services
                  </p>
                  {data[0].services?.map((service, i) => (
                      <span className="text-grisSubText text-[12px]">
                        {service.name}
                      </span>
                  ))}
                  +
                </div>
              </div>

              <div className="bg-blancoForms rounded-lg p-4 flex flex-col gap-4">
                <p className="text-grisText text-sm font-medium">
                  Responable Information
                </p>

                <div className="flex flex-col gap-2 pl-2">
                  <div>
                    <p className="text-grisText text-[12px] font-medium">
                      Manager
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-grisSubText text-[12px]">Diego Guzman</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pl-2">
                  <p className="text-grisText text-[12px] font-medium">
                    More Participants
                  </p>

                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-grisSubText text-[12px]">
                      Don Fomularo
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-grisSubText text-[12px]">
                      Clarissa Reynold’s
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-grisSubText text-[12px]">
                      Ana Lenovski
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blancoForms rounded-lg p-4">
                <p>Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right sidebar */}
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-[240px] overflow-hidden shrink-0">
        <div className="flex flex-col items-center gap-4">
          <p className="self-start font-poppins text-lg font-semibold">
            Indicators
          </p>
          <ServiceBlock />
          <ServiceBlock />

          <div className="flex flex-col self-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-blancoBox w-12 h-12 flex items-center justify-center rounded-lg">
                <p className="font-bold text-2xl text-grisText">05</p>
              </div>
              <div className="flex flex-col">
                <p className="text-grisText text-base font-medium">Created</p>
                <p className="text-grisSubText text-[10px] font-medium">
                  Days ago
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-blancoBox w-12 h-12 flex items-center justify-center rounded-lg">
                <Avatar className="rounded-lg w-full h-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="text-grisText text-base font-medium">
                  Created by
                </p>
                <p className="text-grisSubText text-[10px] font-medium">
                  Don Fomularo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#D7586B40] w-12 h-12 flex items-center justify-center rounded-lg">
                <p className="font-bold text-2xl text-[#D7586B]">05</p>
              </div>
              <div className="flex flex-col">
                <p className="text-grisText text-base font-medium">Updated</p>
                <p className="text-grisSubText text-[10px] font-medium">
                  Days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainService;
