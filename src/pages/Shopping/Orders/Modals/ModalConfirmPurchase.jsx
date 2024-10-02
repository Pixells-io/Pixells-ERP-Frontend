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
import { calculatorOutline } from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputForm from "@/components/InputForm/InputForm";

function ModalConfirmPurchase({ id, name }) {
  const [modal, setModal] = useState(false);
  const [paymentType, setPaymentType] = useState(undefined);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      setModal(false);
      clearData();
    }
  }, [navigation.state]);

  const clearData = () => {
    setPaymentType(undefined);
  };

  return (
    <Dialog
      open={modal}
      onOpenChange={(e) => {
        setModal(e);
        clearData();
      }}
    >
      <DialogTrigger className="rounded-xl bg-[#E0E0E0] px-2 py-2 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]">
        Aceptar Compra
      </DialogTrigger>
      <DialogContent className="flex max-w-[400px] flex-col gap-4">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full flex-row gap-x-2">
              <div className="flex items-center justify-center">
                <IonIcon icon={calculatorOutline} className="h-8 w-8" />
              </div>
              <div className="flex flex-col gap-y-1">
                <h2 className="font-poppins text-[13px] font-medium text-grisHeading">
                  Confirmar Compra
                </h2>
                <h3 className="font-poppins text-[13px] font-light text-grisHeading">
                  "{name}"
                </h3>
              </div>
            </div>
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <Form
          action={`/shopping/purchase/edit/${id}`}
          method="post"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            hidden
            className="hidden"
            name="type_option"
            readOnly
            value={"accept_purchase"}
          />
          <input
            type="hidden"
            hidden
            className="hidden"
            name="order_id"
            readOnly
            value={id}
          />
          <span className="mt-4 font-roboto text-xs font-light text-grisSubText">
            Quieres confirmar esta orden de compra "{name}" esta accion creara
            un nuevo pedido, estas seguro?
          </span>

          <div className="my-4 flex gap-x-6">
            <div className="w-full">
              <Select
                name={`payment_type`}
                value={paymentType}
                required={true}
                onValueChange={(e) => setPaymentType(e)}
              >
                <SelectTrigger className="w-full rounded-xl border-none bg-grisBg font-roboto text-xs font-light text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                  <SelectValue placeholder={"Tipo de Pago"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={String(1)}>Crédito</SelectItem>
                  <SelectItem value={String(2)}>Un solo pago</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              {paymentType == "1" && (
                <InputForm
                  placeholder="Fecha de Vencimiento"
                  type="date"
                  name="limit_credit_date"
                  required={true}
                />
              )}
            </div>
          </div>

          <DialogFooter>
            <div className="flex w-full justify-between gap-2">
              <Button
                type="button"
                className="h-fit w-fit rounded-xl bg-inherit px-0 font-roboto text-xs font-light text-[#44444F] hover:bg-inherit"
                onClick={() => setModal(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="h-8 w-24 rounded-xl bg-primarioBotones font-roboto text-xs font-normal hover:bg-primarioBotones"
                disabled={navigation.state === "submitting"}
              >
                {navigation.state === "submitting"
                  ? "Submitting..."
                  : "Aceptar"}
              </Button>
            </div>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConfirmPurchase;
