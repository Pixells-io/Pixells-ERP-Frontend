import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const data = [
  { movement: "Orden de Producción", folio: "0987", desde: "", hacia: "Almacén TF", valor: "$400,000", usuario: "/api/placeholder/32/32", fecha: "04-06-2024" },
  { movement: "Salida de inventario completada", folio: "2547 (0987)", desde: "Almacén MP", hacia: "Almacén TF", valor: "$400,000", usuario: "/api/placeholder/32/32", fecha: "05-06-2024" },
  { movement: "Entrada de inventario completada", folio: "3411 (0987)", desde: "Almacén MP", hacia: "Almacén TF", valor: "$400,000", usuario: "/api/placeholder/32/32", fecha: "05-06-2024" },
  { movement: "Salida de inventario completada", folio: "2547 (0987)", desde: "Almacén TF", hacia: "Almacén PT", valor: "$400,000", usuario: "/api/placeholder/32/32", fecha: "08-06-2024" },
  { movement: "Entrada de inventario completada", folio: "3411 (0987)", desde: "Almacén TF", hacia: "Almacén PT", valor: "$400,000", usuario: "/api/placeholder/32/32", fecha: "10-06-2024" },
];

const Traceability =()=> {
  return (
    <div className="w-full">
      <Table >
        <TableHeader>
          <TableRow className="font-poppins text-[#44444F] border-[#44444F] border-b">
            <TableHead>Movimiento</TableHead>
            <TableHead>Folio Doc.</TableHead>
            <TableHead>Desde</TableHead>
            <TableHead>Hacia</TableHead>
            <TableHead>Valor Inventario</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Fecha de Ejecución</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.movement}</TableCell>
              <TableCell>{row.folio}</TableCell>
              <TableCell>{row.desde}</TableCell>
              <TableCell>{row.hacia}</TableCell>
              <TableCell>{row.valor}</TableCell>
              <TableCell>
              <div className="flex justify-center">
        <Avatar className="h-6 w-6">
          <AvatarImage src={row?.original?.createdBy} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
              </TableCell>
              <TableCell>{row.fecha}</TableCell>
              <TableCell>
                <button className="text-blue-600 hover:underline">Ver</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Traceability