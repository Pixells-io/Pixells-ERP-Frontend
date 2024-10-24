import React, { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StepMenu from "./StepMenu";

function Refund({}) {
  const [modal, setModal] = useState(false);
  const [section, setSection] = useState("menu");

  const getCodeProduct = (e) => {
    console.log(e);
    setSection("infoProduct");
  };

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        setSection("menu");
      }}
    >
      <DialogTrigger>
        <div className="w-full whitespace-nowrap rounded-3xl bg-[#F0F0F0] p-3 font-roboto text-xs font-medium text-[#44444F] hover:bg-blancoBox2">
          DEVOLUCIÓN
        </div>
      </DialogTrigger>
      <DialogContent className="flex h-full max-h-[492px] w-full max-w-[462px] flex-col overflow-auto bg-blancoBg p-0">
        {section == "menu" ? (
          <StepMenu getCodeProduct={getCodeProduct} />
        ) : (
          <div>vista otra pag</div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default Refund;
