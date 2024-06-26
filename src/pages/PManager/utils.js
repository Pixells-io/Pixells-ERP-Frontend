import { format } from "date-fns";
import Cookies from "js-cookie";

export async function saveNewGoal(data, id) {
  const goal = {
    name: data.get("goal"),
    strategic_objetive_id: Number(id),
  };

  console.log(goal);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-goal`,
    {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  return response;
}

export async function saveNewCsf(data) {
  const csf = {
    name: data.get("csf"),
    goal_id: Number(data.get("goalId")),
  };

  console.log(csf);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-fce`,
    {
      method: "POST",
      body: JSON.stringify(csf),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  return response;
}

export async function saveNewTask(data) {
  const start =
    data.get("star_date") == null ? "" : format(data.get("star_date"), "P");
  const end =
    data.get("end_date") == null ? "" : format(data.get("end_date"), "P");

  const task = {
    name: data.get("name"),
    description: data.get("description"),
    type: Number(data.get("type")),
    user_id: data.get("userId"),
    priority: Number(data.get("priority")),
    repeat: Number(data.get("repeat")),
    fce_id: Number(data.get("fce_id")),
    sequence: data.get("sequence"),
    start: start,
    end: end,
  };

  console.log(task);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-task`,
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  return response;
}

export async function saveNewPhase(data) {
  const info = {
    name: data.get("name"),
    project_id: data.get("project_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-phase`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  // console.log(response);

  return response;
}

export async function saveNewActivitty(data) {
  const info = {
    name: data.get("name"),
    phase_id: data.get("phase_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-activity`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  // console.log(response);

  return response;
}

export async function editActivityUser(data) {
  const info = Object.fromEntries(data.entries());
  delete info.action;

  console.log(info);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-activity`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  // console.log(response);

  return response;
}
