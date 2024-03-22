import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  chevronBackCircle,
  chevronForwardCircle,
  close,
  searchOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const statusFilter = [
  { name: "pending", id: 1 },
  { name: "deployed", id: 2 },
  { name: "onreview", id: 3 },
];

function DataTable({ columns, data: initialData }) {
  const [data, setData] = useState(initialData);
  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
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
    <div>
      <div className="flex gap-4 justify-end items-center py-4">
        {filter !== "" && (
          <Button
            className="relative bg-[#E8E8E8] text-[#44444F] hover:bg-blue-200 hover:text-white text-[10px] h-6 w-16"
            onClick={() => {
              table.getColumn("status")?.setFilterValue("");
              setFilter("");
            }}
          >
            {filter}{" "}
            <span className="absolute flex justify-center items-center p-0 w-4 h-4 border-[1px] text-blue-400 border-blue-400 rounded-full -top-1 -right-1">
              <IonIcon icon={close} size="large"></IonIcon>
            </span>
          </Button>
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-3xl border-[1px] border-[#44444F] text-[10px] h-6 w-16"
            >
              Status
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={filter}
              onValueChange={(event) => {
                setFilter(event);
                table.getColumn("status")?.setFilterValue(event);
              }}
            >
              {statusFilter.map((filter, i) => (
                <DropdownMenuRadioItem key={i} value={filter.name}>
                  {filter.name}
                </DropdownMenuRadioItem>
              ))}
              <DropdownMenuRadioItem value="">
                Clear filter
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center rounded-3xl border-[1px] border-[#44444F] text-[10px] h-10 w-44 py-2 px-2">
          <Label htmlFor="search">
            <IonIcon
              icon={searchOutline}
              className="text-[#696974] w-6 h-6 stroke-1"
            ></IonIcon>
          </Label>
          <Input
            id="search"
            className="h-full w-full border-0 bg-transparent placeholder:text-[#696974] placeholder:text-sm !ring-0 !ring-offset-0 focus:border-b-2 focus:border-slate-400 focus:rounded-none"
            placeholder="SEARCH "
            value={table.getColumn("responsable")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("responsable")?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      <div className="rounded-md bg-blancoBg">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <TableRow rowSpan="8" key={row.id}>
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </AccordionContent>
                  </TableRow>
                </AccordionItem>
              </Accordion>
            ))}

            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <IonIcon icon={chevronBackCircle} className="w-10 h-10"></IonIcon>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <IonIcon icon={chevronForwardCircle} className="w-10 h-10"></IonIcon>
        </Button>
      </div>
    </div>
  );
}

export default DataTable;
