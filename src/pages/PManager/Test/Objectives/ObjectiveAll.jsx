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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  add,
  checkmarkCircleOutline,
  checkmarkCircleSharp,
  chevronForwardOutline,
  ellipsisVertical,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form, useParams, useSubmit } from "react-router-dom";
import { Input } from "@/components/ui/input";
import CommentsObjective from "../Components/CommentsObjective";
import AddUserActivity from "../Components/AddUserActivity";
import AssignedMenu from "../Components/AssignedMenu";
import DatePickerPM from "../Components/DatePickerPM";
import ActivityNameInPut from "../Components/ActivityNameInput";
import DropZoneForm from "@/components/DropZoneForm/DropZoneForm";
import { Button } from "@/components/ui/button";

const HEADERS = [
  { name: "ETAPA", cols: "1", text: "start" },
  { name: "NOMBRE", cols: "3", text: "start" },
  { name: "INICIO", cols: "1", text: "start" },
  { name: "FIN", cols: "1", text: "start" },
  { name: "DURACIÓN", cols: "1", text: "center" },
  { name: "RESTANTE", cols: "1", text: "start" },
  { name: "RESPONSABLE", cols: "1", text: "start" },
  { name: "CREATED", cols: "1", text: "center" },
  { name: "COMENTARIOS", cols: "1", text: "center" },
];

