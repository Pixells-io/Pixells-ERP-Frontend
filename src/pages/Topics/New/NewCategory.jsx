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
import { Form } from "react-router-dom";
import { Input } from "@/components/ui/input";

function NewCategory({ modal, setModal, functionModal }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Topic
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-y-8 rounded-xl bg-[#FBFBFB] px-4">
          <div className="grid grid-cols-12 gap-x-8 gap-y-4">
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

            <Form
              id="form-category"
              className="col-span-12 flex h-full flex-col gap-y-8"
            >
              <Input
                name={"category"}
                required
                placeholder={"Agrega una Categoría"}
                type={"text"}
                className="border-0 bg-inherit text-sm font-light text-[#44444f] placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </Form>
          </div>
        </div>
        <DialogDescription></DialogDescription>
        <DialogFooter className="px-8 py-4">
          <Button
            form="form-category"
            className="flex h-8 items-center justify-center rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
          >
            Agregar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewCategory;
