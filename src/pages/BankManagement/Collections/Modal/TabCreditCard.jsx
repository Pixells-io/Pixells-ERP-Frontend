import React from "react";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InfoPaymentAndCollection from "../../Components/InfoPaymentAndCollection";

function TabCreditCard() {
  return (
    <div className="rounded-xl bg-[#FBFBFB] px-4">
      <div className="flex items-center justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <SelectRouter
              name="creditCard_currency"
              options={[
                { label: "MXN", value: "MXN" },
                { label: "USD", value: "USD" },
              ]}
              placeholder="Moneda"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 mb-8 grid grid-cols-12 gap-x-8 gap-y-4">
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Cuenta Contable
          </p>
          <InputRouter className="" name="creditCard_accAccount" type="text" />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Cuenta de Banco
          </p>

          <SelectRouter
            name="creditCard_bankAccount"
            options={[]}
            placeholder=""
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Nombre Tarjeta crédito
          </p>
          <InputRouter
            className=""
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
              <InputRouter
                className=""
                name="creditCard_paymentNumber"
                type="text"
              />
            </div>
            <div className="col-span-6 md:col-span-5 xl:col-span-5">
              <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
                No. de documento
              </p>
              <InputRouter
                className=""
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
          <InputRouter
            className=""
            name="creditCard_creditCardNumber"
            type="text"
          />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="mb-1 font-roboto text-sm font-light text-grisHeading">
            Total
          </p>
          <InputRouter className="" name="creditCard_total" type="text" />
        </div>
      </div>

      <div className="flex w-full justify-end px-4">
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
