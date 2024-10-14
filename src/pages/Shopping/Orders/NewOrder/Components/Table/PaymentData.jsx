import React from "react";
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

const PaymentDataTable = ({ paymentData, onReady }) => {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          INFORMES DE RECIBO
        </span>
      </div>

      {/* Recibo Card */}
      <div className="p-6 ml-4 mt-4 w-[280px] h-[50px] flex items-center justify-between rounded-[14px] bg-[#F1F1F1]">
        <div className="flex flex-col justify-start">
          <span className="text-left font-roboto text-sm font-semibold text-[#44444F]">
            Recibo 1 - P1978
          </span>
          <span className="text-left text-xs font-light text-[#8F8F8F]">
            Fecha de entrega: 12 09 24
          </span>
        </div>
        <span className="text-xs font-light text-[#8F8F8F]">14:36</span>
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
              {paymentData.map((payment, index) => (
                <TableRow key={index}>
                  <TableCell>{payment.item}</TableCell>
                  <TableCell>{payment.cantidadPedida}</TableCell>
                  <TableCell>{payment.cantidadRecibida}</TableCell>
                  <TableCell>{payment.unidad}</TableCell>
                  <TableCell>{payment.montoRecibido}</TableCell>
                  <TableCell className={"font-roboto text-sm text-[#44444F]"}>
                    <a className="w-25 border-b border-[#44444F]">
                      {payment.backOrder}
                    </a>
                  </TableCell>
                  <TableCell>{payment.quienRecibio}</TableCell>
                  <TableCell>{payment.fechaRecibo}</TableCell>
                  <TableCell className={"font-roboto text-sm text-[#5B89FF]"}>
                    <Link to={``}>Ver Documento</Link>
                  </TableCell>
                </TableRow>
              ))}
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
          onClick={onReady}
        >
          Listo
        </Button>
      </div>
    </div>
  );
};

export default PaymentDataTable;
