import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./styles.css";
import { useLoaderData } from "react-router-dom";

function MainCalendar() {
  const { data } = useLoaderData();
  console.log(data.task);

  const arrayTask = [];

  arrayFillPM(data.task, arrayTask);

  function arrayFillPM(data, array) {
    data.forEach((element) => {
      array.push({
        title: element.name,
        start: element.start,
        id: element.id,
        type: 1,
      });
    });
  }

  console.log(arrayTask);

  const events = [
    { title: "Meeting", start: new Date() },
    { title: "Diegoldd", start: new Date() },
  ];

  function renderEventContent(eventInfo) {
    return (
      <>
        <i className="rounded-3xl text-white">{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <div className="relative mx-5 flex w-screen flex-col justify-between overflow-scroll rounded-xl bg-gris p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek",
        }}
        weekends={true}
        events={arrayTask}
        eventContent={renderEventContent}
      />
    </div>
  );
}

export default MainCalendar;
