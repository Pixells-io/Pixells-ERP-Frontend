import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";

function StatusTab(tasks, users, positions, areas) {
  const data = {
    pending: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
      {
        id: 5,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
    ],
    inProgress: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
      {
        id: 5,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
    ],
    completed: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
      {
        id: 5,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
    ],
    canceled: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {},
      },
      {
        id: 5,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 6,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        dateLimit: "14 sep 24",
        project: {
          id: 1,
          name: "Proyecto Z",
        },
      },
    ],
  };

  const [pending, setPending] = useState(data?.pending);
  const [inProgress, setInProgress] = useState(data?.inProgress);
  const [completed, setCompleted] = useState(data?.completed);
  const [canceled, setCanceled] = useState(data?.canceled);

  return (
    <div className="flex h-full w-full gap-4 overflow-auto">
      {/* pending */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#44444F0D] px-2 py-4`}
      >
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`w-full max-w-[113px] rounded-lg bg-[#44444F4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Pendiente
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {pending.length}
          </span>
        </div>
        <div className="overflow-auto">
          {pending?.map((p, index) => (
            <div
              className="group relative mb-4 rounded-lg bg-white hover:bg-[#D7D7D780]"
              key={index}
            >
              <div className="flex flex-col gap-y-1 border-b border-grisDisabled px-2 pb-2.5 pt-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${p.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {p.name}
                  </Link>

                  <Avatar className="size-6 group-hover:opacity-0">
                    <AvatarImage
                      src={p.assigned?.img}
                      title={p.assigned?.name}
                    />
                  </Avatar>
                </div>

                {Object.keys(p?.project).length > 0 && (
                  <div className="flex items-center gap-x-2">
                    <div className="flex h-4 w-4 justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                      P
                    </div>
                    <span className="text-[10px] font-normal text-grisHeading">
                      {p?.project?.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between p-2">
                <span className="text-[11px] font-normal text-grisHeading">
                  Fecha Límite {p.dateLimit}
                </span>
                {p.status == "1" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#B7021F] text-sm font-semibold text-white">
                    U
                  </div>
                ) : p.status == "2" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#D75B00] text-sm font-semibold text-white">
                    M
                  </div>
                ) : (
                  p.status == "3" && (
                    <div className="flex h-5 w-5 justify-center rounded bg-[#DC9100] text-sm font-semibold text-white">
                      B
                    </div>
                  )
                )}
              </div>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Completar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Eliminar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* inProgress */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#FAA3640D] px-2 py-4`}
      >
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`w-full max-w-[113px] rounded-lg bg-[#FAA3644D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            En Progreso
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {inProgress.length}
          </span>
        </div>
        <div className="overflow-auto">
          {inProgress?.map((iP, index) => (
            <div
              className="group relative mb-4 rounded-lg bg-white hover:bg-[#D7D7D780]"
              key={index}
            >
              <div className="flex flex-col gap-y-0.5 border-b border-grisDisabled px-2 py-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${iP.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {iP.name}
                  </Link>

                  <Avatar className="size-6 group-hover:opacity-0">
                    <AvatarImage
                      src={iP.assigned?.img}
                      title={iP.assigned?.name}
                    />
                  </Avatar>
                </div>

                {Object.keys(iP?.project).length > 0 && (
                  <div className="flex items-center gap-x-2">
                    <div className="flex h-4 w-4 justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                      P
                    </div>
                    <span className="text-[10px] font-normal text-grisHeading">
                      {iP?.project?.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between p-2">
                <span className="text-[11px] font-normal text-grisHeading">
                  Fecha Límite {iP.dateLimit}
                </span>
                {iP.status == "1" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#B7021F] text-sm font-semibold text-white">
                    U
                  </div>
                ) : iP.status == "2" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#D75B00] text-sm font-semibold text-white">
                    M
                  </div>
                ) : (
                  iP.status == "3" && (
                    <div className="flex h-5 w-5 justify-center rounded bg-[#DC9100] text-sm font-semibold text-white">
                      B
                    </div>
                  )
                )}
              </div>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Completar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Eliminar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* completed */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#00BE4C0D] px-2 py-4`}
      >
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`w-full max-w-[113px] rounded-lg bg-[#00BE4C4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Completado
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {completed.length}
          </span>
        </div>
        <div className="overflow-auto">
          {completed?.map((c, index) => (
            <div
              className="group relative mb-4 rounded-lg bg-white hover:bg-[#D7D7D780]"
              key={index}
            >
              <div className="flex flex-col gap-y-0.5 border-b border-grisDisabled px-2 py-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${c.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {c.name}
                  </Link>

                  <Avatar className="size-6 group-hover:opacity-0">
                    <AvatarImage
                      src={c.assigned?.img}
                      title={c.assigned?.name}
                    />
                  </Avatar>
                </div>

                {Object.keys(c?.project).length > 0 && (
                  <div className="flex items-center gap-x-2">
                    <div className="flex h-4 w-4 justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                      P
                    </div>
                    <span className="text-[10px] font-normal text-grisHeading">
                      {c?.project?.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between p-2">
                <span className="text-[11px] font-normal text-grisHeading">
                  Fecha Límite {c.dateLimit}
                </span>
                {c.status == "1" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#B7021F] text-sm font-semibold text-white">
                    U
                  </div>
                ) : c.status == "2" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#D75B00] text-sm font-semibold text-white">
                    M
                  </div>
                ) : (
                  c.status == "3" && (
                    <div className="flex h-5 w-5 justify-center rounded bg-[#DC9100] text-sm font-semibold text-white">
                      B
                    </div>
                  )
                )}
              </div>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Completar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Eliminar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* canceled */}
      <div
        className={`flex w-64 flex-shrink-0 flex-col rounded-xl bg-[#D7586B0D] px-2 py-4`}
      >
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`w-full max-w-[113px] rounded-lg bg-[#D7586B4D] px-2 py-1 font-roboto text-xs font-normal`}
          >
            Cancelado
          </span>
          <span className={`pr-4 font-roboto text-sm font-semibold`}>
            {canceled.length}
          </span>
        </div>
        <div className="overflow-auto">
          {canceled?.map((c, index) => (
            <div
              className="group relative mb-4 rounded-lg bg-white hover:bg-[#D7D7D780]"
              key={index}
            >
              <div className="flex flex-col gap-y-0.5 border-b border-grisDisabled px-2 py-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${c.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {c.name}
                  </Link>

                  <Avatar className="size-6 group-hover:opacity-0">
                    <AvatarImage
                      src={c.assigned?.img}
                      title={c.assigned?.name}
                    />
                  </Avatar>
                </div>

                {Object.keys(c?.project).length > 0 && (
                  <div className="flex items-center gap-x-2">
                    <div className="flex h-4 w-4 justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                      P
                    </div>
                    <span className="text-[10px] font-normal text-grisHeading">
                      {c?.project?.name}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between p-2">
                <span className="text-[11px] font-normal text-grisHeading">
                  Fecha Límite {c.dateLimit}
                </span>
                {c.status == "1" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#B7021F] text-sm font-semibold text-white">
                    U
                  </div>
                ) : c.status == "2" ? (
                  <div className="flex h-5 w-5 justify-center rounded bg-[#D75B00] text-sm font-semibold text-white">
                    M
                  </div>
                ) : (
                  c.status == "3" && (
                    <div className="flex h-5 w-5 justify-center rounded bg-[#DC9100] text-sm font-semibold text-white">
                      B
                    </div>
                  )
                )}
              </div>

              <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all group-hover:opacity-100">
                <div className="flex h-[22px] items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                      <IonIcon
                        icon={ellipsisHorizontal}
                        className="px-1.5"
                      ></IonIcon>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36 rounded-3xl px-0 pb-4 pt-4 text-start">
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Completar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                      >
                        Eliminar
                      </button>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusTab;
