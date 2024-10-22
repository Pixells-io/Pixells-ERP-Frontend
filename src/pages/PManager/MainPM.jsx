import React, { useEffect, useState } from "react";
import {
  Link,
  redirect,
  useLoaderData,
  useParams,
  useSubmit,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

import NavigationHeader from "@/components/navigation-header";

import ShareSettins from "./components2/ShareSettings/ShareSettings";
import NewTaskModal from "./components2/Modals/NewTaskModal";

import { IonIcon } from "@ionic/react";
import { chevronDown, ellipsisVertical } from "ionicons/icons";

import { saveNewTaskPM } from "@/layouts/PManager/utils";
import EditObjectiveModal from "./components2/Modals/EditObjectiveModal";

const HEADERS = [
  { name: "TIPO", cols: "1" },
  { name: "NOMBRE", cols: "2" },
  { name: "PROGRESO", cols: "1" },
  { name: "VENCIMIENTO", cols: "1" },
  { name: "RESPONSABLE", cols: "1" },
  { name: "PRIORIDAD", cols: "1" },
  { name: "CREADO", cols: "1" },
  { name: "ESTADO", cols: "1" },
  { name: "", cols: "1" },
];

const OPTIONS = [
  {
    id: 1,
    tipo: "Actividad",
    nombre: "Implementar sistema de inventario",
    progreso: 50,
    vencimiento: "15 feb 2024",
    responsable: {
      nombre: "Juan Pérez",
      email: "juan.perez@example.com",
    },
    estado: "En progreso",
    creador: {
      nombre: "Ana Gómez",
      email: "ana.gomez@example.com",
    },
    prioridad: "Baja",
  },
  {
    id: 2,
    tipo: "Proyecto",
    nombre: "Actualización del sistema POS",
    progreso: 30,
    vencimiento: "16 feb 2024",
    responsable: {
      nombre: "María López",
      email: "maria.lopez@example.com",
    },
    estado: "En espera",
    creador: {
      nombre: "Luis Fernández",
      email: "luis.fernandez@example.com",
    },
    prioridad: "Media",
  },
  {
    id: 3,
    tipo: "Actividad",
    nombre: "Revisión de equipos físicos",
    progreso: 80,
    vencimiento: "17 feb 2024",
    responsable: {
      nombre: "Carlos Ramírez",
      email: "carlos.ramirez@example.com",
    },
    estado: "En progreso",
    creador: {
      nombre: "Sara Torres",
      email: "sara.torres@example.com",
    },
    prioridad: "Urgente",
  },
];

function MainPM() {
  const params = useParams();
  const submit = useSubmit();
  const { objective, users } = useLoaderData();
  const [editModal, setEditModal] = useState(false);
  const [objectiveInfo, setObjectiveInfo] = useState(objective?.data);
  const [task, setTasks] = useState(
    objectiveInfo?.project?.concat(objectiveInfo?.tasks),
  );

  useEffect(() => {
    const newObjectiveInfo = objective?.data;
    setObjectiveInfo(newObjectiveInfo);
    if (newObjectiveInfo) {
      setTasks(newObjectiveInfo?.project?.concat(newObjectiveInfo?.tasks));
    }
  }, [objective, params.id]);

  return (
    <div className="rounded-rl-xl flex h-full w-full flex-col gap-2 bg-[#FBFBFB] px-14 py-3">
      {/* navigation inside */}
      <NavigationHeader />
      {/* top content */}
      <div className="flex items-center gap-8">
        <h2 className="font-poppins font-bold text-[#44444F]">
          PROJECT MANAGER
        </h2>
        <div className="flex items-center gap-3 text-[#8F8F8F]">
          <div className="text-xs">3 Objetivos</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">27 Activities</div>
          <div className="text-2xl">&bull;</div>
          <div className="text-xs">8 Proyectos</div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <h2 className="font-poppins text-xl font-bold text-[#44444F]">
          {objectiveInfo?.name || "Objetivo No Cargo Correctamente"}
        </h2>
        <EditObjectiveModal
          objective={objectiveInfo}
          modal={editModal}
          setModal={setEditModal}
        />
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex">
              <IonIcon
                icon={ellipsisVertical}
                className="size-6 text-grisSubText"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setEditModal(true)}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  submit(
                    {
                      action: "delete-objective",
                      objective_id: objectiveInfo?.id,
                    },
                    {
                      method: "post",
                      action: `/project-manager2`,
                    },
                  )
                }
              >
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ShareSettins />
          <NewTaskModal users={users} objective_id={objectiveInfo?.id} />
        </div>
      </div>

      {/* contenido */}
      <div className="flex flex-col">
        <div className="grid h-12 grid-cols-9 items-center border-b">
          {HEADERS?.map((header, i) => (
            <div
              key={i}
              className={
                header?.cols == "2"
                  ? "col-span-2 text-left"
                  : header?.name == "TIPO"
                    ? "col-span-1 text-left"
                    : "col-span-1 text-center"
              }
            >
              <p className="px-1 text-sm font-semibold text-gris2">
                {header.name}
              </p>
            </div>
          ))}
        </div>

        {task.map((opt, i) => (
          <div
            key={i}
            className="grid h-12 w-full grid-cols-9 items-center border-b"
          >
            <div
              className={
                opt.type == "Proyecto"
                  ? "col-span-1 text-xs text-primarioBotones"
                  : "col-span-1 text-xs"
              }
            >
              {opt.type}
            </div>
            <div className="col-span-2 text-xs">{opt.name}</div>
            <div className="col-span-1 flex flex-col items-center px-3">
              {opt.type == "Proyecto" && (
                <>
                  <p className="w-full px-1 text-right text-[10px] font-normal text-grisHeading">
                    {opt.progress.toFixed(2)}%
                  </p>
                  <Progress
                    value={opt.progress}
                    className="h-[4px] bg-grisDisabled fill-primario"
                  />
                </>
              )}
            </div>
            <div className="col-span-1 text-center text-xs">{opt.end}</div>
            <div className="col-span-1 flex justify-center">
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-1 text-center">
              <div
                className={
                  opt.priority == "1"
                    ? "text-xs text-[#DC9100]"
                    : opt.priority == "2"
                      ? "text-xs text-[#D75B00]"
                      : "text-xs text-[#B7021F]"
                }
              >
                {opt.priority}
              </div>
            </div>
            <div className="col-span-1 flex justify-center">
              <Avatar className="size-6">
                <AvatarImage src={opt.creator.img} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-1 flex w-full items-center justify-between gap-1 text-xs">
              {opt.type == "Tarea" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-[100px] shrink-0 items-center justify-between rounded-xl bg-blancoBox px-2 py-1">
                    <span className="pl-1 text-grisHeading">{opt.status}</span>

                    <IonIcon
                      icon={chevronDown}
                      className="size-3 text-grisSubText"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Completado</DropdownMenuItem>
                    <DropdownMenuItem>Pendiente</DropdownMenuItem>
                    <DropdownMenuItem>En proceso</DropdownMenuItem>
                    <DropdownMenuItem>Cancelado</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <span>{opt.status}</span>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IonIcon
                    icon={ellipsisVertical}
                    className="size-6 text-grisSubText"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link
                      className="flex w-full"
                      to={`/project-manager2/project/${opt.id}`}
                    >
                      Ver
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Editar</DropdownMenuItem>
                  <DropdownMenuItem>Eliminar</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPM;

export async function Action({ params, request }) {
  const data = await request.formData();
  const action = data.get("action");
  switch (action) {
    case "create-task":
      await saveNewTaskPM(data);
      return redirect(`/project-manager2/${params.id}`);

    default:
      return redirect(`/project-manager2/${params.id}`);
  }
}
