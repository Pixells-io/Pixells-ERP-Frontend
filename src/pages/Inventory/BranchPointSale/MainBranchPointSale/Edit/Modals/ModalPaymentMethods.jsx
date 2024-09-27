import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import SelectSearch from "@/components/SelectSearch/SelectSearch";

function ModalPaymentMethods({ setPaymentNew }) {
  const [modal, setModal] = useState(false);
  const [paymentList, setPaymentList] = useState({});

  const addPayments = () => {
    const data = {
      type: paymentList?.value,
      label: paymentList?.label,
      accounting_account_id: "",
      active: "0",
      start: "",
      end: "",
    };
    setPaymentNew({ ...data });
    clearData();
  };

  const clearData = () => {
    setModal(false);
    setPaymentList({});
  };

  const methods = [
    {
      value: "cash",
      label: "Efectivo",
    },
    {
      value: "card",
      label: "Tarjeta de Crédito",
    },
    {
      value: "credit",
      label: "Crédito",
    },
    {
      value: "transfer",
      label: "Transferencia/Depósito",
    },
    {
      value: "multiPayment",
      label: "Multipago",
    },
    {
      value: "giftCard",
      label: "Gift Card",
    },
  ];

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogTrigger className="flex h-[24px] items-center gap-x-1 rounded-[10px] bg-primarioBotones px-2 text-[11px] font-medium text-white hover:bg-blancoBox2">
        <IonIcon className="h-5 w-5" icon={add}></IonIcon>
        Agregar
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>Agregar Usuarios</DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <SelectSearch
          name="payments"
          options={methods}
          placeholder="Buscar"
          isMulti={false}
          onChange={(e) => setPaymentList(e)}
        />
        <DialogFooter>
          <div className="flex w-full justify-end gap-2">
            <Button
              type="button"
              className="h-8 w-24 rounded-xl bg-[#E0E0E0] font-roboto text-xs font-normal text-[#44444F] hover:bg-[#E0E0E0]"
              onClick={() => clearData()}
            >
              Cancelar
            </Button>
            <Button
              type="button"
              className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
              onClick={() => addPayments()}
            >
              Aceptar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalPaymentMethods;
