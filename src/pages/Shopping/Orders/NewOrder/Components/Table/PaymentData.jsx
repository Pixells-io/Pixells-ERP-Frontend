import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const PaymentDataTable = () => {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          INFORMES DE PAGOS
        </span>
      </div>

      {/* Scrollable Body */}
      <div className="mx-2 flex-1 overflow-auto p-6">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Item
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Cantidad Pedida
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Cantidad Recibida
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Unidad
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Monto Recibido
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Back Order
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Quien Recibio
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]">
                  Fecha de Recibo
                </TableHead>
                <TableHead className="font-poppins text-xs text-[#44444F]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Naranja</TableCell>
                <TableCell>28</TableCell>
                <TableCell>26</TableCell>
                <TableCell>CAJA</TableCell>
                <TableCell>$400,000</TableCell>
                <TableCell className={"font-roboto text-sm text-[#44444F]"}>
                  <a className="border-b border-[#44444F] w-25">BO-1978</a>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>04-06-2024</TableCell>
                <TableCell className={"font-roboto text-sm text-[#5B89FF]"}>
                  Ver Documento
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lima</TableCell>
                <TableCell>28</TableCell>
                <TableCell>26</TableCell>
                <TableCell>CAJA</TableCell>
                <TableCell>$400,000</TableCell>
                <TableCell className={"font-roboto text-sm text-[#44444F]"}>
                  <a className="border-b border-[#44444F] w-25">BO-1978</a>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>04-06-2024</TableCell>
                <TableCell className={"font-roboto text-sm text-[#5B89FF]"}>
                  Ver Documento
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex w-full items-center justify-between px-6 py-4">
        <label className="text-xs font-light text-[#8F8F8F]">
          Actualizado 07 septiembre 2024
        </label>
        <Button
          className="h-[31px] rounded-xl bg-[#E0E0E0] px-6 py-4 text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
          variant="outline"
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default PaymentDataTable;
