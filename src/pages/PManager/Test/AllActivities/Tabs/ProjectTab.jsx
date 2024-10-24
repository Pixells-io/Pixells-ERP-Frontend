import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  chevronDown,
  chevronForwardOutline,
  ellipsisVertical,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ShareSettins from "@/pages/PManager/components2/ShareSettings/ShareSettings";
import { useParams } from "react-router-dom";
import EditTaskModal from "@/pages/PManager/components2/Modals/EditTaskModal";

const HEADERS = [
  { name: "PROYECTO", cols: "2", text: "start" },
  { name: "NOMBRE", cols: "2", text: "start" },
  { name: "OBJETIVO", cols: "2", text: "start" },
  { name: "VENCIMIENTO", cols: "1", text: "start" },
  { name: "RESPONSABLE", cols: "1", text: "start" },
  { name: "PRIORIDAD", cols: "1", text: "center" },
  { name: "CREADOR", cols: "1", text: "center" },
  { name: "ESTATUS", cols: "2", text: "start" },
];

const OPTIONS = {
  projects: [
    {
      id: 1,
      name: "Sin Proyecto",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 4,
          expiration: "15 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pedro",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 1,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "2",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "2",
        },
      ],
    },
    {
      id: 2,
      name: "Proyecto Z",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 2,
          expiration: "15 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "3",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 8,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
      ],
    },
    {
      id: 3,
      name: "Plan Z",
      data: [
        {
          id: 1,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          expiration: "15 feb 2024",
          repeat: 2,
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "3",
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
        {
          id: 2,
          objective: "",
          name: "Immigration, Tax Preparation, Immigration",
          repeat: 1,
          expiration: "16 feb 2024",
          responsible: [
            {
              id: 2,
              name: "Pepe",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pablo",
              img: "https://github.com/shadcn.png",
            },
          ],
          priority: "1",
          created: {
            id: 2,
            name: "Raul",
            img: "https://github.com/shadcn.png",
          },
          status: "1",
        },
      ],
    },
  ],
};

