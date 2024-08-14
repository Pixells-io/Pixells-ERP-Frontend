import React, { useState, useMemo, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IonIcon } from "@ionic/react";
import { addCircle, chevronBack, chevronForward, closeCircle } from "ionicons/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatNumber, formatDecimalInput } from "./utils";

const DataTable = ({ initialData, onDataChange, roundValues, roundingMethod, decimalPlaces = 2, indRef }) => {
  const [tableData, setTableData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const columns = useMemo(() => [
    { key: "nuevoArticulo", header: "Nuevo artículo", type: "text" },
    { key: "descripcion", header: "Descripción", type: "text" },
    { key: "listaPrecioBase", header: "Lista de precio base", type: "select" },
    { key: "precioBase", header: "Precio base", type: "number", readOnly: true },
    { key: "precioUnitario", header: "Precio unitario", type: "number" },
    { key: "indiceRefactorizacion", header: "Índice de refactorización", type: "number", readOnly: true },
    { key: "precioRefactorizacion", header: "Precio de refactorización", type: "number", readOnly: true },
  ], []);

  useEffect(() => onDataChange(tableData), [tableData, onDataChange]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleInputChange = (rowIndex, columnKey, value) => {
    setTableData(prevData => {
      const newData = [...prevData];
      const column = columns.find(col => col.key === columnKey);
      if (column.readOnly) return prevData;

      let newValue = column.type === "number" ? parseFloat(formatDecimalInput(value, decimalPlaces)) || 0 : value;
      newData[rowIndex] = { ...newData[rowIndex], [columnKey]: newValue };

      if (columnKey === "listaPrecioBase") {
        newData[rowIndex].precioBase = newData[rowIndex].precioUnitario = parseFloat(value);
      }

      if (["precioUnitario", "indiceRefactorizacion", "listaPrecioBase"].includes(columnKey)) {
        const { precioUnitario = 0, indiceRefactorizacion = 0 } = newData[rowIndex];
        newData[rowIndex].precioRefactorizacion = formatNumber(
          precioUnitario * indiceRefactorizacion,
          decimalPlaces,
          roundValues,
          roundingMethod
        );
      }

      return newData;
    });
  };

  const handleAddRow = () => {
    setTableData([...tableData, {
      nuevoArticulo: "",
      descripcion: "",
      listaPrecioBase: "",
      precioBase: 0,
      precioUnitario: 0,
      indiceRefactorizacion: indRef,
      precioRefactorizacion: 0,
    }]);
  };
  const handleDeleteRow = (rowIndex) => tableData.length > 1 && setTableData(tableData.filter((_, index) => index !== rowIndex));
  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col rounded-lg bg-white p-4">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map(column => <TableHead key={column.key}>{column.header}</TableHead>)}
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map(column => (
                <TableCell key={column.key}>
                  {column.type === "select" ? (
                    <Select value={row[column.key]} onValueChange={(value) => handleInputChange(rowIndex, column.key, value)}>
                      <SelectTrigger><SelectValue placeholder="Lista de precio base" /></SelectTrigger>
                      <SelectContent>
                        {["55.0", "53.30", "24.50"].map(value => <SelectItem key={value} value={value}>{value}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      type={column.type}
                      value={column.readOnly && (column.key === "precioRefactorizacion")
                        ? formatNumber(row[column.key], decimalPlaces, roundValues, roundingMethod)
                        : row[column.key]}
                      onChange={(e) => handleInputChange(rowIndex, column.key, e.target.value)}
                      readOnly={column.readOnly}
                      className={`h-auto ${column.readOnly ? "border-none" : "border"} bg-inherit p-1 text-xs font-normal focus:ring-0 focus:ring-offset-0`}
                    />
                  )}
                </TableCell>
              ))}
              <TableCell>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteRow(rowIndex)} disabled={tableData.length === 1} className="rounded-full bg-transparent p-1">
                  <IonIcon icon={closeCircle} size="small" className="text-grisText" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={handleAddRow} className="rounded-full bg-transparent p-1">
          <IonIcon icon={addCircle} size="small" className="text-primarioBotones" />
        </Button>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={handlePrevPage} disabled={currentPage === 1} className="mr-2 rounded-full bg-transparent p-1">
            <IonIcon icon={chevronBack} size="small" className="text-primarioBotones" />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages} className="ml-2 rounded-full bg-transparent p-1">
            <IonIcon icon={chevronForward} size="small" className="text-primarioBotones" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;