const OPTIONS = {
  projects: [
    {
      id: 1,
      name: "Sin Proyecto",
      data: [
        {
          id: 1,
          name: "Immigration, Tax Preparation, Immigration",
          start: "15 feb 2024",
          end: "1 Oct 2024",
          status: "1",
          responsible: [
            {
              id: 2,
              name: "Pepe jose",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Pepe Pepe",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
          ],
          repeat: 1,
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          comments: [
            {
              comment: "dvdf",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "dhsfbdsufbdhus",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csvcv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "bnvchxjzc",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
            {
              comment: "bnvchxjzc",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
          ],
        },
        {
          id: 1,
          name: "Immigration, Tax Preparation, Immigration",
          start: "",
          end: "",
          status: "0",
          responsible: [],
          repeat: 9,
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          comments: [],
        },
      ],
    },
    {
      id: 2,
      name: "Plan Z",
      data: [
        {
          id: 1,
          name: "Immigration, Tax Preparation, Immigration",
          start: "15 feb 2024",
          end: "1 Oct 2024",
          status: "1",
          responsible: [
            {
              id: 2,
              name: "Pepe perez",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Agustin Hernandez",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Raul Jimenez",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "David Luiz",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Neymar Jr.",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Cone brizuela",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Rafa marquez",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Chicharito hernandez",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Guillermo Ochoa",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Cristiano Ronaldo CR7",
              img: "https://github.com/shadcn.png",
            },
          ],
          repeat: 1,
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          comments: [
            {
              comment: "dvdf",
              img: "https://github.com/shadcn.png",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "dhsfbdsufbdhus",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csvcv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "bnvchxjzc",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
            {
              comment: "Yo mero",
              img: "https://github.com/shadcn.png",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
          ],
        },
        {
          id: 1,
          name: "Immigration, Tax Preparation, Immigration",
          start: "15 Oct 2024",
          end: "31 Oct 2024",
          status: "0",
          responsible: [
            {
              id: 2,
              name: "Pepe perez",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Agustin Hernandez",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Raul Jimenez",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "David Luiz",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Neymar Jr.",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Cone brizuela",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Rafa marquez",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
            {
              id: 2,
              name: "Chicharito hernandez",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Guillermo Ochoa",
              img: "https://github.com/shadcn.png",
            },
            {
              id: 2,
              name: "Cristiano Ronaldo CR7",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
            },
          ],
          created: {
            id: 1,
            name: "Juan",
            img: "https://github.com/shadcn.png",
          },
          comments: [
            {
              comment: "dvdf",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "dhsfbdsufbdhus",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csvcv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "csv",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 1:54 PM",
            },
            {
              comment: "bnvchxjzc",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
            {
              comment: "bnvchxjzc",
              img: "http://demoback.pixells.io/storage/CempzMlF8xYPvxqDeHFN3JJh7t0ZAC5KX1asO9w3.jpg",
              name: "Developer Pixells",
              diff: 2,
              hour: "18-10-2024 11:43 AM",
            },
          ],
          repeat: 6,
        },
      ],
    },
  ],
};

function ObjectiveAll({ project, users }) {
  const { projectInfo, phases } = project;
  const params = useParams();
  const submit = useSubmit();

  const [openItems, setOpenItems] = useState([]);
  const [addNewStage, setAddNewStage] = useState(false);
  const [indexSubStage, setIndexNewSubStage] = useState(null);

  const [faseInput, setFaseInput] = useState("");
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  useEffect(() => {
    const allItemValues = phases?.map(({ phase }, index) => `item-${phase.id}`);
    setOpenItems(allItemValues);
  }, [phases]);

  const calculateDays = (dateStart, dateEnd) => {
    const date1 = new Date(dateStart);
    const date2 = new Date(dateEnd);

    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  const calculateDaysRestant = (dateEnd) => {
    const date1 = new Date();
    const date2 = new Date(dateEnd);

    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays;
  };

  function onInputEnter(e) {
    if (e.key === "Enter" && !isRequestInProgress) {
      setIsRequestInProgress(true);
      submit(e.currentTarget);
      setFaseInput("");
    }
    setIsRequestInProgress(false);
  }

  function onInputEnter2(e) {
    if (e.key === "Enter" && !isRequestInProgress) {
      e.preventDefault();
      setIsRequestInProgress(true);
      submit(e.currentTarget);
      setIndexNewSubStage(null);
    }
    setIsRequestInProgress(false);
  }

  return (
    <div className="flex flex-row">
      {/* buttons */}
      <div className="flex w-14 justify-end pt-1.5">
        <div
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg hover:bg-[#F1F1F1]"
          onClick={() => setAddNewStage(!addNewStage)}
        >
          <IonIcon icon={add} className="h-7 w-7 text-grisHeading" />
        </div>
      </div>
      {/* table */}
      <div className="w-full pr-14">
        <div className="grid h-12 grid-cols-11 items-center border-b">
          {HEADERS?.map((header, i) => (
            <div
              key={i}
              className={`col-span-${header?.cols || "1"} ${i == 0 && "pl-7"} text-${header.text}`}
            >
              <p className="text-sm font-semibold text-gris2">{header.name}</p>
            </div>
          ))}
        </div>
        {/* add */}
        {addNewStage && (
          <Form
            onKeyDown={onInputEnter}
            action={`/project-manager2/project/${params.id}`}
            method="post"
            id="phase-form"
            name="phase"
            className="flex h-12 items-center pl-7"
          >
            <Input
              className="border-none bg-inherit text-xs font-normal text-grisHeading placeholder:text-xs placeholder:font-normal placeholder:text-grisDisabled"
              placeholder={"Agregar una etapa nueva"}
              name="name"
              value={faseInput}
              onChange={(e) => setFaseInput(e.target.value)}
            />
            <input
              name="project_id"
              className="hidden"
              value={params.id}
              hidden
              readOnly
            />
            <input
              name="action"
              className="hidden"
              value="phase"
              hidden
              readOnly
            />
          </Form>
        )}
        <Accordion
          type="multiple"
          className="w-full"
          value={openItems}
          onValueChange={(e) => setOpenItems(e)}
        >
          {phases.map(({ phase, activities }, indexOption) => (
            <AccordionItem
              value={"item-" + phase?.id}
              key={"item-" + indexOption}
              className="w-full border-none"
            >
              <div className="group flex w-full items-center">
                <div className="relative w-full">
                  <div className="absolute -left-8 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex">
                        <IonIcon
                          icon={ellipsisVertical}
                          className={`h-6 w-6 text-grisSubText`}
                        />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() =>
                            submit(
                              {
                                action: "delete-phase",
                                phase_id: phase.id,
                              },
                              {
                                method: "post",
                                action: `/project-manager2/project/${params.id}`,
                              },
                            )
                          }
                        >
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="w-full">
                    <AccordionTrigger className="h-12 w-full items-center border-b border-grisHeading text-xs font-normal text-grisHeading">
                      <div className="flex w-full items-center gap-x-2">
                        <IonIcon
                          icon={chevronForwardOutline}
                          size="large"
                          className={`h-5 w-5 shrink-0 cursor-pointer text-grisHeading transition-transform duration-300 group-data-[state=open]:rotate-90`}
                        />
                        {phase?.name}
                      </div>
                    </AccordionTrigger>
                  </div>
                </div>
              </div>
              <AccordionContent>
                {activities.map((d, i) => (
                  <div
                    key={i}
                    className="group grid h-12 w-full grid-cols-11 items-center border-b"
                  >
                    <div
                      className={
                        "col-span-1 flex justify-end gap-x-2 px-4 text-xs font-normal text-grisHeading"
                      }
                    >
                      {activities.length - 1 == i && (
                        <IonIcon
                          icon={add}
                          className="h-5 w-5 cursor-pointer text-grisHeading opacity-0 transition-all group-hover:opacity-100"
                          onClick={() => setIndexNewSubStage(indexOption)}
                        />
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          console.log(d);
                          submit(
                            {
                              action: "activity_check",
                              activity_id: d.id,
                            },
                            {
                              method: "post",
                              action: `/project-manager2/project/${params.id}`,
                            },
                          );
                        }}
                      >
                        {d.status == "1" ? (
                          <IonIcon
                            icon={checkmarkCircleSharp}
                            className="h-5 w-5 text-[#1CC71E]"
                          />
                        ) : (
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            className="h-5 w-5 text-grisHeading"
                          />
                        )}
                      </button>
                    </div>

                    <div
                      className={
                        "col-span-3 flex gap-x-2 text-xs font-normal text-grisHeading"
                      }
                    >
                      <div className="flex w-2/3 items-center">
                        <ActivityNameInPut
                          activity_id={0}
                          defaultName={d?.name}
                          status={d?.status}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <DatePickerPM
                        activity_id={d?.id}
                        dataDate={d?.start}
                        name="start"
                      />
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <DatePickerPM
                        activity_id={d?.id}
                        dataDate={d?.end}
                        name="end"
                      />
                    </div>
                    <div
                      className={
                        "col-span-1 text-center text-xs font-normal text-grisHeading"
                      }
                    >
                      {!!d?.start || !!d?.end ? (
                        (() => {
                          const days = calculateDays(d.start, d.end).toFixed(0);
                          return (
                            <div>
                              {days} {days > 1 ? "días" : "día"}
                            </div>
                          );
                        })()
                      ) : (
                        <span className="text-[#CCCCCC]">Por Definir</span>
                      )}
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      {!!d?.start || !!d?.end ? (
                        (() => {
                          const days = calculateDaysRestant(d.end).toFixed(0);
                          return (
                            <div>
                              {days} {days > 1 ? "días" : "día"}
                            </div>
                          );
                        })()
                      ) : (
                        <span className="text-[#CCCCCC]">Por Definir</span>
                      )}
                    </div>

                    <div className="col-span-1 flex justify-start gap-x-1 overflow-auto">
                      <div className="flex items-center">
                        {d.users.slice(0, 3).map((r, index) => (
                          <Avatar className="size-6" key={index}>
                            <AvatarImage src={r?.img} title={r?.name} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="flex items-center">
                        {d.users.length > 3 ? (
                          <AssignedMenu users={d.users} />
                        ) : (
                          <AddUserActivity activity_id={d.id} users={users} />
                        )}
                      </div>
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <Avatar className="size-6">
                        <AvatarImage
                          src={d.creator?.img}
                          title={d?.creator?.name}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div
                      className={
                        "col-span-1 flex items-center justify-between gap-x-2 text-xs font-normal text-grisHeading"
                      }
                    >
                      <div className="flex w-full justify-center">
                        <DropZoneForm comments={d?.comments} />
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <IonIcon
                            icon={ellipsisVertical}
                            size="large"
                            className={`h-9 w-6 text-grisSubText`}
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem
                            onClick={() =>
                              submit(
                                {
                                  action: "delete-activity",
                                  activity_id: d.id,
                                },
                                {
                                  method: "post",
                                  action: `/project-manager2/project/${params.id}`,
                                },
                              )
                            }
                          >
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}

                {/* new sub */}
                {(indexSubStage == indexOption || activities.length == 0) && (
                  <Form
                    onKeyDown={onInputEnter2}
                    method="post"
                    action={`/project-manager2/project/${params.id}`}
                    id="activity-form"
                    name="activity"
                    className="grid h-12 w-full grid-cols-11 items-center border-b"
                  >
                    <div
                      className={
                        "col-span-1 flex justify-end gap-x-2 px-4 text-xs font-normal text-grisHeading"
                      }
                    ></div>
                    <div
                      className={
                        "col-span-3 pr-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <Input
                        className="border-none bg-inherit text-xs font-normal text-grisHeading placeholder:text-xs placeholder:font-normal placeholder:text-[#CCCCCC]"
                        placeholder={"Agrega una nueva actividad"}
                        name="name"
                      />
                      <input
                        name="phase_id"
                        className="hidden"
                        value={phase.id}
                        hidden
                        type="hidden"
                      />
                      <input
                        name="action"
                        className="hidden"
                        value="activity"
                        hidden
                        type="hidden"
                      />
                    </div>
                    <div className={"col-span-1"}>
                      <span className="rounded-lg bg-gris px-3 py-1.5 text-[10px] font-normal text-[#CCCCCC]">
                        DD/MM/AA
                      </span>
                    </div>
                    <div className={"col-span-1"}>
                      <span className="rounded-lg bg-gris px-3 py-1.5 text-[10px] font-normal text-[#CCCCCC]">
                        DD/MM/AA
                      </span>
                    </div>

                    <div
                      className={"col-span-1 text-center text-xs font-normal"}
                    >
                      <span className="text-[#CCCCCC]">Por Definir</span>
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <span className="text-[#CCCCCC]">Por Definir</span>
                    </div>

                    <div className="col-span-1 flex items-center px-1">
                      <IonIcon
                        icon={add}
                        className="h-5 w-5 cursor-pointer text-[#CCCCCC]"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center"></div>
                    <div
                      className={
                        "col-span-1 flex items-center justify-end pr-4"
                      }
                    >
                      <Button
                        type="button"
                        className="h-[23px] rounded-lg bg-gris text-[10px] font-normal text-[#CCCCCC] hover:bg-gris"
                        onClick={() => setIndexNewSubStage(null)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </Form>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ObjectiveAll;