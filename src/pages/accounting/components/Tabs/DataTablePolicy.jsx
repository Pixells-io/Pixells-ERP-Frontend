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
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { search, chevronBack, chevronForward, informationCircle } from "ionicons/icons";

const DataTable = ({ data }) => {
  const [tableData, setTableData] = useState(
    data.map((row) => ({ ...row, checked: false }))
  );
  const [filtering, setFiltering] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [activeFilter, setActiveFilter] = useState(null);

  const handleSelectAll = () => {
    const allChecked = tableData.every((row) => row.checked);
    setTableData(
      tableData.map((row) => ({
        ...row,
        checked: !allChecked,
      }))
    );
  };

  const handleCheckboxChange = (tipo) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.tipo === tipo ? { ...row, checked: !row.checked } : row
      )
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "En progreso":
        return { backgroundColor: "rgba(250, 163, 100, 0.25)", color: "#FAA364" };
      case "Borrador":
        return { backgroundColor: "rgba(91, 137, 255, 0.25)", color: "#5B89FF"};
      case "Finalizado":
        return { backgroundColor: "rgba(0, 162, 89, 0.25)", color: "#00A259" };
      default:
        return {};
    }
  };


  const columns = useMemo(
    () => [
      {
        id: "tipo",
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
        id: "numeracion",
        accessorKey: "numeracion",
        header: "Numeracion",
      },
      {
        id: "fecha",
        accessorKey: "fecha",
        header: "Fecha",
      },
      {
        id: "estado",
        accessorKey: "estado",
        header: "Estado",
        cell: ({ row }) => (
          <span
            className="flex font-roboto justify-center px-2 py-1 rounded-full text-xs"
            style={{
              ...getStatusStyle(row.original.estado),
            }}
          >
            {row.original.estado}
          </span>
        ),
      },
      {
        id: "xml",
        accessorKey: "xml",
        header: "XML ASOCIADOS",
      },
      {
        id: "observaciones",
        accessorKey: "observaciones",
        header: "Observaciones",
      },
      {
        id: "total",
        accessorKey: "total",
        header: "Total",
      },
      {
        id: "acciones",
        accessorKey: "acciones",
        header: "Acciones",
        cell: ({ row }) => (
          <div className="flex justify-center">
            <Link to="/accounting/policy/details">
              <IonIcon
                icon={informationCircle}
                size="small"
                className="text-gray-500"
              />
            </Link>
          </div>
        ),
      },
    ],
    [tableData]
  );

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
      const columnsToSearch = ["tipo", "numeracion", "fecha", "estado", "xml", "observaciones", "total"];
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
      <div>
        <p className="font-poppins font-bold text-lg font-[16px] text-[#44444F]">
          Movimientos
        </p>
      </div>
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
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'tipo' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('tipo')}
              >
              Tipo
              </Badge>
            <Badge
              variant="secondary"
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'numeracion' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('numeracion')}
            >
              Numeración
            </Badge>
            <Badge
              variant="secondary"
              className={`border-neutral-950 bg-white px-3 py-1 font-poppins text-xs font-bold text-[#44444F] hover:bg-primario hover:text-white ${activeFilter === 'fecha' ? 'bg-primario text-white' : ''}`}
              onClick={() => setActiveFilter('fecha')}
            >
              Fecha
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
        <TableBody className="font-roboto">
          {paginatedRows.map((row) => (
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

export default DataTable;
