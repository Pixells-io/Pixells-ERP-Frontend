import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  arrowForwardCircleOutline,
  cardOutline,
  cashOutline,
  giftOutline,
  walletOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Checkbox } from "@/components/ui/checkbox";

function PaymentMethods({ modal, setModal }) {
  const [method, setMethod] = useState("none");

  const selectPaymentMethod = (m) => {
    if (m === method) {
      setMethod("none");
    } else {
      setMethod(m);
    }
  };

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[535px] w-[668px] max-w-[668px] overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Seleccionar Método de Pago
          </DialogTitle>
        </DialogHeader>
        <div className="flex h-[385px] px-6 pb-4">
          <div className="h-full w-full flex flex-col">
            <div className="grid w-full grid-cols-12 gap-y-3 py-3 pr-7">
              <div className="col-span-8">
                <p className="text-md font-roboto font-normal text-[#44444F]">
                  Subtotal (49 artículos)
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-md text-end font-roboto font-normal text-[#44444F]">
                  $640.00
                </p>
              </div>
              <div className="col-span-8">
                <p className="text-md font-roboto font-normal text-[#44444F]">
                  Impuesto
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-md text-end font-roboto font-normal text-[#44444F]">
                  $102.00
                </p>
              </div>
              <div className="col-span-12 border"></div>
              <div className="col-span-8">
                <p className="font-roboto text-lg font-semibold text-[#44444F]">
                  TOTAL
                </p>
              </div>
              <div className="col-span-4">
                <p className="text-end font-roboto text-lg font-semibold text-[#44444F]">
                  $742.00
                </p>
              </div>
            </div>

            <div className="bg-red-300 flex-1 flex items-center">
                
            </div>
          </div>
          <div className="flex h-full w-full flex-col items-center border-l-2 border-grisDisabled">
            <div className="flex h-full w-full flex-col items-center gap-y-4 py-3">
              <Button
                type="button"
                className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "cash" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
                onClick={() => selectPaymentMethod("cash")}
              >
                <IonIcon icon={cashOutline} className="h-8 w-8"></IonIcon>
                <span className="text-md font-roboto font-normal">
                  Efectivo
                </span>
              </Button>
              <Button
                type="button"
                className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "card" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
                onClick={() => selectPaymentMethod("card")}
              >
                <IonIcon icon={cardOutline} className="h-8 w-8"></IonIcon>
                <span className="text-md font-roboto font-normal">
                  Tarjeta de Crédito
                </span>
              </Button>
              <Button
                type="button"
                className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "transfer" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
                onClick={() => selectPaymentMethod("transfer")}
              >
                <IonIcon
                  icon={arrowForwardCircleOutline}
                  className="h-8 w-8"
                ></IonIcon>
                <span className="text-md font-roboto font-normal">
                  Transferencia
                </span>
              </Button>
              <Button
                type="button"
                className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl ${method == "gift" ? "bg-[#44444F] text-white" : "bg-[#F0F0F0] text-[#44444F] hover:bg-[#F0F0FC]"}`}
                onClick={() => selectPaymentMethod("gift")}
              >
                <IonIcon icon={giftOutline} className="h-8 w-8"></IonIcon>
                <span className="text-md font-roboto font-normal">
                  Gift Card
                </span>
              </Button>
            </div>
            <Button
              type="button"
              className={`flex h-12 w-60 items-center justify-start gap-x-2 rounded-xl border border-grisDisabled ${method == "multiPayment" ? "bg-[#44444F] text-white" : "bg-inherit text-[#44444F] hover:bg-[#F0F0FC]"}`}
              onClick={() => selectPaymentMethod("multiPayment")}
            >
              <IonIcon icon={walletOutline} className="h-8 w-8"></IonIcon>
              <span className="text-md font-roboto font-normal">Multipago</span>
            </Button>
          </div>
        </div>

        <DialogFooter>
          <div className="flex w-full items-center justify-between py-2 pl-8 pr-14">
            <div className="flex gap-4">
              <Checkbox
                id="checkGift"
                name="checkGift"
                className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              />
              <label
                htmlFor="checkGift"
                className="font-roboto text-sm font-normal text-[#44444F]"
              >
                Imprimir ticket de regalo
              </label>
            </div>
            <Button
              form="formDataTab"
              className="h-8 justify-normal rounded-3xl bg-primarioBotones px-7 font-roboto text-xs font-semibold text-white"
            >
              Continuar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentMethods;
