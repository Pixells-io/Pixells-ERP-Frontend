import React, { useState } from "react";

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
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Form } from "react-router-dom";

function NewTopic({ modal, setModal, functionModal }) {

    const [stepped, setStepped] = useState(1);

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
            <div className="col-span-12 md:col-span-6 xl:col-span-6">
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
            <div className="col-span-12 md:col-span-6 xl:col-span-6">
              <SelectRouter
                name={"categories"}
                className="w-full text-sm font-light"
                placeholder={"Selecciona Categoría"}
                options={[]}
                // onChange={(e) => setStatus(e.value)}
              />
            </div>

            <div className="col-span-12">
              <InputRouter
                name={"title"}
                placeholder={"Agrega Título"}
                type={"text"}
              />
            </div>
            <div className="col-span-12">
              <InputRouter
                name={"text"}
                placeholder={"Que deseas compartir, Arturo Sáncehz?"}
                type={"text"}
              />
            </div>
          </div>
        </div>

        <Form>
            
        </Form>

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

export default NewTopic;
