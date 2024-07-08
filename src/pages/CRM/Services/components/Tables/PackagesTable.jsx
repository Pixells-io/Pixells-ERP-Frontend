import React, { useState } from "react";

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
} from "ionicons/icons";
import { Link } from "react-router-dom";
import EditPackageForm from "../Forms/EditPackageForm";

function PackagesTable({ packages }) {
  const columnHelper = createColumnHelper();

  const [modal, setModal] = useState(false);
  const [serviceId, setServiceId] = useState(false);
  const [serviceName, setServiceName] = useState(false);

  function openModal(name, id, description) {
    setServiceId(id);
    setServiceName(name);
    setModal(true);
  }

  const data = packages;

  const columns = [
    columnHelper.accessor((row) => `${row.name}`, {
      id: "name",
      header: "NAME",
    }),
    columnHelper.accessor((row) => `${row.services}`, {
      id: "services",
      header: "SERVICES",
    }),
    columnHelper.accessor((row) => `${row.created_at}`, {
      id: "created",
      header: "CREATED",
    }),
    {
      accessorKey: "actions",
      header: "ACTIONS",
      cell: ({ row }) => {
        // console.log(row?.original?.id);
        return (
          <div className="flex gap-2 text-[#696974]">
            <button
              onClick={() => openModal(row.original.id, row.original.name)}
            >
              <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
            </button>
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
    <div className="w-full">
      <EditPackageForm
        modal={modal}
        setModal={setModal}
        id={serviceId}
        name={serviceName}
      />
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
                      className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
                      id={header.id}
                      key={header.id}
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

export default PackagesTable;