function ProjectTab({ tasks, users, positions, areas }) {
  const params = useParams();
  const [tasksNoProject, setTaskNoProject] = useState(tasks?.tasks);
  const [tasksProjects, setTasksProjects] = useState(tasks?.projects);
  const [openItems, setOpenItems] = useState([]);

  const [modalSettingsTasks, setModalSettingsTasks] = useState(false);
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState([]);

  useEffect(() => {
    const allItemValues = tasksProjects?.map(
      (project, index) => `item-${project.id}`,
    );
    setOpenItems(allItemValues);
  }, [tasksProjects]);

  console.log(tasks.tasks);
  // console.log(tasks.projects);
  return (
    <div className="flex h-full w-full flex-col">
      <EditTaskModal
        modal={editTaskModal}
        setModal={setEditTaskModal}
        task={taskInfo}
        users={users}
        form={{ route: `/project-manager2/activities/${params.id}` }}
      />
      <ShareSettins
        id={taskInfo.id}
        creator={taskInfo.creator}
        shared={taskInfo.shared}
        modal={modalSettingsTasks}
        setModal={setModalSettingsTasks}
        users={users.data}
        positions={positions.data}
        areas={areas.data}
        hasButton={false}
        SaveShared={{
          route: `/project-manager2/activities/${params.id}`,
          action: "share-task",
          name: "task_id",
        }}
        editShared={{
          route: `/project-manager2/activities/${params.id}`,
          action: "edit-shared-task",
        }}
      />
      {/* header */}
      <div className="grid h-12 w-full grid-cols-12 items-center border-b">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={`col-span-${header?.cols || "1"} ${i == 0 && "pl-7"} text-${header.text}`}
          >
            <p className="text-sm font-semibold text-gris2">{header.name}</p>
          </div>
        ))}
      </div>

      {/* accordions */}
      <Accordion
        type="single"
        className="w-full"
        collapsible
        defaultValue={"item-noprojects"}
      >
        <AccordionItem value={"item-noprojects"} className="border-none">
          <AccordionTrigger className="h-12 w-full items-center border-b border-grisHeading text-xs font-normal text-grisHeading">
            <div className="flex items-center gap-x-2">
              <IonIcon
                icon={chevronForwardOutline}
                size="large"
                className={`h-5 w-5 shrink-0 cursor-pointer text-grisHeading transition-transform duration-300 group-data-[state=open]:rotate-90`}
              />
              Sin Proyecto
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {tasksNoProject.map((task, i) => (
              <div
                key={i}
                className="grid h-12 w-full grid-cols-12 items-center border-b"
              >
                <div
                  className={"col-span-2 text-xs font-normal text-grisHeading"}
                ></div>
                <div
                  className={"col-span-2 text-xs font-normal text-grisHeading"}
                >
                  <div className="flex items-center gap-x-2">
                    <div>
                      <span>{task?.name}</span>
                    </div>
                    {task?.repeat_task_count == 0 ? null : (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blancoBox font-roboto text-sm font-medium text-grisHeading">
                        {task?.repeat_task_count}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={"col-span-2 text-xs font-normal text-grisHeading"}
                >
                  {task?.objetive}
                </div>

                <div
                  className={"col-span-1 text-xs font-normal text-grisHeading"}
                >
                  {task?.start}
                </div>

                <div className="col-span-1 flex justify-center gap-x-1 overflow-auto">
                  <div className="flex">
                    <Avatar className="size-6">
                      <AvatarImage
                        src={task?.assigned?.img}
                        title={task?.assigned?.name}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div
                  className={
                    "col-span-1 flex justify-center text-xs font-normal"
                  }
                >
                  {task?.priority == "1" && (
                    <span className="text-[#B7021F]">Urgente</span>
                  )}
                  {task?.priority == "2" && (
                    <span className="text-[#D75B00]">Media</span>
                  )}
                  {task?.priority == "3" && (
                    <span className="text-[#DC9100]">Baja</span>
                  )}
                </div>
                <div className="col-span-1 flex justify-center">
                  <Avatar className="size-6">
                    <AvatarImage
                      src={task?.creator?.img}
                      title={task?.creator?.name}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                <div
                  className={
                    "col-span-2 flex items-center justify-between gap-1 text-xs font-normal text-grisHeading"
                  }
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex w-[100px] shrink-0 items-center justify-between rounded-xl bg-blancoBox px-2 py-1">
                      <span className="pl-1 text-grisHeading">
                        {task.status == "1"
                          ? "Pendiente"
                          : task.status == "2"
                            ? "En proceso"
                            : task.status == "3"
                              ? "Completado"
                              : "Cancelado"}
                      </span>

                      <IonIcon
                        icon={chevronDown}
                        className="size-3 text-grisSubText"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Pendiente</DropdownMenuItem>
                      <DropdownMenuItem>En proceso</DropdownMenuItem>
                      <DropdownMenuItem>Completado</DropdownMenuItem>
                      <DropdownMenuItem>Cancelado</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <IonIcon
                        icon={ellipsisVertical}
                        className="size-6 text-grisSubText"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() => {
                          setModalSettingsTasks(true);
                          setTaskInfo(task);
                        }}
                      >
                        Compartir
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setEditTaskModal(true);
                          setTaskInfo(task);
                        }}
                      >
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem>Eliminar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="multiple"
        className="w-full"
        value={openItems}
        onValueChange={(e) => setOpenItems(e)}
      >
        {tasksProjects.map((project, i) => (
          <AccordionItem
            value={"item-" + project?.id}
            key={"item-" + i}
            className="border-none"
          >
            <AccordionTrigger className="h-12 w-full items-center border-b border-grisHeading text-xs font-normal text-grisHeading">
              <div className="flex items-center gap-x-2">
                <IonIcon
                  icon={chevronForwardOutline}
                  size="large"
                  className={`h-5 w-5 shrink-0 cursor-pointer text-grisHeading transition-transform duration-300 group-data-[state=open]:rotate-90`}
                />
                {project?.name}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {project.activities.map((task, i) => (
                <div
                  key={i}
                  className="grid h-12 w-full grid-cols-12 items-center border-b"
                >
                  <div
                    className={
                      "col-span-2 text-xs font-normal text-grisHeading"
                    }
                  ></div>
                  <div
                    className={
                      "col-span-3 text-xs font-normal text-grisHeading"
                    }
                  >
                    <div className="flex items-center gap-x-2">
                      <div>
                        <span>{task?.name}</span>
                      </div>
                      {task?.repeat_task_count == 0 ? null : (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blancoBox font-roboto text-sm font-medium text-grisHeading">
                          {task?.repeat_task_count}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-2 text-xs font-normal text-grisHeading"
                    }
                  >
                    {task?.objetive}
                  </div>
                  <div
                    className={
                      "col-span-1 text-xs font-normal text-grisHeading"
                    }
                  >
                    {task?.end}
                  </div>

                  <div className="col-span-1 flex justify-center gap-x-1 overflow-auto">
                    <div className="flex">
                      <Avatar className="size-6">
                        <AvatarImage
                          src={task?.assigned?.img}
                          title={task?.assigned?.name}
                        />
                        <AvatarFallback>??</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                  <div
                    className={
                      "col-span-1 flex justify-center text-xs font-normal"
                    }
                  >
                    {task?.priority == "2" && (
                      <span className="text-[#B7021F]">Urgente</span>
                    )}
                    {task?.priority == "1" && (
                      <span className="text-[#D75B00]">Media</span>
                    )}
                    {task?.priority == "0" && (
                      <span className="text-[#DC9100]">Baja</span>
                    )}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <Avatar className="size-6">
                      <AvatarImage
                        src={project?.creator?.img}
                        title={project?.creator?.name}
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div
                    className={
                      "col-span-1 flex items-center justify-between gap-x-2 text-xs font-normal text-grisHeading"
                    }
                  >
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex w-[100px] shrink-0 items-center justify-between rounded-xl bg-blancoBox px-2 py-1">
                        <span className="pl-1 text-grisHeading">
                          {project.status == "1"
                            ? "Completado"
                            : project.status == "2"
                              ? "Pendiente"
                              : project.status == "3"
                                ? "En proceso"
                                : "Cancelado"}
                        </span>

                        <IonIcon
                          icon={chevronDown}
                          className="size-3 text-grisSubText"
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Pendiente</DropdownMenuItem>
                        <DropdownMenuItem>En proceso</DropdownMenuItem>
                        <DropdownMenuItem>Completado</DropdownMenuItem>
                        <DropdownMenuItem>Cancelado</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default ProjectTab;
