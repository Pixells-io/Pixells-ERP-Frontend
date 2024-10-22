import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { chevronForwardOutline, ellipsisVertical } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HEADERS = [
  { name: "PROYECTO", cols: "2", text: "start" },
  { name: "NOMBRE", cols: "3", text: "start" },
  { name: "OBJETIVO", cols: "2", text: "start" },
  { name: "VENCIMIENTO", cols: "1", text: "start" },
  { name: "RESPONSABLE", cols: "1", text: "start" },
  { name: "PRIORIDAD", cols: "1", text: "center" },
  { name: "CREADOR", cols: "1", text: "center" },
  { name: "ESTATUS", cols: "1", text: "start" },
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

function ProjectTab({ tasks }) {
  const [tasksNoProject, setTaskNoProject] = useState(tasks?.tasks);
  const [tasksProjects, setTasksProjects] = useState(tasks?.projects);
  const [openItems, setOpenItems] = useState([]);

  useEffect(() => {
    const allItemValues = tasksProjects?.map(
      (project, index) => `item-${project.id}`,
    );
    setOpenItems(allItemValues);
  }, [tasksProjects]);

  console.log(tasks.tasks);
  console.log(tasks.projects);
  return (
    <div className="flex flex-col">
      <div className="grid h-12 grid-cols-12 items-center border-b">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={`col-span-${header?.cols || "1"} ${i == 0 && "pl-7"} text-${header.text}`}
          >
            <p className="text-sm font-semibold text-gris2">{header.name}</p>
          </div>
        ))}
      </div>

      <Accordion
        type="single"
        className="w-full"
        // value={openItems}
        // onValueChange={(e) => setOpenItems(e)}
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
                  className={"col-span-3 text-xs font-normal text-grisHeading"}
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
                    "col-span-1 flex items-center justify-between gap-x-2 text-xs font-normal text-grisHeading"
                  }
                >
                  {task?.status == "1" ? (
                    <>
                      <Select defaultValue="pending" name="actions" required>
                        <SelectTrigger className="h-[26px] w-full rounded-md border-none bg-blancoBox p-0 px-1 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                          <SelectValue placeholder={"Acción"} className="" />
                        </SelectTrigger>
                        <SelectContent className="w-[167px] rounded-xl px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
                          <SelectItem
                            value="pending"
                            className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                          >
                            Pendiente
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <IonIcon
                        icon={ellipsisVertical}
                        size="large"
                        className={`h-9 w-6 text-grisSubText`}
                      />
                    </>
                  ) : (
                    "En Proceso"
                  )}
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
                    {task?.status == "1" ? (
                      <>
                        <Select defaultValue="pending" name="actions" required>
                          <SelectTrigger className="h-[26px] w-full rounded-md border-none bg-blancoBox p-0 px-1 font-roboto text-xs font-normal text-grisHeading placeholder:text-grisHeading focus:border-transparent focus:ring-2 focus:ring-primarioBotones">
                            <SelectValue placeholder={"Acción"} className="" />
                          </SelectTrigger>
                          <SelectContent className="w-[167px] rounded-xl px-0 font-roboto text-xs font-normal text-grisText focus:text-grisText">
                            <SelectItem
                              value="pending"
                              className="text-grisText focus:bg-[#F0F0F0] focus:text-grisText"
                            >
                              Pendiente
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <IonIcon
                          icon={ellipsisVertical}
                          size="large"
                          className={`h-9 w-6 text-grisSubText`}
                        />
                      </>
                    ) : (
                      "En Proceso"
                    )}
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
