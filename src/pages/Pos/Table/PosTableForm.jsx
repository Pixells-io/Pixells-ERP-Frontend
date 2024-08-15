import React, { useState, useMemo, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PosTableForm = ({ tableData, setTotalProducts }) => {
  useEffect(() => {
    const TotalP = tableData.reduce(
      (sum, row) => sum + (parseFloat(row?.price * row?.quantity) || 0),
      0,
    );

    setTotalProducts(TotalP.toFixed(2));
  }, [tableData]);

  const columns = useMemo(
    () => [
      {
        id: "image",
        header: "",
        accessorKey: "image",
        cell: ({ row }) => (
          <div className="flex justify-center">
            <div className="h-[46px] w-[46px]">
              <img
                loading="lazy"
                width={46}
                className="max-h-[46px] max-w-[46px]"
                src={row?.image}
              />
            </div>
          </div>
        ),
      },
      {
        id: "article",
        header: "ARTICULO",
        accessorKey: "article",
        cell: ({ row }) => (
          <p className="font-poppins text-xs font-medium text-[#44444F]">
            {row?.article}
          </p>
        ),
      },
      {
        id: "sku",
        header: "SKU.",
        accessorKey: "sku",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.sku}</p>
        ),
      },
      {
        id: "description",
        header: "DESCRIPCION",
        accessorKey: "description",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            {row?.description}
          </p>
        ),
      },
      {
        id: "quantity",
        header: "CANTIDAD",
        accessorKey: "quantity",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.quantity}</p>
        ),
      },
      {
        id: "price",
        header: "PRECIO",
        accessorKey: "price",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.price}</p>
        ),
      },
      {
        id: "discount",
        header: "DESCUENTO",
        accessorKey: "discount",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.discount}</p>
        ),
      },
      {
        id: "iva",
        header: "IMPUESTO",
        accessorKey: "iva",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">{row?.iva}</p>
        ),
      },
      {
        id: "subTotal",
        header: "SUBTOTAL",
        accessorKey: "subTotal",
        cell: ({ row }) => (
          <p className="text-xs font-light text-[#44444F]">
            {row?.price * row?.quantity}
          </p>
        ),
      },
    ],
    [],
  );

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b-2 border-b-primario">
          {columns.map((column) => (
            <TableHead
              key={column.accessorKey}
              className="text-sm font-semibold text-grisText"
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="text-sm font-normal text-[#44444F]"
          >
            {columns.map((column) => (
              <TableCell key={column.accessorKey}>
                {column.cell({
                  row,
                  rowIndex: rowIndex,
                })}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PosTableForm;
