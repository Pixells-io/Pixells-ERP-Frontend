import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const data = [
  {
    folio: "Naranja",
    sku: "28",
    productos: "26",
    monto: "Caja",
    estado: "Pendiente",
    user: "jacobo",
    fecha: "04-06-2024",
    id: "html",
  },
  {
    folio: "Lima",
    sku: "28",
    productos: "28",
    monto: "Caja",
    estado: "Parcial",
    user: "jacobo",
    fecha: "04-06-2024",
    id: "html",
  },
  {
    folio: "Lima",
    sku: "28",
    productos: "28",
    monto: "Caja",
    estado: "Completado",
    user: "jacobo",
    fecha: "04-06-2024",
    id: "html",
  },
];

const statusStyles = {
  Pendiente: "bg-[#5B89FF40] text-[#5B89FF]",
  Parcial: "bg-[#FAA36440] text-[#FAA364]",
  Completado: "bg-[#00A25940] text-[#00A259]",
};

const ShoppingTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#44444F]">
            {[
              "Folio",
              "Sku",
              "Cantidad Productos",
              "Monto",
              "Estado del Pedido",
              "Quien recibió",
              "Fecha de Recibo",
              "",
            ].map((header) => (
              <TableHead
                key={header}
                className="text-center font-poppins text-sm text-[#44444F]"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="w-full text-center">
              {Object.entries(row).map(([key, value]) => (
                <TableCell key={key}>
                  {key === "estado" ? (
                    <div className="flex justify-center">
                      <span
                        className={`flex w-24 justify-center rounded-2xl p-1 text-center ${statusStyles[value]}`}
                      >
                        {value}
                      </span>
                    </div>
                  ) : key === "user" ? (
                    <div className="flex justify-center">
                      <Avatar>
                        <AvatarImage src={"https://github.com/shadcn.png"} />
                        <AvatarFallback>
                          {value.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ) : key === "id" ? (
                    <Link to={`/document/${value}`}>
                      <span className={"text-[#5B89FF]"}>ver documento</span>
                    </Link>
                  ) : (
                    value
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ShoppingTable;
