import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";

import { IonIcon } from "@ionic/react";
import {
  closeCircleSharp,
  create,
  createOutline,
  informationCircle,
  pencilOutline,
} from "ionicons/icons";
import TicketDestroy from "./DestroyTicket";
import FormEditTickets from "./FormEditTicket";

function TicketsTable({ tickets, edit, destroy }) {
  const columnHelper = createColumnHelper();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalEditName, setModalEditName] = useState(false);
  const [modalEditDescription, setModalEditDescription] = useState(false);
  const [modalEditImportance, setModalEditImportance] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [ticketId, setTicketId] = useState(false);

  function openModalDestroyTicket(id) {
    setTicketId(id);
    setModal(true);
  }

  function openModalEditTicket(id, name, description, importance, category) {
    setTicketId(id);
    setModalEditName(name);
    setModalEditDescription(description);
    setModalEditImportance(importance);
    setModalEditCategory(category);
    setModalEdit(true);
  }

  const data = tickets;

  const columns = [
    columnHelper.accessor((row) => `${row.issue}`, {
      id: "Issue",
      header: "ISSUE",
    }),
    columnHelper.accessor((row) => `${row.importance}`, {
      id: "Importance",
      header: "IMPORTANCE",
    }),
    columnHelper.accessor((row) => `${row.status}`, {
      id: "Status",
      header: "STATE",
      accessorKey: "status",
      cell: ({ row }) => {
        return (
          <>
            {row.original.status === "Created" ? (
              <Badge variant="" className="bg-[#7794f925] text-[#7794f9]">
                {row.original.status}
              </Badge>
            ) : row.original.status === "In Process" ? (
              <Badge variant="" className="bg-[#FAA36425] text-[#FAA364]">
                {row.original.status}
              </Badge>
            ) : row.original.status === "Complete" ? (
              <Badge variant="" className="bg-[#00A25925] text-[#00A259]">
                {row.original.status}
              </Badge>
            ) : null}
          </>
        );
      },
    }),
    columnHelper.accessor((row) => `${row.category}`, {
      id: "Category",
      header: "CATEGORY",
    }),
    columnHelper.accessor((row) => `${row.creator}`, {
      id: "Creator",
      header: "CREATOR",
    }),
    {
      accessorKey: "actions",
      header: "ACTIONS",
      id: "Actions",
      cell: ({ row }) => {
        return (
          <div className="flex gap-2 text-[#696974]">
            <NavLink to={`/tickets/${row.original.id}`}>
              <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
            </NavLink>
            {destroy == true ? (
              <IonIcon
                icon={closeCircleSharp}
                className="h-5 w-5"
                onClick={() => openModalDestroyTicket(row.original.id)}
              ></IonIcon>
            ) : (
              false
            )}
            {edit == true ? (
              <IonIcon
                icon={create}
                className="h-5 w-5"
                onClick={() =>
                  openModalEditTicket(
                    row.original.id,
                    row.original.issue,
                    row.original.description,
                    row.original.importance,
                    row.original.category,
                  )
                }
              ></IonIcon>
            ) : (
              false
            )}
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
      <FormEditTickets
        modal={modalEdit}
        setModal={setModalEdit}
        id={ticketId}
        name={modalEditName}
        description={modalEditDescription}
        importance={modalEditImportance}
        category={modalEditCategory}
      />
      <TicketDestroy modal={modal} setModal={setModal} id={ticketId} />
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
        <tbody className="overflow-scroll [&_tr:last-child]:border-0">
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

export default TicketsTable;
