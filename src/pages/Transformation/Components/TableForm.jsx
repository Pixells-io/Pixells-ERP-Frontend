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
  cost: 0,
  amountTax: 16,
  tax: "",
  subTotal: 0,
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
  // const [tableData, setTableData] = useState([initialRow]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.subTotal) || 0),
      0,
    );

    setTotalProducts(TotalP);
  }, [tableData]);

  const handleAddRow = (e) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      { ...initialRow, id: getUltimateRowId() + 1 },
    ]);
  };

  const handleInputChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amount: value,
              tax: (item.cost * item.amountTax * value) / 100,
              subTotal:
                item.cost * value + (item.cost * item.amountTax * value) / 100,
            }
          : item,
      ),
    );
  }, []);

  const handleCostChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              cost: value,
              tax: (value * item.amountTax * item.amount) / 100,
              subTotal:
                value * item.amount +
                (value * item.amountTax * item.amount) / 100,
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
              component_id: data.id,
              component: data.name,
              unit: data.unit,
              cost: data.cost,
              amount: 1,
              amountTax: 16,
              tax: (data.cost * 16) / 100,
              subTotal: data.cost * 1 + (data.cost * 16) / 100,
            }
          : item,
      ),
    );
  }, []);

  const handleTaxChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amountTax: value,
              tax: (item.cost * value * item.amount) / 100,
              subTotal:
                item.cost * item.amount +
                (item.cost * value * item.amount) / 100,
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
          <Select
            name={"selectComponent-" + rowIndex}
            className="h-10 w-[100px]"
            onValueChange={(value) => handleDataInRow(value, rowIndex)}
          >
            <SelectTrigger className="border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
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
        accessorKey: "cost",
        header: "Costo",
        cell: ({ row, rowIndex }) => (
          <Input
            className="w-[100px] border-none"
            name={`cost-${rowIndex}`}
            value={row.cost}
            placeholder="ingrese"
            disabled={!row.component}
            onChange={(e) => handleCostChange(rowIndex, e.target.value)}
          />
        ),
      },
      {
        accessorKey: "amountTax",
        header: "Impuesto",
        cell: ({ row, rowIndex }) => (
          <div className="flex w-[150px] items-center gap-x-2">
            (IVA
            {
              <Input
                className="w-[36px] border-none p-0"
                name={`tax-${rowIndex}`}
                value={row.amountTax}
                placeholder="tax"
                type="number"
                disabled={!row.component}
                onChange={(e) => handleTaxChange(rowIndex, e.target.value)}
              />
            }
            %) {!!row.tax && " - $" + row.tax}
          </div>
        ),
      },
      {
        accessorKey: "subTotal",
        header: "Subtotal",
        cell: ({ row, rowIndex }) => (
          <div className="flex w-[100px] justify-between">
            {row.subTotal}
            <button onClick={() => deleteRowId(row.id)}>
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
              <TableRow key={rowIndex}>
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
            className={
              "mr-2 " +
              (currentPage !== 1 ? "text-primario" : "text-grisText") +
              (currentPage !== 1 && "hover:cursor-pointer")
            }
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={
              "ml-2 " +
              (currentPage === totalPages ? "text-grisText" : "text-primario") +
              (currentPage !== totalPages && "hover:cursor-pointer")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TableForm;