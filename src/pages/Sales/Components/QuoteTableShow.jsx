import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { IonIcon } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import { Button } from "@/components/ui/button";

const QuoteTableShow = ({ tableData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const columns = useMemo(
    () => [
      {
        key: "name",
        header: "Item",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "",
      },
      {
        key: "code",
        header: "Código",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "",
      },
      {
        key: "price",
        header: "Precio x Unidad",
        type: "text",
        disabled: false,
        prefix: "$",
        subfix: "",
      },
      {
        key: "discount",
        header: "Descuento (%)",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "%",
      },
      {
        key: "tax",
        header: "Impuesto (%)",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "%",
      },
      {
        key: "quantity",
        header: "Cantidad",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "",
      },
      {
        key: "shipping_date",
        header: "Fecha de Entrega",
        type: "text",
        disabled: false,
        prefix: "",
        subfix: "",
      },
    ],
    [],
  );

  return (
    <>
      <div className="flex overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario">
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
              {/* <TableHead>SubTotal</TableHead> */}
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    <Input
                      type={column.type}
                      name={`${column.key}[${(currentPage - 1) * itemsPerPage + rowIndex}]`}
                      className="h-[32px] rounded-[10px] border border-[#D7D7D7] bg-inherit p-1 font-roboto text-sm text-[#44444f] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={
                        column?.prefix  + " " +  row[column.key] + " " + column?.subfix || ""
                      }
                      disabled={column.disabled}
                      readOnly
                    />
                  </TableCell>
                ))}
                {/* <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    {row?.sub_total}
                  </div>
                </TableCell> */}
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    {row?.total}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuoteTableShow;
