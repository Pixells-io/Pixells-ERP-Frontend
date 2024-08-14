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

function NewCategory({ modal, setModal, functionModal, user }) {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Agregar Categoria
          </DialogTitle>
        </DialogHeader>
        <Form action={"/topics"} method="post" className="overflow-auto">
          <div className="flex flex-col gap-y-8 rounded-xl bg-[#FBFBFB] px-4">
            <div className="gap-x-8 gap-y-4">
              <div className="col-span-12">
                <div className="flex items-center gap-x-2">
                  <img src={user.user_image} className="h-8 w-8 rounded-full" />
                  <span className="text-sm font-semibold text-grisText">
                    {user.name} {user.last_name}
                  </span>
                </div>
              </div>
              <input type="hidden" name="type_function" value="2" />
              <Input
                name={"name"}
                required
                placeholder={"Agrega una Categoría"}
                type={"text"}
                className="w-full border-0 bg-inherit text-sm font-light text-[#44444f] placeholder:text-grisSubText focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
          <DialogFooter className="px-8 py-4">
            <Button
              type="submit"
              className="flex h-8 items-center justify-center rounded-lg rounded-xl bg-primarioBotones px-6 text-xs font-semibold"
            >
              Agregar
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default NewCategory;
