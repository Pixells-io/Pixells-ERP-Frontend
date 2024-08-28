import React, { useEffect, useState } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

function NewAttribute({ modal, setModal }) {
  const navigation = useNavigation();
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-2 font-poppins text-sm font-semibold text-grisHeading">
            Crear de Atributos de Producto
          </DialogTitle>
        </DialogHeader>
        <Form
          id="inventory-new-attribute"
          className="flex h-full w-full flex-col gap-3 px-6"
          action="/inventory"
          method="post"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            value={"save_attribute"}
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <p className="text-center font-roboto text-xs font-medium text-grisText">
              Nombre o Descripción
            </p>
            <p className="text-center font-roboto text-xs font-medium text-grisText">
              Estatus
            </p>
            <Input
              type="text"
              className="w-full rounded-xl border border-[#D7D7D7] font-roboto text-sm font-light text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-[#5B89FF]"
              placeholder="Nombre o Descripción"
              name="name"
              required={true}
            />
            <div className="flex items-center justify-center">
              <Checkbox
                name="status"
                className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
                checked={status}
                value={status}
                onCheckedChange={(value) => setStatus(!!value)}
              />
            </div>
          </div>
        </Form>
        <DialogDescription className="hidden"></DialogDescription>
        <DialogFooter className="px-10 pb-6">
          <Button
            form="inventory-new-attribute"
            className="h-8 justify-normal rounded-lg bg-primarioBotones px-8 text-xs font-semibold"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Submitting..." : "Crear"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NewAttribute;
