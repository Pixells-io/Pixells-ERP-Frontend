import React, { useState } from "react";

import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Options from "./Options";
import Camera from "./Camera";

function StepMenu({ setSection }) {
  const [option, setOption] = useState("none");

  const infoProduct = (e) => {
    if (e.code == "Enter") {
      setTimeout(() => {
        setSection("infoProduct");
      }, 2000);
    }
  }

  return (
    <>
      <DialogHeader className="border-b pt-2">
        <DialogTitle className="px-4 py-4 text-center font-roboto text-xl font-medium text-[#44444F]">
          DIONE
        </DialogTitle>
      </DialogHeader>

      <DialogDescription className="hidden"></DialogDescription>
      <div className="flex flex-col gap-y-8">
        <Options option={option} setOption={setOption} />
        <div className="flex h-[226px] w-full justify-center">
          {option == "camera" && <Camera setSection={setSection} />}
          {option == "manual" && (
            <div className="w-3/4 flex flex-col gap-y-1">
              <h2 className="text-center text-xs font-normal font-roboto text-grisText">INGRESA</h2>
              <input type={"text"} className={"bg-inherit rounded-[10px] h-[30px] px-4 border border-grisDisabled text-sm font-medium text-[#44444f]"} onKeyDown={(e) => infoProduct(e)} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StepMenu;
