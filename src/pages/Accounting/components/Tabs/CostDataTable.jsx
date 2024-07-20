import React, { useState, useEffect, useMemo } from "react";
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
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IonIcon } from "@ionic/react";
import { search, chevronBack, chevronForward, informationCircle } from "ionicons/icons";
import AddConfig from "../ModalConfig";
const CostDataTable = ({ data }) => {
  const [tableData, setTableData] = useState(
    data.map((row) => ({ ...row, checked: false }))
  );
  const [filtering, setFiltering] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    setTableData(data.map(item => ({ ...item, checked: false })));
  }, [data]);

  const handleSelectAll = () => {
    const allChecked = tableData.every((row) => row.checked);
    setTableData(
      tableData.map((row) => ({
        ...row,
        checked: !allChecked,
      }))
    );
  };

  const handleCheckboxChange = (codigo) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.codigo === codigo ? { ...row, checked: !row.checked } : row
      )
    );
  };

  

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true; // Si no hay valor de filtro, muestra todas las filas
      const columnsToSearch = ["codigo", "nombre", "creacion", "descripcion"];
      return columnsToSearch.some((column) => {
        const value = row.getValue(column);
        return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    },
  });

  const filteredRows = table.getFilteredRowModel().rows;
  const totalPages = Math.ceil(filteredRows.length / pageSize);

  const paginatedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredRows.slice(startIndex, startIndex + pageSize);
  }, [filteredRows, currentPage]);

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  return (
    <div className="h-full overflow-auto rounded-xl bg-white p-7">
      {/*tabs*/}
      <div className="flex items-center justify-between py-4">
        <div className="flex-shrink-0">
          <Tabs
            defaultValue="CENTRO DE COSTOS"
            className="flex h-full overflow-auto rounded-lg pt-2"
          >
            <TabsList className="mb-3 w-full bg-transparent">
              <div className="flex w-full">
                <div className="w-4/5">
                  <TabsTrigger
                    className="rounded-none border-b-2 border-slate-300 p-3 font-roboto text-sm font-normal text-grisSubText data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium data-[state=active]:text-primarioBotones"
                    value="CENTRO DE COSTOS"
                  >
                    CENTRO DE COSTOS    
                  </TabsTrigger>
                </div>
              </div>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="flex flex-grow items-center justify-end space-x-6">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="selectAll"
              checked={
                tableData.length > 0 && tableData.every((row) => row.checked)
              }
              onCheckedChange={handleSelectAll}
            />
            <label className="font-poppins text-xs font-bold text-[#44444F]">
              All
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <Badge
              variant="secondary"
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'codigo' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('codigo')}
            >
              Código
            </Badge>
            <Badge
              variant="secondary"
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'nombre' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('nombre')}
            >
              Nombre
            </Badge>
            <Badge
              variant="secondary"
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'creacion' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('creacion')}
            >
              Descripción
            </Badge>
          </div>

          {/* Global Search */}
          <div className="relative w-40">
            <Input
              className="h-8 w-full rounded-full border border-black bg-transparent py-1 pl-8 pr-3 text-sm !ring-0 !ring-offset-0 placeholder:text-xs placeholder:text-[#696974] focus:border-2 focus:border-black"
              placeholder="Search"
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
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow key={row.id} className="font-roboto">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-end py-4">
        <div className="flex items-end space-x-2">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-full w-9 h-9  bg-gray-200 p-2 text-gray-700 disabled:opacity-50"
          >
            <IonIcon icon={chevronBack} />
          </button>
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-full w-9 h-9 bg-gray-200 p-2 text-gray-700 disabled:opacity-50"
          >
            <IonIcon icon={chevronForward} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostDataTable;
