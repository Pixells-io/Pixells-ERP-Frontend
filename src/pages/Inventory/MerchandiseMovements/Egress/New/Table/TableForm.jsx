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
  idAux: 1,
  articleNumber: "",
  description: "",
  expectedQuantity: 10,
  receivedQuantity: "",
  unitPrice: 0,
  total: 120,
  ubication: null,
};

const ubications = [
  {
    id: 1,
    name: "Almacen PM",
  },
  {
    id: 2,
    name: "Almace MP",
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

  const handleInputChange = useCallback((rowIndex, accessorKey, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { ...item, [accessorKey]: value } : item,
      ),
    );
  }, []);

  const handleDataInRow = useCallback((data, rowIndex) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex
          ? {
              ...item,
              ubication_id: data,
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

  const columns = useMemo(
    () => [
      {
        accessorKey: "articleNumber",
        header: "Numero Artículo",
        cell: ({ row, rowIndex }) => (
          <Input
            className="w-[100px] border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
            name={`article-number-${rowIndex}`}
            value={row?.articleNumber}
            placeholder="Ingrese"
            type="number"
            onChange={(e) =>
              handleInputChange(rowIndex, "articleNumber", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "description",
        header: "Descripción",
        cell: ({ row, rowIndex }) => (
          <Input
            className="w-[100px] border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
            name={`description-${rowIndex}`}
            value={row.description}
            placeholder="Ingrese"
            type="text"
            onChange={(e) =>
              handleInputChange(rowIndex, "description", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "expectedQuantity",
        header: "Cantidad esperada",
        cell: ({ row, rowIndex }) => <div>{row?.expectedQuantity}</div>,
      },
      {
        accessorKey: "receivedQuantity",
        header: "Recibido",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className={`w-[100px] border-none ${row?.expectedQuantity == row?.receivedQuantity ? "text-[#00A259]" : "text-[#D7586B]"}`}
            name={`received-quantity-${rowIndex}`}
            value={row?.receivedQuantity}
            placeholder="Ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "receivedQuantity", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "unitPrice",
        header: "Precio Unitario",
        cell: ({ row, rowIndex }) => (
          <Input
            type="number"
            className="w-[100px] border-none bg-inherit p-1 text-xs font-normal focus-visible:ring-primarioBotones"
            name={`cost-subProduct-${rowIndex}`}
            value={row?.unitPrice}
            placeholder="Ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "unitPrice", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "total",
        header: "Total",
        cell: ({ row, rowIndex }) => <div>{row.total}</div>,
      },
      {
        accessorKey: "ubication_id",
        header: "Ubicación",
        cell: ({ row, rowIndex }) => (
          <div className="flex items-center justify-between gap-x-2">
            <Select
              name={"selectComponent-ubication-" + rowIndex}
              className="h-10 w-[100px]"
              onValueChange={(value) => handleDataInRow(value, rowIndex)}
              value={row?.ubication_id}
            >
              <SelectTrigger className="rounded-lg border border-gris2-transparent text-xs font-light text-black placeholder:text-grisHeading focus:ring-2 focus:ring-primarioBotones focus:border-transparent">
              <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                {ubications.map((ubication, index) => (
                  <SelectItem key={"ubication-" + index} value={ubication.id}>
                    {ubication.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
