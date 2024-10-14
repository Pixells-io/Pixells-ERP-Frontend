import React from "react";
import BankDetailsGeneral from "../Components/Table/BalanceDetailsTable";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/navigation-header";
const MainBankDetailsGeneral = () => {
  const { id } = useParams();
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
    <div className="flex w-full">
      <div className="ml-4 flex w-full flex-col space-y-4 rounded-lg bg-gris px-8 py-4">
        <NavigationHeader />

        <div className="flex items-center gap-4">
          <h2 className="font-poppins text-base font-bold text-[#44444F]">
            INVENTARIO
          </h2>
          <div className="ml-16 flex items-end space-x-4 font-roboto text-[#8F8F8F]">
            <div className="text-sm">&bull; 4 objective </div>
            <div className="text-sm">&bull; 25 SFC </div>
            <div className="text-sm">&bull; 43 Activities</div>
          </div>
        </div>

        <div>
          <p className="mb-4 font-poppins text-xl font-bold text-[#44444F]">
            Nuevo Servicio
          </p>
        </div>

        <div className="flex h-full w-full flex-col rounded-md overflow-auto bg-blancoBg">
      <div className="border-b">
        <h2 className="ml-4 mt-4 mb-4 font-poppins text-xl font-semibold text-[#44444F]">
          INFORMACION BANAMEX 86968{id}
        </h2>
      </div>
      <div className="flex flex-grow flex-col overflow-auto p-4">
        <div className="flex h-[50px] w-[200px] flex-col rounded-[10px] border border-[#44444F] p-2 mb-4">
          <span className="font-poppins text-xs">
            SALDO EN CUENTAS
          </span>
          <span className="font-poppins text-base font-semibold">
            $23,000.00
          </span>
        </div>
        <div className="flex-grow overflow-auto">
          <BankDetailsGeneral data={datos} />
        </div>
      </div>
      <div className="mt-auto border-t p-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Actualizado 07 septiembre 2024
        </span>
        <button className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300">
          Listo
        </button>
      </div>
    </div>
      </div>
    </div>
  );
};
export default MainBankDetailsGeneral;
