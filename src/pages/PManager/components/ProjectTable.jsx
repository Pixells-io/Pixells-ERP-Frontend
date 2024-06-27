import React, { useState } from "react";
import { Form, useLoaderData, useParams, useSubmit } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  add,
  checkmarkCircleOutline,
  create,
  informationCircle,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import ActivityForm from "./Form/ActivityForm";
import DatePickerPM from "@/components/date-picker-pm";
import AddUserActivity from "./Form/AddUserActivity";
import ActivityNameInput from "./Form/ActivityNameInput";
import ActivityComment from "./Form/ActivityComment";

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
  const { project, users } = useLoaderData();
  const { id, projectId } = useParams();
  const [faseInput, setFaseInput] = useState("");

  console.log(project.data);
  // console.log(users.data);

  function onInputEnter(e) {
    // console.log(e.currentTarget);
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setFaseInput("");
    }
  }

  return (
    <div className="flex h-full flex-col px-4 pb-10">
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
          <input
            name="action"
            className="hidden"
            value="phase"
            hidden
            readOnly
          />
        </Form>
      </div>
      <div className="flex h-full flex-col overflow-scroll">
        {project?.data?.phases?.map((phase, i) => (
          <Accordion key={i} type="single" collapsible className="">
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger className="gap-2 bg-grisBg px-4">
                <p className="text-sm font-medium text-grisHeading">
                  {phase.phase.name}
                </p>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="pt-2">
                  <ActivityForm phase_id={phase.phase.id} />
                </div>
                {phase?.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="grid h-12 grid-cols-10 items-center gap-y-6 border-t-[1px] text-center"
                  >
                    <div className="col-span-1 flex justify-center gap-2">
                      <p>{activity.id}</p>
                      <button type="button" className="">
                        <IonIcon
                          icon={checkmarkCircleOutline}
                          className="h-5 w-5"
                        />
                      </button>
                    </div>
                    <div className="col-span-2 flex items-center justify-center gap-2">
                      <ActivityNameInput
                        defaultName={activity?.name}
                        activity_id={activity?.id}
                      />
                    </div>

                    <div className="col-span-1 flex items-center justify-center gap-1">
                      <div className="flex overflow-scroll">
                        {activity?.users?.map((user, i) => (
                          <Avatar className="flex h-6 w-6" key={i}>
                            <AvatarImage src={user?.img} />
                            {/* <AvatarFallback>CN</AvatarFallback> */}
                          </Avatar>
                        ))}
                      </div>
                      <AddUserActivity
                        users={users?.data}
                        activity_id={activity.id}
                      />
                    </div>
                    <div className="col-span-1">
                      <p className="text-[12px] font-normal text-grisHeading">
                        back
                      </p>
                    </div>
                    <div className="col-span-1">
                      <p className="text-[12px] font-normal text-grisHeading">
                        back
                      </p>
                    </div>

                    <div className="col-span-1 flex justify-center">
                      <DatePickerPM
                        activity_id={activity.id}
                        dataDate={activity?.start}
                        name="start"
                      />
                    </div>
                    <div className="col-span-1 flex justify-center">
                      <DatePickerPM
                        activity_id={activity.id}
                        dataDate={activity?.end}
                        name="end"
                      />
                    </div>

                    <div className="col-span-1 flex justify-center">
                      <ActivityComment
                        activity_id={activity?.id}
                        comments={activity?.comment}
                      />
                    </div>

                    <div className="col-span-1">
                      <p className="text-[12px] font-normal text-grisHeading">
                        +
                      </p>
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default ProjectTable;

{
  /* <div className="col-span-1">
<Badge className="bg-orange-200 text-[#FAA364] hover:bg-orange-100">
  <p className="text-[11px] font-semibold">
    aqui va algo
  </p>
</Badge>
</div> */
}
