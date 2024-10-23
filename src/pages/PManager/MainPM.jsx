import React, { useEffect, useState } from "react";
import {
  Link,
  redirect,
  useLoaderData,
  useNavigation,
  useParams,
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

import {
  editSharedObject,
  editSharedTask,
  saveNewTaskPM,
  saveSharedObject,
  saveSharedTask,
} from "@/layouts/PManager/utils";

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

function MainPM() {
  const params = useParams();
  const navigation = useNavigation();
  const { objective, users, positions, areas } = useLoaderData();
  console.log(objective);
  const [objectiveInfo, setObjectiveInfo] = useState(objective?.data);
  const [task, setTasks] = useState(
    objectiveInfo?.project?.concat(objectiveInfo?.tasks),
  );

  const [modalSettingsObjective, setModalSettingsObjective] = useState(false);
  const [modalSettingsTasks, setModalSettingsTasks] = useState(false);
  const [taskInfo, setTaskInfo] = useState([]);

  useEffect(() => {
    const newObjectiveInfo = objective?.data;
    setObjectiveInfo(newObjectiveInfo);
    if (newObjectiveInfo) {
      setTasks(newObjectiveInfo?.project?.concat(newObjectiveInfo?.tasks));
    }
  }, [objective, params.id]);

  useEffect(() => {
    if (navigation.state === "idle") {
      setModalSettingsObjective(false);
      setModalSettingsTasks(false);
    }
  }, [navigation.state]);

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

        <div className="flex items-center gap-4">
          <ShareSettins
            id={objectiveInfo.id}
            creator={objectiveInfo.creator}
            users={users.data}
            positions={positions.data}
            areas={areas.data}
            shared={objectiveInfo.shared}
            modal={modalSettingsObjective}
            setModal={setModalSettingsObjective}
            SaveShared={{
              route: `/project-manager2/${objectiveInfo.id}`,
              action: "share-objective",
              name: "objetive_id",
            }}
            editShared={{
              route: `/project-manager2/${objectiveInfo.id}`,
              action: "edit-shared-objective",
            }}
          />

          <ShareSettins
            id={taskInfo.id}
            creator={taskInfo.creator}
            shared={taskInfo.shared}
            users={users.data}
            positions={positions.data}
            areas={areas.data}
            modal={modalSettingsTasks}
            setModal={setModalSettingsTasks}
            hasButton={false}
            SaveShared={{
              route: `/project-manager2/${objectiveInfo.id}`,
              action: "share-task",
              name: "task_id",
            }}
            editShared={{
              route: `/project-manager2/${objectiveInfo.id}`,
              action: "edit-shared-task",
            }}
          />
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
                    <span className="pl-1 text-grisHeading">
                      {opt.status == "1"
                        ? "Completado"
                        : opt.status == "2"
                          ? "Pendiente"
                          : opt.status == "3"
                            ? "En proceso"
                            : "Cancelado"}
                    </span>

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
                <span className="pl-1 text-grisHeading">
                  {opt.status == "1"
                    ? "Completado"
                    : opt.status == "2"
                      ? "Pendiente"
                      : opt.status == "3"
                        ? "En proceso"
                        : "Cancelado"}
                </span>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IonIcon
                    icon={ellipsisVertical}
                    className="size-6 text-grisSubText"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {opt.type == "Proyecto" && (
                    <DropdownMenuItem>
                      <Link
                        className="flex w-full"
                        to={`/project-manager2/project/${opt.id}`}
                      >
                        Ver
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={() => {
                      setModalSettingsTasks(true);
                      setTaskInfo(opt);
                    }}
                  >
                    Compartir
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
  console.log(data);
  const action = data.get("action");
  switch (action) {
    case "create-task":
      await saveNewTaskPM(data);
      return redirect(`/project-manager2/${params.id}`);

    case "share-objective":
      await saveSharedObject(data);
      return redirect(`/project-manager2/${params.id}`);

    case "edit-shared-objective":
      await editSharedObject(data);
      return redirect(`/project-manager2/${params.id}`);

    case "share-task":
      await saveSharedTask(data);
      return redirect(`/project-manager2/${params.id}`);

    case "edit-shared-task":
      await editSharedTask(data);
      return redirect(`/project-manager2/${params.id}`);

    default:
      return redirect(`/project-manager2/${params.id}`);
  }
}
