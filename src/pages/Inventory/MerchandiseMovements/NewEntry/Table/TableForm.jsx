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
} from "ionicons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialRow = {
  idAux: 1,
  component: "",
  amount: 0,
  unit: "",
  cost: 0,
  amountTax: 16,
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

const TableForm = ({ tableData, setTableData }) => {
  useEffect(() => {
      setTableData([initialRow]);    
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleAddRow = (e) => {
    e.preventDefault();
    setTableData((prevData) => [
      ...prevData,
      { ...initialRow, idAux: getUltimateRowId() + 1 },
    ]);
  };

  const handleInputChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amount: value,
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
            }
          : item,
      ),
    );
  }, []);

  const handleDataInRow = useCallback((data, rowIndex) => {
    const comp = getComponentId(data);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              component: comp.id,
              unit: comp.unit,
              cost: comp.cost,
              amount: 1,
            }
          : item,
      ),
    );
  }, []);

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

  const getComponentId = (id) => {
    return components.find((component) => component.id == id);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "articleNumber",
        header: "Numero Articulo",
        cell: ({ row, rowIndex }) => (
          <Select
            name={"selectComponent-subProduct-" + rowIndex}
            className="h-10 w-[100px]"
            onValueChange={(value) => handleDataInRow(value, rowIndex)}
            value={row?.component}
          >
            <SelectTrigger className="border-b border-l-0 border-r-0 border-t-0 border-[#696974] bg-inherit text-xs font-light text-grisSubText">
              <SelectValue placeholder="Selecciona el componente" />
            </SelectTrigger>
            <SelectContent>
              {components.map((component, index) => (
                <SelectItem key={"component-" + index} value={component.id}>
                  {component.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ),
      },
      {
        accessorKey: "description",
        header: "Descripción",
        cell: ({ row, rowIndex }) => (
          <Input
            className="w-[100px] border-none"
            name={`amount-subProduct-${rowIndex}`}
            value={row.amount}
            placeholder="ingrese"
            type="number"
            disabled={!row.component}
            onChange={(e) => handleInputChange(rowIndex, e.target.value)}
          />
        ),
      },
      {
        accessorKey: "amount",
        header: "Cantidad",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className="w-[100px] border-none"
            name={`cost-subProduct-${rowIndex}`}
            value={row.cost}
            placeholder="ingrese"
            disabled={!row.component}
            onChange={(e) => handleCostChange(rowIndex, e.target.value)}
          />
        ),
      },
      {
        accessorKey: "unitPrice",
        header: "Precio Unitario",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className="w-[100px] border-none"
            name={`cost-subProduct-${rowIndex}`}
            value={row.cost}
            placeholder="ingrese"
            disabled={!row.component}
            onChange={(e) => handleCostChange(rowIndex, e.target.value)}
          />
        ),
      },
      {
        accessorKey: "amountTax",
        header: "Total",
        cell: ({ row, rowIndex }) => (
          <div className="flex w-[150px] items-center gap-x-2">
            IVA {row.amountTax}%
          </div>
        ),
      },
      {
        accessorKey: "ubication",
        header: "Ubicación",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className="w-[100px] border-none"
            name={`cost-subProduct-${rowIndex}`}
            value={row.cost}
            placeholder="ingrese"
            disabled={!row.component}
            onChange={(e) => handleCostChange(rowIndex, e.target.value)}
          />
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
