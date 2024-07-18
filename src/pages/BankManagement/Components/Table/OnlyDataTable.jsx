import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function OnlyDataTable({ data, columns, titleButton, functionButton }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,

    state: {
      columnFilters,
      rowSelection,

    },
  });

  const getSelectedRowsData = () => {
    const selectedRows = table.getFilteredSelectedRowModel().rows;
    return selectedRows.map(row => row.original);

  };

  return (
    <div className="rounded-xl bg-[#FBFBFB] px-4">
      <div className="">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="border-b-2 border-b-primarioBotones text-sm font-normal"
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
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className={`border-t-[#D7D7D7] text-[#44444F]  ${(row?.original?.isSelected == "1") && " bg-primario bg-opacity-25"}`}
                  key={row.id}
                  data-state={(row.getIsSelected() && (row?.original?.isSelected == "0" || !row?.original?.isSelected)) && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 px-4 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length > 0
            ? table.getFilteredSelectedRowModel().rows.length > 1
              ? table.getFilteredSelectedRowModel().rows.length +
                " Cuentas seleccionadas*"
              : table.getFilteredSelectedRowModel().rows.length +
                " Cuenta seleccionada*"
            : ""}
        </div>
        <div className="space-x-2">
          <Button
              variant="outline"
              className="rounded-3xl border border-primarioBotones text-primarioBotones text-xs hover:bg-primarioBotones"
            onClick={() => functionButton(getSelectedRowsData())}
          >
            {titleButton}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OnlyDataTable;
