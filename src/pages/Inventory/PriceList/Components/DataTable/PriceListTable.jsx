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
      <Table className="w-full overflow-x-auto">
        <TableHeader>
          <TableRow className="border-b-primarioBotones text-xs font-normal text-grisText">
            <TableHead className="hidden md:table-cell">Nuevo artículo</TableHead>
            <TableHead className="hidden md:table-cell">Descripción</TableHead>
            <TableHead className="hidden md:table-cell">Lista de precio base</TableHead>
            <TableHead className="hidden md:table-cell">Precio base</TableHead>
            <TableHead className="hidden md:table-cell">Precio unitario</TableHead>
            <TableHead className="hidden md:table-cell">Índice de refactorización</TableHead>
            <TableHead className="hidden md:table-cell">Índice editable</TableHead>
            <TableHead className="hidden md:table-cell">Precio de refactorización</TableHead>
            <TableHead className="md:hidden">Detalles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="text-xs">
              <TableCell className="md:hidden">
                <div className="flex flex-col">
                  <span className="font-bold">Artículo:</span> {row.nuevoArticulo}
                </div>
              </TableCell>
              <TableCell className="md:hidden">
                <div className="flex flex-col">
                  <span className="font-bold">Descripción:</span> {row.descripcion}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Input
                  name={`nuevoArticulo-${rowIndex}`}
                  value={row.nuevoArticulo}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "nuevoArticulo", e.target.value)
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Input
                  name={`descripcion-${rowIndex}`}
                  value={row.descripcion}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "descripcion", e.target.value)
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Select
                  value={row.listaPrecioBase}
                  onValueChange={(value) =>
                    handleInputChange(rowIndex, "listaPrecioBase", value)
                  }
                >
                  <SelectTrigger className="border-gris2-transparent h-auto w-full rounded-lg border font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                    <SelectValue placeholder="Lista de precio base" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="55.0">55.0</SelectItem>
                    <SelectItem value="53.30">53.30</SelectItem>
                    <SelectItem value="24.50">24.50</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Input
                  name={`precioBase-${rowIndex}`}
                  value={formatNumber(row.precioBase, 2, false)}
                  readOnly
                  className="border-gris2-transparent h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
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
                  className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Input
                  name={`indiceRefactorizacion-${rowIndex}`}
                  value={row.indiceRefactorizacion}
                  readOnly
                  className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Input
                  type="number"
                  name={`indiceEditable-${rowIndex}`}
                  value={formatNumber(row.indiceEditable, 2, false)}
                  onChange={(e) =>
                    handleInputChange(
                      rowIndex,
                      "indiceEditable",
                      parseFloat(e.target.value),
                    )
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell className="hidden md:table-cell">
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
                    className="border-gris2-transparent flex h-auto w-full bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
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
