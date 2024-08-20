import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward, informationCircle } from "ionicons/icons";
import { useLoaderData } from "react-router-dom";
import NavigationHeader from "@/components/navigation-header";

function MainInduction() {
  const { data } = useLoaderData();
  return (
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col gap-4 rounded-lg bg-gris px-8 py-4">
        {/* navigation inside */}
        <NavigationHeader />

        {/* top content */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="font-poppins text-xl font-bold text-[#44444F]">
              ORGANIZATIONAL DEVELOPMENT
            </h2>
          </div>
          <div className="flex items-center gap-3 font-roboto text-[#8F8F8F]">
            {/* <div className="text-xs">
            {leads?.data.length == 0 ? "0" : leads?.data.length}{" "}
            {leads?.data.length == 1 ? "lead" : "leads"}
          </div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">
            {loaderClients?.data.length == 0
              ? "0"
              : loaderClients?.data.length}{" "}
            {loaderClients?.data.length == 1 ? "client" : "clients"}
          </div> */}
          </div>
        </div>
        <div>
          <p className="font-poppins text-xl font-bold text-[#44444F]">
            Inductions
          </p>
        </div>

        <div></div>

        <div className="overflow-auto rounded-lg bg-blancoBg pt-2">
          <div className="flex flex-col justify-center">
            <div className="grid w-full grid-cols-5 px-4 py-2 text-center">
              <div className="pl-4 text-left">
                <p className="text-sm font-semibold text-grisText">NAME</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">POSITION</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">STATUS</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">DATE</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-grisText">SCORE</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2 text-center">
              {data.map((row, i) => (
                <div key={i} className="grid w-full grid-cols-5 border-t py-4">
                  <div className="pl-4 text-left">
                    <p className="text-xs text-grisHeading">{row?.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-grisHeading">{row?.position}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    {row?.status === 1 ? (
                      <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                        Completed
                      </p>
                    ) : (
                      <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                        Pending
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {row?.status === 1 ? (
                      <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                        {row?.date}
                      </p>
                    ) : (
                      <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                        Pending
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {row?.status === 1 ? (
                      <p className="w-fit rounded-full bg-[#00A25940] px-3 py-1 text-xs text-[#00A259]">
                        {row?.qualify}
                      </p>
                    ) : (
                      <p className="w-fit rounded-full bg-[#7794F940] px-3 py-1 text-xs text-[#7794F9]">
                        Pending
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInduction;
