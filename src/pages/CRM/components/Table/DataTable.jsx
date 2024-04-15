import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

import { columns } from "./Columns";

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

import { pusherClient } from "@/lib/pusher";

// const data = [
//     {
//         id: "212ed52f",
//         company: "Original Constructors",
//         service: "Immigration",
//         contact: "Juan Lopez",
//         phone: "222-333-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "correo@gmail.com",
//     },
//     {
//         id: "728ed52f",
//         company: "Copy Constructors",
//         service: "Entity, Audit",
//         contact: "Pedro Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo1@yahoo.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Entity, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
//     {
//         id: "212ed52f",
//         company: "Original Constructors",
//         service: "Immigration",
//         contact: "Juan Lopez",
//         phone: "222-333-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "correo@gmail.com",
//     },
//     {
//         id: "728ed52f",
//         company: "Copy Constructors",
//         service: "Entity, Audit",
//         contact: "Pedro Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo1@yahoo.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Entity, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
//     {
//         id: "212ed52f",
//         company: "Original Constructors",
//         service: "Immigration",
//         contact: "Juan Lopez",
//         phone: "222-333-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "correo@gmail.com",
//     },
//     {
//         id: "728ed52f",
//         company: "Copy Constructors",
//         service: "Entity, Audit",
//         contact: "Pedro Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo1@yahoo.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
//     {
//         id: "728ed82f",
//         company: "Fake Constructors",
//         service: "Immigration, Entity, Audit",
//         contact: "Ernest Robles",
//         phone: "981-476-2245",
//         // amount: 100,
//         // status: "pending",
//         email: "ejemplo2@hotmail.com",
//     },
// ];

function DataTable({ services }) {
  const { data } = useLoaderData();
  const [initialData, setInitialData] = useState(data);
  const [leads, setLeads] = useState(initialData);
  const [columnFilters, setColumnFilters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    pusherClient.subscribe("get-lead-table");

    pusherClient.bind("fill-table", ({ message }) => {
      setLeads(message.original.data);
    });

    return () => {
      pusherClient.unsubscribe("get-lead-table");
    };
  }, []);

  const table = useReactTable({
    data: leads,
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
    <div className="bg-[#FBFBFB] rounded-xl px-4">
      <div className="flex gap-4 justify-end items-center py-4">
        {filter !== "" && (
          <Button
            className="relative bg-[#E8E8E8] text-[#44444F] hover:bg-blue-200 hover:text-white text-[10px] h-6 w-16"
            onClick={() => {
              table.getColumn("service")?.setFilterValue("");
              setFilter("");
            }}
          >
            {filter}{" "}
            <span className="absolute flex justify-center items-center p-0 w-4 h-4 border-[1px] text-blue-400 border-blue-400 rounded-full -top-1 -right-1">
              <IonIcon icon={close} size="large"></IonIcon>
            </span>
          </Button>
        )}

        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-3xl border-[1px] border-[#44444F] text-[10px] h-6 w-16"
              >
                Service
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              <DropdownMenuLabel>Select to filter</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={filter}
                onValueChange={(event) => {
                  setFilter(event);
                  table.getColumn("service")?.setFilterValue(event);
                }}
              >
                {services?.map((service, i) => (
                  <DropdownMenuRadioItem key={i} value={service.name}>
                    {service.name}
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
            className="rounded-3xl border-[1px] border-[#44444F] text-[10px] h-6 w-16"
          >
            Company
          </Button>
          <Button
            variant="outline"
            className="rounded-3xl border-[1px] border-[#44444F] text-[10px] h-6 w-16"
          >
            Contact
          </Button>
        </div>
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
            placeholder="SEARCH EMAILS"
            value={table.getColumn("email")?.getFilterValue() ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
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
                      className="text-[#696974] text-sm font-semibold"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                        cell.getContext()
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
