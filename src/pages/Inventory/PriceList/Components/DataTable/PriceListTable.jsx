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

const formatNumber = (value, decimalPlaces, rounding) => {
  if (isNaN(value) || value === null) {
    return "";
  }
  if (rounding) {
    return Math.round(value);
  } else {
    const factor = Math.pow(10, decimalPlaces);
    const roundedValue = Math.floor(value * factor) / factor;
    const decimalPart = value - roundedValue;
    return decimalPart >= 0.6 ? Math.ceil(value) : roundedValue;
  }
};

const DataTable = ({
  type,
  initialData,
  onDataChange,
  products,
  indRef,
  roundingF,
  priceBaseOptions,
  isEditable
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (Array.isArray(initialData) && initialData.length > 0) {
      setTableData(initialData.map(item => ({
        tipo: item.tipo || type,
        nuevoArticulo: item.nuevoArticulo || "",
        descripcion: item.descripcion || "",
        listaPrecioBase: item.listaPrecioBase || "",
        precioBase: item.precioBase || 0,
        precioUnitario: item.precioUnitario || 0,
        indiceRefactorizacion: item.indiceRefactorizacion || (indRef || 0),
        indiceEditable: item.indiceEditable || (indRef || 0),
        precioRefactorizacion: item.precioRefactorizacion || 0,
      })));
    } else {
      setTableData([{
        tipo: type,
        nuevoArticulo: "",
        descripcion: "",
        listaPrecioBase: "",
        precioBase: 0,
        precioUnitario: 0,
        indiceRefactorizacion: indRef || 0,
        indiceEditable: indRef || 0,
        precioRefactorizacion: 0,
      }]);
    }
  }, [initialData, indRef, type]);

  useEffect(() => {
    if (indRef) {
      setTableData(prevData =>
        prevData.map(row => ({
          ...row,
          indiceRefactorizacion: indRef,
          indiceEditable: indRef,
        }))
      );
    }
  }, [indRef]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleInputChange = useCallback((rowIndex, columnKey, value) => {
    const numericValue = parseFloat(value);
    setTableData(prevData => {
      const newData = [...prevData];
      newData[rowIndex] = { ...newData[rowIndex], [columnKey]: numericValue };
      if (["precioUnitario", "indiceEditable"].includes(columnKey)) {
        const { precioUnitario = 0, indiceEditable = 0 } = newData[rowIndex];
        const rawPrecioRefactorizacion = precioUnitario * indiceEditable;
        newData[rowIndex].precioRefactorizacion = formatNumber(
          rawPrecioRefactorizacion,
          2,
          roundingF
        );
      }
      if (columnKey === "indiceRefactorizacion") {
        newData[rowIndex].indiceEditable = numericValue;
      }
      return newData;
    });
  }, [roundingF]);

  const handleAddRow = useCallback(() => {
    setTableData(prevData => [
      ...prevData,
      {
        tipo: type,
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
  }, [indRef, type]);

  const handleDeleteRow = useCallback((rowIndex) => {
    setTableData(prevData => {
      if (prevData.length > 1) {
        return prevData.filter((_, index) => index !== rowIndex);
      }
      return prevData;
    });
  }, []);

  useEffect(() => {
    if (tableData.length > 0) {
      onDataChange(tableData);
    }
  }, [tableData, onDataChange]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  const handleSelectChange = (rowIndex, field, value) => {
    setTableData(prevData => {
      const newData = [...prevData];
      if (field === 'description') {
        const selectedProduct = products.find(product => product.id.toString() === value);
        if (selectedProduct) {
          newData[rowIndex] = {
            ...newData[rowIndex],
            nuevoArticulo: selectedProduct.id,
            descripcion: selectedProduct.name
          };
        }
      } else if (field === 'listaPrecioBase') {
        const selectedOption = priceBaseOptions.find(option => option.id.toString() === value);
        if (selectedOption) {
          newData[rowIndex] = {
            ...newData[rowIndex],
            listaPrecioBase: selectedOption.id,
            precioBase: selectedOption.price,
            precioUnitario: selectedOption.price,
          };
          const rawPrecioRefactorizacion = selectedOption.price * newData[rowIndex].indiceEditable;
          newData[rowIndex].precioRefactorizacion = formatNumber(
            rawPrecioRefactorizacion,
            2,
            roundingF
          );
        }
      }
      return newData;
    });
  };

  const commonInputClass =
    "border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones";
  const selectClass =
    "border-gris2-transparent h-auto w-full max-w-[140px] bg-inherit p-1 font-roboto text-[14px] rounded-lg border text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones";

  return (
    <div className="flex flex-col rounded-lg bg-white p-4">
      <Table>
        <TableHeader>
          <TableRow className="border-b-primarioBotones text-xs font-normal text-grisText">
            <TableHead className="text-center">Nuevo artículo</TableHead>
            <TableHead className="text-center">Descripción</TableHead>
            <TableHead className="text-center">Lista de precio base</TableHead>
            <TableHead className="text-center">Precio base</TableHead>
            <TableHead className="text-center">Precio unitario</TableHead>
            <TableHead className="text-center">Índice de refactorización</TableHead>
            <TableHead className="text-center">Índice editable</TableHead>
            <TableHead className="text-center">Precio de refactorización</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
      <Table>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell>
                <Input
                  type="text"
                  name={`nuevoArticulo-${rowIndex}`}
                  value={row.nuevoArticulo}
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Select
                  value={row.nuevoArticulo.toString()}
                  onValueChange={(value) => handleSelectChange(rowIndex, 'description', value)}
                >
                  <SelectTrigger className={selectClass}>
                    <SelectValue placeholder="Selecciona descripción" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.isArray(products) && products.map((product) => (
                      <SelectItem
                        key={product.id}
                        value={product.id.toString()}
                      >
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Select
                  value={row.listaPrecioBase.toString()}
                  onValueChange={(value) => handleSelectChange(rowIndex, 'listaPrecioBase', value)}
                >
                  <SelectTrigger className={selectClass}>
                    <SelectValue placeholder={row.listaPrecioBase ? `$ ${row.listaPrecioBase}` : "Selecciona precio base"} />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.isArray(priceBaseOptions) && priceBaseOptions.map((option) => (
                      <SelectItem
                        key={option.id}
                        value={option.id.toString()}
                      >
                        {` $ ${option.price}`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`precioBase-${rowIndex}`}
                  value={row.precioBase}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "precioBase", e.target.value)
                  }
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`precioUnitario-${rowIndex}`}
                  value={row.precioUnitario}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "precioUnitario", e.target.value)
                  }
                  min={"0.01"}
                  className={commonInputClass}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`indiceRefactorizacion-${rowIndex}`}
                  value={row.indiceRefactorizacion}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "indiceRefactorizacion", e.target.value)
                  }
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`indiceEditable-${rowIndex}`}
                  value={row.indiceEditable}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "indiceEditable", e.target.value)
                  }
                  className={commonInputClass}
                />
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`precioRefactorizacion-${rowIndex}`}
                  value={formatNumber(
                    row.precioRefactorizacion,
                    2,
                    roundingF
                  )}
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              {isEditable && ( // Conditional rendering for delete button
                <TableCell>
                  <Button
                    onClick={() => handleDeleteRow(rowIndex)}
                    className="ml-auto h-10 w-10 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones"
                  >
                    <IonIcon
                      icon={closeCircle}
                      className="h-6 w-6 cursor-pointer text-grisDisabled"
                    />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex items-center justify-between">
        {isEditable && ( // Conditional rendering for add button
          <IonIcon
            icon={addCircle}
            size="small"
            className="cursor-pointer text-primario"
            onClick={handleAddRow}
          />
        )}
        <div className="flex items-center">
          <IonIcon
            icon={chevronBack}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="mr-2 border-primarioBotones text-primario"
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 border-primarioBotones text-primario"
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
