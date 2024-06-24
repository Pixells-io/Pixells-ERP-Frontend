import React, { useState } from "react";
import { Form, useLoaderData, useParams, useSubmit } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import {
  checkmarkCircleOutline,
  create,
  informationCircle,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const HEADERS = [
  { name: "FASE" },
  { name: "ACTIVITY" },
  { name: "ASIGNADO" },
  { name: "DURACION" },
  { name: "RESTANTE" },
  { name: "INICIO" },
  { name: "FIN" },
  { name: "COMMENT" },
  { name: "DOC" },
];

function ProjectTable() {
  const submit = useSubmit();
  const { data } = useLoaderData();
  const { id, projectId } = useParams();
  const [faseInput, setFaseInput] = useState("");

  console.log(data);

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setFaseInput("");
    }
  }

  return (
    <div className="flex h-full flex-col overflow-scroll px-4 pb-10">
      <div className="grid h-12 grid-cols-10 items-center text-center">
        {HEADERS?.map((header, i) => (
          <div
            key={i}
            className={header?.name === "ACTIVITY" ? "col-span-2" : ""}
          >
            <p className="px-2 text-sm font-semibold text-gris2">
              {header.name}
            </p>
          </div>
        ))}
      </div>

      <div className="pb-3">
        <Form
          onKeyDown={onInputEnter}
          action={`/project-manager/${id}/projects/${projectId}`}
          method="post"
          id="phase-form"
          name="phase"
        >
          <input
            type="text"
            name="name"
            placeholder="+ FASE"
            className="flex w-full rounded-full bg-blancoBg px-4 py-2 font-roboto text-grisSubText caret-primario outline-none placeholder:text-sm placeholder:font-normal placeholder:text-grisSubText focus:border-2 focus:border-primario"
            value={faseInput}
            onChange={(e) => setFaseInput(e.target.value)}
          />
          <input
            name="project_id"
            className="hidden"
            value={projectId}
            hidden
            readOnly
          />
        </Form>
      </div>
      <div className="flex h-full flex-col overflow-scroll">
        {data?.phases?.map((phase, i) => (
          <Accordion key={i} type="single" collapsible className="h-full">
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger className="justify-normal gap-2 bg-grisBg px-4">
                <p className="text-sm font-medium text-grisHeading">
                  {phase.phase.name}
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid h-12 grid-cols-10 items-center px-1">
                  <div className="col-span-1 flex justify-end">
                    {/* <TaskForm users={users} csfId={fce.id} /> */}
                  </div>
                </div>
                <div className="grid h-12 grid-cols-10 items-center gap-y-6 border-b-[1px] text-center">
                  <div className="col-span-1">1</div>
                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <p className="text-2xl text-red-500">&bull;</p>
                    <p className="text-[12px] font-normal text-grisHeading">
                      aqui va algo
                    </p>
                  </div>

                  <div className="col-span-1">
                    <p className="text-[12px] font-normal text-grisHeading">
                      aqui va algo
                    </p>
                  </div>
                  <div className="col-span-1">
                    <p className="text-[12px] font-normal text-grisHeading">
                      aqui va algo
                    </p>
                  </div>

                  <div className="col-span-1">
                    <Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
                      <p className="text-[11px] font-semibold">aqui va algo</p>
                    </Badge>
                  </div>
                  <div className="flex justify-center">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default ProjectTable;
