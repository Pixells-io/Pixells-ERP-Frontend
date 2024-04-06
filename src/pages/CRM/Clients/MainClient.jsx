import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function MainClient() {
  return (
    <>
      <div className="flex w-full overflow-auto">
        <div className="flex flex-col bg-gris px-8 py-4 ml-4 rounded-lg space-y-4 w-full overflow-hidden"></div>
      </div>

      {/* right sidebar */}
      <div className="flex flex-col bg-gris items-center py-4 ml-4 rounded-lg space-y-4 w-[310px] overflow-scroll shrink-0">
        <div className="flex flex-col gap-5 rounded-lg bg-blancoBox2 w-72 p-4">
          <div className="flex ">
            <div>
              <p className="text-[16px] font-medium text-grisText">Name</p>
              <span className="text-[10px] text-grisSubText font-medium">
                Original Constructors LLC
              </span>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-medium text-grisText">Address</p>
            <span className="text-[10px] text-grisSubText font-medium">
              Mr John Smith. 132, My Street, Kingston, <br />
              New York 12401
            </span>
            <div className="flex items-center  justify-between">
              <span className="text-[10px] text-grisSubText font-medium">
                Mr John Smith. 132, My Street, Kingston, <br />
                New York 12401
              </span>
              <span className="text-[8px] font-medium text-grisHeading border-grisHeading border rounded-2xl py-[2px] px-2">
                Primary
              </span>
            </div>
            <span className="text-[10px] text-grisSubText font-medium">
              Mr John Smith. 132, My Street, Kingston, <br />
              New York 12401
            </span>
            <span className="text-[10px] text-grisSubText font-medium">
              Mr John Smith. 132, My Street, Kingston, <br />
              New York 12401
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-lg bg-blancoBox2 w-72 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              CONTACTS
            </p>
            <div className="text-[30px] text-primarioBotones font-medium">
              +
            </div>
            <div className="text-[12px] font-medium text-grisSubText">
              View All
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-grisText">Ernest Robles</p>
                <span className="text-[8px] font-medium text-grisHeading border-grisHeading border rounded-2xl py-[2px] px-2">
                  Primary
                </span>
              </div>
              <div className="flex gap-2 items-center text-grisSubText text-[10px]">
                <span>ernest@gmail.com</span>
                <span>&bull;</span>
                <span>CEO</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-grisText">Catalina Robins</p>
              </div>
              <div className="flex gap-2 items-center text-grisSubText text-[10px]">
                <span>catalina@outlook.com</span>
                <span>&bull;</span>
                <span>CTO</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <p className="text-grisText">Carlos Ramirez</p>
              </div>
              <div className="flex gap-2 items-center text-grisSubText text-[10px]">
                <span>carlos@gmail.com</span>
                <span>&bull;</span>
                <span>Manager</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-lg bg-blancoBox2 w-72 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
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

        <div className="flex flex-col gap-5 rounded-lg bg-blancoBox2 w-72 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[22px] font-semibold text-grisHeading">
              GENERAL STATUS
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <div className="flex flex-col w-14 h-14 bg-blancoBox rounded-lg items-center justify-center">
                <p className="text-[12px] text-grisText">Dic</p>
                <span className="text-grisText text-2xl font-bold">05</span>
              </div>
              <div className="flex flex-col">
                <p className="text-grisText font-medium">Last Service</p>
                <span className="font-medium text-[10px] text-grisSubText">
                  Immigration for Larissa
                </span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex flex-col w-14 h-14 bg-blancoBox rounded-lg items-center justify-center">
                <p className="text-[12px] text-grisText">Dic</p>
                <span className="text-grisText text-2xl font-bold">19</span>
              </div>
              <div className="flex flex-col">
                <p className="text-grisText font-medium">Last Update</p>
                <span className="font-medium text-[10px] text-grisSubText">
                  Walter Robledo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainClient;
