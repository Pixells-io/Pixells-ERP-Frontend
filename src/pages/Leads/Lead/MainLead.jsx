import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import {
  card,
  checkmarkCircle,
  chevronBackCircle,
  chevronForwardCircle,
  cloud,
  document,
  mail,
  person,
  syncCircle,
  time,
} from "ionicons/icons";

function MainLead() {
  // const data = useLoaderData()
  // const { id } = useParams();
  // console.log(id);
  return (
    <div className="flex w-full">
      <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full">
        {/* navigation inside */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 text-gris2">
            <IonIcon icon={chevronBackCircle} className="w-12 h-12"></IonIcon>
            <IonIcon
              icon={chevronForwardCircle}
              className="w-12 h-12"
            ></IonIcon>
          </div>
          <div>crm</div>
        </div>

        {/* top content */}
        <div className="flex items-center gap-16">
          <div>
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              LEADS INFORMATION
            </h2>
          </div>
          <div className="flex gap-3 text-[#8F8F8F] items-center">
            <div>4 services</div>
            <div className="text-2xl">&bull;</div>
            <div>9 Leads</div>
            <div className="text-2xl">&bull;</div>
            <div>43 activities</div>
          </div>
        </div>

        <div className="flex items-center gap-64 pl-3 pt-4">
          <div>
            <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
              Follow Up
            </h2>
          </div>
          <div className="flex gap-2 text-[#8F8F8F] items-center">
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
            <div className="text-2xl">&bull;</div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="bg-primario w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon icon={person} className="w-6 h-6 text-grisBg"></IonIcon>
          </div>
          <div className="w-[70px] border-primario border-t"></div>

          <div className="border-gris2 border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon icon={cloud} className="w-6 h-6 text-gris2"></IonIcon>
          </div>
          <div className="w-[70px] border-grisDisabled border-t"></div>

          <div className="border-grisDisabled border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon
              icon={syncCircle}
              className="w-6 h-6 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="w-[70px] border-grisDisabled border-t"></div>

          <div className="border-grisDisabled border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon
              icon={mail}
              className="w-6 h-6 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="w-[70px] border-grisDisabled border-t"></div>

          <div className="border-grisDisabled border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon
              icon={document}
              className="w-6 h-6 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="w-[70px] border-grisDisabled border-t"></div>

          <div className="border-grisDisabled border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon
              icon={card}
              className="w-6 h-6 text-grisDisabled"
            ></IonIcon>
          </div>
          <div className="w-[70px] border-grisDisabled border-t"></div>

          <div className="border-grisDisabled border-[1px] w-8 h-8 rounded-full flex justify-center items-center">
            <IonIcon
              icon={checkmarkCircle}
              className="w-6 h-6 text-grisDisabled"
            ></IonIcon>
          </div>
        </div>

        <div className="flex items-center gap-64 pl-3 pt-4">
          <h2 className=" font-poppins font-bold text-2xl text-[#44444F]">
            Updates
          </h2>
        </div>

        <div className="flex flex-col bg-blancoBg w-full h-full overflow-auto  items-center">
          {/* <div className="h-12 bg-red-900">1</div> */}
          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>

          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>

          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>

          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>

          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>

          <div className="my-6 shrink-0 flex flex-col w-[510px] h-[112px] bg-gris shadow-sm drop-shadow-sm rounded-lg">
            {/* card header */}
            <div className="flex justify-between border-b-[0.5px] border-[#D7D7D7]">
              <div className="flex items-center p-1 gap-2">
                <IonIcon
                  icon={syncCircle}
                  size="large"
                  className="text-primario"
                ></IonIcon>

                <p className="text-gris2 font-medium text-[15px]">Follow Up</p>
              </div>
              <div className="flex items-center p-1 text-grisSubText gap-2">
                <div className="flex items-center gap-1">
                  <IonIcon icon={time} className=""></IonIcon>
                  <span className="text-[10px]">16 feb 2024</span>
                </div>
                <div className="text-2xl">&bull;</div>
                <span className="text-[10px]">11:45 a.m.</span>
              </div>
            </div>
            {/* card content */}
            <div className="flex justify-between px-3">
              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-grisSubText text-xs font-medium">Type</p>
                  <p className="text-grisSubText text-xs font-medium">
                    Frecuency
                  </p>
                  <p className="text-grisSubText text-xs font-medium">
                    Category
                  </p>
                </div>
                <div className=" flex flex-col gap-1">
                  <span className="text-grisHeading text-xs">Immigration</span>
                  <span className="text-grisHeading text-xs">AA</span>
                  <span className="text-grisHeading text-xs">Monthly</span>
                </div>
              </div>
              <div className="self-end flex items-center justify-center h-4 w-4 border-[1px] border-grisSubText rounded-full text-grisSubText">
                <span className="text-[10px] font-medium">1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLead;
