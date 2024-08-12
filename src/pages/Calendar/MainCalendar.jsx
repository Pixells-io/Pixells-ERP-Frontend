import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./styles.css";
import { useLoaderData, useOutletContext } from "react-router-dom";
import FormShowMeet from "./Components/FormShowMeet";
import { getFollowUp, getMeet } from "./utils";
import FormShowFollowUp from "./Components/FormShowFollowUp";
import CompleteTask from "@/layouts/PManager/components/TaskModals/CompleteTask";
import CompleteActivity from "@/layouts/PManager/components/TaskModals/CompleteActivity";
import { getCalendarDataId } from "@/lib/actions";

function MainCalendar() {
  const { data } = useLoaderData();
  const [filters, userFilter] = useOutletContext();
  const [statusData, setStatusData] = useState(data);

  useEffect(() => {
    if (userFilter != 0) {
      getOtherCalendar(userFilter);
    }

    async function getOtherCalendar(user) {
      const newInfo = await getCalendarDataId(user);
      setStatusData(newInfo);
    }
  }, [userFilter]);

  useEffect(() => {
    const newArray = Object.keys(statusData).map((key) => {
      return {
        name: key,
        value: statusData[key],
      };
    });

    const newShowData = newArray.filter((item) => filters.includes(item.name));

    const res2 = newShowData.map(({ key, value }) =>
      value.map((item) => {
        return {
          title: item.name,
          start: item.date,
          id_element: item.id,
          type: item.type,
          description: item.description,
        };
      }),
    );

    setEvents(res2.flat());
  }, [filters]);

  //Use States Var
  const [tasks, setTasks] = useState(false);
  const [crm, setCrm] = useState(false);
  const [meet, setMeet] = useState(false);
  const [events, setEvents] = useState([]);

  //Modal States
  const [modalMeet, setModalMeet] = useState(false);
  const [meetInfo, setMeetInfo] = useState(false);
  const [modalFollowUp, setModalFollowUp] = useState(false);
  const [followUpInfo, setFollowUpInfo] = useState(false);

  //Modal Open Task
  const [taskId, setTaskId] = useState(false);
  const [taskName, setTaskName] = useState(false);
  const [taskDescription, setTaskDescription] = useState(false);
  const [completeTaskModal, setCompleteTaskModal] = useState(false);

  //Modal Open Activity
  const [activityId, setActivityId] = useState(false);
  const [completeActivityModal, setCompleteActivityModal] = useState(false);

  function openCompleteTaskModal(taskId, name, description) {
    console.log(description);
    setTaskId(taskId);
    setTaskName(name);
    setTaskDescription(description);
    setCompleteTaskModal(true);
  }

  useEffect(() => {
    const arrayfIllVar = [];

    arrayFill(statusData.task, arrayfIllVar);
    arrayFill(statusData.crm, arrayfIllVar);
    arrayFill(statusData.meet, arrayfIllVar);
    arrayFill(statusData.activity, arrayfIllVar);

    function arrayFill(data, array) {
      data.forEach((element) => {
        array.push({
          title: element.name,
          start: element.date,
          id_element: element.id,
          type: element.type,
          description: element.description,
          complete: element.complete,
        });
      });
    }

    setEvents(arrayfIllVar);
  }, []);

  function filterEventsCalendar($module) {
    setEvents([]);
    switch ($module) {
      case 1:
        setTasks(!tasks);
        break;
      case 2:
        setCrm(!crm);
        break;
      case 3:
        setMeet(!meet);
        break;
    }

    //Set the values
    const array_bulk = [];
    console.log(tasks, "task d");
    console.log(crm, "crm d");

    if (tasks === true) {
      arrayFill(statusData.task, array_bulk);
      arrayFill(statusData.activity, array_bulk);
    }

    if (crm === true) {
      arrayFill(statusData.crm, array_bulk);
    }

    if (meet === true) {
      arrayFill(statusData.meet, array_bulk);
    }

    function arrayFill(data, array) {
      data.forEach((element) => {
        array.push({
          title: element.name,
          start: element.date,
          id_element: element.id,
          type: element.type,
          description: element.description,
          complete: element.complete,
        });
      });
    }

    setEvents(array_bulk);
  }

  function renderEventContent(eventInfo) {
    const type = eventInfo.event.extendedProps.type;
    const id = eventInfo.event.extendedProps.id_element;
    const complete = eventInfo.event.extendedProps.complete;

    //Find Meet Info
    async function findMeetInfo(meetId) {
      let data = await getMeet(meetId);

      setMeetInfo(data);
    }

    //Find CRM Info
    async function findFollowUpInfo(followUpId) {
      let data = await getFollowUp(followUpId);

      setFollowUpInfo(data);
    }

    function openModalFunction(type, id) {
      switch (type) {
        case 2:
          //CRM
          findFollowUpInfo(id);
          setModalFollowUp(true);
          break;
        case 3:
          //Meet
          findMeetInfo(id);
          setModalMeet(true);
          break;
        case 4:
          //Actvity
          setActivityId(id);
          setCompleteActivityModal(true);
          break;
      }
    }

    return (
      <>
        {complete === 1 ? (
          <>
            <div className="py w-full overflow-hidden text-ellipsis rounded-xl border border-grisDisabled bg-grisDisabled pl-2 pr-2">
              <span
                className="rounded-3xl font-roboto text-xs font-normal text-grisSubText"
                title={eventInfo.event.title}
              >
                {eventInfo.event.title}
              </span>
            </div>
          </>
        ) : (
          <>
            {type === 1 ? (
              <div
                className="py w-full overflow-hidden text-ellipsis rounded-xl border border-primario bg-transparent pl-2 pr-2"
                onClick={() =>
                  openCompleteTaskModal(
                    id,
                    eventInfo.event.title,
                    eventInfo.event.extendedProps?.description,
                  )
                }
              >
                <span
                  className="rounded-3xl font-roboto text-xs font-normal text-primario"
                  title={eventInfo.event.title}
                >
                  {eventInfo.event.title}
                </span>
              </div>
            ) : type === 2 ? (
              <div
                className="py w-full overflow-hidden text-ellipsis rounded-xl bg-[#00A9B3] pl-2 pr-2"
                onClick={() => openModalFunction(type, id)}
              >
                <span
                  className="rounded-3xl font-roboto text-xs font-normal text-white"
                  title={eventInfo.event.title}
                >
                  {eventInfo.event.title}
                </span>
              </div>
            ) : type === 3 ? (
              <div
                className="py w-full overflow-hidden text-ellipsis rounded-xl border border-[#00A9B3] pl-2 pr-2"
                onClick={() => openModalFunction(type, id)}
              >
                <span
                  className="rounded-3xl font-roboto text-xs font-normal text-grisText"
                  title={eventInfo.event.title}
                >
                  {eventInfo.event.title}
                </span>
              </div>
            ) : type === 4 ? (
              <div
                className="py w-full overflow-hidden text-ellipsis rounded-xl border bg-primario pl-2 pr-2"
                onClick={() => openModalFunction(type, id)}
              >
                <span
                  className="rounded-3xl font-roboto text-xs font-normal text-white"
                  title={eventInfo.event.title}
                >
                  {eventInfo.event.title}
                </span>
              </div>
            ) : null}
          </>
        )}
      </>
    );
  }

  return (
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-gris p-4">
      <div className="mb-4 flex gap-20">
        <FormShowFollowUp
          modal={modalFollowUp}
          setModal={setModalFollowUp}
          info={followUpInfo}
        />
        <FormShowMeet
          modal={modalMeet}
          setModal={setModalMeet}
          info={meetInfo}
        />
        <CompleteTask
          modal={completeTaskModal}
          setModal={setCompleteTaskModal}
          taskId={taskId}
          name={taskName}
          description={taskDescription}
        />
        <CompleteActivity
          modal={completeActivityModal}
          setModal={setCompleteActivityModal}
          activity={activityId}
        />
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        weekends={true}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  );
}

export default MainCalendar;
