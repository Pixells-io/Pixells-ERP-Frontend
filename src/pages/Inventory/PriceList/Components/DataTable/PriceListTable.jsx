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

// Función para formatear números
const formatNumber = (value, decimalPlaces, rounding) => {
  if (isNaN(value) || value === null) {
    return ""; // O cualquier otro valor por defecto que prefieras
  }
  return rounding ? Math.round(value) : Number(value).toFixed(decimalPlaces);
};

// Componente DataTable
const DataTable = ({
  initialData,
  onDataChange,
  indRef,
  roundingF,
}) => {
  const [tableData, setTableData] = useState(
    initialData.map(item => ({
      ...item,
      precioUnitario: parseFloat(item.precioUnitario) || 0,
      indiceEditable: parseFloat(item.indiceEditable) || 0,
      precioRefactorizacion: parseFloat(item.precioRefactorizacion) || 0,
    }))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Manejador de cambios en los inputs
  const handleInputChange = useCallback(
    (rowIndex, columnKey, value) => {
      const numericValue = parseFloat(value); // Convierte el valor a número
      
      setTableData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex] = { ...newData[rowIndex], [columnKey]: numericValue };
    
        if (columnKey === "listaPrecioBase") {
          newData[rowIndex].precioBase = newData[rowIndex].precioUnitario = numericValue;
        }
    
        if (
          ["precioUnitario", "indiceEditable", "listaPrecioBase"].includes(columnKey)
        ) {
          const { precioUnitario = 0, indiceEditable = 0 } = newData[rowIndex];
          const rawPrecioRefactorizacion = precioUnitario * indiceEditable;
          newData[rowIndex].precioRefactorizacion = formatNumber(rawPrecioRefactorizacion, 2, roundingF);
        }
    
        return newData;
      });
    },
    [roundingF]
  );

  // Añadir nueva fila
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

  // Eliminar una fila
  const handleDeleteRow = useCallback((rowIndex) => {
    setTableData((prevData) =>
      prevData.filter((_, index) => index !== rowIndex),
    );
  }, []);

  // Actualizar datos cuando cambian
  useEffect(() => {
    onDataChange(tableData);
  }, [tableData, onDataChange]);

  // Paginación
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
                type="number"
                  name={`nuevoArticulo-${rowIndex}`}
                  value={row.nuevoArticulo}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "nuevoArticulo", e.target.value)
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-[100px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                  readOnly
               />
              </TableCell>
              <TableCell>
              <Select
                name={`descripcion-${rowIndex}`}
                  value={row.descripcion}
                  onValueChange={(value) =>
                    handleInputChange(rowIndex, "descripcion", value)
                  }
                >
                  <SelectTrigger className="border-gris2-transparent h-auto  rounded-lg border font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
                <Select
                  value={row.listaPrecioBase}
                  onValueChange={(value) =>
                    handleInputChange(rowIndex, "listaPrecioBase", value)
                  }
                >
                  <SelectTrigger className="border-gris2-transparent h-auto  rounded-lg border font-roboto text-[14px] text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
                  value={formatNumber(row.precioBase, 2, false)}
                  readOnly
                  className="border-gris2-transparent h-auto w-[100px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="text"
                  name={`precioUnitario-${rowIndex}`}
                  value={formatNumber(row.precioUnitario, 2, false)}
                  onChange={(e) =>
                    handleInputChange(
                      rowIndex,
                      "precioUnitario",
                      e.target.value,
                    )
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-auto bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  name={`indiceRefactorizacion-${rowIndex}`}
                  value={formatNumber(row.indiceRefactorizacion, 2, false)}
                  readOnly
                  className="border-gris2-transparent flex h-auto w-auto bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`indiceEditable-${rowIndex}`}
                  value={formatNumber(row.indiceEditable, 2, false)}
                  onChange={(e) =>
                    handleInputChange(
                      rowIndex,
                      "indiceEditable",
                      e.target.value,
                    )
                  }
                  placeholder={"Ingresa"}
                  className="border-gris2-transparent flex h-auto w-auto bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
                />
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-between gap-x-2">
                  <Input
                    name={`precioRefactorizacion-${rowIndex}`}
                    value={formatNumber(row.precioRefactorizacion, 2, roundingF)}
                    readOnly
                    className="border-gris2-transparent flex h-auto w-auto bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones"
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
                      className="cursor-pointer text-grisText hover:text-red-500"
                    />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Botones de Paginación */}
      <div className="mt-4 flex items-center justify-between">
        <IonIcon
          icon={addCircle}
          size="small"
          className="cursor-pointer text-primario"
          onClick={handleAddRow}
        />
        <div className="flex items-center">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 text-primario border-primarioBotones"
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 text-primario border-primarioBotones"
          />
        </div>
      </div>
      

    </div>
  );
};

export default DataTable;
