import React, { useEffect } from "react";

import { Form, useNavigation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalCompleteTransfer({
  modal,
  setModal,
  transfer_id,
  products_count,
  products_array,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-8 py-4 font-poppins font-semibold text-grisHeading">
            Recibir Transferencia
          </DialogTitle>
        </DialogHeader>
        <Form
          className="flex h-full w-full flex-col gap-3 px-6"
          action={`/inventory/merchandise-movements/transfer/entry/${transfer_id}`}
          method="POST"
        >
          <input type="hidden" name="transfer_id" value={transfer_id} />
          <input type="hidden" name="type" value={1} />
          <input
            type="hidden"
            name="products"
            value={JSON.stringify(products_array)}
          />
          <div className="flex w-full flex-col gap-3 rounded-lg p-4 font-roboto">
            <div className="flex w-full flex-col gap-3 pb-4 font-light">
              <span>
                Estas a punto de recibir la transferencia #{transfer_id}, con un
                total de {products_count} productos por ingresar.
              </span>
            </div>
          </div>
          <DialogFooter className="px-10 pb-6">
            <Button
              type="submit"
              disabled={navigation.state === "submitting"}
              className="justify-normal rounded-lg bg-primarioBotones px-6 py-2 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Submitting..." : "Recibir"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCompleteTransfer;
