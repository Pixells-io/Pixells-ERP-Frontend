import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IonIcon } from "@ionic/react";
import {
  chevronBackCircle,
  chevronForwardCircle,
  close,
  searchOutline,
} from "ionicons/icons";
import { Checkbox } from "@/components/ui/checkbox";

function DataTable({ data, columns, names, searchFilter }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");

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
    <div className="rounded-xl bg-[#FBFBFB] px-4">
      <div className="flex items-center justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllPageRowsSelected(!!value)
              }
            />
            
            <label htmlFor="checkBoxAll" className="text-xs text-[#8f8f8f]">
              All
            </label>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
              >
                Nombre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filter}
                onValueChange={(event) => {
                  setFilter(event);
                  table.getColumn("Name")?.setFilterValue(event);
                }}
              >
                {names?.map((name, i) => (
                  <DropdownMenuRadioItem key={i} value={name.name}>
                    {name.name}
                  </DropdownMenuRadioItem>
                ))}
                <DropdownMenuRadioItem value="">
                  Clear filter
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline "
            className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
          >
            BANCO
          </Button>
          <Button
            variant="outline"
            className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
          >
            TIPO
          </Button>
        </div>

        <div className="flex h-10 w-44 items-center rounded-3xl border-[1px] border-[#44444F] px-2 py-2 text-[10px]">
          <Label htmlFor="search">
            <IonIcon
              icon={searchOutline}
              className="h-6 w-6 stroke-1 text-[#696974]"
            ></IonIcon>
          </Label>
          <Input
            id="search"
            className="h-full w-full border-0 bg-transparent !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#696974] focus:rounded-none focus:border-b-2 focus:border-slate-400"
            placeholder="SEARCH"
            value={table.getColumn(searchFilter)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn(searchFilter)?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      <div className="">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-sm font-semibold text-[#696974]"
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
                  className="border-t-[#D7D7D7] text-[#44444F]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <IonIcon icon={chevronBackCircle} className="h-10 w-10"></IonIcon>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <IonIcon icon={chevronForwardCircle} className="h-10 w-10"></IonIcon>
        </Button>
      </div>
    </div>
  );
}

export default DataTable;
