import React, { useEffect, useState } from "react";
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

function ModalDeleteWarehouse({ modal, setModal, warehouse_id, warehouse_name }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
      }}
    >
      <DialogContent className="overflow-auto border-none bg-black p-0 px-8 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="py-4 font-poppins font-semibold text-white">
            Eliminar Almacén: {warehouse_name}
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory/general-warehouses`}
          method="post"
          className="flex flex-col gap-3"
        >
          <input
            type="hidden"
            className="hidden"
            hidden
            readOnly
            name="inventory_id"
            value={warehouse_id}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type"
            readOnly
            value={"destroy_inventory"}
          />
          <span className="font-roboto text-[#A6A6A6]">
            Estas intentando borrar {warehouse_name}, ¿estás seguro?
          </span>
          <DialogFooter className="pb-6 pt-6">
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="justify-normal rounded-lg bg-[#343434] px-6 py-2 font-roboto text-xs font-semibold text-white"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="justify-normal rounded-lg bg-red-600 px-6 py-2 font-roboto text-xs font-semibold text-white"
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

export default ModalDeleteWarehouse;