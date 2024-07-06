import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(
    data.map((row) => ({ ...row, checked: false })),
  );

  const handleCheckboxChange = (rowTipo) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.tipo === rowTipo ? { ...row, checked: !row.checked } : row,
      ),
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "tipo",
        header: "Tipo",
        cell: ({ row }) => (
          <div className="flex items-center">
            <Checkbox
              checked={row.original.checked}
              onCheckedChange={() => handleCheckboxChange(row.original.tipo)}
            />
            <span className="ml-2">{row.original.tipo}</span>
          </div>
        ),
      },
      {
        accessorKey: "numeracion",
        header: "Numeracion",
      },
      {
        accessorKey: "fecha",
        header: "Fecha",
      },
      {
        accessorKey: "estado",
        header: "Estado",
      },
      {
        accessorKey: "xml",
        header: "XML ASOCIADOS",
      },
      {
        accessorKey: "observaciones",
        header: "Observaciones",
      },
      {
        accessorKey: "total",
        header: "Total",
      },
    ],
  );

  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId);
      return String(value)
        .toLowerCase()
        .includes(String(filterValue).toLowerCase());
    },
  });

  return (
    <div className="h-full overflow-auto rounded-xl bg-white p-7">
      {/*tabs*/}
      <div className="flex items-center justify-between py-4">
        <div className="flex-shrink-0">
          <Tabs
            defaultValue="ASIENTOS"
            className="flex h-full overflow-auto rounded-lg pt-2"
          >
            <TabsList className="mb-3 w-full bg-transparent">
              <div className="flex w-full">
                <div className="w-4/5">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="ASIENTOS"
                  >
                    ASIENTOS
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-grow items-center justify-end space-x-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="selectAll" />
            <label className="font-poppins text-xs font-bold text-[#44444F]">
              All
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Badge
              variant="secondary"
              className="border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white"
            >
              Service
            </Badge>
            <Badge
              variant="secondary"
              className="border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white"
            >
              Company
            </Badge>
            <Badge
              variant="secondary"
              className="border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white"
            >
              Contact
            </Badge>
          </div>
          <div className="relative w-40">
            <Input
              className="h-8 w-full rounded-full border border-black bg-transparent py-1 pl-8 pr-3 text-sm !ring-0 !ring-offset-0 placeholder:text-xs placeholder:text-[#696974] focus:border-2 focus:border-black"
              placeholder="Search..."
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
            />
            <IonIcon
              icon={search}
              size="small"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 transform text-black"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table>
        {/* header*/}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        {/* body*/}
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
    </div>
  );
};

export default DataTable;
