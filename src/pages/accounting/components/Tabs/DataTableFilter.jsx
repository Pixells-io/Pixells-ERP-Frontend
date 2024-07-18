import React, { useState, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  getFacetedUniqueValues,
  filterFns,
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

function DataTable({ data, columns, searchFilter }) {
  //data: datos que mostrara en la tabla
  //columns: las columnas headers tabla
  //searchFilter: el campo columna por la cual filtrara el input

  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    filterFns: filterFns,
    state: {
      columnFilters,
    },
  });

  return (
    <div className="h-full overflow-auto rounded-xl bg-white p-7">
      <div className="flex items-center justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Checkbox
              className="border border-primarioBotones data-[state=checked]:bg-primarioBotones"
              checked={
                table.getIsAllRowsSelected() ||
                (table.getIsSomeRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) =>
                table.toggleAllRowsSelected(!!value)
              }
            />

            <label htmlFor="checkBoxAll" className="text-xs text-[#8f8f8f]">
              All
            </label>
          </div>
          {filter !== "" && (
            <Button
              className="relative px-1 h-6 bg-[#E8E8E8] text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
              onClick={() => {
                table.getColumn(filterKey)?.setFilterValue("");
                setFilter("");
              }}
            >
              {filter}{" "}
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-blue-400 p-0 text-blue-400">
                <IonIcon icon={close} size="large"></IonIcon>
              </span>
            </Button>
          )}
          {
            table.getAllColumns()
            .filter((column) => column.columnDef?.meta?.filterButton)
            .map((column, index) => (
          <DropdownMenu key={index + "drop"}> 
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] text-[10px]"
              >
                {column.columnDef.header}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filter}
                onValueChange={(event) => {
                  if(!!filterKey && !!table.getColumn(filterKey)){
                    table.getColumn(filterKey)?.setFilterValue("");
                  }
                  setFilter(event);
                  setFilterKey(column.columnDef.accessorKey);
                  table.getColumn(column.columnDef.accessorKey)?.setFilterValue(event + "");
                }}
              >
                {
                 table?.getColumn(column.columnDef.accessorKey) ?
                (
                Array.from(
                  table?.getColumn(column.columnDef.accessorKey)?.getFacetedUniqueValues(),
                ).map(([key, value], index) => (
                  <DropdownMenuRadioItem key={index} value={key}>
                    {key}
                  </DropdownMenuRadioItem>
                ))
              ) : null
                }
                <DropdownMenuRadioItem value="">
                  Clear filter
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

            ))
          }

          {/* <Button
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
          </Button> */}
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