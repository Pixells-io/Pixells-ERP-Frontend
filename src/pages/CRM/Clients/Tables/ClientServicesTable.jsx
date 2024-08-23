import React, { useState } from "react";
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
import ModalShowBalance from "../Forms/ModalShowBalance";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import ModalCreatePay from "../Forms/ModalCreatePay";

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

  //MODAL SHOW CLIENT PAYS
  const [modalRecord, setModalRecord] = useState(false);
  const [modalPay, setModalPay] = useState(false);
  const [balanceId, setBalanceId] = useState(0);
  const [balanceAmmount, setBalanceAmmount] = useState(0);
  const [paysInfo, setPaysInfo] = useState([]);

  function setBalancePayment(id, ammount) {
    setBalanceId(id);
    setBalanceAmmount(ammount);
    setModalPay(true);
  }

  function setModalPays(pays) {
    setPaysInfo(pays);
    setModalRecord(true);
  }

  const columns = [
    columnHelper.accessor((row) => `${row.id}`, {
      id: "id",
      header: "ID",
    }),
    columnHelper.accessor((row) => `${row.name}`, {
      id: "nombre",
      header: "Nombre",
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
      accessorKey: "paso",
      header: "Paso",
      cell: ({ row }) => {
        return <p> {row.original.step} </p>;
      },
    },
    {
      accessorKey: "precio",
      header: "Precio",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
            ${row.original.price}
          </span>
        );
      },
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
            ${row.original.ammount}
          </span>
        );
      },
    },
    {
      accessorKey: "saldo",
      header: "Saldo",
      cell: ({ row }) => {
        return (
          <div className="flex gap-1">
            <span
              className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]"
              onClick={() => setModalPays(row.original.pays)}
            >
              ${row.original.balance}
            </span>
            <IonIcon
              icon={add}
              className="text-lg text-[#00A259]"
              onClick={() =>
                setBalancePayment(row.original.balance_id, row.original.balance)
              }
            />
          </div>
        );
      },
    },
    {
      accessorKey: "tipo",
      header: "Tipo",
      cell: ({ row }) => {
        return (
          <>
            {row.original.bill_type === 0 ? (
              <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
                Mes
              </span>
            ) : (
              <span className="rounded-2xl font-roboto text-sm font-bold text-[#00A259]">
                Año
              </span>
            )}
          </>
        );
      },
    },
    {
      accessorKey: "com",
      header: "Com",
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
      accessorKey: "activo",
      header: "Activo",
      cell: ({ row }) => {
        return (
          <span className="rounded-2xl font-roboto text-sm font-normal text-grisHeading">
            {row.original.active} Dias
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
      <ModalShowBalance
        modal={modalRecord}
        setModal={setModalRecord}
        pays={paysInfo}
      />
      <ModalCreatePay
        modal={modalPay}
        setModal={setModalPay}
        balanceId={balanceId}
        balanceAmmount={balanceAmmount}
      />
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
