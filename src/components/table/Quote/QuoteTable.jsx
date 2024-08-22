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
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  calculateTotal,
  handleAddRow,
  handleDeleteRow,
  handleInputChange,
} from "./Utils";
/**
 * initialItems -> Lista de items para cargar en tabla
 * isEditable - True -> permite realizar las acciones de la tabla
 * setTotalChanges -> es el estado que retorna el total de los items
 *  
 */
const QuoteTable = ({
  initialItems,
  setItems,
  isEditable,
  setTotalChanges,
}) => {
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
  const location = useLocation();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (location.pathname.includes("edit")) {
      setTableData(initialItems.length > 0 ? initialItems : [initialRow]);
    } else {
      setTableData([initialRow]);
    }
  }, [location.pathname, initialItems]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const newTotal = tableData.reduce(
      (sum, row) => sum + calculateTotal(row),
      0,
    );
    if (setTotalChanges) {
      setTotalChanges(newTotal);
    }
  }, [tableData, setTotalChanges]);

  const columns = useMemo(
    () => [
      { key: "item", header: "Item", type: "text" },
      { key: "codigo", header: "Código", type: "text" },
      { key: "valor", header: "Valor", type: "number" },
      { key: "descuento", header: "Descuento (%)", type: "number" },
      { key: "impuesto", header: "Impuesto (%)", type: "number" },
      { key: "cantidad", header: "Cantidad", type: "number" },
      { key: "unidad", header: "Unidad", type: "text" },
      { key: "fechaEntrega", header: "Fecha de Entrega", type: "date" },
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
    <>
      <div className="flex overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario">
              {columns.map((column) => (
                <TableHead key={column.key}>{column.header}</TableHead>
              ))}
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
                      name={`data[${(currentPage - 1) * itemsPerPage + rowIndex}][${column.key}]`}
                      className="w-[100px] h-auto border-gris2-transparent bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                      value={row[column.key]}
                      onChange={(e) =>
                        isEditable &&
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value,
                          setTableData,
                        )
                      }
                      readOnly={!isEditable}
                    />
                  </TableCell>
                ))}
                <TableCell>
                  <div className="flex items-center justify-between gap-x-2">
                    ${calculateTotal(row).toFixed(2)}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        isEditable &&
                        handleDeleteRow(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          setTableData,
                          tableData,
                        )
                      }
                      disabled={tableData.length === 1 || !isEditable}
                      className="rounded-full bg-transparent p-1 focus-visible:ring-primarioBotones"
                    >
                      <IonIcon
                        icon={closeCircle}
                        size="small"
                        className="cursor-pointer text-grisDisabled"
                      />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) =>
            isEditable && handleAddRow(e, setTableData, initialRow)
          }
          disabled={!isEditable}
          className="rounded-full bg-transparent p-1 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones focus:ring-opacity-50 active:bg-primarioBotones active:bg-opacity-20"
        >
          <IonIcon
            icon={addCircle}
            size="small"
            className="hover:text-primarioBotones-dark active:text-primarioBotones-darker text-primarioBotones transition-colors duration-300"
          />
        </Button>
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

export default QuoteTable;
