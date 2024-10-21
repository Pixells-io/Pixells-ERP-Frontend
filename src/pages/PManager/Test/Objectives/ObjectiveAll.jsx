import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  add,
  checkmarkCircleOutline,
  checkmarkCircleSharp,
  chevronForwardOutline,
  ellipsisVertical,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Form } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import CommentsObjective from "../Components/CommentsObjective";

const HEADERS = [
  { name: "ETAPA", cols: "1", text: "start" },
  { name: "NOMBRE", cols: "4", text: "start" },
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
          isDone: "1",
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
          start: "15 Oct 2024",
          end: "31 Oct 2024",
          isDone: "0",
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
          repeat: 9,
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
          isDone: "1",
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
          isDone: "0",
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

function ObjectiveAll() {
  const [openItems, setOpenItems] = useState([]);
  const [addNewStage, setAddNewStage] = useState(false);
  const [indexSubStage, setIndexNewSubStage] = useState(null);
  const [openStart, setOpenStart] = useState(null);
  const [openEnd, setOpenEnd] = useState(null);
  const [dateStartInput, setDateStartInput] = useState("");
  const [dateEndInput, setDateEndInput] = useState("");

  useEffect(() => {
    const allItemValues = OPTIONS?.projects?.map(
      (project, index) => `item-${project.id}`,
    );
    setOpenItems(allItemValues);
  }, [OPTIONS]);

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

  useEffect(() => {
    clearDate();
  }, [indexSubStage]);

  const clearDate = () => {
    setDateStartInput("");
    setDateEndInput("");
  };

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
      <div className="w-full pr-14">
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
        {/* add */}
        {addNewStage && (
          <Form className="flex h-12 items-center pl-7">
            <Input
              className="border-none bg-inherit text-xs font-normal text-grisHeading placeholder:text-xs placeholder:font-normal placeholder:text-grisDisabled"
              placeholder={"Agregar una etapa nueva"}
            />
          </Form>
        )}
        <Accordion
          type="multiple"
          className="w-full"
          value={openItems}
          onValueChange={(e) => setOpenItems(e)}
        >
          {OPTIONS?.projects.map((project, indexOption) => (
            <AccordionItem
              value={"item-" + project?.id}
              key={"item-" + indexOption}
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
                {project.data.map((d, i) => (
                  <div
                    key={i}
                    className="group grid h-12 w-full grid-cols-12 items-center border-b"
                  >
                    <div
                      className={
                        "col-span-1 flex justify-end gap-x-2 px-4 text-xs font-normal text-grisHeading"
                      }
                    >
                      {project.data.length - 1 == i && (
                        <IonIcon
                          icon={add}
                          className="h-5 w-5 cursor-pointer text-grisHeading opacity-0 transition-all group-hover:opacity-100"
                          onClick={() => setIndexNewSubStage(indexOption)}
                        />
                      )}
                      {d.isDone == "1" ? (
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
                    </div>
                    <div
                      className={
                        "col-span-4 flex gap-x-2 text-xs font-normal text-grisHeading"
                      }
                    >
                      <span>{d.name}</span>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blancoBox font-roboto text-sm font-medium text-grisHeading">
                        {d?.repeat}
                      </div>
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      {d.start}
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      {d.end}
                    </div>
                    <div
                      className={
                        "col-span-1 text-center text-xs font-normal text-grisHeading"
                      }
                    >
                      {calculateDays(d.start, d.end).toFixed(0)}{" "}
                      {calculateDays(d.start, d.end) > 1 ? "días" : "día"}
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      {calculateDaysRestant(d.end).toFixed(0)}{" "}
                      {calculateDaysRestant(d.end) > 1 ? "días" : "día"}
                    </div>

                    <div className="col-span-1 flex justify-start gap-x-1 overflow-auto">
                      <div className="flex">
                        {d.responsible.slice(0, 3).map((r, index) => (
                          <Avatar className="size-6" key={index}>
                            <AvatarImage src={r?.img} title={r?.name} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      {d.responsible.length > 3 && (
                        <div className="ml-1 flex items-center">
                          <span className="text-xs font-normal text-grisHeading">
                            +{d.responsible.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <Avatar className="size-6">
                        <AvatarImage
                          src={d.created?.img}
                          title={d?.created?.name}
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
                        <CommentsObjective
                          leadId={1}
                          comments={d.comments}
                          process={1}
                        />
                      </div>
                      <IonIcon
                        icon={ellipsisVertical}
                        size="large"
                        className={`h-9 w-6 text-grisSubText`}
                      />
                    </div>
                  </div>
                ))}

                {/* new sub */}
                {indexSubStage == indexOption && (
                  <Form className="grid h-12 w-full grid-cols-12 items-center border-b">
                    <div
                      className={
                        "col-span-1 flex justify-end gap-x-2 px-4 text-xs font-normal text-grisHeading"
                      }
                    ></div>
                    <div
                      className={
                        "col-span-4 pr-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <Input
                        className="border-none bg-inherit text-xs font-normal text-grisHeading placeholder:text-xs placeholder:font-normal placeholder:text-[#CCCCCC]"
                        placeholder={"Agrega una nueva actividad"}
                      />
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <Popover open={openStart} onOpenChange={setOpenStart}>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "h-[23px] w-fit min-w-fit justify-between rounded-[8px] border-none bg-gris px-0.5 font-roboto text-xs font-normal text-grisHeading focus-visible:ring-primarioBotones",
                              !dateStartInput && "text-[#CCCCCC]",
                            )}
                          >
                            <div className="w-full">
                              {dateStartInput ? (
                                format(dateStartInput, "PP")
                              ) : (
                                <span>DD/MM/AAAA</span>
                              )}
                            </div>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dateStartInput}
                            onSelect={(e) => {
                              setDateStartInput(e);
                              setOpenStart(false);
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      <Popover open={openEnd} onOpenChange={setOpenEnd}>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "h-[23px] w-fit min-w-fit justify-between rounded-[8px] border-none bg-gris px-0.5 font-roboto text-xs font-normal text-grisHeading focus-visible:ring-primarioBotones",
                              !dateEndInput && "text-[#CCCCCC]",
                            )}
                          >
                            <div className="w-full">
                              {dateEndInput ? (
                                format(dateEndInput, "PP")
                              ) : (
                                <span>DD/MM/AAAA</span>
                              )}
                            </div>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={dateEndInput}
                            onSelect={(e) => {
                              setDateEndInput(e);
                              setOpenEnd(false);
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div
                      className={"col-span-1 text-center text-xs font-normal"}
                    >
                      {!!dateStartInput && !!dateEndInput ? (
                        <span className="text-grisHeading">
                          {calculateDays(dateStartInput, dateEndInput).toFixed(
                            0,
                          )}
                          &nbsp;
                          {calculateDays(dateStartInput, dateEndInput).toFixed(
                            0,
                          ) > 1
                            ? "días"
                            : "día"}
                        </span>
                      ) : (
                        <span className="text-[#CCCCCC]">Por Definir</span>
                      )}
                    </div>
                    <div
                      className={
                        "col-span-1 text-xs font-normal text-grisHeading"
                      }
                    >
                      {!!dateStartInput && !!dateEndInput ? (
                        <span className="text-grisHeading">
                          {calculateDaysRestant(dateEndInput).toFixed(0)}
                          &nbsp;
                          {calculateDaysRestant(dateEndInput).toFixed(0) > 1
                            ? "días"
                            : "día"}
                        </span>
                      ) : (
                        <span className="text-[#CCCCCC]">Por Definir</span>
                      )}{" "}
                    </div>

                    <div className="col-span-1 flex justify-start gap-x-1 overflow-auto">
                      <IonIcon
                        icon={add}
                        className="h-5 w-5 cursor-pointer text-grisHeading"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center"></div>
                    <div
                      className={
                        "col-span-1 flex items-center justify-between gap-x-2 text-xs font-normal text-grisHeading"
                      }
                    ></div>
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
