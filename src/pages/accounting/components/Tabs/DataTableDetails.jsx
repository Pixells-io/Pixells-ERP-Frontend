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
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const totalDebito = data.reduce((sum, row) => sum + parseFloat(row.debito), 0);
  const totalCredito = data.reduce((sum, row) => sum + parseFloat(row.credito), 0);

  return (
    <>
      <div className="overflow-auto mb-8">
        <div className="mb-4">
          <p className="font-poppins text-lg font-[16px] text-[#44444F]">
            {title}
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="text-sm items-center bg-gris border-b-primario border-b-2">
              {columns.map((column) => (
                <TableHead key={column.accessorKey} className="text-center">
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
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
      <div className="mt-2 flex justify-between space-x-3 mb-8">
      <div className="flex items-end space-x-2">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            className={`mr-2 ${currentPage === 1 ? 'text-gray-400' : 'text-primario cursor-pointer'}`}
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            className={`ml-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-primario cursor-pointer'}`}
          />
        </div>
        <div className="flex grid-cols-8 gap-7 text-sm space-x-3 font-roboto">
          <div>Total: </div>
          <div>$ {totalDebito.toFixed(2)}</div>
          <div>$ {totalCredito.toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default DataTableDetails;