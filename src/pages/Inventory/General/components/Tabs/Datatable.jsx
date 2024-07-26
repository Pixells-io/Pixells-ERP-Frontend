import React, { useState, useMemo } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { IonIcon } from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';

const DataTable = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const table = useReactTable({
    data: currentTableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalPages = Math.ceil(data.length / pageSize);

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>

                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row, rowIndex) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => {
      

                return (
                  <TableCell key={cell.id} className="py-0" >
                    
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                 
                  </TableCell>
                );
              })}
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