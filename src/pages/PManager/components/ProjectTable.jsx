import React, { useEffect, useState } from "react";
import {
  Form,
  useLoaderData,
  useLocation,
  useParams,
  useSubmit,
} from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  checkmarkCircle,
  checkmarkCircleOutline,
  ellipsisVertical,
  trash,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import ActivityForm from "./Form/ActivityForm";
import DatePickerPM from "@/components/date-picker-pm";
import AddUserActivity from "./Form/AddUserActivity";
import ActivityNameInput from "./Form/ActivityNameInput";
import ActivityComment from "./Form/ActivityComment";
import ActivityDocument from "./Form/ActivityDocument";
import { pusherClient } from "@/lib/pusher";
import { getProjectById } from "@/lib/actions";
import ActivityDestroy from "./ActivityDestroy";
import PhaseDestroy from "./PhaseDestroy";
import AssignedMenu from "./AssignedMenu";

const HEADERS = [
  { name: "FASE" },
  { name: "ACTIVITY" },
  { name: "ASSIGNED" },
  { name: "DURATION" },
  { name: "REMAINING" },
  { name: "START" },
  { name: "END" },
  { name: "COMMENT" },
  { name: "DOC" },
  { name: "CREATOR" },
  { name: "ACTIONS" },
];

function ProjectTable() {
  const submit = useSubmit();
  const location = useLocation();
  const { project, users } = useLoaderData();
  const { id, projectId } = useParams();
  const [faseInput, setFaseInput] = useState("");

  //Websocket
  const [urlId, setUrlId] = useState(projectId);
  const [Projectdata, setProjectData] = useState(project);

  //estado local
  const [inputActive, setInputActive] = useState(false);
  const [phaseModal, setPhaseModal] = useState(false);
  const [phaseSelected, setPhaseSelected] = useState("");

  useEffect(() => {
    pusherClient.subscribe(`private-pm-get-project.${urlId}`);

    pusherClient.bind("fill-pm-project", ({ project }) => {
      console.log("WEBSCOKET PROJECT -> ", project);
      getPMinfoFuncion(project);
    });

    async function getPMinfoFuncion(id) {
      const newData = await getProjectById(id);
      setProjectData(newData);
    }

    return () => {
      pusherClient.unsubscribe(`private-pm-get-project.${urlId}`);
    };
  }, [location, urlId]);

  function onInputEnter(e) {
    if (e.code == "Enter") {
      submit(e.currentTarget);
      setFaseInput("");
    }
  }

  function onInputEnter2(e) {
    if (e.code == "Enter") {
      setInputActive(false);
      submit(e.currentTarget);
    }
  }

  console.log(Projectdata);

  return (
    <div className="flex h-full flex-col px-4 pb-10">
      <PhaseDestroy
        phase={phaseSelected}
        modal={phaseModal}
        setModal={setPhaseModal}
      />

      <div className="grid h-12 grid-cols-12 items-center text-center">
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

      {/* Activity Input */}
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

      <div className="flex h-full flex-col">
        {Projectdata?.data?.phases?.map((phase, i) => (
          <div key={i} className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex">
                <IonIcon
                  icon={ellipsisVertical}
                  className="flex size-5 pt-[18px] text-grisText"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => {
                    setInputActive(!inputActive);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setPhaseSelected(phase?.phase);
                    setPhaseModal(true);
                  }}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Accordion key={i} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger className="gap-2 bg-grisBg px-4 hover:no-underline">
                  {!inputActive ? (
                    <p className="text-sm font-medium text-primario">
                      {phase?.phase.name.toUpperCase()}
                    </p>
                  ) : (
                    <Form
                      onKeyDown={onInputEnter2}
                      id="form-edit-phase"
                      action={`/project-manager/${id}/projects/${projectId}`}
                      method="post"
                    >
                      <input
                        className="text-sm font-medium text-primario"
                        type="text"
                        name="name"
                        defaultValue={phase?.phase.name.toUpperCase()}
                      />
                      <input
                        type="text"
                        className="hidden"
                        name="phase_id"
                        hidden
                        readOnly
                        value={phase?.phase.id}
                      />
                      <input
                        type="text"
                        className="hidden"
                        name="action"
                        hidden
                        readOnly
                        value="edit-phase"
                      />
                    </Form>
                  )}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <div className="pt-2">
                    <ActivityForm phase_id={phase.phase.id} />
                  </div>
                  {phase?.activities.map((activity, i) => (
                    <div
                      key={i}
                      className="grid h-12 grid-cols-12 items-center gap-y-6 border-t-[1px] text-center"
                    >
                      <div className="col-span-1 flex justify-center gap-2">
                        <p>{activity.id}</p>
                        <Form
                          action={`/project-manager/${id}/projects/${projectId}`}
                          method="post"
                          id="check_activity-form"
                          name="phase"
                        >
                          <input
                            type="hidden"
                            name="action"
                            value="activity_check"
                          />
                          <input
                            type="hidden"
                            name="activity_id"
                            value={activity.id}
                          />
                          <button type="submit" className="">
                            {activity.status === 0 ? (
                              <IonIcon
                                icon={checkmarkCircleOutline}
                                className="h-5 w-5 text-grisHeading"
                              />
                            ) : (
                              <IonIcon
                                icon={checkmarkCircle}
                                className="h-5 w-5 text-[#00A259]"
                              />
                            )}
                          </button>
                        </Form>
                      </div>
                      <div className="col-span-2 flex items-center justify-center gap-2">
                        <ActivityNameInput
                          defaultName={activity?.name}
                          activity_id={activity?.id}
                          status={activity.status}
                        />
                      </div>

                      <div className="col-span-1 flex items-center justify-center gap-1">
                        <AssignedMenu users={activity?.users} />
                        <AddUserActivity
                          users={users?.data}
                          activity_id={activity.id}
                        />
                      </div>

                      <div className="col-span-1">
                        <p className="text-[12px] font-normal text-grisHeading">
                          {activity?.duration + 1} Days
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p className="text-[12px] font-normal text-grisHeading">
                          {activity?.status === 0 ? (
                            <>{activity?.remaining + 1} Days</>
                          ) : (
                            <span className="rounded-3xl bg-[#00A2591F] px-2 py-1 font-roboto text-xs font-normal leading-3 text-[#00A259] hover:bg-[#00A2591F]">
                              Done
                            </span>
                          )}
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

                      <div className="col-span-1 flex items-center justify-center">
                        <ActivityDocument
                          activity_id={activity?.id}
                          documents={activity?.documents}
                        />
                      </div>

                      <div className="col-span-1 flex items-center justify-center">
                        <Avatar className="flex h-6 w-6" key={i}>
                          <AvatarImage src={activity?.creator?.img} />
                          <AvatarFallback>??</AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="col-span-1 flex items-center justify-center">
                        <ActivityDestroy
                          name={activity?.name}
                          activityId={activity?.id}
                        />
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTable;
