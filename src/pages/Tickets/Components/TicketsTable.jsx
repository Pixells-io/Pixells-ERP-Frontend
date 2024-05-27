import React from "react";

import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { IonIcon } from "@ionic/react";
import {
  informationCircle,
  chatbubbleEllipses,
  searchOutline,
  bookmark,
} from "ionicons/icons";

function TicketsTable({ tickets }) {
  const columnHelper = createColumnHelper();

  const data = tickets;

  const columns = [
    columnHelper.accessor(
      (row) => `${row.name} ${row.last_name} ${row.second_last_name}`,
      {
        id: "Issue",
        header: "ISSUE",
      }
    ),
    columnHelper.accessor((row) => `${row.status}`, {
      id: "Importance",
      header: "IMPORTANCE",
    }),
    columnHelper.accessor((row) => `${row.area}`, {
      id: "Status",
      header: "STATUS",
    }),
    columnHelper.accessor((row) => `${row.position}`, {
      id: "Category",
      header: "CATEGORY",
    }),
    columnHelper.accessor((row) => `${row.phone}`, {
      id: "Creator",
      header: "CREATOR",
    }),
    {
      accessorKey: "actions",
      header: "ACTIONS",
      id: "Actions",
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
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          {table?.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                key={headerGroup?.id}
              >
                {headerGroup?.headers.map((header) => {
                  return (
                    <th
                      className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                      id={header?.id}
                      key={header?.id}
                    >
                      {" "}
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column.columnDef.header,
                            header?.getContext()
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-t-[#D7D7D7] text-[#44444F]"
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      className="p-4 align-middle [&:has([role=checkbox])]:pr-0"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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

export default TicketsTable;
