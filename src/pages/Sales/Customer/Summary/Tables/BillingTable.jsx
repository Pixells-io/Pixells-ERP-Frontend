import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

const data = [
  {
    folio: "0021",
    document: "P-1231",
    monto: "$124,000",
    montoPago: "$124,000",
    saldo: "$124,000",
    estado: "Pagado",
    fecha: "04-06-2024",
    id: "html",
  },
  {
    folio: "0032",
    document: "P-1232",
    monto: "$174,000",
    montoPago: "$164,000",
    saldo: "$124,000",
    estado: "Pagado",
    fecha: "04-06-2024",
    id: "html",
  },
  {
    folio: "003",
    document: "P-1233",
    monto: "$124,000",
    montoPago: "$197,000",
    saldo: "$124,000",
    estado: "Pagado",
    fecha: "04-06-2024",
    id: "html",
  },
];

const statusStyles = {
  Pagado: "bg-[#CBF4C9] font-bold text-[#0E6245]",
};

const BillingTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="border-b border-[#44444F]">
            {[
              "Folio",
              "Doc. Relacional",
              "Monto Doc.",
              "Monto del Pago",
              "Saldo Pendiente",
              "Estatus",
              "Fecha de pago",
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

export default BillingTable;
