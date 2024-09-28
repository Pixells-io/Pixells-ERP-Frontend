import React, { useState, useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable, getFilteredRowModel, getFacetedUniqueValues } from "@tanstack/react-table";
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward, close, searchOutline } from 'ionicons/icons';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DataTable = ({ columns, data, searchFilter, searchNameFilter }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterKey, setFilterKey] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: () => ({
      rows: currentTableData,
    }),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      columnFilters,
    },
  });

  const filteredData = table.getFilteredRowModel().rows;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  return (
    <div className="w-80 h-80 flex flex-col w-full h-full overflow-x-auto">
      <div className="flex items-center mb-8 justify-end gap-4 py-4">
        <div className="flex items-center gap-4">
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
                <IonIcon icon={close} size="large" />
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
                    type="button"
                    className="h-6 rounded-3xl border-[1px] bg-inherit border-[#D7D7D7] text-[10px] text-[#8F8F8F] font-roboto font-normal hover:bg-inherit"
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
                      setFilterKey(column.id);
                      table.getColumn(column.id)?.setFilterValue(event + "");
                    }}
                  >
                    <DropdownMenuRadioItem value="">
                      Clear filter
                    </DropdownMenuRadioItem>
                    {column.getFacetedUniqueValues().size > 0
                      ? Array.from(column.getFacetedUniqueValues()).map(([key, _], index) => (
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
            />
          </Label>
          <Input
            id="search"
            className="h-full w-full border-0 text-sm font-normal text-[#8F8F8F] bg-transparent !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
            placeholder={searchNameFilter}
            value={table.getColumn(searchFilter)?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn(searchFilter)?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="border-b border-[#44444F]">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {currentTableData.map((row, rowIndex) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="py-0">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <button
          onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 h-8 w-8 rounded-full bg-gris2 text-white text-primario disabled:opacity-50"
        >
          <IonIcon icon={chevronBack} />
        </button>
        <button
          onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 h-8 w-8 rounded-full bg-gris2 text-white disabled:opacity-50"
        >
          <IonIcon icon={chevronForward} />
        </button>
      </div>
    </div>
  );
};

export default DataTable;