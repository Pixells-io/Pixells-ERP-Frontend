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
import { addCircle, chevronBack, chevronForward } from "ionicons/icons";

const TableForm = ({ setDebitTotal, setCreditTotal }) => {
  const initialRow = {
    cuenta: "",
    cliente: "",
    documento: "",
    descripcion: "",
    costos: "",
    debito: "",
    credito: "",
  };

  const [tableData, setTableData] = useState([initialRow]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const debitTotal = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.debito) || 0),
      0,
    );
    const creditTotal = tableData.reduce(
      (sum, row) => sum + (parseFloat(row.credito) || 0),
      0,
    );
    setDebitTotal(debitTotal);
    setCreditTotal(creditTotal);
  }, [tableData, setDebitTotal, setCreditTotal]);

  const handleAddRow = useCallback((e) => {
    e.preventDefault();
    setTableData((prevData) => [...prevData, { ...initialRow }]);
  }, []);

  const handleInputChange = useCallback((rowIndex, accessorKey, value) => {
    setTableData((prevData) =>
      prevData.map((item, index) =>
        index === rowIndex ? { ...item, [accessorKey]: value } : item,
      ),
    );
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "cuenta",
        header: "Cuenta contable",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`numero-cuenta-${rowIndex}`}
            value={row.cuenta}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "cuenta", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "cliente",
        header: "Cliente/Proveedor",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            name={`nombre-cliente-${rowIndex}`}
            value={row.cliente}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "cliente", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "documento",
        header: "No. de documento",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`numero-documento-${rowIndex}`}
            value={row.documento}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "documento", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "descripcion",
        header: "Descripción",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`detalle-transaccion-${rowIndex}`}
            value={row.descripcion}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "descripcion", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "costos",
        header: "Centro de costos",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`valor-costos-${rowIndex}`}
            value={row.costos}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "costos", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "debito",
        header: "Débito",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`monto-debito-${rowIndex}`}
            value={row.debito}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "debito", e.target.value)
            }
          />
        ),
      },
      {
        accessorKey: "credito",
        header: "Crédito",
        cell: ({ row, rowIndex }) => (
          <Input
          className="h-auto border bg-inherit p-1 text-xs font-normal text-grisHeading focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          name={`monto-credito-${rowIndex}`}
            value={row.credito}
            placeholder="ingrese"
            onChange={(e) =>
              handleInputChange(rowIndex, "credito", e.target.value)
            }
          />
        ),
      },
    ],
    [handleInputChange],
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
      <h1 className="text-md font-poppins font-medium text-grisHeading">
        Movimientos
      </h1>
      <div className="max-h-[400px] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow className="justify-center border-b-2 border-b-primario text-xs font-normal text-grisText">
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
            className="mr-2 text-primario"
          />
          <IonIcon
            icon={chevronForward}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="ml-2 text-primario"
          />
        </div>
      </div>
    </div>
  );
};

export default TableForm;
