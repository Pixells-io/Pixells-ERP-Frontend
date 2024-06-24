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
  const start = data.get("star_date");
  const end = data.get("end_date");
  const task = {
    name: data.get("name"),
    description: data.get("description"),
    type: Number(data.get("type")),
    user_id: data.get("userId"),
    priority: Number(data.get("priority")),
    repeat: Number(data.get("repeat")),
    fce_id: Number(data.get("fce_id")),
    sequence: data.get("sequence"),
    start: format(start, "P"),
    end: format(end, "P"),
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

export async function saveNewPhase(data, projectId) {
  const info = {
    name: data.get("name"),
    projectId: projectId,
  };

  console.log(data);

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
  console.log(response);

  return response;
}
