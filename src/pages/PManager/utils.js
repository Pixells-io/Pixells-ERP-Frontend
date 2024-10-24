import { format } from "date-fns";
import { contractSharp } from "ionicons/icons";
import Cookies from "js-cookie";

export async function saveNewGoal(data, id) {
  const goal = {
    name: data.get("goal"),
    strategic_objetive_id: Number(id),
  };

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

  return response;
}

export async function saveNewCsf(data) {
  const csf = {
    name: data.get("csf"),
    goal_id: Number(data.get("goalId")),
  };

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

  return response;
}

export async function editActivityUser(data) {
  const start =
    data.get("start") == null ? "" : format(data.get("start"), "yyyy-MM-dd");
  const end =
    data.get("end") == null ? "" : format(data.get("end"), "yyyy-MM-dd");

  const info = Object.fromEntries(data.entries());
  delete info.action;
  if (start !== "") {
    info.start = start;
  }
  if (end !== "") {
    info.end = end;
  }

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

  return response;
}

export async function editActivityFile(data) {
  const formData = new FormData();

  const info = {
    activity_id: data.get("activity_id"),
    title: data.get("title"),
  };

  formData.append("document", data.get("document"));
  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/store-activity-document`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function completeActivity(data) {
  const idActivity = data.get("activity_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/update-activity-status/${idActivity}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function completeTask(data) {
  const task = {
    task_id: data.get("task_id"),
    comment: data.get("comment"),
  };

  const formData = new FormData();
  formData.append("document", data.get("document"));
  formData.append("task", JSON.stringify(task));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/complete-task`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function destroyTask(data) {
  const task = {
    task_id: data.get("task_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-task`,
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editTask(data) {
  const task = {
    task_id: data.get("task_id"),
    name: data.get("name"),
    description: data.get("description"),
    priority: data.get("priority"),
    user_id: data.get("userId"),
    end: format(data.get("end"), "yyyy-MM-dd"),
    // start: data.get("start"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-task`,
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editStrategicObjective(data) {
  const objective = {
    objetive_id: data.get("objective_id"),
    year: data.get("year"),
    name: data.get("name"),
    areas: data.getAll("areas"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-objetive`,
    {
      method: "POST",
      body: JSON.stringify(objective),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editCSF(data) {
  const csf = {
    fce_id: data.get("csf_id"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-fce`,
    {
      method: "POST",
      body: JSON.stringify(csf),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editGoal(data) {
  const goal = {
    goal_id: data.get("goal_id"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-goal`,
    {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteStrategicObjective(id) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-objetive/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteCSF(data) {
  const id = data.get("csf_id");

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-fce/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteGoal(data) {
  const id = data.get("goal_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-goal/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteActivity(data) {
  const id = data.get("activity_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-activitie/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editPhase(data) {
  const goal = {
    phase_id: data.get("phase_id"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-phase`,
    {
      method: "POST",
      body: JSON.stringify(goal),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deletePhase(data) {
  const id = data.get("phase_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-phase/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editProject(data) {
  const project = {
    project_id: data.get("project_id"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/edit-project`,
    {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteProject(data) {
  const id = data.get("project_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-project/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteDocument(data) {
  const id = data.get("document_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-document/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function removeAssignedActivity(data) {
  const id = data.get("assigned_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-activity-assigned/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function destroyActivity(type, id) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-complete/${type}/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
