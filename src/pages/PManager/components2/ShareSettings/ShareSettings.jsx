import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
function ShareSettins({
  id,
  users,
  positions,
  areas,
  creator,
  shared,
  modal,
  setModal,
  hasButton = true,
  SaveShared,
  editShared,
}) {
  const [step, setStep] = useState(1);

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        setStep(1);
      }}
    >
      {hasButton && (
        <DialogTrigger className="flex h-8 w-20 items-center justify-center gap-1 rounded-lg bg-[#00A9B3] text-xs text-white">
          Compartir
        </DialogTrigger>
      )}
      <DialogContent
        className={`max-h-[80vh] overflow-auto rounded-[0px] px-0 pt-0 sm:max-w-[450px] ${step == 1 && "pb-[50px]"}`}
      >
        <DialogHeader className="border-b">
          <DialogTitle className="px-4 py-3 font-poppins text-xs font-semibold text-grisHeading">
            {step == 1
              ? "Compartir este objetivo"
              : "Configuración para Compartir"}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="hidden"></DialogDescription>

        {/* step 1 */}
        <StepOne
          step={step}
          setStep={setStep}
          users={users}
          positions={positions}
          areas={areas}
          creator={creator}
          id={id}
          shared={shared}
          SaveShared={SaveShared}
          editShared={editShared}
        />

        {/* step 2 */}
        <StepTwo step={step} setStep={setStep} />
      </DialogContent>
    </Dialog>
  );
}

export default ShareSettins;
