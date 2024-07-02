import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ModalShowPDF({ modal, setModal, url }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Show PDF
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <iframe src={url} frameborder="0"></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowPDF;
