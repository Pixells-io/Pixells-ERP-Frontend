import React, { useEffect, useState } from "react";
import { Form, useNavigation } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";
import SelectRouter from "@/layouts/Masters/FormComponents/select";

function ModalCompletePartialTransfer({
  modal,
  setModal,
  transfer_id,
  product_array,
  product_total,
  product_count,
}) {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  const optionsArray = [
    {
      label: "Solamente recibir lo que se esta entregando",
      value: "1",
    },
    {
      label: "Recibir y crear otra transferencia con lo faltante",
      value: "2",
    },
  ];

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="overflow-auto border-none bg-black p-0 px-8 sm:max-w-[425px]">
        <DialogHeader className="pt-2">
          <DialogTitle className="py-4 font-poppins font-semibold text-white">
            Recibir transferencia
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/inventory/merchandise-movements/transfer/entry/${transfer_id}`}
          method="POST"
          className="flex flex-col gap-3"
        >
          <input type="hidden" name="transfer_id" value={transfer_id} />
          <input type="hidden" name="type" value={2} />
          <input
            type="hidden"
            name="products"
            value={JSON.stringify(product_array)}
          />
          <span className="font-roboto text-[#A6A6A6]">
            Estas a punto de recibir la transferencia #{transfer_id} de manera
            parcial, con {product_count} de {product_total} productos enviados,
            ¿Que quieres hacer?.
          </span>
          <br />
          <SelectRouter
            name={"options"}
            options={optionsArray}
            required={true}
          />
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
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Recibir"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCompletePartialTransfer;
