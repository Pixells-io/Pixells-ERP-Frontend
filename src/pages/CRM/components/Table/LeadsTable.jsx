import React, { useEffect, useState } from "react";

import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IonIcon } from "@ionic/react";
import { informationCircle, searchOutline, trash } from "ionicons/icons";
import DeleteLeadsModal from "../Modals/DeleteLeadsModal";
import { Link } from "react-router-dom";
import { createPusherClient } from "@/lib/pusher";
import { getLeads } from "../../utils";

function LeadsTable({ leads, edit, destroy }) {
  //Data
  const [info, setInfo] = useState(leads);
  const [data, setData] = useState(leads);

  //Web Socket
  const pusherClient = createPusherClient();

  useEffect(() => {
    //Socket fot table leads and clients
    pusherClient.subscribe("private-fill-table-leads");

    pusherClient.bind("make-table-leads", ({ message }) => {
      getLeadsInfo();
    });

    //Function Sync Info
    async function getLeadsInfo() {
      let newProcess = await getLeads();
      setInfo(newProcess.data);
      setData(newProcess.data);
    }

    return () => {
      pusherClient.unsubscribe("private-fill-table-leads");
    };
  }, []);

  //Modals
  const [modalDestroy, setModalDestroy] = useState(false);

  //Process Info
  const [leadId, setLeadId] = useState(false);
  const [leadName, setLeadName] = useState(false);

  const columnHelper = createColumnHelper();

  function openDestroyModal(id, name) {
    setLeadId(id);
    setLeadName(name);
    setModalDestroy(true);
  }

  function filterData(infoInput) {
    const filtered = info.filter(
      (item) =>
        item.company.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.services.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.name.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.phone.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.status.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.process.toLowerCase().includes(infoInput.toLowerCase()),
    );

    setData(filtered);
  }

  const columns = [
    columnHelper.accessor((row) => `${row.id}`, {
      id: "id",
      header: "ID",
    }),
    columnHelper.accessor((row) => `${row.company}`, {
      id: "company",
      header: "EMPRESA",
    }),
    columnHelper.accessor((row) => `${row.services}`, {
      id: "services",
      header: "SERVICIOS",
    }),
    columnHelper.accessor((row) => `${row.name}`, {
      id: "contacto",
      header: "CONTACTO",
    }),
    columnHelper.accessor((row) => `${row.phone}`, {
      id: "phone",
      header: "TELEFONO",
    }),
    {
      accessorKey: "status",
      header: "ESTATUS",
      cell: ({ row }) => {
        return (
          <div className="gap-2">
            {row.original?.status == "Activo" ? (
              <span className="rounded-2xl bg-blue-100 px-2 py-1 text-xs text-primario">
                Activo
              </span>
            ) : row.original?.status == "Suspendido" ? (
              <span className="rounded-2xl bg-yellow-200 px-2 py-1 text-xs text-yellow-600">
                Suspendido
              </span>
            ) : row.original?.status == "Cancelado" ? (
              <span className="rounded-2xl bg-red-200 px-2 py-1 text-xs text-red-600">
                Cancelado
              </span>
            ) : row.original?.status == "Completado" ? (
              <span className="rounded-2xl bg-green-200 px-2 py-1 text-xs text-green-600">
                Completado
              </span>
            ) : (
              false
            )}
          </div>
        );
      },
    },
    columnHelper.accessor((row) => `${row.process}`, {
      id: "process",
      header: "PROCESO",
    }),
    {
      accessorKey: "actions",
      header: "ACCIONES",
      cell: ({ row }) => {
        return (
          <div className="text- flex gap-2">
            {edit == true ? (
              <Link to={`/crm/leads/${row.original?.id}`}>
                <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
              </Link>
            ) : (
              false
            )}
            {destroy == true ? (
              <button
                onClick={() =>
                  openDestroyModal(row.original.id, row.original.company)
                }
              >
                <IonIcon icon={trash} className="h-5 w-5"></IonIcon>
              </button>
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
    <div className="relative w-full overflow-auto">
      {/*Forms*/}
      <DeleteLeadsModal
        modal={modalDestroy}
        setModal={setModalDestroy}
        lead_id={leadId}
        lead_name={leadName}
      />
      <div className="float-end flex h-9 w-44 items-center rounded-3xl border-[1px] border-[#D7D7D7] py-2 text-[10px]">
        <Label htmlFor="search">
          <IonIcon
            icon={searchOutline}
            className="ml-2 h-6 w-6 stroke-1 text-[#8F8F8F]"
          ></IonIcon>
        </Label>
        <Input
          id="search"
          className="h-full w-full border-0 bg-transparent text-sm font-normal text-[#8F8F8F] !ring-0 !ring-offset-0 placeholder:text-sm placeholder:text-[#8F8F8F]"
          placeholder={"Buscar"}
          onChange={(e) => filterData(e.target.value)}
        />
      </div>
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
                      className="h-12 px-4 text-left align-middle font-poppins text-xs font-medium text-[#44444F] [&:has([role=checkbox])]:pr-0"
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

export default LeadsTable;
