import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import InfoPaymentAndCollection from "../../Components/InfoPaymentAndCollection";

function TabCreditCard() {
  const selectClasses = "w-full rounded-xl border border-gris2-transparent text-[14px] font-light text-grisSubText placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="rounded-xl bg-[#FBFBFB] px-4">
      <div className="flex items-center justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
          <Select 
           name="creditCard_currency"
            >
              <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="Moneda" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="MXN">MXN</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-3 mb-8 grid grid-cols-12 gap-x-8 gap-y-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Cuenta Contable
          </p>
          <Select 
          name="creditCard_accAccount"
            >
              <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="opt1">option 1</SelectItem>
              <SelectItem value="opt2">option 2</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Cuenta de Banco
          </p>
          <Select 
              name="creditCard_bankAccount"
            >
              <SelectTrigger className={selectClasses}>
              <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="opt1">option 1</SelectItem>
              <SelectItem value="opt2">option 2</SelectItem>
              </SelectContent>
            </Select>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Nombre Tarjeta crédito
          </p>
          <Input
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            name="creditCard_nameCreditCard"
            type="text"
          />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-6 md:col-span-5 xl:col-span-5">
              <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
                No. de pagos
              </p>
              <Input
                className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
                name="creditCard_paymentNumber"
                type="text"
              />
            </div>
            <div className="col-span-6 md:col-span-5 xl:col-span-5">
              <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
                No. de documento
              </p>
              <Input
                className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
                name="creditCard_documentNumber"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Número tarjeta de crédito
          </p>
          <Input
            className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent"
            name="creditCard_creditCardNumber"
            type="text"
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Total
          </p>
          <Input className="w-full rounded-xl border border-gris2-transparent font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus-visible:ring-primarioBotones focus:border-transparent" name="creditCard_total" type="text" />
        </div>
      </div>

      <div className="flex w-full justify-end">
        <div className="w-1/2">
          <InfoPaymentAndCollection
            totalAmount={"2000.00"}
            titleTotalAmount={"Importe Total"}
            balance={"2000.00"}
            titleBalance={"Saldo Vencido"}
            isDisBalance={true}
            total={"2000.00"}
            titleTotal={"Total Cobrado"}
          />
        </div>
      </div>
    </div>
  );
}

export default TabCreditCard;