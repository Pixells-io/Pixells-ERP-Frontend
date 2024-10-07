import React, { useState } from "react";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const mockLotesData = [
  { noArticulo: "0136", descripcion: "Mazapán", lote: "L756534", almacen: "Almacen 01", cantidad: 100, estatus: "", fechaEjecucion: "04-06-2024" },
  { noArticulo: "0136", descripcion: "Mazapán", lote: "L756534", almacen: "Almacen 02", cantidad: 25, estatus: "", fechaEjecucion: "05-06-2024" },
  { noArticulo: "0137", descripcion: "Chocolate", lote: "L756535", almacen: "Almacen 01", cantidad: 50, estatus: "", fechaEjecucion: "06-06-2024" },
];

const BatchForm = () => {
 

  return (
    <div className="flex h-full flex-1 flex-col overflow-auto rounded-xl bg-white">
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          POR LOTES
        </span>
      </div>
      <div className="h-full overflow-auto p-6">
        <div className="max-w-[400px] mb-6">
          <SelectRouter className="w-full" placeholder="Selecciona un lote" />
        </div>
        <div className="mb-6 p-4">
          <h2 className="mb-4 font-poppins text-sm text-[#44444F] font-semibold">Operaciones Por Lotes</h2>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-[#44444F]">
                  <TableHead className="font-poppins text-sm font-semibold">No. Serie/Lote</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Fecha de Vencimiento S/L</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Cod.Articulo</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">No. documento</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Código Origen</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Cantidad</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Almacén</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLotesData.map((row, index) => (
                  <TableRow 
                    key={index} 
                  >
                    <TableCell className="border-b border-[#E8E8E8]">{row.noArticulo}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.descripcion}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.lote}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.almacen}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.cantidad}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.estatus}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.fechaEjecucion}</TableCell>
                  </TableRow>
                ))}
                
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-6 py-4">
        <label className="text-xs font-light text-[#8F8F8F]">
          Actualizado 07 septiembre 2024
        </label>
        <Button className="h-[31px] rounded-xl px-6 py-4 bg-[#E0E0E0] text-xs font-semibold text-[#44444F] hover:bg-[#E0E0E0]" variant="outline">Listo</Button>
      </div>
    </div>
  );
};

export default BatchForm;