import TopMenu from "@/layouts/Masters/Menus/TopMenu";
import React, { useState } from "react";
import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import { Calendar } from "@/components/ui/calendar";
import FormCreateMeet from "./Components/FormCreateMeet";
import { saveNewMeet } from "./utils";
import SelectRouter from "@/layouts/Masters/FormComponents/select";
import { completeActivity, completeTask } from "../PManager/utils";

function LayoutCalendar() {
  const { data } = useLoaderData();
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState(["activity", "meet", "task", "crm"]);
  const [userFilter, setUserFilter] = useState(0);

  function onSelectFilter(filter) {
    if (filters.includes(filter)) {
      setFilters(filters.filter((item) => item !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  }

  const userArray = [];

  arrayFillUser(data, userArray);

  function arrayFillUser(data, array) {
    data.forEach((element) => {
      array.push({
        label: element.name + " " + element.last_name,
        value: element.id,
      });
    });
  }

  async function changeUserFilter(e) {
    setUserFilter(e.value);
  }

  return (
    <div className="flex h-full overflow-auto px-4 pb-4 font-roboto">
      <FormCreateMeet modal={modal} setModal={setModal} users={data} />
      <div className="flex w-[350px] shrink-0 flex-col gap-4 rounded-xl">
        <div className="flex flex-col gap-4 rounded-lg bg-gris px-4 py-4">
          <TopMenu main={"/"} />
        </div>
        <div className="flex h-full flex-col gap-4 overflow-auto rounded-lg bg-gris px-4 py-4">
          <span className="font-popins text-lg font-semibold text-grisHeading">
            Menu
          </span>
          <button
            className="flex items-center gap-2 rounded-3xl bg-blancoBox py-3 pl-24"
            onClick={() => setModal(true)}
          >
            <IonIcon
              icon={add}
              size="large"
              className="text-primario"
            ></IonIcon>
            <div>
              <span className="text-roboto text-base font-medium text-grisText">
                Add Meet
              </span>
            </div>
          </button>
          <div>
            <Calendar
              mode="single"
              className="rounded-2xl bg-transparent text-grisHeading"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <input
                type="checkbox"
                value="activity"
                onClick={() => onSelectFilter("activity")}
                checked={filters.includes("activity")}
                readOnly
              />
              <p className="text-xs font-medium text-grisSubText">
                Project Manager
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                value="task"
                onClick={() => onSelectFilter("task")}
                checked={filters.includes("task")}
                readOnly
              />
              <p className="text-xs font-medium text-grisSubText">Tasks</p>
            </div>
            <div className="flex gap-3">
              <input
                type="checkbox"
                value="meet"
                onClick={() => onSelectFilter("meet")}
                checked={filters.includes("meet")}
                readOnly
              />
              <p className="text-xs font-medium text-grisSubText">Meet</p>
            </div>
            <div>
              <SelectRouter
                name={"user"}
                placeholder={"Select User"}
                options={userArray}
                onChange={(e) => changeUserFilter(e)}
              />
            </div>
          </div>
        </div>
      </div>
      <Outlet context={[filters, userFilter]} />
    </div>
  );
}

export default LayoutCalendar;

export async function Action({ request }) {
  const data = await request.formData();
  const action = data.get("action");

  switch (action) {
    case "new-meet":
      await saveNewMeet(data);
      return redirect("/calendar");
    case "complete-task":
      await completeTask(data);
      return redirect("/calendar");
    case "complete-activity":
      await completeActivity(data);
      return redirect("/calendar");
  }

  return redirect("/calendar");
}
