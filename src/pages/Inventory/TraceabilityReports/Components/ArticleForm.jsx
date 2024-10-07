import React, { useState } from "react";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const mockLotesData = [
  { noArticulo: "0136", descripcion: "Mazapán", lote: "L756534", almacen: "Almacen 01", cantidad: 100, estatus: "", fechaEjecucion: "04-06-2024" },
  { noArticulo: "0136", descripcion: "Mazapán", lote: "L756534", almacen: "Almacen 02", cantidad: 25, estatus: "", fechaEjecucion: "05-06-2024" },
  { noArticulo: "0137", descripcion: "Chocolate", lote: "L756535", almacen: "Almacen 01", cantidad: 50, estatus: "", fechaEjecucion: "06-06-2024" },
];

const mockOperacionesData = [
  { documento: "EP 036", fecha: "22 sep 24", almacen: "Almacen 01", cuentaMayor: "Proveedor 01", cantidad: 100, tipoMovimiento: "Entrada" },
  { documento: "NE 671", fecha: "23 sep 24", almacen: "Almacen 01", cuentaMayor: "Cliente 03", cantidad: -25, tipoMovimiento: "Salida" },
  { documento: "IN 090", fecha: "24 sep 24", almacen: "Almacen 01", cuentaMayor: "", cantidad: -25, tipoMovimiento: "Salida" },
  { documento: "EP 037", fecha: "25 sep 24", almacen: "Almacen 02", cuentaMayor: "Proveedor 02", cantidad: 75, tipoMovimiento: "Entrada" },
];

const ArticleForm = () => {
  const [selectedLote, setSelectedLote] = useState(null);
  
  const handleLoteSelection = (lote) => {
    setSelectedLote(lote);
  };

  const filteredOperaciones = selectedLote
    ? mockOperacionesData.filter(op => op.almacen === selectedLote.almacen)
    : mockOperacionesData;

  const lotesTotal = mockLotesData.reduce((sum, lote) => sum + lote.cantidad, 0);
  const operacionesTotal = filteredOperaciones.reduce((sum, op) => sum + op.cantidad, 0);

  return (
    <div className="flex h-full flex-1 flex-col overflow-auto rounded-xl bg-white">
      <div className="flex items-center justify-between gap-x-10 border-b border-[#E8E8E8] px-6 py-3">
        <span className="font-poppins text-lg font-medium text-[#44444F]">
          POR ARTICULO
        </span>
      </div>
      <div className="h-full overflow-auto p-6">
        <div className="max-w-[400px] mb-6">
          <SelectRouter className="w-full" placeholder="Selecciona un producto" />
        </div>
        <div className="mb-6 border rounded-[10px] p-4">
          <h2 className="mb-4 font-poppins text-sm text-[#44444F] font-semibold">Lotes</h2>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-[#44444F]">
                  <TableHead className="font-poppins text-sm font-semibold">No. Artículo</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Descripción</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Lote</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Almacén</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Cantidad</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Estatus</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Fecha de Ejecución</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLotesData.map((row, index) => (
                  <TableRow 
                    key={index} 
                    onClick={() => handleLoteSelection(row)}
                    className={`cursor-pointer ${selectedLote === row ? "bg-blue-100" : (index % 2 === 0 ? "bg-gray-50" : "bg-white")}`}
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
                <TableRow>
                  <TableCell colSpan={4} className="text-right font-semibold">Total:</TableCell>
                  <TableCell className="font-semibold">{lotesTotal}</TableCell>
                  <TableCell colSpan={2}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="mb-6 p-4">
          <h2 className="mb-4 font-poppins text-sm text-[#44444F] font-semibold">Operaciones por Lote</h2>
          <div className="overflow-x-auto">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="border-b border-[#44444F]">
                  <TableHead className="font-poppins text-sm font-semibold">Documento</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Fecha</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Almacén</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Cuenta Mayor</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Cantidad</TableHead>
                  <TableHead className="font-poppins text-sm font-semibold">Tipo Movimiento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOperaciones.map((row, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <TableCell className="border-b border-[#E8E8E8]">{row.documento}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.fecha}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.almacen}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.cuentaMayor}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.cantidad}</TableCell>
                    <TableCell className="border-b border-[#E8E8E8]">{row.tipoMovimiento}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} className="text-right font-semibold">Total:</TableCell>
                  <TableCell className="font-semibold">{operacionesTotal}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
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

export default ArticleForm;