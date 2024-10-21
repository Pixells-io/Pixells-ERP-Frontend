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

  return (
    <>
      <DialogHeader className="border-b pt-2">
        <DialogTitle className="px-4 py-4 text-center font-roboto text-xl font-medium text-[#44444F]">
          DIONE
        </DialogTitle>
      </DialogHeader>

      <DialogDescription className="hidden"></DialogDescription>

      <Options option={option} setOption={setOption} />
      <div className="flex h-[226px] w-full justify-center">
        {option == "camera" && <Camera setSection={setSection} />}
      </div>
    </>
  );
}

export default StepMenu;
