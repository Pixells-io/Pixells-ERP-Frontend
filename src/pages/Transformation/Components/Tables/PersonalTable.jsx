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

import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { Input } from "@/components/ui/input";
import SelectRouterT from "@/components/SelectTransform/SelectRouterT";

const PersonalTable = ({
  tableData,
  setTableData,
  setTotalProducts,
  productNeed,
  positions,
}) => {
  const components = productNeed.map((product, i) => ({
    label: product.operation,
    value: product.i,
  }));

  const positionsArray = positions.map((position, i) => ({
    label: position.position_name,
    value: position.id,
  }));

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
    idAux: 1,
    process_operation: "",
    position: "",
    cost_hour: 0,
    hours: 1,
    subTotal: 0,
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
    // console.log(value.name);
    // console.log(value.value);
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              [value.name]: value.value,
              subTotal: item.cost_hour * item.hours,
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
                component: data.id,
                unit: data.unit,
                price: data.price,
                amount: 1,
                amountTax: 16,
                label: data.name,
                value: data.id,
                tax: (data.price * 16) / 100,
                subTotal: (data.price * 1 + (data.price * 16) / 100).toFixed(2),
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
                amountTax: 16,
                label: comp.name,
                value: comp.id,
                tax: (comp.price * 16) / 100,
                subTotal: (comp.price * 1 + (comp.price * 16) / 100).toFixed(2),
              }
            : item,
        ),
      );
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
      accessorKey: "process_operation",
      header: "Proceso de Operación ",
      cell: ({ row, rowIndex }) => (
        <div className="w-[200px]">
          <SelectRouterT
            name={"selectComponent-" + rowIndex}
            options={components}
            // value={row.position}
            // onChange={(value) => handleDataInRow(value, rowIndex)}
          />
        </div>
      ),
    },
    {
      accessorKey: "position",
      header: "Posición",
      cell: ({ row, rowIndex }) => (
        <div className="w-[200px]">
          <SelectRouterT
            name={"selectComponent-" + rowIndex}
            options={positionsArray}
            // value={row.position}
            // onChange={(value) => handleDataInRow(value, rowIndex)}
          />
        </div>
      ),
    },
    {
      accessorKey: "cost_hour",
      header: "Costo x Hora",
      cell: ({ row, rowIndex }) => (
        <div className="flex items-center gap-1">
          $
          <Input
            className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
            name={`cost_hour`}
            value={row.cost_hour}
            type="number"
            onChange={(e) => handleInputChange(rowIndex, e.target)}
          />
        </div>
      ),
    },
    {
      accessorKey: "hours",
      header: "Cantidad de Horas",
      cell: ({ row, rowIndex }) => (
        <Input
          type="number"
          className="border-gris2-transparent w-[100px] rounded-xl border font-roboto text-[14px] text-[#696974] placeholder:text-[#8F8F8F] focus:border-transparent focus-visible:ring-primarioBotones"
          name={`hours`}
          value={row.hours}
          min="0"
          placeholder="ingrese"
          // disabled={!row.component}
          onChange={(e) => handleInputChange(rowIndex, e.target)}
        />
      ),
    },
    {
      accessorKey: "subTotal",
      header: "Subtotal",
      cell: ({ row, rowIndex }) => (
        <div className="flex w-[100px] justify-between">
          {row.subTotal}
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

export default PersonalTable;
