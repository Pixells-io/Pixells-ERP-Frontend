import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./styles.css";
import { useLoaderData } from "react-router-dom";
import FormShowMeet from "./Components/FormShowMeet";

function MainCalendar() {
  const { data } = useLoaderData();

  //Use States Var
  const [tasks, setTasks] = useState(false);
  const [crm, setCrm] = useState(false);
  const [meet, setMeet] = useState(false);
  const [events, setEvents] = useState([]);

  //Modal States
  const [modalMeet, setModalMeet] = useState(false);
  const [modalMeetId, setModalMeetId] = useState(false);
  const [meetInfo, setMeetInfo] = useState(false);

  useEffect(() => {
    const arrayfIllVar = [];

    arrayFill(data.task, arrayfIllVar);
    arrayFill(data.crm, arrayfIllVar);
    arrayFill(data.meet, arrayfIllVar);

    function arrayFill(data, array) {
      data.forEach((element) => {
        array.push({
          title: element.name,
          start: element.date,
          id_element: element.id,
          type: element.type,
        });
      });
    }

    setEvents(arrayfIllVar);
  }, []);

  function filterEventsCalendar($module) {
    setEvents([]);
    console.log(tasks, "task a");
    console.log(crm, "crm a");
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
      arrayFill(data.task, array_bulk);
    }

    if (crm === true) {
      arrayFill(data.crm, array_bulk);
    }

    if (meet === true) {
      arrayFill(data.meet, array_bulk);
    }

    function arrayFill(data, array) {
      data.forEach((element) => {
        array.push({
          title: element.name,
          start: element.date,
          id_element: element.id,
          type: element.type,
        });
      });
    }

    setEvents(array_bulk);
  }

  function renderEventContent(eventInfo) {
    const type = eventInfo.event.extendedProps.type;
    const id = eventInfo.event.extendedProps.id_element;

    function openModalFunction(type, id) {
      switch (type) {
        case 1:
          //Task
          break;
        case 2:
          //CRM
          break;
        case 3:
          //Meet
          setModalMeetId(id);
          setModalMeet(true);
          break;
      }
    }

    return (
      <>
        {type === 1 ? (
          <div
            className="py w-full overflow-hidden text-ellipsis rounded-xl bg-primario pl-2 pr-2"
            onClick={() => openModalFunction(type, id)}
          >
            <span
              className="rounded-3xl font-roboto text-xs font-normal text-white"
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
        ) : (
          <span>N/A</span>
        )}
      </>
    );
  }
  return (
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-gris p-4">
      <div className="mb-4 flex gap-20">
        <FormShowMeet
          modal={modalMeet}
          setModal={setModalMeet}
          id={modalMeetId}
        />
        <div className="flex gap-4">
          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
            {tasks === true ? (
              <input
                type="checkbox"
                className="peer hidden"
                checked
                onClick={() => filterEventsCalendar(1)}
              />
            ) : (
              <input
                type="checkbox"
                className="peer hidden"
                onClick={() => filterEventsCalendar(1)}
              />
            )}
            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
          </label>
          <div>
            <span>Project Manager</span>
          </div>
        </div>
        <div className="flex gap-4">
          <label className="before:content[''] after:content['' relative flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-primario bg-white duration-300 before:absolute before:right-0 before:h-5 before:w-5 before:rounded-full before:blur-sm after:absolute after:bottom-1 after:left-1 after:z-10 after:h-3 after:w-3 after:rounded-full after:blur-sm">
            {tasks === true ? (
              <input
                type="checkbox"
                className="peer hidden"
                checked
                onClick={() => filterEventsCalendar(2)}
              />
            ) : (
              <input
                type="checkbox"
                className="peer hidden"
                onClick={() => filterEventsCalendar(2)}
              />
            )}
            <div className="left-2 top-2 z-20 h-4 w-4 scale-0 rounded-md bg-gradient-to-tr from-emerald-800 from-primario via-emerald-700 via-primario to-emerald-500 to-primario opacity-0 transition-all duration-300 peer-checked:scale-100 peer-checked:bg-gradient-to-tr peer-checked:opacity-100 peer-checked:transition-all peer-checked:duration-300"></div>
          </label>
          <div>
            <span>CRM</span>
          </div>
        </div>
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
