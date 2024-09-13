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
    // Redondear al número entero más cercano
    return Math.round(value);
  } else {
    // Si no se usa rounding, redondear al siguiente número entero si la parte decimal es >= 0.6
    const factor = Math.pow(10, decimalPlaces);
    const roundedValue = Math.floor(value * factor) / factor;
    const decimalPart = value - roundedValue;

    if (decimalPart >= 0.6) {
      return Math.ceil(value);
    } else {
      return roundedValue;
    }
  }
};


const DataTable = ({
  initialData,
  onDataChange,
  products,
  indRef,
  roundingF,
}) => {
  const [tableData, setTableData] = useState(
    initialData.map(item => ({
      ...item,
      nuevoArticulo: item.nuevoArticulo || "",
      precioUnitario: parseFloat(item.precioUnitario) || 0,
      indiceEditable: parseFloat(item.indiceEditable) || 0,
      precioRefactorizacion: parseFloat(item.precioRefactorizacion) || 0,
    }))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleInputChange = useCallback(
    (rowIndex, columnKey, value) => {
      const numericValue = parseFloat(value);
      
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
    setTableData((prevData) => {
      if (prevData.length > 1) {
        return prevData.filter((_, index) => index !== rowIndex);
      }
      return prevData;
    });
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

  const handleSelectChange = (rowIndex, productId) => {
    const selectedProduct = products.find(product => product.id === parseInt(productId));
    
    if (selectedProduct) {
      setTableData(prevData => {
        const newData = [...prevData];
        newData[rowIndex] = {
          ...newData[rowIndex],
          descripcion: selectedProduct.name,
          precioUnitario: parseFloat(selectedProduct.price) || 0,
          nuevoArticulo: productId,
        };

        const { precioUnitario = 0, indiceEditable = 0 } = newData[rowIndex];
        const rawPrecioRefactorizacion = precioUnitario * indiceEditable;
        newData[rowIndex].precioRefactorizacion = formatNumber(rawPrecioRefactorizacion, 2, roundingF);
        
        return newData;
      });
    }
  };

  const commonInputClass = "border-gris2-transparent h-auto w-[140px] bg-inherit p-1 font-roboto text-[14px] focus-visible:ring-primarioBotones";

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
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Select
                  value={row.nuevoArticulo.toString()} 
                  onValueChange={(value) => handleSelectChange(rowIndex, value)}
                >
                  <SelectTrigger className={`${commonInputClass} border rounded-lg text-black placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones`}>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id.toString()}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </TableCell>
              <TableCell>
                <Input
                  type="number"
                  name={`listaPrecioBase-${rowIndex}`}
                  value={row.listaPrecioBase}
                  onChange={(e) =>
                    handleInputChange(rowIndex, "listaPrecioBase", e.target.value)
                  }
                  className={commonInputClass}
                />
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
                  value={formatNumber(row.precioRefactorizacion, 2, roundingF)}
                  className={commonInputClass}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleDeleteRow(rowIndex)}
                  className="ml-auto h-10 w-10 rounded-full bg-transparent p-2 transition-all duration-300 hover:bg-primarioBotones hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-primarioBotones"
                >
                  <IonIcon icon={closeCircle} className="h-6 w-6 cursor-pointer text-grisDisabled"/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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