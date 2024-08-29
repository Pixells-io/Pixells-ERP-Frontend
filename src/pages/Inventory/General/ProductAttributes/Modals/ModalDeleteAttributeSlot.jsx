import React, { useEffect } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalDeleteAttributeSlot({ modal ,setModal, attribute_id, slot_id }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>BORRAR Atributo del Producto</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory`}
          method="post"
          className="flex flex-col gap-4 px-6"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="attribute_id"
            value={attribute_id}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="slot_id"
            value={slot_id}
          />
          <input
            type="hidden"
            hidden
            name="type_option"
            value={"destroy_attributeSlot"}
          />

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="w-1/2 bg-[#343434] font-roboto text-xs font-semibold hover:bg-primarioBotones"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="w-1/2 bg-red-400 font-roboto text-xs font-semibold hover:bg-red-600"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting" ? "Submitting..." : "Borrar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalDeleteAttributeSlot;
