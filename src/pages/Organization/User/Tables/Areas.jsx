import React, { useEffect, useState } from "react";
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
} from "ionicons/icons";
import FormCreateArea from "../FormCreateArea";
import ModalShowArea from "../ModalShowArea";
import { getArea, getAreas } from "@/lib/actions";

function AreasTable({ areas }) {
  //Web Socket
  const [initialData, setInitialData] = useState(areas);
  const [data, setDataPusher] = useState(initialData);

  useEffect(() => {
    pusherClient.subscribe(`private-get-areas`);

    pusherClient.bind("fill-areas", ({ message }) => {
      getAreasFunction();
    });

    async function getAreasFunction() {
      let newData = await getAreas();

      setDataPusher(newData.data);
    }

    return () => {
      pusherClient.unsubscribe(`private-get-areas`);
    };
  });

  const [modal, setModal] = useState(false);
  const [areaId, setArea] = useState(false);

  const columnHelper = createColumnHelper();

  async function setModalAreas(area) {
    //Get info Area
    let areaInformation = await getAreaInformation(area);
    setArea(areaInformation.data);
    setModal(true);
  }

  async function getAreaInformation(area) {
    return await getArea(area);
  }

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
      cell: ({ row }) => {
        // console.log(row?.original?.id);
        return (
          <div className="flex gap-2 text-[#696974]">
            <button onClick={() => setModalAreas(row.original.id)}>
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
    <div className="relative w-full overflow-auto">
      {/* Form Edit and Show Areas */}
      <ModalShowArea modal={modal} setModal={setModal} area={areaId} />
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

export default AreasTable;
