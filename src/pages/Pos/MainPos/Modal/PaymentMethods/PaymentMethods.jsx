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

import { Checkbox } from "@/components/ui/checkbox";
import OptionsPayments from "./OptionsPayment";
import SaleInformation from "./SaleInformation";
import { Input } from "@/components/ui/input";

function PaymentMethods({ modal, setModal, information }) {
  const [method, setMethod] = useState("none");
  const [paymentCash, setPaymentCash] = useState(0);

  const selectPaymentMethod = (m) => {
    if (m === method) {
      setMethod("none");
    } else {
      setMethod(m);
    }
  };

  const saveSale = () => {};

  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-h-[535px] w-[668px] max-w-[668px] overflow-auto bg-blancoBg p-0">
        <DialogHeader className="border-b pt-2">
          <DialogTitle className="px-4 py-4 font-poppins text-sm font-semibold text-grisHeading">
            Seleccionar Método de Pago
          </DialogTitle>
        </DialogHeader>
        <div className="flex h-[385px] px-6 pb-2">
          <div className="flex h-full w-full flex-col">
            <SaleInformation information={information} />
            <div className="mt-10 flex flex-1 flex-col">
              {method == "cash" ? (
                <div className="grid w-full grid-cols-12 gap-y-5 py-3 pr-7">
                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-normal text-[#44444F]">
                      Pagó con
                    </p>
                  </div>
                  <div className="col-span-8">
                    <Input
                      className="text-md rounded-xl border border-[#D7D7D7] bg-inherit text-center font-roboto font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="cash-payment"
                      type="number"
                      value={paymentCash}
                      onChange={(e) => setPaymentCash(e.target.value)}
                    />
                  </div>

                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-medium text-[#44444F]">
                      Cambio
                    </p>
                  </div>
                  <div className="col-span-8">
                    <p className="text-center font-roboto text-xl font-medium text-[#5B89FF]">
                      ${paymentCash - information.total}
                    </p>
                  </div>
                </div>
              ) : method == "card" ? (
                <div className="grid w-full grid-cols-12 gap-y-5 py-3 pr-7">
                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-normal text-[#44444F]">
                      Referencia
                    </p>
                  </div>
                  <div className="col-span-8">
                    <Input
                      className="text-md rounded-xl border border-[#D7D7D7] bg-inherit text-center font-roboto font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="card-reference"
                      type="number"
                    />
                  </div>

                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-medium text-[#44444F]">
                      Banco
                    </p>
                  </div>
                  <div className="col-span-8"></div>
                </div>
              ) : method == "transfer" ? (
                <div className="grid w-full grid-cols-12 gap-y-5 py-3 pr-7">
                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-normal text-[#44444F]">
                      Referencia
                    </p>
                  </div>
                  <div className="col-span-8">
                    <Input
                      className="text-md rounded-xl border border-[#D7D7D7] bg-inherit text-center font-roboto font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="transfer-reference"
                      type="number"
                    />
                  </div>

                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-medium text-[#44444F]">
                      Banco
                    </p>
                  </div>
                  <div className="col-span-8"></div>
                </div>
              ) : method == "gift" ? (
                <div className="grid w-full grid-cols-12 gap-y-5 py-3 pr-7">
                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-normal text-[#44444F]">
                      Referencia
                    </p>
                  </div>
                  <div className="col-span-8">
                    <Input
                      className="text-md rounded-xl border border-[#D7D7D7] bg-inherit text-center font-roboto font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="gigy-refence"
                      type="text"
                    />
                  </div>
                </div>
              ) : method == "multiPayment" ? (
                <div className="grid w-full grid-cols-12 gap-y-5 py-3 pr-7">
                  <div className="col-span-4 flex items-center">
                    <p className="text-md font-roboto font-normal text-[#44444F]">
                      Referencia
                    </p>
                  </div>
                  <div className="col-span-8">
                    <Input
                      className="text-md rounded-xl border border-[#D7D7D7] bg-inherit text-center font-roboto font-normal text-[#44444F] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="reference-multipayment"
                      type="text"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <OptionsPayments
            selectPaymentMethod={selectPaymentMethod}
            method={method}
          />
        </div>
        <DialogDescription className="hidden"></DialogDescription>
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
