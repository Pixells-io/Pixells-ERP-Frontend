import React from "react";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalConfirmation({
  title,
  description,
  modal,
  setModal,
  modalFunction,
}) {
  return (
    <Dialog open={modal} onOpenChange={setModal} >
      <DialogContent className="p-6 border-0 bg-[#242424] max-w-[250px]">
        <DialogHeader className="">
          <DialogTitle className="font-roboto text-md font-semibold text-white">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="font-roboto text-grisSubText text-xs">{description}</DialogDescription>

        <DialogFooter >
            <div className="w-full flex justify-between gap-2">
          <Button className="w-1/2 font-roboto text-xs font-semibold bg-[#343434]" onClick={() => setModal(false)}>Cancel</Button>
          <Button className="w-1/2 font-roboto text-xs font-semibold bg-primarioBotones " onClick={() => modalFunction()}>Confirm</Button>

            </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConfirmation;
