import React from "react";

import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InfoPaymentAndCollection from "../../Components/InfoPaymentAndCollection";
import DataTableChecks from "../Table/DataTableChecks";
import { ChecksColumns } from "../Table/ChecksColumns";

function TabChecks() {

  const data = [
    {
      id: "1",
      date: "28/06/2024",
      amount: "2000.00",
      country: "MEX",
      checkName: "Salvador gutierrez",
      branch: "004",
      account: "876343",
      noCheck: "876343"
    },
  ]


  return (
    <div className="mt-3 flex flex-col gap-8 px-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="font-roboto text-sm font-light text-grisHeading">
            Cuenta Contable
          </p>
          <InputRouter className="" name="checks_accAccount" type="text" />
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="font-roboto text-sm font-light text-grisHeading">
            Cuenta de Banco
          </p>

          <SelectRouter name="checks_bankAccount" options={[]} placeholder="" />
        </div>
      </div>
      <div>
        <DataTableChecks data={data} columns={ChecksColumns} />
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

export default TabChecks;
