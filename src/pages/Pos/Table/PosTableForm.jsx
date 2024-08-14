import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IonIcon } from "@ionic/react";
import { addCircle, chevronBack, chevronForward } from "ionicons/icons";

const PosTableForm = ({ tableData, setTotalProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.subTotal) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [tableData]);

  const columns = useMemo(
    () => [
      {
        id: "image",
        header: "imagen",
        accessorKey: "image",
        cell: ({ row }) => <>{row?.image}</>,
      },
      {
        id: "article",
        header: "ARTICULO",
        accessorKey: "article",
        cell: ({ row }) => <>{row?.article}</>,
      },
      {
        id: "sku",
        header: "SKU.",
        accessorKey: "sku",
        cell: ({ row }) => <>{row?.sku}</>,
      },
      {
        id: "description",
        header: "DESCRIPCION",
        accessorKey: "description",
        cell: ({ row }) => <>{row?.description}</>,
      },
      {
        id: "quantity",
        header: "CANTIDAD",
        accessorKey: "quantity",
        cell: ({ row }) => <>{row?.quantity}</>,
      },
      {
        id: "price",
        header: "PRECIO",
        accessorKey: "price",
        cell: ({ row }) => <>{row?.price}</>,
      },
      {
        id: "discount",
        header: "DESCUENTO",
        accessorKey: "discount",
        cell: ({ row }) => <>{row?.discount}</>,
      },
      {
        id: "iva",
        header: "IMPUESTO",
        accessorKey: "iva",
        cell: ({ row }) => <>{row?.iva}</>,
      },
      {
        id: "subTotal",
        header: "SUBTOTAL",
        accessorKey: "subTotal",
        cell: ({ row }) => <>{row?.subTotal}</>,
      },
    ],
    [],
  );

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="mb-2 rounded-xl">
      <div className="">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="text-sm font-normal text-[#44444F]"
              >
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    {column.cell({
                      row,
                      rowIndex: (currentPage - 1) * itemsPerPage + rowIndex,
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`mr-2 ${currentPage !== 1 ? "text-primario" : "text-grisText"} ${currentPage !== 1 && "hover:cursor-pointer"}`}
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`ml-2 ${currentPage === totalPages ? "text-grisText" : "text-primario"} ${currentPage !== totalPages && "hover:cursor-pointer"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default PosTableForm;
