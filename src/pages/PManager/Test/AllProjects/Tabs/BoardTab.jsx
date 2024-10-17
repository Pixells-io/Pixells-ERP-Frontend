import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import CommentsLead from "@/pages/CRM/Leads/components/CommentsLead";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IonIcon } from "@ionic/react";
import { ellipsisHorizontal, settingsOutline } from "ionicons/icons";

function BoardTab() {
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

  const [boards, setBoards] = useState(data?.boards);

  return (
    <div className="flex flex-wrap gap-4 overflow-auto px-1">
      {boards?.map((board, index) => (
        <div
          className="group relative my-4 max-w-[234px] rounded-lg bg-white px-2 py-2 drop-shadow-[0_0px_2px_rgba(0,0,0,0.15)]"
          key={index}
          draggable="true"
        >
          <Link
            to={`/crm/leads/${board.id}`}
            className="line-clamp-1 font-poppins text-sm font-medium text-grisHeading"
            title={"Nombre"}
          >
            {board.name}
          </Link>

          <div className="absolute right-2 top-2 rounded-md border border-blancoBox bg-white text-sm text-grisText opacity-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.15)] transition-all transition-opacity group-hover:opacity-100">
            <div className="flex h-[22px] items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex h-5 w-8 items-center justify-center text-grisDisabled">
                  <IonIcon
                    icon={ellipsisHorizontal}
                    className="px-1.5"
                  ></IonIcon>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52 rounded-3xl px-0 pb-4 pt-4 text-start">
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                  >
                    Asignar a otro usuario
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-none py-2 pl-6 text-start font-roboto text-xs font-normal text-grisText hover:bg-[#F0F0F0]"
                  >
                    Editar
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="mb-2 mt-2 flex gap-2">
            {board.status == 1 ? (
              <span className="flex h-[18px] items-center rounded-lg bg-[#CBF4C9] px-2 text-[10px] font-normal text-[#0E6245]">
                Activo
              </span>
            ) : board.stages == 2 ? (
              <span className="flex h-[18px] items-center rounded-lg bg-[#FFEDC7] px-2 text-[10px] font-normal text-[#624E0E]">
                Suspendido
              </span>
            ) : board.status == 3 ? (
              <span className="flex h-[18px] items-center rounded-lg bg-[#FFC7C7] px-2 text-[10px] font-normal text-[#620E0E]">
                Cancelado
              </span>
            ) : board.status == 4 ? (
              <span className="flex h-[18px] items-center rounded-lg bg-[#C7CBFF] px-2 text-[10px] font-normal text-[#1C0E62]">
                Completado
              </span>
            ) : (
              false
            )}
            {board.type == 1 ? (
              <span className="flex h-[18px] items-center rounded-lg bg-[#3EC5FF4D] px-2 text-[10px] font-normal text-[#0D4381]">
                Persona Fisica
              </span>
            ) : (
              <span className="flex h-[18px] items-center rounded-lg bg-[#3EFF9B4D] px-2 text-[10px] font-normal text-[#0C624B]">
                Persona Moral
              </span>
            )}
          </div>
          <span className="font-normal- font-roboto text-xs text-grisHeading">
            Informacion de Actividades Prueba de largo lo
          </span>
          <div className="flex items-center">
            <div className="flex w-1/2 flex-row items-center gap-x-2">
              <Progress
                value={board.advance}
                className="h-[4px] bg-[#D7D7D7]"
                color={`${board.advance == 100 ? "bg-[#A7FFBC]" : "bg-[#5B84FF]"}`}
              />
              <span className="text-[10px] font-medium text-[#696974B2]">
                {board.advance}%
              </span>
            </div>
            <div className="flex w-1/2 justify-end gap-x-2">
              <CommentsLead leadId={1} comments={board?.comments} process={1} />
              <Avatar className="size-6">
                <AvatarImage
                  src={board.assigned?.img}
                  title={board.assigned?.name}
                />
              </Avatar>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BoardTab;
