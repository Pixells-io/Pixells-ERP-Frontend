import React, { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import StepMenu from "./StepMenu";
import StepInfoProduct from "./StepInfoProduct";

function ConsultArticle({ modal, setModal }) {
  const [section, setSection] = useState("menu");

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex h-full max-h-[701px] w-full max-w-[462px] flex-col bg-blancoBg p-0">
        {section == "menu" ? (
          <StepMenu
            setSection={setSection}
          />
        ) : 
        section == "infoProduct" ? (<StepInfoProduct setSection={setSection}/>) : null}
      </DialogContent>
    </Dialog>
  );
}

export default ConsultArticle;
