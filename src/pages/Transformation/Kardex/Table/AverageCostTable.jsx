import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function AverageCostTable({ data, columns }) {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      columnFilters,
    },
  });

  return (
    <Table className="relative flex h-full w-full flex-col justify-between overflow-hidden">
      <TableHeader className="flex w-full flex-col [&_tr]:border-b-0">
        <TableRow className="w-full">
          <TableHead colSpan={3}></TableHead>
          <TableHead
            colSpan={3}
            className="text-poppins text-md border-l border-l-[#D7D7D7] font-medium text-[#44444F]"
          >
            Entrada
          </TableHead>
          <TableHead
            colSpan={3}
            className="text-poppins text-md border-l border-l-[#D7D7D7] font-medium text-[#44444F]"
          >
            Salida
          </TableHead>
          <TableHead
            colSpan={3}
            className="text-poppins text-md border-l border-l-[#D7D7D7] font-medium text-[#44444F]"
          >
            Saldos
          </TableHead>
        </TableRow>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="w-full bg-red-100">
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="border-b-2 border-b-primarioBotones text-sm font-normal [&:nth-child(10)]:border-l [&:nth-child(10)]:border-l-[#D7D7D7] [&:nth-child(4)]:border-l [&:nth-child(4)]:border-l-[#D7D7D7] [&:nth-child(7)]:border-l [&:nth-child(7)]:border-l-[#D7D7D7]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody className="flex w-full flex-col overflow-y-scroll [&_tr:last-child(2)]:border">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className="w-full border-b border-b-[#D7D7D7] font-normal text-[#44444F] [&_td:nth-child(10)]:border-l [&_td:nth-child(10)]:border-l-[#D7D7D7] [&_td:nth-child(4)]:border-l [&_td:nth-child(4)]:border-l-[#D7D7D7] [&_td:nth-child(7)]:border-l [&_td:nth-child(7)]:border-l-[#D7D7D7]"
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="w-full">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>

      <TableFooter className="w-full bg-white">
        <TableRow className="font-normal text-[#44444F]">
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell className="text-end font-poppins text-sm font-medium text-[#44444F]">
            TOTALES
          </TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#00A259] px-2 py-1 text-xs font-medium text-grisText">
              1003434.00
            </p>
          </TableCell>
          <TableCell></TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#00A259] px-2 py-1 text-xs font-medium text-grisText">
              7650000.6
            </p>
          </TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#D7586B] px-2 py-1 text-xs font-medium text-grisText">
              1500000.00
            </p>
          </TableCell>
          <TableCell></TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#D7586B] px-2 py-1 text-xs font-medium text-grisText">
              765000.60
            </p>
          </TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#5B89FF] px-2 py-1 text-xs font-medium text-grisText">
              1500000
            </p>
          </TableCell>
          <TableCell></TableCell>
          <TableCell className="p-2">
            <p className="min-w-[50px] rounded-lg border border-[#5B89FF] px-2 py-1 text-xs font-medium text-grisText">
              765123123.6
            </p>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default AverageCostTable;
