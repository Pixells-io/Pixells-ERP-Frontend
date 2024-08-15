import React, { useState } from "react";

import { useLoaderData } from "react-router-dom";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IonIcon } from "@ionic/react";
import {
  chevronBackCircle,
  chevronForwardCircle,
  close,
  searchOutline,
  bookmark,
  chatbubbleEllipses,
  informationCircle,
} from "ionicons/icons";

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
} from "./ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const DATA = [
  {
    task: "Add a new feature",
    status: "pending",
    date: new Date("12/03/2024"),
    notes: "this is note",
  },
  {
    task: "Add another feature",
    status: "deployed",
    date: new Date("07/05/2024"),
    notes: "this is note",
  },
  {
    task: "Add random feature",
    status: "null, pending",
    date: new Date("10/04/2024"),
    notes: "this is note",
  },
];

const statusFilter = [
  { name: "pending", id: 1 },
  { name: "deployed", id: 2 },
  { name: "onreview", id: 3 },
];

const columns = [
  {
    accessorKey: "service",
    header: "SERVICE",
    cell: (props) => <p>Inmmigration</p>,
  },
  {
    accessorKey: "sub-service",
    header: "SUB-SERVICE",
    cell: (props) => <p>Sub-service 1, Sub-service 2</p>,
  },
  {
    accessorKey: "responsible",
    header: "RESPONSIBLE",
    cell: (props) => <p>Jenny</p>,
  },
  {
    id: "User",
    header: "USERS",
    cell: () => {
      return (
        <img
          width={35}
          className="rounded-full"
          src="https://demoback.pixells.io/images/r.jpg"
        />
      );
    },
  },
  {
    accessorKey: "e-mail",
    header: "E-Mail",
    cell: (props) => <p>inmigration@irbusiness.com</p>,
  },
  {
    accessorKey: "actions",
    header: "ACTIONS",
    id: "Actions",
    cell: () => {
      return (
        <div className="flex gap-2 text-[#696974]">
          <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
          <IonIcon icon={chatbubbleEllipses} className="h-5 w-5"></IonIcon>
          <IonIcon icon={bookmark} className="h-5 w-5"></IonIcon>
        </div>
      );
    },
  },
];

// const columns = [
//   {
//     accessorKey: "bussines_name",
//     header: "COMPANY",
//   },
//   {
//     accessorKey: "service",
//     header: "SERVICE",
//     cell: ({ row }) => {
//       const services = row.getValue("service");
//       const serviceStrings = services.map((service) => service.name).join(", ");
//       return serviceStrings;
//     },
//   },
//   {
//     accessorKey: "contact",
//     header: "CONTACT",
//   },
//   {
//     accessorKey: "phone",
//     header: "PHONE",
//   },
//   {
//     accessorKey: "email",
//     header: "EMAIL",
//   },
//   {
//     accessorKey: "actions",
//     header: "ACTIONS",
//     cell: () => {
//       return (
//         <div className="flex gap-2 text-[#696974]">
//           <IonIcon icon={informationCircle} className="w-5 h-5"></IonIcon>
//           <IonIcon icon={chatbubbleEllipses} className="w-5 h-5"></IonIcon>
//           <IonIcon icon={bookmark} className="w-5 h-5"></IonIcon>
//         </div>
//       );
//     },
//   },
// ];

function DataTable({ filters }) {
  const loaderData = useLoaderData();
  const [data, setData] = useState(DATA);
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
      <div className="rounded-md bg-blancoBg px-4">
        <div className="flex items-center justify-end gap-4 py-4">
          {filter !== "" && (
            <Button
              className="relative h-6 w-16 bg-[#E8E8E8] text-[10px] text-[#44444F] hover:bg-blue-200 hover:text-white"
              onClick={() => {
                table.getColumn("service")?.setFilterValue("");
                setFilter("");
              }}
            >
              {filter}
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-[1px] border-blue-400 p-0 text-blue-400">
                <IonIcon icon={close} size="large"></IonIcon>
              </span>
            </Button>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-6 w-16 rounded-3xl border-[1px] border-[#44444F] bg-transparent text-[10px]"
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
                {statusFilter?.map((filter, i) => (
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
              placeholder="SEARCH EMAILS"
              value={table.getColumn("email")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
              }
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="text-sm font-semibold text-[#696974]"
                  >
                    {header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
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

        <div className="flex items-center justify-end py-4">
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
            <IonIcon
              icon={chevronForwardCircle}
              className="h-10 w-10"
            ></IonIcon>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
