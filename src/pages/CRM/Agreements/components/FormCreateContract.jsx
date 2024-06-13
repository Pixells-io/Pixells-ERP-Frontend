import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function FormCreateContract({ modal, setModal, customers }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Select User
          </DialogTitle>
        </DialogHeader>
        <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
          <span>Oli</span>
        </div>
        <DialogFooter className="px-10 pb-6">
          <Button className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FormCreateContract;
