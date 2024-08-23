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

function ModalShowBalance({ modal, setModal, pays }) {
  console.log(pays);
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Historial de Pagos</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 rounded-lg p-4 font-roboto">
          {pays.map((pay, i) => (
            <div className="rounded-xl border border-grisHeading p-2">
              <div className="flex gap-2">
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  Referencia:
                </span>
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  {pay.ref}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  Comentario:
                </span>
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  {pay.comments}
                </span>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  Monto:
                </span>
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  $ {pay.ammount}
                </span>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  Fecha:
                </span>
                <span className="font-roboto text-sm font-normal text-grisHeading">
                  {pay.date}
                </span>
              </div>
            </div>
          ))}
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
