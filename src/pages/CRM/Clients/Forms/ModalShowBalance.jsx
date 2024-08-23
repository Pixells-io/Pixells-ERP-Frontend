import React, { useState, useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputRouter from "@/layouts/Masters/FormComponents/input";

function ModalShowBalance({ modal, setModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Historial de Pagos</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
          <span></span>
        </div>

        <DialogFooter className="px-8 py-4">
          <Button
            type="button"
            className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            onClick={() => setModal(false)}
          >
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalShowBalance;
