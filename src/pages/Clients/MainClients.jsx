import React, { useState } from "react";

import { Progress } from "@/components/ui/progress";

import { IonIcon } from "@ionic/react";
import {
  cart,
  card,
  informationCircle,
  home,
  chatbubbles,
  chevronBack,
  chevronForward,
  checkmarkCircleOutline,
} from "ionicons/icons";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CLIENT_MENU = [
  { name: "Home", icon: home, path: "/clients" },
  { name: "Services", icon: cart, path: "/" },
  { name: "Personal Information", icon: informationCircle, path: "/" },
  { name: "Payment Center", icon: card, path: "/" },
  { name: "Messages", icon: chatbubbles, path: "/" },
];

function MainClients() {
  const [progress, setProgress] = useState(80);
  return (
    <div className="flex h-full px-4 font-roboto pb-4">
      {/* sidebar left */}
      <div className="flex flex-col gap-4 w-[280px] shrink-0">
        <div className="flex flex-col gap-4 bg-gris h-full rounded-md p-2">
          <p className="font-semibold text-lg font-poppins text-grisHeading px-4 py-4">
            Menu
          </p>
          <div className="flex flex-col gap-4">
            {CLIENT_MENU.map((item) => (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blancoBox text-primarioBotones py-1 px-4 rounded-lg"
                    : "text-grisText px-4 py-1"
                }
              >
                <div className="flex items-center gap-4">
                  <IonIcon icon={item.icon} size="large"></IonIcon>
                  <p className="font-semibold font-poppins">{item.name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* main content */}
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
            <div className="text-sm">topics &gt; home </div>
          </div>

          {/* top content */}
          <div className="flex flex-col">
            <div>
              <h2 className=" font-poppins font-bold text-xl text-[#44444F]">
                WELCOME WALTER
              </h2>
            </div>
            <div className="flex gap-3 text-[#8F8F8F] items-center">
              <div className="text-sm">21 FEB 2024</div>
            </div>
          </div>

          {/* content main */}
          <div className="flex flex-col gap-4 pt-8">
            <div>
              <p className="text-[22px] font-poppins font-bold text-grisHeading">
                Active Services
              </p>
            </div>

            <div className="flex gap-4 w-full overflow-scroll">
              <div className="flex flex-col w-44 rounded-2xl bg-[#5B89FF] p-3 gap-2 shrink-0">
                <div className="flex bg-[#D7586B] rounded-full px-3 items-center justify-center w-fit">
                  <span className="text-white text-[10px] font-medium">
                    Pending Activity
                  </span>
                </div>
                <div className="w-fit flex flex-col">
                  <p className="text-grisHeading text-sm font-semibold">
                    IMMIGRATION
                  </p>
                  <span className="text-blancoBox text-xs font-medium line-clamp-none">
                    Service
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-grisDisabled text-[9px]">
                    {progress}%
                  </span>
                  <Progress value={progress} className="w-full h-1" />
                </div>
              </div>

              <div className="flex flex-col w-44 rounded-2xl bg-blancoBox2 p-3 gap-2 shrink-0">
                <div className="flex border-primarioBotones border rounded-full px-3 items-center justify-center w-fit">
                  <span className="text-primarioBotones text-[10px] font-medium">
                    In process
                  </span>
                </div>
                <div className="w-fit flex flex-col">
                  <p className="text-grisHeading text-sm font-semibold">
                    ENTITY CREATION
                  </p>
                  <span className="text-grisSubText text-xs font-medium line-clamp-none">
                    Service
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-grisSubText text-[9px]">
                    {progress}%
                  </span>
                  <Progress value={progress} className="w-full h-1" />
                </div>
              </div>

              <div className="flex flex-col w-44 rounded-2xl bg-blancoBox2 p-3 gap-2 shrink-0">
                <div className="flex border-primarioBotones border rounded-full px-3 items-center justify-center w-fit">
                  <span className="text-primarioBotones text-[10px] font-medium">
                    In process
                  </span>
                </div>
                <div className="w-fit flex flex-col">
                  <p className="text-grisHeading text-sm font-semibold">
                    TAX PREPARATION
                  </p>
                  <span className="text-grisSubText text-xs font-medium line-clamp-none">
                    Service
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-grisSubText text-[9px]">
                    {progress}%
                  </span>
                  <Progress value={progress} className="w-full h-1" />
                </div>
              </div>

              <div className="flex flex-col w-44 rounded-2xl bg-blancoBox2 p-3 gap-2 shrink-0">
                <div className="flex border-primarioBotones border rounded-full px-3 items-center justify-center w-fit">
                  <span className="text-primarioBotones text-[10px] font-medium">
                    In process
                  </span>
                </div>
                <div className="w-fit flex flex-col">
                  <p className="text-grisHeading text-sm font-semibold">
                    AUDITS
                  </p>
                  <span className="text-grisSubText text-xs font-medium line-clamp-none">
                    Service
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-semibold text-grisSubText text-[9px]">
                    {progress}%
                  </span>
                  <Progress value={progress} className="w-full h-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full gap-8 py-8 overflow-scroll">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="bg-grisHeading text-white rounded-full px-10 py-3 flex justify-center items-center">
                <p className="font-bold text-sm">Interview</p>
              </div>
              <div className="flex gap-1 items-center text-[#D7586B]">
                <span className="font-medium text-xs">1 / 3</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="border-grisText border text-grisText rounded-full px-10 py-3 flex justify-center items-center">
                <p className="text-sm">Collect Documents</p>
              </div>
              <div className="flex gap-1 items-center text-grisText">
                <span className="font-medium text-xs">0 / 6</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="border-grisText border text-grisText rounded-full px-10 py-3 flex justify-center items-center">
                <p className="text-sm">Documents Ready</p>
              </div>
              <div className="flex gap-1 items-center text-grisText">
                <span className="font-medium text-xs">1 / 4</span>
                <IonIcon icon={checkmarkCircleOutline}></IonIcon>
              </div>
            </div>
          </div>

          <div className="bg-blancoBg w-full gap-10 flex flex-col rounded-lg p-4">
            <div className="flex gap-4 text-primarioBotones px-6 w-fit">
              <div className="flex text-sm border-b-2 px-4 border-primarioBotones">
                <p className="text-sm font-semibold">BUSINESS INFO</p>
              </div>
              <div className="text-grisSubText text-sm px-4 border-b border-grisSubText">
                <p className="text-sm">CONTACT INFO</p>
              </div>
              <div className="text-grisSubText text-sm border-b px-4 border-grisSubText">
                <p className="text-sm">BANK INFO</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex flex-col w-96 gap-4">
                <input
                  type="text"
                  placeholder="Write your business name"
                  className=" w-full border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
                />
                <input
                  type="text"
                  placeholder="Write your business name"
                  className=" w-full border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
                />
                <input
                  type="text"
                  placeholder="Write your business name"
                  className=" w-full border-0 border-b border-grisSubText focus:border-primarioBotones focus:border-b-2 rounded-none bg-transparent !ring-0 !ring-offset-0"
                />
                <div className="flex justify-end gap-6 pt-8">
                  <Button
                    variant="outline"
                    className="px-8 border-grisSubText text-grisSubText"
                  >
                    Cancel
                  </Button>
                  <Button className="bg-primarioBotones px-8">Save</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar right  */}
      <div className="flex flex-col bg-gris items-center py-4 ml-4 rounded-lg space-y-4 w-[310px] overflow-scroll shrink-0">
        <div className="flex w-full px-4 pt-4">
          <p className="text-[18px] font-semibold text-grisHeading">GENERAL</p>
        </div>
        <div className="flex flex-col gap-5 rounded-lg bg-blancoBox2 w-72 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[28px] font-semibold text-grisHeading">
              DOCUMENTS
            </p>
            <div className="text-[30px] text-primarioBotones font-medium">
              +
            </div>
            <div className="text-[12px] font-medium text-grisSubText">
              View All
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-4">
              <div className="col-span-3 flex gap-2 items-center">
                <div className="bg-blancoBg w-12 h-12 rounded-lg shrink-0"></div>
                <div>
                  <p className="text-grisHeading font-medium">Document 1</p>
                  <span className="font-medium text-[10px] text-grisSubText line-clamp-none">
                    Uplaoded &bull; 02 Feb 2024
                  </span>
                </div>
              </div>
              <div className="col-span-1 self-end pb-1 pl-2">
                <span className="text-[8px] font-medium text-grisHeading border-grisHeading border rounded-2xl py-[2px] px-2">
                  Download
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-3 flex gap-2 items-center">
                <div className="bg-lime-200 w-12 h-12 rounded-lg shrink-0"></div>
                <div>
                  <p className="text-grisHeading font-medium">Document 1</p>
                  <span className="font-medium text-[10px] text-grisSubText line-clamp-none">
                    Uplaoded &bull; 02 Feb 2024
                  </span>
                </div>
              </div>
              <div className="col-span-1 self-end pb-1 pl-2">
                <span className="text-[8px] font-medium text-grisHeading border-grisHeading border rounded-2xl py-[2px] px-2">
                  Download
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4">
              <div className="col-span-3 flex gap-2 items-center">
                <div className="bg-pink-200 w-12 h-12 rounded-lg shrink-0"></div>
                <div>
                  <p className="text-grisHeading font-medium">Document 1</p>
                  <span className="font-medium text-[10px] text-grisSubText line-clamp-none">
                    Uplaoded &bull; 02 Feb 2024
                  </span>
                </div>
              </div>
              <div className="col-span-1 self-end pb-1 pl-2">
                <span className="text-[8px] font-medium text-grisHeading border-grisHeading border rounded-2xl py-[2px] px-2">
                  Download
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainClients;
