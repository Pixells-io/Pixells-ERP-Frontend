import React from "react";
import { useParams, useSubmit } from "react-router-dom";

import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AddCommentsClient from "../AddCommentsClient";

function ClientServicesTable({ services }) {
  const params = useParams();
  const submit = useSubmit();
  //Web Socket
  const data = services;

  const columnHelper = createColumnHelper();

  function setStatusClient(id) {
    submit(
      { client_id: id, type: "10" },
      { method: "post", action: `/crm/client/${params.id}` },
    );
  }

  const columns = [
    columnHelper.accessor((row) => `${row.id}`, {
      id: "id",
      header: "ID",
    }),
    columnHelper.accessor((row) => `${row.name}`, {
      id: "name",
      header: "Name",
    }),
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              {row.original.status == 1 ? (
                <span className="rounded-2xl border bg-[#00A25940] px-3 py-1 text-xs font-normal text-[#00A259]">
                  Active
                </span>
              ) : (
                <span className="rounded-2xl border bg-[#D7586B40] px-3 py-1 text-xs font-normal text-[#D7586B]">
                  Inactive
                </span>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => setStatusClient(row.original.id)}
              >
                Active
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setStatusClient(row.original.id)}
              >
                Inactive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
    {
      accessorKey: "step",
      header: "Step",
      cell: ({ row }) => {
        return <p> {row.original.step} </p>;
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
            +${Number(row.original.price).toFixed(2)}
          </span>
        );
      },
    },
    {
      accessorKey: "ammount",
      header: "Amount",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
            +${Number(row.original.price).toFixed(2)}
          </span>
        );
      },
    },
    {
      accessorKey: "bill type",
      header: "Bill Type",
      cell: ({ row }) => {
        return (
          <>
            {row.original.bill_type === 0 ? (
              <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
                Monthly
              </span>
            ) : (
              <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
                Anual
              </span>
            )}
          </>
        );
      },
    },
    {
      accessorKey: "comments",
      header: "Comments",
      cell: ({ row }) => {
        return (
          <AddCommentsClient
            customerId={row?.original.id}
            comments={row?.original.comments}
          />
        );
      },
    },
    {
      accessorKey: "active",
      header: "Active",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-normal text-grisHeading">
            {row.original.active} Days
          </span>
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
                className="border-b transition-colors data-[state=selected]:bg-muted"
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header?.id}
                      className="h-12 px-4 text-left align-middle font-roboto text-base font-medium text-[#2C2E2C] text-muted-foreground [&:has([role=checkbox])]:pr-0"
                      id={header.id}
                    >
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

export default ClientServicesTable;
