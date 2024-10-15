import React from "react";
import { Button } from "@/components/ui/button";
import SimpleBarChart from "../Charts/BarChart";
import ClientPipelineTable from "../Table/NextClientsDashboard";
import BankTable from "../Table/BanksDashboard";

const BillingSummary = () => {

    const data = [
        { cliente: "San Lupe de SA de CV", cantidad: "$280,000.00", fecha: "14 oct 24", estatus: "Programado" },
        { cliente: "San Carlos SA de CV", cantidad: "$100,000.00", fecha: "19 oct 24", estatus: "Programado" },
       
      ];
      const banks= [
        { cliente: "Banamex", cantidad: "$280,000.00", fecha: "14 oct 24", estatus: "" },
        { cliente: "Bancomer", cantidad: "$100,000.00", fecha: "19 oct 24", estatus: "" },
       
      ];
  return (
    <div className="flex flex-col h-full rounded-[10px] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE COBROS
        </span>
      </div>

      {/* Body */}
      <div className="mx-2 flex-1 overflow-auto p-6">
        <div className="flex flex-col">
          <h3 className="font-poppins text-lg font-semibold text-[#44444F]">
            Cobrado
          </h3>
          <div className="mb-2 flex items-center justify-start">
            <span className="font-poppins text-lg text-[#696974]">
              $175,000.00
            </span>
            <h3 className="ml-2 font-poppins text-lg font-semibold text-[#44444F]">
              este mes
            </h3>
          </div>
        <ClientPipelineTable data={data} />
        <BankTable data={banks}/>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 flex w-full items-center justify-between h-[54px] p-4 border-t">
      <label className="text-xs font-light text-[#8F8F8F]">Actualizado 07 septiembre 2024</label>
      
        <Button
              className="w-[98px] h-[31px] rounded-xl bg-[#E0E0E0] px-6 py-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
              variant="outline"
    
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default BillingSummary;
