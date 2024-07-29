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

const DataTableDetails = ({ data, columns, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const totalDebito = data.reduce(
    (sum, row) => sum + parseFloat(row.debito),
    0,
  );
  const totalCredito = data.reduce(
    (sum, row) => sum + parseFloat(row.credito),
    0,
  );

  return (
    <>
      <div className="mb-8 overflow-auto">
        <div className="mb-4">
          <p className="text-md font-poppins font-medium text-[#44444F]">
            {title}
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="items-center border-b-2 border-b-primario bg-gris text-xs">
              {columns.map((column) => (
                <TableHead
                  key={column.accessorKey}
                  className="text-center font-normal"
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="text-xs font-normal text-[#44444F]"
              >
                {columns.map((column) => (
                  <TableCell key={column.accessorKey} className="text-center">
                    {row[column.accessorKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mb-8 mt-2 flex justify-between space-x-3">
        <div className="flex items-end space-x-2">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            className={`mr-2 ${currentPage === 1 ? "text-gray-400" : "cursor-pointer text-primario"}`}
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            className={`ml-2 ${currentPage === totalPages ? "text-gray-400" : "cursor-pointer text-primario"}`}
          />
        </div>
        <div className="flex grid-cols-8 gap-7 space-x-3 font-roboto text-sm font-medium text-grisText">
          <div className="p-2">Total: </div>
          <div className="p-2">$ {totalDebito.toFixed(2)}</div>
          <div className="p-2">$ {totalCredito.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default DataTableDetails;
