import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";

const TableBook = () => {
  const data = [
    {
      poliza: "001",
      estado: "Activo",
      fecha: "2024-07-12",
      tercero: ["Empresa A", "Sucursal 1"],
      codigo: ["56273", "56274"],
      cuenta: ["AC", "AC"],
      centro: ["Ventas", "Marketing"],
      debito: ["1000", "500"],
      credito: ["0", "0"]
    },
    {
      poliza: "002",
      estado: "Pendiente",
      fecha: "2024-07-13",
      tercero: ["Empresa B", "Sucursal 2"],
      codigo: ["56275", "56276"],
      cuenta: ["AC", "AC"],
      centro: ["Ventas", "Administración"],
      debito: ["1000", "800"],
      credito: ["2000", "1000"]
    },
    {
      poliza: "003",
      estado: "Finalizada",
      fecha: "2024-07-13",
      tercero: ["Empresa H", "Sucursal 2"],
      codigo: ["56275", "56276"],
      cuenta: ["AC", "AC"],
      centro: ["Ventas", "Administración"],
      debito: ["1000", "800"],
      credito: ["2000", "1000"]
    },
    {
      poliza: "004",
      estado: "Finalizada",
      fecha: "2024-07-13",
      tercero: ["Empresa F", "Sucursal 1"],
      codigo: ["56275", "56276"],
      cuenta: ["AC", "AC"],
      centro: ["Ventas", "Administración"],
      debito: ["1000", "800"],
      credito: ["2000", "1000"]
    },
  ];

  const columns = [
    "Poliza", "Estado", "Fecha", "Tercero", "Código", "Cuenta Contable", 
    "Centro de Costos", "Débito", "Crédito"
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="overflow-auto rounded-xl bg-white p-7 mt-2 mb-2">
        <Table>
          <TableHeader>
            <TableRow className="text-xs items-center bg-gris border-b-primario border-b-2 text-grisText">
              {columns.map((column) => (
                <TableHead key={column} className="text-center font-normal">{column}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm font-roboto text-[#44444F] font-normal">
            {paginatedData.map((row, rowIndex) => (
              [0, 1].map((subIndex) => (
                <TableRow key={`${rowIndex}-${subIndex}`}>
                  <TableCell className={`text-center ${subIndex === 0 ? 'border-b border-transparent' : ''}`}>
                    {subIndex === 0 ? row.poliza : ""}
                  </TableCell>
                  <TableCell className={`text-center ${subIndex === 0 ? 'border-b border-transparent' : ''}`}>
                    {subIndex === 0 ? row.estado : ""}
                  </TableCell>
                  <TableCell className={`text-center ${subIndex === 0 ? 'border-b border-transparent' : ''}`}>
                    {subIndex === 0 ? row.fecha : ""}
                  </TableCell>
                  <TableCell className="text-center">{row.tercero[subIndex]}</TableCell>
                  <TableCell className="text-center">{row.codigo[subIndex]}</TableCell>
                  <TableCell className="text-center">{row.cuenta[subIndex]}</TableCell>
                  <TableCell className="text-center">{row.centro[subIndex]}</TableCell>
                  <TableCell className="text-center">${row.debito[subIndex]}</TableCell>
                  <TableCell className="text-center">$ {row.credito[subIndex]}</TableCell>
                </TableRow>
              ))
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4">
        <div className="flex items-end space-x-2">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            className={`mr-2 ${currentPage === 1 ? 'text-gray-300' : 'text-primario cursor-pointer'}`}
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            className={`ml-2 ${currentPage === totalPages ? 'text-gray-300' : 'text-primario cursor-pointer'}`}
          />
        </div>
      </div>
    </>
  );
};

export default TableBook;
