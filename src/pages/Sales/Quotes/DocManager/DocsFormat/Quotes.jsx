import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const Document = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex justify-between items-start">
        <img src="/path-to-your-logo.png" alt="Logo" className="w-24 h-24" />
        <CardTitle>Cotización</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <p>Nombre: _______________</p>
          <p>Fecha de documento: _______________</p>
          <p>Fecha de entrega: _______________</p>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Descripción</TableHead>
              <TableHead>Cantidad</TableHead>
              <TableHead>Precio Unitario</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Agrega filas según sea necesario */}
            <TableRow>
              <TableCell>Producto 1</TableCell>
              <TableCell>2</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>$200</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
        <div className="mt-6 flex justify-between">
          <div className="w-1/2">
            <h3 className="text-lg font-semibold mb-2">Comentarios</h3>
            <Textarea placeholder="Escriba sus comentarios aquí..." />
          </div>
          <div className="w-1/3">
            <p>Subtotal: $______</p>
            <p>Impuesto: $______</p>
            <p>Retención: $______</p>
            <p className="font-bold">Total: $______</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Document;
