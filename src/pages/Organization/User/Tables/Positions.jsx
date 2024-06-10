import React from "react";
import { NavLink } from "react-router-dom";

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
  bookmark,
  document,
} from "ionicons/icons";

function PositionsTable({ positions }) {
  const columnHelper = createColumnHelper();

  const data = positions;

  const columns = [
    columnHelper.accessor((row) => `${row.position_type}`, {
      id: "PositionType",
      header: "POSITION TYPE",
    }),
    columnHelper.accessor((row) => `${row.position_name}`, {
      id: "PositionName",
      header: "POSITION NAME",
    }),
    columnHelper.accessor((row) => `${row.area}`, {
      id: "Area",
      header: "AREA",
    }),
    columnHelper.accessor((row) => `${row.boss}`, {
      id: "Boss",
      header: "BOSS",
    }),
    columnHelper.accessor((row) => `${row.created_at}`, {
      id: "Created",
      header: "CREATED",
    }),
    {
      accessorKey: "actions",
      header: "ACTIONS",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <NavLink to={`/organization/position/${row.original.id}`}>
              <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
            </NavLink>
            <IonIcon icon={chatbubbleEllipses} className="h-5 w-5"></IonIcon>
            <IonIcon icon={bookmark} className="h-5 w-5"></IonIcon>
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
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr
                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header?.id}
                      className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                      id={header.id}
                    >
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
        <tbody className="[&_tr:last-child]:border-0">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className="border-b border-t-[#D7D7D7] text-[#44444F] transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
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
                        cell.getContext(),
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

export default PositionsTable;
