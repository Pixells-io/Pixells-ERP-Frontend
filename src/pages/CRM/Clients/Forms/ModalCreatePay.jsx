import React, { useState, useEffect } from "react";
import { Form, useNavigation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InputRouter from "@/layouts/Masters/FormComponents/input";

function ModalCreatePay({ modal, setModal, balanceId, balanceAmmount }) {
  const navigation = useNavigation();
  const params = useParams();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
    }
  }, [navigation.state]);

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[650px] overflow-auto p-0 sm:max-w-[425px]">
        <DialogHeader className="border-b px-8 py-6">
          <DialogTitle className="font-poppins">Agregar Pago</DialogTitle>
        </DialogHeader>
        <Form
          id="client-form-edit"
          className="flex flex-col gap-8 px-6"
          method="post"
          action={`/crm/client/${params.id}`}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        >
          <input type="hidden" hidden readOnly value={12} name="type" />
          <input
            type="hidden"
            hidden
            readOnly
            name="balance_id"
            value={balanceId}
          />
          <div className="flex gap-4 rounded-lg font-roboto">
            <InputRouter name="ref" type="text" placeholder={"Referencia"} />
            <InputRouter
              name="comments"
              type="text"
              placeholder={"Comentarios"}
            />
          </div>
          <div className="flex gap-4 rounded-lg font-roboto">
            <InputRouter
              name="ammount"
              type="number"
              min="0"
              placeholder={"Cantidad"}
              max={balanceAmmount}
            />
            <InputRouter name="date" type="date" placeholder={"Fecha"} />
          </div>
          <DialogFooter className="py-4">
            <Button
              form="client-form-edit"
              disabled={navigation.state === "submitting"}
              type="submit"
              className="justify-normal rounded-lg bg-primarioBotones pl-6 pr-6 font-roboto text-xs font-semibold"
            >
              {navigation.state === "submitting" ? "Guardando..." : "Guardar"}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCreatePay;
