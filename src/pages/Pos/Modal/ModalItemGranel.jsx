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

function ModalItemGranel({ modal, setModal, functionModal, product }) {
  const handleSubmit = () => {
    functionModal(product);
    setModal(false);
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 text-center font-poppins text-sm font-semibold text-[#44444F]">
            Agregar Cantidad
          </DialogTitle>
        </DialogHeader>

        <DialogDescription></DialogDescription>
        <p className="font-roboto text-2xl font-semibold text-[#44444F]">
          {product.article}
        </p>
        <p className="text-md font-roboto font-normal text-[#5B89FF]">
          Precio Unitario ${product.price}
        </p>

        <DialogFooter>
          <div className="flex w-full justify-end">
            <Button
              type="button"
              onClick={() => handleSubmit()}
              className="text-roboto text-md w-[190px] rounded-3xl bg-primarioBotones font-semibold text-white"
            >
              Continuar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalItemGranel;
