import React from "react";
import BankDetailsGeneral from "../Components/Table/BalanceDetailsTable";
import { useParams } from "react-router-dom";
const BankDetailsGeneral = () => {
    const {id}=useParams();
  const datos = [
    {
      concepto: "cobro de anticipo",
      cliente: "sabritas SA de CV",
      ingreso: "$500,000.00",
      egreso: "",
      fecha: "04-06-2024",
      saldo: "$500,000.00",
    },
    {
        concepto: "liquidacion",
        cliente: "Burguer King SA de CV",
        ingreso: "",
        egreso: "$27,000.00",
        fecha: "04-06-2024",
        saldo: "$500,000.00",
      },
  ];
  return (
    <div className="h-full w-full rounded-md bg-blancoBg">
      <div className="border-b">
        <h2 className="ml-4 mt-4 font-poppins text-xl font-semibold text-[#44444F]">
          INFORMACION BANAMEX 86968{id}
        </h2>
      </div>
      <div className="flex h-[50px] w-[200px] flex-col rounded-[10px] border border-[#44444F] p-2">
        <span className="font-poppins text-xs">SALDO GLOBAL EN CUENTAS</span>
        <span className="font-poppins text-base font-semibold">
          $2,275,077.13
        </span>
      </div>
      <div className="space-y-6">
        <BankDetailsGeneral data={datos} />
      </div>
      <div className="h-[54px] pb-6 flex-shrink-0 p-4 mb-2">
          <div className="flex items-center pb-2  justify-between">
            <label className="text-xs font-light text-[#8F8F8F]">
              Actualizado 07 septiembre 2024
            </label>
            <Button
              className="h-[31px] w-[98px] rounded-xl bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
            >
              Listo
            </Button>
          </div>
        </div>
    </div>
  );
};
export default BankDetailsGeneral;