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

function ModalScanItemNum({ modal, setModal, setModalPaymentMethod, totalProducts }) {

  const openModalPaymentMethod = () => {
    setModalPaymentMethod(true);
    setModal(false);
  }

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 text-center font-roboto text-xl font-medium text-[#44444F]">
            Numero de artículos escaneados
          </DialogTitle>
        </DialogHeader>
        <h2 className="mb-6 mt-3 text-center font-poppins text-2xl font-semibold text-[#44444F]">
          {totalProducts}
        </h2>
        <DialogDescription className="text-md text-center font-roboto font-normal text-[#44444F]">
          Si la cuenta es incorrecta, porfavor cancela.
        </DialogDescription>

        <DialogFooter>
          <div className="flex w-full justify-center gap-6 p-6">
            <Button
              type="button"
              onClick={() => setModal(false)}
              className="text-roboto text-md w-[190px] rounded-3xl bg-[#F0F0F0] font-normal text-grisSubText"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="text-roboto text-md w-[190px] rounded-3xl bg-primarioBotones font-semibold text-white"
              onClick={() => openModalPaymentMethod()}
            >
              Continuar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalScanItemNum;
