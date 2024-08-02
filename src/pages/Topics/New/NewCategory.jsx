import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputRouter from "@/layouts/Masters/FormComponents/input";

function NewCategory({ modal, setModal, functionModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        <div className="rounded-xl bg-[#FBFBFB] px-4">
          <div className="mb-8 grid grid-cols-12 gap-x-8 gap-y-4">
            <div className="col-span-12">
              <div className="flex items-center gap-x-2">
                <img
                  src={"https://picsum.photos/id/237/200/300"}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-semibold text-grisText">
                  Don Formularo
                </span>
              </div>
            </div>

            <div className="col-span-12">
              <InputRouter
                name={"category"}
                placeholder={"Agrega una Categoría"}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <DialogDescription></DialogDescription>

        <DialogFooter className="px-6 pb-6">
          <Button
            form="formDataTab"
            className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
          >
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewCategory;
