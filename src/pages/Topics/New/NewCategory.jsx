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
import { Form } from "react-router-dom";

function NewCategory({ modal, setModal, functionModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="h-[380px] overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        <div className="flex h-[280px] flex-col gap-y-8 rounded-xl bg-[#FBFBFB] px-4">
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

            <Form className="col-span-12 flex h-full flex-col gap-y-8">
              <InputRouter
                name={"category"}
                placeholder={"Agrega una Categoría"}
                type={"text"}
              />
              <div className="flex justify-end">
                <Button
                  form="formDataTab"
                  className="h-8 justify-normal rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
                >
                  Continuar
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <DialogDescription></DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default NewCategory;
