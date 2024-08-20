import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputRouter from "@/layouts/Masters/FormComponents/input";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import InfoPaymentAndCollection from "../../Components/InfoPaymentAndCollection";
import TableForm from "../../Components/Table/TableForm";
import { ChecksColumns } from "../Table/ChecksColumns";
import SelectField from "@/layouts/Masters/FormComponents/SelectField";

function TabChecks() {
  const [rowChecks, setRowChecks] = useState([]);
  const selectClasses = "w-full rounded-xl border border-gris2-transparent text-[14px] font-light text-grisSubText placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent";

  return (
    <div className="mt-3 flex flex-col gap-8 px-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="font-roboto text-[14px] font-light text-grisHeading">
            Cuenta Contable
          </p>
          <Select 
             name="checks_accAccount" 
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
        </div>
        <div className="col-span-12 md:col-span-6 xl:col-span-6">
          <p className="font-roboto text-[14px] font-light text-grisHeading">
            Cuenta de Banco
          </p>
          <Select 
              name="checks_bankAccount"
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
        </div>
      </div>
      <div className="border rounded-lg border-blancoBox2	p-1">
        <TableForm rows={rowChecks} setRows={setRowChecks} columns={ChecksColumns}/>
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
