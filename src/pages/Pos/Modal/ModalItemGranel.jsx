import React, { useEffect, useState } from "react";

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

function ModalItemGranel({ modal, setModal, functionModal, product }) {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = () => {
    const auxProduct = { ...product, quantity: quantity };
    functionModal(auxProduct);
    setModal(false);
    clearData();
  };

  const clearData = () => {
    setQuantity(1);
  };

  useEffect(() => {
    total();
  }, [quantity]);

  const total = () => {
    return quantity * product.price;
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
        <div className="flex flex-col gap-y-8 px-10 pb-8 pt-0">
          <div>
            <p className="font-roboto text-2xl font-semibold text-[#44444F]">
              {product.article}
            </p>
            <p className="text-md font-roboto font-normal text-[#5B89FF]">
              Precio Unitario ${product.price}
            </p>
          </div>

          <div className="flex gap-8">
            <div className="w-full">
              <span className="font-roboto text-xs text-grisText">
                Cantidad de producto
              </span>
              <div className="flex items-center justify-center gap-x-2 rounded-xl border border-[#D7D7D7] p-3">
                <Input
                  className="text-md text-roboto h-fit w-[60px] border-0 bg-inherit p-0 font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  name="quantity"
                  type="number"
                  value={quantity}
                  onChange={(event) => setQuantity(event.target.value)}
                />
                <span>KG</span>
              </div>
            </div>

            <div className="w-full">
              <span className="font-roboto text-xs text-grisText">
                Cantidad de producto
              </span>
              <div className="flex items-center justify-center rounded-xl border border-[#D7D7D7] p-3">
                <p className="text-roboto text-md font-normal text-[#44444F]">
                  ${total()}
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <div className="flex w-full justify-end">
              <Button
                type="button"
                onClick={() => handleSubmit()}
                className="text-roboto h-[34px] rounded-3xl bg-primarioBotones px-7 text-xs font-semibold text-white"
              >
                Continuar
              </Button>
            </div>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ModalItemGranel;
