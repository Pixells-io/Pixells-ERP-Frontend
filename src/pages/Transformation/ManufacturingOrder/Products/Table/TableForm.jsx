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
  chevronBack,
  chevronForward,
  closeCircle,
  statsChart,
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
        header: "Componente",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">
            <Select
              name={"selectComponent-" + rowIndex}
              className="h-10"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row.component}
            >
              <SelectTrigger className="w-[220px] border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
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
        header: "Cantidad",
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
        accessorKey: "unit",
        header: "Unidad",
        cell: ({ row, rowIndex }) => (
          <div className="w-[100px]">{row.unit}</div>
        ),
      },
      {
        accessorKey: "consume",
        header: "A consumir ",
        cell: ({ row, rowIndex }) => (
          <div className="flex items-center justify-between">
            <div className="flex w-[100px] items-center gap-x-4">
              {row.consume}
              <div className="w-full">
                <IonIcon
                  icon={statsChart}
                  className={`h-[30px] w-[30px] ${
                    row.consume >= 0 || row.consume == null
                      ? "text-[#00A259]"
                      : "text-[#D7586B]"
                  } `}
                ></IonIcon>
              </div>
            </div>
            <button type="button" onClick={() => deleteRowId(row.id)}>
              <IonIcon
                icon={closeCircle}
                size="small"
                className="cursor-pointer text-grisDisabled"
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
