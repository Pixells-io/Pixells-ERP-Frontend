import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

function StatusTab() {
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
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
    ],
    inProgress: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
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
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "3",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
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
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
          id: 1,
          name: "Proyecto Z",
        },
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        advance: 90,
        peopleObjectives: [
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
          {
            img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            name: "Developer Pixells",
          },
        ],
        dateLimit: "14 sep 24",
        objective: {
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
              <div className="flex flex-col gap-y-1 border-b border-grisDisabled px-2 pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${p.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {p.name}
                  </Link>

                  <Avatar className="size-6">
                    <AvatarImage
                      src={p.assigned?.img}
                      title={p.assigned?.name}
                    />
                  </Avatar>
                </div>

                <div className="flex items-center gap-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                    O
                  </div>
                  <span className="text-[10px] font-normal text-grisHeading">
                    {p?.objective?.name}
                  </span>
                </div>

                <div className="flex justify-between gap-x-2 pt-2">
                  <div className="flex w-1/2 flex-row items-center gap-x-2">
                    <Progress
                      value={p.advance}
                      className="h-[4px] bg-[#D7D7D7]"
                      color={`"${p.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                    />
                    <p className="text-[10px] font-medium text-[#696974B2]">
                      {p.advance}%
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    {p.peopleObjectives.slice(0, 3).map((pObjective, index) => (
                      <Avatar className="size-5" key={index}>
                        <AvatarImage
                          src={pObjective?.img}
                          title={pObjective?.name}
                        />
                      </Avatar>
                    ))}
                    {p.peopleObjectives.length > 3 && (
                      <div className="ml-1 flex items-center">
                        <span className="text-xs font-normal text-grisHeading">
                          +{p.peopleObjectives.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
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

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <Button
                  type="button"
                  className="h-7 w-16 text-[10px] font-semibold text-white"
                >
                  Ver
                </Button>
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
              <div className="flex flex-col gap-y-1 border-b border-grisDisabled px-2 pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${iP.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {iP.name}
                  </Link>

                  <Avatar className="size-6">
                    <AvatarImage
                      src={iP.assigned?.img}
                      title={iP.assigned?.name}
                    />
                  </Avatar>
                </div>

                <div className="flex items-center gap-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                    O
                  </div>
                  <span className="text-[10px] font-normal text-grisHeading">
                    {iP.objective?.name}
                  </span>
                </div>

                <div className="flex justify-between gap-x-2 pt-2">
                  <div className="flex w-1/2 flex-row items-center gap-x-2">
                    <Progress
                      value={iP.advance}
                      className="h-[4px] bg-[#D7D7D7]"
                      color={`"${iP.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                    />
                    <p className="text-[10px] font-medium text-[#696974B2]">
                      {iP.advance}%
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    {iP.peopleObjectives
                      .slice(0, 3)
                      .map((pObjective, index) => (
                        <Avatar className="size-5" key={index}>
                          <AvatarImage
                            src={pObjective?.img}
                            title={pObjective?.name}
                          />
                        </Avatar>
                      ))}
                    {iP.peopleObjectives.length > 3 && (
                      <div className="ml-1 flex items-center">
                        <span className="text-xs font-normal text-grisHeading">
                          +{iP.peopleObjectives.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
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

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <Button
                  type="button"
                  className="h-7 w-16 text-[10px] font-semibold text-white"
                >
                  Ver
                </Button>
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
              <div className="flex flex-col gap-y-1 border-b border-grisDisabled px-2 pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${c.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {c.name}
                  </Link>

                  <Avatar className="size-6">
                    <AvatarImage
                      src={c.assigned?.img}
                      title={c.assigned?.name}
                    />
                  </Avatar>
                </div>

                <div className="flex items-center gap-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                    O
                  </div>
                  <span className="text-[10px] font-normal text-grisHeading">
                    {c.objective?.name}
                  </span>
                </div>

                <div className="flex justify-between gap-x-2 pt-2">
                  <div className="flex w-1/2 flex-row items-center gap-x-2">
                    <Progress
                      value={c.advance}
                      className="h-[4px] bg-[#D7D7D7]"
                      color={`"${c.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                    />
                    <p className="text-[10px] font-medium text-[#696974B2]">
                      {c.advance}%
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    {c.peopleObjectives.slice(0, 3).map((pObjective, index) => (
                      <Avatar className="size-5" key={index}>
                        <AvatarImage
                          src={pObjective?.img}
                          title={pObjective?.name}
                        />
                      </Avatar>
                    ))}
                    {c.peopleObjectives.length > 3 && (
                      <div className="ml-1 flex items-center">
                        <span className="text-xs font-normal text-grisHeading">
                          +{c.peopleObjectives.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
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

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <Button
                  type="button"
                  className="h-7 w-16 text-[10px] font-semibold text-white"
                >
                  Ver
                </Button>
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
              <div className="flex flex-col gap-y-1 border-b border-grisDisabled px-2 pb-2 pt-3">
                <div className="flex items-center justify-between">
                  <Link
                    to={`/crm/leads/${c.id}`}
                    className="line-clamp-1 font-poppins text-xs font-medium text-grisHeading"
                    title={"Nombre"}
                  >
                    {c.name}
                  </Link>

                  <Avatar className="size-6">
                    <AvatarImage
                      src={c.assigned?.img}
                      title={c.assigned?.name}
                    />
                  </Avatar>
                </div>

                <div className="flex items-center gap-x-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                    O
                  </div>
                  <span className="text-[10px] font-normal text-grisHeading">
                    {c.objective?.name}
                  </span>
                </div>

                <div className="flex justify-between gap-x-2 pt-2">
                  <div className="flex w-1/2 flex-row items-center gap-x-2">
                    <Progress
                      value={c.advance}
                      className="h-[4px] bg-[#D7D7D7]"
                      color={`"${c.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                    />
                    <p className="text-[10px] font-medium text-[#696974B2]">
                      {c.advance}%
                    </p>
                  </div>
                  <div className="flex w-1/2 justify-end">
                    {c.peopleObjectives.slice(0, 3).map((pObjective, index) => (
                      <Avatar className="size-5" key={index}>
                        <AvatarImage
                          src={pObjective?.img}
                          title={pObjective?.name}
                        />
                      </Avatar>
                    ))}
                    {c.peopleObjectives.length > 3 && (
                      <div className="ml-1 flex items-center">
                        <span className="text-xs font-normal text-grisHeading">
                          +{c.peopleObjectives.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
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

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
                <Button
                  type="button"
                  className="h-7 w-16 text-[10px] font-semibold text-white"
                >
                  Ver
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatusTab;
