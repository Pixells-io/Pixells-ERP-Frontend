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
import { NavLink } from "react-router-dom";

function UsersTable({ users }) {
  const columnHelper = createColumnHelper();

  const data = users;

  const columns = [
    {
      accessorKey: "Name",
      header: "NAME",
      id: "Name",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <div>
              <img
                src={row.original.user_image}
                className="h-10 w-10 rounded-full"
              />
            </div>
            <div className="ml-2 mt-2">
              <span>
                {row.original.name} {row.original.last_name}{" "}
                {row.original.second_last_name}
              </span>
            </div>
          </div>
        );
      },
    },
    /*columnHelper.accessor(
      (row) => `${row.name} ${row.last_name} ${row.second_last_name}`,
      {
        id: "Name",
        header: "NAME",
      },
    ),*/
    columnHelper.accessor((row) => `${row.status}`, {
      accessorKey: "status",
      id: "Status",
      header: "STATUS",
      cell: ({ row }) => {
        return (
          <div
            className={`flex w-fit items-center rounded-full px-4 ${row.original.status == "Active" ? "bg-[#00A25940]" : "bg-[#D7586B40]"}`}
          >
            <span
              className={`text-[11px] font-semibold ${row.original.status == "Active" ? "text-[#00A259]" : "text-[#D7586B]"}`}
            >
              {row.original.status}
            </span>
          </div>
        );
      },
    }),
    columnHelper.accessor((row) => `${row.area}`, {
      id: "Area",
      header: "AREA",
    }),
    columnHelper.accessor((row) => `${row.position}`, {
      id: "Position",
      header: "POSITION",
    }),
    columnHelper.accessor((row) => `${row.phone}`, {
      id: "Phone",
      header: "PHONE",
    }),
    columnHelper.accessor((row) => `${row.email}`, {
      id: "Email",
      header: "EMAIL",
    }),
    {
      accessorKey: "actions",
      header: "ACTIONS",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <NavLink to={`/organization/user/${row.original.id}`}>
              <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
            </NavLink>
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
    <div className="relative h-full w-full overflow-auto">
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
                      {header?.isPlaceholder
                        ? null
                        : flexRender(
                            header?.column.columnDef.header,
                            header?.getContext(),
                          )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody className="h-full overflow-auto [&_tr:last-child]:border-0">
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

export default UsersTable;
