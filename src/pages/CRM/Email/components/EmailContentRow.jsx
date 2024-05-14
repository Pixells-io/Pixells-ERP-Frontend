import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function EmailContentRow() {
  return (
    <div className="flex h-16 bg-[#7794F91A] border-b border-t">
      <div className="grid grid-cols-12 items-center gap-2 w-full">
        <div className="col-span-1 flex gap-2 justify-center items-center">
          <div>0</div>
          <div className="flex items-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://demoback.pixells.io/images/r.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2 items-center">
          <div className="self-start">
            <p className="text-[13px] text-grisText font-medium">
              Amazon México
            </p>
            <span className="text-[10px] text-grisSubText font-normal line-clamp-none">
              contact@amazon.com
            </span>
          </div>
        </div>
        <div className="col-span-7 flex gap-2 items-center">
          <p className="text-[13px] text-grisText font-medium">
            You have recieved a new email &bull;
          </p>
          <span className="text-[12px] text-grisSubText font-normal">
            Tim Horton’s is the new element you have to meet
          </span>
        </div>
        <div className="col-span-2 flex gap-2 items-center">
          <span className="text-[12px] text-grisSubText font-normal">
            27/mar/24, 10:05
          </span>
        </div>
      </div>
    </div>
  );
}

export default EmailContentRow;
