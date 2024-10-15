import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IonIcon } from "@ionic/react";
import {
  addCircle,
  chevronBack,
  chevronForward,
  closeCircle,
} from "ionicons/icons";

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Input } from "@/components/ui/input";

const ProcesoTable = ({
  tableData,
  setTableData,
  setTotalProducts,
  productNeed: components,
}) => {
  useEffect(() => {
    if (tableData.length == 0) {
      setTableData([initialRow]);
    } else {
      const updateTableDataIdAux = tableData.map((item, index) => ({
        ...item,
        idAux: index + 1,
      }));
      setTableData(updateTableDataIdAux);
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const initialRow = {
    idAux: 1,
    operation: "",
    process_operation: "",
    product: { label: "Selecciona", value: "selecciona" },
    durartion: "00:00",
  };

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.subTotal) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [tableData]);

  const handleAddRow = (e) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      { ...initialRow, idAux: getUltimateRowId() + 1 },
    ]);
  };

  const handleInputChange = (rowIndex, value) => {
    console.log(value.name);
    console.log(value.value);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              [value.name]: value.value,
            }
          : item,
      ),
    );
  };

  const handleDataInRow = (data, rowIndex) => {
    console.log(data);
    if (data.id) {
      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                id: data.id,
                operation: "",
                process_operation: "",
                product: { label: "Slecciona", value: "selecciona" },
                durartion: "00:00",
                label: data.name,
                value: data.id,
              }
            : item,
        ),
      );
    } else {
      return;
    }
  };

  const deleteRowId = (id) => {
    if (tableData.length == 1) return;
    const auxRowDelete = tableData.filter((row) => row.idAux !== id);
    setTableData(auxRowDelete);
  };

  const getUltimateRowId = () => {
    if (tableData.length > 0) {
      return tableData[tableData.length - 1].idAux;
    }
    return 0;
  };

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

  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const columns = [
    {
      accessorKey: "operation",
      header: "Operación",
      cell: ({ row, rowIndex }) => (
        <Input
          className="border-gris2-transparent w-52 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`operation`}
          value={row.operation}
          placeholder="ingrese"
          type="text"
          // disabled={!row.component}
          onChange={(e) => handleInputChange(rowIndex, e.target)}
        />
      ),
    },
    {
      accessorKey: "process_operation",
      header: "Proceso de Operación ",
      cell: ({ row, rowIndex }) => (
        <Input
          className="border-gris2-transparent w-52 rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`process_operation`}
          value={row.process_operation}
          placeholder="ingrese"
          type="text"
          // disabled={!row.component}
          onChange={(e) => handleInputChange(rowIndex, e.target)}
        />
      ),
    },
    {
      accessorKey: "product",
      header: "Producto",
      cell: ({ row, rowIndex }) => (
        <div className="w-60">
          <SelectRouter
            name={"selectComponent-" + rowIndex}
            value={tableData[rowIndex]}
            options={components}
            onChange={(value) => handleDataInRow(value, rowIndex)}
          />
        </div>
      ),
    },
    {
      accessorKey: "duration",
      header: "Duración Estimada",
      cell: ({ row, rowIndex }) => (
        // <Input
        //   type="time"
        //   className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
        //   name={`duration`}
        //   // value={row.durartion}
        //   // disabled={!row.component}
        //   // onChange={(e) => handleInputChange(rowIndex, e.target)}
        // />
        <div className="flex items-center space-x-1">
          <input
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            min="0"
            placeholder="Hrs"
            className="w-12 rounded-md border p-2 text-center [appearance:textfield] focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <span className="text-gray-600">:</span>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min="0"
            max="59"
            placeholder="Min"
            className="w-12 rounded-md border p-2 text-center [appearance:textfield] focus:outline-none focus:ring-2 focus:ring-blue-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
        </div>
      ),
    },
    {
      accessorKey: "close",
      header: "",
      cell: ({ row, rowIndex }) => (
        <button type="button" onClick={() => deleteRowId(row.idAux)}>
          <IonIcon
            icon={closeCircle}
            size="small"
            className="cursor-pointer text-grisDisabled"
          ></IonIcon>
        </button>
      ),
    },
  ];

  return (
    <div className="mb-2 rounded-xl">
      <div className="">
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-b-primario text-xs font-normal text-grisText">
              {columns.map((column) => (
                <TableHead key={column.accessorKey}>{column.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="text-sm font-normal text-[#44444F]"
              >
                {columns.map((column) => (
                  <TableCell key={column.accessorKey}>
                    {column.cell({
                      row,
                      rowIndex: (currentPage - 1) * itemsPerPage + rowIndex,
                    })}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
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
            className={`mr-2 ${currentPage !== 1 ? "text-primario" : "text-grisText"} ${currentPage !== 1 && "hover:cursor-pointer"}`}
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`ml-2 ${currentPage === totalPages ? "text-grisText" : "text-primario"} ${currentPage !== totalPages && "hover:cursor-pointer"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcesoTable;
