import React from "react";

import {
    useReactTable,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
  } from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IonIcon } from "@ionic/react";
import {
  informationCircle,
  searchOutline,
  chatbubbleEllipses,
  bookmark,
} from "ionicons/icons";
function AreasTable({ areas }) {
    const columnHelper = createColumnHelper();

    const data = areas;
    
    const columns = [
      columnHelper.accessor((row) => `${row.nombre}`, {
        id: "name",
        header: "NAME",
      }),
      columnHelper.accessor((row) => `${row.description}`, {
        id: "description",
        header: "DESCRIPTION",
      }),
      columnHelper.accessor((row) => `${row.created_at}`, {
        id: "created",
        header: "CREATED",
      }),
      {
        accessorKey: "actions",
        header: "ACTIONS",
        cell: () => {
          return (
            <div className="flex gap-2 text-[#696974]">
              <IonIcon icon={informationCircle} className="w-5 h-5"></IonIcon>
              <IonIcon icon={chatbubbleEllipses} className="w-5 h-5"></IonIcon>
              <IonIcon icon={bookmark} className="w-5 h-5"></IonIcon>
            </div>
          );
        },
      },
    ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="relative w-full overflow-auto">
        <div className="flex pt-3 pb-6">
            <div className="w-3/5">

            </div>
            <div className="w-2/5">
                <div className="flex items-end rounded-3xl border-[1px] border-[#44444F] text-[10px] h-10 w-44 py-2 px-2">
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
        </div>
        <table className="w-full caption-bottom text-sm" >
          <thead className="[&_tr]:border-b" >
            {table.getHeaderGroups().map((headerGroup) => {
              return (
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0" id={header.id}>
                        {" "}
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody className="[&_tr:last-child]:border-0" >
            {table.getRowModel().rows.map((row) => {
              return (
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-t-[#D7D7D7] text-[#44444F]" key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  );
}

export default AreasTable;
