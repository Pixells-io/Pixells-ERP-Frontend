import React from "react";
import { RadialBarChart, RadialBar, PolarGrid, PolarRadiusAxis, Label } from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const chartData = [
  { name: "Pedidos", value: 80, fill: "#3EC5FF" },
];

const ReceiptAnalyticsTable = () => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          RESUMEN DE PEDIDO
        </span>
      </div>

     

      {/* Scrollable Body */}
      <div className="flex-1 overflow-auto mx-2 p-6">
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b border-[#44444F]">
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Entrega
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Folio
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  SKU.Recibidos
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Productos Total
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Ubicación
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Quién Recibió
                </TableHead>
                <TableHead className="font-poppins text-[#44444F] text-xs">
                  Fecha de Recibido
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
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
          className="h-[31px] rounded-xl px-6 py-4 bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]"
          variant="outline"
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default ReceiptAnalyticsTable;
