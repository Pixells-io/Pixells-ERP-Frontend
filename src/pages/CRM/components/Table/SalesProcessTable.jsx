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
import DeleteProcessSaleModal from "../Modals/DeleteProcessSaleModal";
import EditProcessSaleModal from "../Modals/EditProcessSaleModal";
import { createPusherClient } from "@/lib/pusher";
import { getSalesProcess } from "../../utils";

function SalesProcessTable({ process, edit, destroy }) {
  //Data
  const [info, setInfo] = useState(process);
  const [data, setData] = useState(process);

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
      console.log("Jelou");
      let newProcess = await getSalesProcess();
      setInfo(newProcess.data);
      setData(newProcess.data);
    }

    return () => {
      pusherClient.unsubscribe("private-fill-table-leads");
    };
  }, []);

  //Modals
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDestroy, setModalDestroy] = useState(false);

  //Process Info
  const [processId, setProcessId] = useState(false);
  const [processName, setProcessName] = useState(false);
  const [processDescription, setProcessDescription] = useState(false);
  const [processColor, setProcessColor] = useState(false);

  const columnHelper = createColumnHelper();

  function openDestroyModal(id, name) {
    setProcessId(id);
    setProcessName(name);
    setModalDestroy(true);
  }

  function openEditModal(id, name, descripción) {
    setProcessId(id);
    setProcessName(name);
    setProcessDescription(descripción);
    setModalEdit(true);
  }

  function filterData(infoInput) {
    const filtered = info.filter(
      (item) =>
        item.name.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.color.toLowerCase().includes(infoInput.toLowerCase()) ||
        item.created.toLowerCase().includes(infoInput.toLowerCase()),
    );

    setData(filtered);
  }

  const columns = [
    columnHelper.accessor((row) => `${row?.id}`, {
      id: "id",
      header: "ID",
    }),
    columnHelper.accessor((row) => `${row?.name}`, {
      id: "name",
      header: "NAME",
    }),
    columnHelper.accessor((row) => `${row?.color}`, {
      id: "color",
      header: "COLOR",
    }),
    columnHelper.accessor((row) => `${row?.created}`, {
      id: "created",
      header: "CREADO",
    }),
    {
      accessorKey: "actions",
      header: "ACCIONES",
      cell: ({ row }) => {
        return (
          <div className="text- flex gap-2">
            {edit == true ? (
              <button
                onClick={() =>
                  openEditModal(
                    row?.original?.id,
                    row?.original?.name,
                    row?.original?.description,
                  )
                }
              >
                <IonIcon icon={informationCircle} className="h-5 w-5"></IonIcon>
              </button>
            ) : (
              false
            )}
            {destroy == true ? (
              <button
                onClick={() =>
                  openDestroyModal(row?.original?.id, row?.original?.name)
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
      <DeleteProcessSaleModal
        modal={modalDestroy}
        setModal={setModalDestroy}
        process_id={processId}
        process_name={processName}
      />
      <EditProcessSaleModal
        modal={modalEdit}
        setModal={setModalEdit}
        process_id={processId}
        process_name={processName}
        process_description={processDescription}
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

export default SalesProcessTable;
