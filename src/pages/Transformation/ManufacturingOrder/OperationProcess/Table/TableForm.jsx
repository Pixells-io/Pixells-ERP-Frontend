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
import {
  addCircle,
  checkmark,
  chevronBack,
  chevronForward,
  closeCircle,
  pause,
  play,
} from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialRow = {
  id: 1,
  component: "",
  amount: 0,
  unit: "",
  const: 0,
  consume: 0,
};

const components = [
  {
    id: 1,
    name: "Aceite vegetal",
    unit: "L",
    cost: "60.00",
  },
  {
    id: 2,
    name: "Aceite Motor",
    unit: "L",
    cost: "210.00",
  },
  {
    id: 3,
    name: "Aguacate",
    unit: "U",
    cost: "30.00",
  },
  {
    id: 4,
    name: "Huevos",
    unit: "U",
    cost: "7.00",
  },
];

const TableForm = ({ tableData, setTableData, setTotalProducts }) => {
  useEffect(() => {
    setTableData([initialRow]);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleAddRow = (e) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      { ...initialRow, id: getUltimateRowId() + 1 },
    ]);
  };

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.consume) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [tableData]);

  const handleInputChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amount: value,
              consume: (item.cost * value).toFixed(2),
            }
          : item,
      ),
    );
  }, []);

  const handleDataInRow = useCallback((data, rowIndex) => {
    console.log(data);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              component: data,
              unit: data.unit,
              cost: data.cost,
              amount: 1,
              consume: (data.cost * 1).toFixed(2),
            }
          : item,
      ),
    );
  }, []);

  const deleteRowId = (id) => {
    if (tableData.length == 1) return;
    const auxRowDelete = tableData.filter((row) => row.id !== id);
    setTableData(auxRowDelete);
  };

  const getUltimateRowId = () => {
    if (tableData.length > 0) {
      return tableData[tableData.length - 1].id;
    }
    return 0;
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "component",
        header: "Operación",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">
            <Select
              name={"selectComponent-" + rowIndex}
              className="h-10"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row.component}
            >
              <SelectTrigger className="w-[100px] border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                <SelectValue placeholder="Selecciona el componente" />
              </SelectTrigger>
              <SelectContent>
                {components.map((component, index) => (
                  <SelectItem key={"component-" + index} value={component}>
                    {component.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        accessorKey: "amount",
        header: "Proceso de Operación",
        cell: ({ row, rowIndex }) => (
          <Input
            className="w-[100px] border-none"
            name={`amount-${rowIndex}`}
            value={row.amount}
            placeholder="ingrese"
            type="number"
            disabled={!row.component}
            onChange={(e) => handleInputChange(rowIndex, e.target.value)}
          />
        ),
      },
      {
        accessorKey: "product",
        header: "Producto",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">
            <Select
              name={"selectComponent-" + rowIndex}
              className="h-10"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row.component}
            >
              <SelectTrigger className="w-[100px] border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
                <SelectValue placeholder="Selecciona el componente" />
              </SelectTrigger>
              <SelectContent>
                {components.map((component, index) => (
                  <SelectItem key={"component-" + index} value={component}>
                    {component.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ),
      },
      {
        accessorKey: "unit",
        header: "Cantidad",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">{row.unit}</div>
        ),
      },
      {
        accessorKey: "date",
        header: "Fecha",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">{row.unit}</div>
        ),
      },
      {
        accessorKey: "estimatedDuration",
        header: "Duración Estimada",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">{row.unit}</div>
        ),
      },
      {
        accessorKey: "realDuration",
        header: "Duración Real",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">{row.unit}</div>
        ),
      },
      {
        accessorKey: "status",
        header: "Estado ",
        cell: ({ row, rowIndex }) => (
          <div className="flex w-[200px] items-center justify-between">
            {rowIndex == 0 ? (
              <div className="flex items-center gap-x-2">
                <div className="flex items-center justify-center rounded-full bg-[#FFB82F] bg-opacity-25 w-20 py-1">
                  <label className="text-xs font-semibold text-[#FFB82F]">
                    En proceso
                  </label>
                </div>
                <button
                  onClick={() => deleteRowId(row.id)}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F9D994] shadow-[0_0_4px_2px_rgba(215,215,215,1)]"
                >
                  <IonIcon
                    icon={pause}
                    className="cursor-pointer text-white"
                  ></IonIcon>
                </button>
                <button
                  onClick={() => deleteRowId(row.id)}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00A259] shadow-[0_0_4px_2px_rgba(215,215,215,1)]"
                >
                  <IonIcon
                    icon={checkmark}
                    className="cursor-pointer text-white"
                  ></IonIcon>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-x-2">
                <div className="flex justify-center items-center rounded-full bg-[#FAA364] bg-opacity-25 w-20 py-1">
                  <label className="text-xs font-semibold text-[#FAA364]">
                    Por iniciar
                  </label>
                </div>
                <button
                  onClick={() => deleteRowId(row.id)}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B89FF] shadow-[0_0_4px_2px_rgba(215,215,215,1)]"
                >
                  <IonIcon
                    icon={play}
                    className="cursor-pointer text-white p-0"
                  ></IonIcon>
                </button>
              </div>
            )}
            <button
              onClick={() => deleteRowId(row.id)}
              className="flex items-center"
            >
              <IonIcon
                icon={closeCircle}
                size="small"
                className="h-6 w-6 cursor-pointer text-grisDisabled"
              ></IonIcon>
            </button>
          </div>
        ),
      },
    ],
    [handleInputChange, deleteRowId],
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

export default TableForm;
