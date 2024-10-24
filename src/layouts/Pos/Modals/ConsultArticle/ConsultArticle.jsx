import React, { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import StepMenu from "./StepMenu";
import StepInfoProduct from "./StepInfoProduct";

function ConsultArticle() {
  const [section, setSection] = useState("menu");
  const [modal, setModal] = useState(false);

  const getCodeProduct = (e) => {
    console.log(e);
    setSection("infoProduct");
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger>
        <div className="w-full whitespace-nowrap rounded-3xl bg-[#F0F0F0] p-3 font-roboto text-xs font-medium text-[#44444F] hover:bg-blancoBox2">
          CONSULTAR ARTICULO
        </div>
      </DialogTrigger>
      <DialogContent className="flex h-full max-h-[701px] w-full max-w-[462px] flex-col bg-blancoBg p-0">
        {section == "menu" ? (
          <StepMenu getCodeProduct={getCodeProduct} />
        ) : section == "infoProduct" ? (
          <StepInfoProduct setSection={setSection} />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

export default ConsultArticle;
