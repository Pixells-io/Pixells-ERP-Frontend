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

function DataTable({
  data,
  columns,
  searchFilter,
  searchNameFilter,
  isCheckAll,
}) {
  //data: datos que mostrara en la tabla
  //columns: las columnas headers tabla
  //searchFilter: el campo columna por la cual filtrara el input
  //searchNameFilter: muestra en el placeHolder el name con la cual filtrara
  //isCheckAll: true muestra el check donde selecciona todos

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
    <div className="rounded-xl px-4">
      <div className="flex items-center justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
          {!!isCheckAll && (
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
              <label
                htmlFor="checkBoxAll"
                className="text-xs font-medium text-[#8f8f8f]"
              >
                All
              </label>
            </div>
          )}

          {filter !== "" && (
            <Button
              className="relative h-6 bg-[#E8E8E8] px-1 text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
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
          {table
            .getAllColumns()
            .filter((column) => column.columnDef?.meta?.filterButton)
            .map((column, index) => (
              <DropdownMenu key={index + "drop"}>
                <DropdownMenuTrigger asChild>
                  <Button
                    type={"button"}
                    className="h-6 rounded-3xl border-[1px] border-[#D7D7D7] bg-inherit font-roboto text-[10px] font-normal text-[#8F8F8F] hover:bg-inherit"
                  >
                    {column.columnDef.header}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-[300px] w-full overflow-auto">
                  <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={filter}
                    onValueChange={(event) => {
                      if (!!filterKey && !!table.getColumn(filterKey)) {
                        table.getColumn(filterKey)?.setFilterValue("");
                      }
                      setFilter(event);
                      setFilterKey(column.columnDef.accessorKey);
                      table
                        .getColumn(column.columnDef.accessorKey)
                        ?.setFilterValue(event + "");
                    }}
                  >
                    <DropdownMenuRadioItem value="">
                      Clear filter
                    </DropdownMenuRadioItem>
                    {table?.getColumn(column.columnDef.accessorKey)
                      ? Array.from(
                          table
                            ?.getColumn(column.columnDef.accessorKey)
                            ?.getFacetedUniqueValues(),
                        ).map(([key, value], index) => (
                          <DropdownMenuRadioItem key={index} value={key}>
                            {key}
                          </DropdownMenuRadioItem>
                        ))
                      : null}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
        </div>

        <div className="flex h-9 w-44 items-center rounded-3xl border-[1px] border-[#D7D7D7] px-2 py-2 text-[10px]">
          <Label htmlFor="search">
            <IonIcon
              icon={searchOutline}
              className="h-6 w-6 stroke-1 text-[#8F8F8F]"
            ></IonIcon>
          </Label>
          <Input
            id="search"
            className="h-full w-full border-0 bg-transparent text-sm font-normal text-[#8F8F8F] !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
            placeholder={searchNameFilter}
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
                      className="font-poppins text-xs font-medium text-[#44444F]"
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
