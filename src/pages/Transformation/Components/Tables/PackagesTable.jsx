import React, { useState, useEffect } from "react";
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

import { Input } from "@/components/ui/input";
import SelectRouterT from "@/components/SelectTransform/SelectRouterT";
import { Checkbox } from "@/components/ui/checkbox";

const PackagesTable = ({
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
    amount: 0,
    unit: "",
    unit_package: 0,
    price: 0,
    subTotal: 0,
    label: "Selecciona",
    value: "selecciona",
    merma: 0,
    isMerma: "0",
    totalNeto: 0,
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
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              amount: value,
              subTotal: (item.price * value).toFixed(2),
              totalNeto: item.isMerma == "1" ? ( value * (item.merma / 100)).toFixed(2) : item.totalNeto
            }
          : item,
      ),
    );
  };

  const handleInputChangeMerma = (rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              merma: value,
              totalNeto: item.isMerma == "1" ? (item.amount * (value / 100)).toFixed(2) : item.totalNeto

            }
          : item,
      ),
    );
  };
  
  const handleInputChangeIsMerma = (rowIndex, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              isMerma: value == "1" ? "1" : "0",
              totalNeto: value == "1" ? (item.amount * (item.merma / 100)).toFixed(2) : 0
            }
          : item,
      ),
    );
  };

  const handleCostChange = (rowIndex, value) => {
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
  };

  const handleDataInRow = (data, rowIndex) => {
    if (data.id) {
      setTableData((prevData) =>
        prevData.map((item, index) =>
          index === rowIndex
            ? {
                ...item,
                id: data.id,
                component: data.id,
                unit: data.unit,
                price: data.price,
                unit_package: 0,
                amount: 1,
                label: data.name,
                value: data.id,
                subTotal: Number(data.price).toFixed(2),
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

  const columns = [
    {
      accessorKey: "checkbox",
      header: "E",
      cell: ({ row, rowIndex }) => <input type="checkbox" name="" id="" />,
    },
    {
      accessorKey: "component",
      header: "Componente",
      cell: ({ row, rowIndex }) => (
        <SelectRouterT
          name={"selectComponent-" + rowIndex}
          value={tableData[rowIndex]}
          options={components}
          onChange={(value) => handleDataInRow(value, rowIndex)}
        />
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
          disabled={!row.component}
          type="text"
          readOnly
        />
      ),
    },
    {
      accessorKey: "unit_package",
      header: "Cantidad producto x unidad de empaque",
      cell: ({ row, rowIndex }) => (
        <Input
          className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`unit_package-${rowIndex}`}
          value={row.unit_package}
          placeholder="ingrese"
          type="number"
          disabled={!row.component}
          onChange={(e) => handleInputChange(rowIndex, e.target.value)}
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
      accessorKey: "merma",
      header: "Merma",
      cell: ({ row, rowIndex }) => (
        <div className="flex items-center gap-x-2 p-1">
          <Checkbox
            className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
            checked={row.isMerma == "1"}
            name={`isMerma-${rowIndex}`}
            disabled={!row.component}
            onCheckedChange={(e) => handleInputChangeIsMerma(rowIndex, e)
            }
          />
          <Input
          type="number"
          className="border-gris2-transparent w-[60px]  px-1 text-center rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`merma-${rowIndex}`}
          value={row.merma}
          disabled={!row.component || row.isMerma == "0"}
          onChange={(e) => handleInputChangeMerma(rowIndex, e.target.value)}
        />
        </div>
      ),
    },
    {
      accessorKey: "totalNeto",
      header: "Total Neto",
      cell: ({ row, rowIndex }) => (
        <div className="flex items-center gap-x-2 p-1">
          {row.totalNeto} {row.unit}
        </div>
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

export default PackagesTable;
