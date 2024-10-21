import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import CommentsLead from "@/pages/CRM/Leads/components/CommentsLead";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal, settingsOutline } from "ionicons/icons";
import { Button } from "@/components/ui/button";

function BoardTab({ proyects }) {
  const data = {
    boards: [
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
      {
        id: 4,
        name: "Cica PP - 1 - 2",
        status: "1",
        type: "2",
        assigned: {
          img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
          name: "Developer Pixells",
        },
        comments: [
          {
            comment: "Prueba",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:50 PM",
          },
          {
            comment: "Ola",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 2,
            hour: "14-10-2024 5:54 PM",
          },
          {
            comment: "Que onda",
            img: "http://demoback.pixells.io/storage/1BVlA0RKvzDHr0YdkuQr1MlCwT65dX4FLc2zT8TW.jpg",
            name: "Victor Espinosa",
            diff: 1,
            hour: "15-10-2024 11:04 AM",
          },
        ],
        advance: 80,
        created: 6,
        edited: 0,
        phone: "33 28282828",
        contact_name: "Luis M",
        contact_middle_name: "Paez",
        contact_last_name: "R",
        contact_phone: "3369878454",
        contact_email: "hola@gmail.com",
      },
    ],
  };

  const [boards, setBoards] = useState(proyects);

  return (
    <div className="flex flex-wrap gap-4 overflow-auto px-1">
      {boards?.map((p, index) => (
        // <div
        //   className="group relative my-4 max-w-[234px] rounded-lg bg-white px-2 py-2 drop-shadow-[0_0px_2px_rgba(0,0,0,0.15)]"
        //   key={index}
        //   draggable="true"
        // >
        //   <Link
        //     to={`/crm/leads/${board.id}`}
        //     className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
        //     title={"Nombre"}
        //   >
        //     {board.name}
        //   </Link>

        //   <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
        //     <div className="flex h-[22px] items-center">
        //       <DropdownMenu>
        //         <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
        //           <IonIcon
        //             icon={ellipsisHorizontal}
        //             className="px-1.5"
        //           ></IonIcon>
        //         </DropdownMenuTrigger>
        //         <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
        //           <button
        //             type="button"
        //             className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
        //           >
        //             Asignar a otro usuario
        //           </button>
        //           <button
        //             type="button"
        //             className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
        //           >
        //             Editar
        //           </button>
        //         </DropdownMenuContent>
        //       </DropdownMenu>
        //     </div>
        //   </div>

        //   <div className="mb-2 mt-2 flex gap-2">
        //     {board.status == 1 ? (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
        //         Activo
        //       </span>
        //     ) : board.stages == 2 ? (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
        //         Suspendido
        //       </span>
        //     ) : board.status == 3 ? (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
        //         Cancelado
        //       </span>
        //     ) : board.status == 4 ? (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
        //         Completado
        //       </span>
        //     ) : (
        //       false
        //     )}
        //     {board.type == 1 ? (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
        //         Persona Fisica
        //       </span>
        //     ) : (
        //       <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
        //         Persona Moral
        //       </span>
        //     )}
        //   </div>
        //   <span className="font-normal- font-roboto text-xs text-grisHeading">
        //     Informacion de Actividades Prueba de largo lo
        //   </span>
        //   <div className="flex items-center">
        //     <div className="flex w-1/2 flex-row items-center gap-x-2">
        //       <Progress
        //         value={board.advance}
        //         className="h-[4px] bg-[#D7D7D7]"
        //         color={`${board.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
        //       />
        //       <span className="text-[10px] font-medium text-[#696974B2]">
        //         {board.advance}%
        //       </span>
        //     </div>
        //     <div className="flex w-1/2 justify-end gap-x-2">
        //       <CommentsLead leadId={1} comments={board?.comments} process={1} />
        //       <Avatar className="size-6">
        //         <AvatarImage
        //           src={board.assigned?.img}
        //           title={board.assigned?.name}
        //         />
        //       </Avatar>
        //     </div>
        //   </div>
        // </div>

        <div
          className="group relative mb-4 w-full max-w-[230px] rounded-lg bg-white drop-shadow hover:bg-[#D7D7D780]"
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
                  title={p?.assigned?.name || "No asignado"}
                />
                <AvatarFallback>??</AvatarFallback>
              </Avatar>
            </div>

            <div className="flex items-center gap-x-2">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-primarioBotones text-[10px] font-semibold text-white">
                O
              </div>
              <span className="text-[10px] font-normal text-grisHeading">
                {p?.objetive}
              </span>
            </div>

            <div className="flex justify-between gap-x-2 pt-2">
              <div className="flex w-1/2 flex-row items-center gap-x-2">
                <Progress
                  value={p.progress}
                  className="h-[4px] bg-[#D7D7D7]"
                  color={`"${p.progress == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
                />
                <p className="text-[10px] font-medium text-[#696974B2]">
                  {p.progress}%
                </p>
              </div>
              <div className="flex w-1/2 justify-end">
                {/* {p.peopleObjectives.slice(0, 3).map((pObjective, index) => (
                      <Avatar className="size-5" key={index}>
                        <AvatarImage
                          src={pObjective?.img}
                          title={pObjective?.name}
                        />
                      </Avatar>
                    ))} */}
                {/* {p.peopleObjectives.length > 3 && (
                      <div className="ml-1 flex items-center">
                        <span className="text-xs font-normal text-grisHeading">
                          +{p.peopleObjectives.length - 3}
                        </span>
                      </div>
                    )} */}
              </div>
            </div>
          </div>

          <div className="flex justify-between p-2">
            <span className="text-[11px] font-normal text-grisHeading">
              Fecha Límite {p.end}
            </span>
            {p.priority == "2" ? (
              <div className="flex h-5 w-5 justify-center rounded bg-[#FF274A] text-sm font-semibold text-white">
                U
              </div>
            ) : p.status == "1" ? (
              <div className="flex h-5 w-5 justify-center rounded bg-[#FFA15E] text-sm font-semibold text-white">
                M
              </div>
            ) : (
              p.status == "0" && (
                <div className="flex h-5 w-5 justify-center rounded bg-[#FFCF71] text-sm font-semibold text-white">
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
  );
}

export default BoardTab;
