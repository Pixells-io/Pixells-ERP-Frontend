import React, { useState, useCallback, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";

const formatNumber = (value, decimalPlaces, roundValues, roundingMethod) => {
  if (roundValues === true) {
    return roundingMethod === "round" ? Math.round(value) : Math.trunc(value);
  }
  return value.toFixed(decimalPlaces);
};

const DataTable = ({
  initialData,
  onDataChange,
  indRef,
  roundValues,
  roundingMethod,
}) => {
  const [tableData, setTableData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = useCallback(
    (rowIndex, columnKey, value) => {
      setTableData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = { ...newData[rowIndex], [columnKey]: value };

        if (columnKey === "listaPrecioBase") {
          newData[rowIndex].precioBase = newData[rowIndex].precioUnitario =
            parseFloat(value);
        }

        if (
          ["precioUnitario", "indiceEditable", "listaPrecioBase"].includes(
            columnKey,
          )
        ) {
          const { precioUnitario = 0, indiceEditable = 0 } = newData[rowIndex];
          const rawPrecioRefactorizacion = precioUnitario * indiceEditable;
          newData[rowIndex].precioRefactorizacion = rawPrecioRefactorizacion;
        }

        return newData;
      });
    },
    [roundValues, roundingMethod],
  );

  const handleAddRow = useCallback(() => {
    setTableData((prevData) => [
      ...prevData,
      {
        nuevoArticulo: "",
        descripcion: "",
        listaPrecioBase: "",
        precioBase: 0,
        precioUnitario: 0,
        indiceRefactorizacion: indRef,
        indiceEditable: indRef,
        precioRefactorizacion: 0,
      },
    ]);
  }, [indRef]);

  const handleDeleteRow = useCallback((rowIndex) => {
    setTableData((prevData) =>
      prevData.filter((_, index) => index !== rowIndex),
    );
  }, []);

  useEffect(() => {
    onDataChange(tableData);
  }, [tableData, onDataChange]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex flex-col rounded-lg bg-white p-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b-primarioBotones text-xs font-normal text-grisText">
            <TableHead>Nuevo artículo</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Lista de precio base</TableHead>
            <TableHead>Precio base</TableHead>
            <TableHead>Precio unitario</TableHead>
            <TableHead>Índice de refactorización</TableHead>
            <TableHead>Índice editable</TableHead>
            <TableHead>Precio de refactorización</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                <Input
                  name={`nuevoArticulo-${rowIndex}`}
                  value={row.nuevoArticulo}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "nuevoArticulo", e.target.value)
                  }
                  placeholder={"Ingresa"}
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  name={`descripcion-${rowIndex}`}
                  value={row.descripcion}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "descripcion", e.target.value)
                  }
                  placeholder={"Ingresa"}
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Select
                  value={row.listaPrecioBase}
                  onValueChange={(value) =>
                    handleInputChange(rowIndex, "listaPrecioBase", value)
                  }
                >
                  <SelectTrigger className="
                  rounded-lg border border-gris2-transparent text-xs font-light text-black placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
                    <SelectValue placeholder="Lista de precio base" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="55.0">55.0</SelectItem>
                    <SelectItem value="53.30">53.30</SelectItem>
                    <SelectItem value="24.50">24.50</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input
                  name={`precioBase-${rowIndex}`}
                  value={formatNumber(row.precioBase,2,false)}
                  readOnly
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  name={`precioUnitario-${rowIndex}`}
                  value={row.precioUnitario}
                  onChange={(e) =>
                    handleInputChange(
                      rowIndex,
                      "precioUnitario",
                      parseFloat(e.target.value),
                    )
                  }
                  placeholder={"Ingresa"}
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  name={`indiceRefactorizacion-${rowIndex}`}
                  value={row.indiceRefactorizacion}
                  readOnly
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`indiceEditable-${rowIndex}`}
                  value={formatNumber(row.indiceEditable,2,false)}
                  onChange={(e) =>
                    handleInputChange(
                      rowIndex,
                      "indiceEditable",
                      parseFloat(e.target.value),
                    )
                  }
                  placeholder={"Ingresa"}
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
              <div className="flex items-center justify-between gap-x-2">
                <Input
                  name={`precioRefactorizacion-${rowIndex}`}
                  value={formatNumber(
                    row.precioRefactorizacion,
                    2,
                    roundValues,
                    roundingMethod,
                  )}
                  readOnly
                  className="h-auto border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
                />
                 <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteRow(rowIndex)}
                  disabled={tableData.length === 1}
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
      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleAddRow}
          className="rounded-full bg-transparent p-1"
        >
          <IonIcon
            icon={addCircle}
            size="small"
            className="text-primarioBotones"
          />
        </Button>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 rounded-full bg-transparent p-1"
          >
            <IonIcon
              icon={chevronBack}
              size="small"
              className="text-primarioBotones"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 rounded-full bg-transparent p-1"
          >
            <IonIcon
              icon={chevronForward}
              size="small"
              className="text-primarioBotones"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
