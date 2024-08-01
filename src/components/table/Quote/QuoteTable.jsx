import React, { useState, useMemo, useEffect } from "react";
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
import { addCircle, chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Button } from "@/components/ui/button";
import { calculateTotal, handleAddRow, handleInputChange, handleDeleteRow } from "./quoteTableUtils";

const QuoteTable = ({ setTotalChanges }) => {
  const initialRow = {
    item: "",
    codigo: "",
    valor: "",
    descuento: "",
    impuesto: "",
    cantidad: "",
    unidad: "",
    fechaEntrega: "",
  };

  const [tableData, setTableData] = useState([initialRow]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const newTotal = tableData.reduce((sum, row) => sum + calculateTotal(row), 0);
    if (setTotalChanges) {
      setTotalChanges(newTotal);
    }
  }, [tableData, setTotalChanges]);

  const columns = useMemo(
    () => [
      { key: 'item', header: 'Item', type: 'text' },
      { key: 'codigo', header: 'Código', type: 'text' },
      { key: 'valor', header: 'Valor', type: 'number' },
      { key: 'descuento', header: 'Descuento (%)', type: 'number' },
      { key: 'impuesto', header: 'Impuesto (%)', type: 'number' },
      { key: 'cantidad', header: 'Cantidad', type: 'number' },
      { key: 'unidad', header: 'Unidad', type: 'text' },
      { key: 'fechaEntrega', header: 'Fecha de Entrega', type: 'date' },
    ],
    []
  );

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
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
      <div className="flex overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-primario border-b-2">
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
              <TableHead>Total</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    <Input
                      type={column.type}
                      name={`data[${(currentPage - 1) * itemsPerPage + rowIndex}][${column.key}]`}
                      className="border p-1 h-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-inherit text-xs font-normal text-grisHeading"
                      value={row[column.key]}
                      onChange={(e) =>
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value,
                          setTableData
                        )
                      }
                    />
                  </TableCell>
                ))}
                <TableCell>{calculateTotal(row).toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      handleDeleteRow(
                        (currentPage - 1) * itemsPerPage + rowIndex,
                        setTableData,
                        tableData
                      )
                    }
                    disabled={tableData.length === 1}
                    className="p-1 rounded-full bg-transparent hover:bg-grisText hover:bg-opacity-10 active:bg-grisText active:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-grisText focus:ring-opacity-50 transition-all duration-300"
                  >
                    <IonIcon
                      icon={closeCircle}
                      size="small"
                      className="text-grisText hover:text-grisText-dark active:text-grisText-darker transition-colors duration-300"
                    />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => handleAddRow(e, setTableData, initialRow)}
          className="p-1 rounded-full bg-transparent hover:bg-primarioBotones hover:bg-opacity-10 active:bg-primarioBotones active:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 transition-all duration-300"
        >
          <IonIcon
            icon={addCircle}
            size="small"
            className="text-primarioBotones hover:text-primarioBotones-dark active:text-primarioBotones-darker transition-colors duration-300"
          />
        </Button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 p-1 rounded-full bg-transparent hover:bg-primarioBotones hover:bg-opacity-10 active:bg-primarioBotones active:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 transition-all duration-300"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="text-primarioBotones hover:text-primarioBotones-dark active:text-primarioBotones-darker transition-colors duration-300"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 p-1 rounded-full bg-transparent hover:bg-primarioBotones hover:bg-opacity-10 active:bg-primarioBotones active:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 transition-all duration-300"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="text-primarioBotones hover:text-primarioBotones-dark active:text-primarioBotones-darker transition-colors duration-300"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuoteTable;

