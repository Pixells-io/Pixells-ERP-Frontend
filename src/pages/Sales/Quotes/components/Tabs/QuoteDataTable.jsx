import React, { useState, useMemo, useEffect, useCallback } from "react";
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
import { addCircleOutline, chevronBack, chevronForward } from "ionicons/icons";

const QuoteTable = ({ onTotalChange }) => {
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
  const [total, setTotal] = useState(0);
  const itemsPerPage = 10;

  const calculateTotal = useCallback((row) => {
    const valor = parseFloat(row.valor) || 0;
    const cantidad = parseFloat(row.cantidad) || 0;
    const descuento = parseFloat(row.descuento) || 0;
    const impuesto = parseFloat(row.impuesto) || 0;
    return valor * cantidad * (1 - descuento / 100) * (1 + impuesto / 100);
  }, []);

  useEffect(() => {
    const newTotal = tableData.reduce((sum, row) => sum + calculateTotal(row), 0);
    setTotal(newTotal);
    if (onTotalChange) {
      onTotalChange(newTotal);
    }
  }, [tableData, calculateTotal, onTotalChange]);

  const handleAddRow = useCallback((e) => {
    e.preventDefault();
    setTableData((prevData) => [...prevData, { ...initialRow }]);
  }, []);

  const handleInputChange = useCallback((rowIndex, key, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { ...item, [key]: value } : item
      )
    );
  }, []);

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
      <div className="flexbox overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-primario border-b-2">
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
                      className="border p-1 h-auto focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-inherit text-xs font-normal text-grisHeading"
                      value={row[column.key]}
                      onChange={(e) =>
                        handleInputChange(
                          (currentPage - 1) * itemsPerPage + rowIndex,
                          column.key,
                          e.target.value
                        )
                      }
                    />
                  </TableCell>
                ))}
                <TableCell>{calculateTotal(row).toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <IonIcon
          icon={addCircleOutline}
          size="small"
          className="text-primario cursor-pointer"
          onClick={handleAddRow}
        />
        <div className="flex items-center">
          <IonIcon 
            icon={chevronBack}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 text-primario"
          />
          <IonIcon 
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 text-primario"
          />
        </div>
      </div>
     
    </>
  );
};

export default QuoteTable;