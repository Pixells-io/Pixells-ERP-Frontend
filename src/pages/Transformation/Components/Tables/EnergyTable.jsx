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
import SelectRouter from "@/layouts/Masters/FormComponents/select";

const EnergyTable = ({
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

  // const [tableData, setTableData] = useState([initialRow]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const initialRow = {
    type: "electricity",
    product_master_id: 456,
    product_variable_id: 3,
    quantity: 200,
    unit: "kWh",
    price: "",
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

  const handleInputChange = useCallback((rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amount: value,
              subTotal: (item.price * value).toFixed(2),
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
              price: value,
              subTotal: (value * item.amount).toFixed(2),
            }
          : item,
      ),
    );
  }, []);

  const handleDataInRow = useCallback((data, rowIndex) => {
    console.log(data);
    if (data.id) {
      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                component: data.id,
                unit: data.unit,
                price: data.price,
                amount: 1,
                label: data.name,
                value: data.id,
                subTotal: data.price.toFixed(2),
              }
            : item,
        ),
      );
    } else {
      const comp = getComponentId(data);
      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                component: comp.id,
                unit: comp.unit,
                price: comp.price,
                amount: 1,
                label: comp.name,
                value: comp.id,
                subTotal: Number(comp.price).toFixed(2),
              }
            : item,
        ),
      );
    }
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

  const columns = [
    {
      accessorKey: "component",
      header: "Componente",
      cell: ({ row, rowIndex }) => (
        <>
          {/* <SelectRouter
            name={"selectComponent-" + rowIndex}
            options={components}
            value={row.component}
            onChange={(value) => handleDataInRow(value, rowIndex)}
          /> */}
          <Select
            name={"selectComponent-" + rowIndex}
            className="h-10 w-[100px] p-2"
            onValueChange={(value) => handleDataInRow(value, rowIndex)}
            value={row?.component}
          >
            <SelectTrigger className="border-gris2-transparent rounded-xl border text-[14px] font-light text-[#696974] placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
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
        </>
      ),
    },
    {
      accessorKey: "amount",
      header: "Cantidad",
      cell: ({ row, rowIndex }) => (
        <Input
          className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
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
        <Input
          className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`unit-${rowIndex}`}
          value={row.unit}
          type="text"
          readOnly
        />
      ),
    },
    {
      accessorKey: "price",
      header: "Costo",
      cell: ({ row, rowIndex }) => (
        <Input
          type="number"
          className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`cost-${rowIndex}`}
          value={row.price}
          placeholder="ingrese"
          disabled={!row.component}
          onChange={(e) => handleCostChange(rowIndex, e.target.value)}
        />
      ),
    },
    {
      accessorKey: "subTotal",
      header: "Subtotal",
      cell: ({ row, rowIndex }) => (
        <div className="flex w-[100px] justify-between">
          {row.subTotal}
          <input
            type="hidden"
            hidden
            value={row.subTotal}
            name={"subTotal-" + rowIndex}
          />
          <button type="button" onClick={() => deleteRowId(row.idAux)}>
            <IonIcon
              icon={closeCircle}
              size="small"
              className="cursor-pointer text-grisDisabled"
            ></IonIcon>
          </button>
        </div>
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

export default EnergyTable;
