import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";

export async function saveNewObjective(data) {
  try {
    const objective = {
      name: data.get("objetivo"),
      year: data.get("year"),
      description: data.get("area"),
      area: data.getAll("area"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/create-objetive`,
      {
        method: "POST",
        body: JSON.stringify(objective),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function getWorkspace() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-workspaces`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function newWorkspace(data) {
  try {
    const info = {
      name: data.get("name"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/create-workspace`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function editWorkspace(data) {
  try {
    const info = {
      workspace_id: data.get("workspace_id"),
      name: data.get("name"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/edit-workspace`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function destroyWorkspace(data) {
  try {
    const info = {
      name: data.get("name"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-workspace`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function multiloaderPM() {
  const [workspaces] = await Promise.all([getWorkspace()]);

  return json({ workspaces });
}

export async function newObjective(data) {
  try {
    const info = {
      id_workspace: data.get("workspace_id"),
      name: data.get("name"),
      type: data.get("type"),
      year_date: format(new Date(), "yyyy-MM-dd"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/create-objetive`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function editObjective(data) {
  try {
    const info = {
      objective_id: data.get("objective_id"),
      name: data.get("name"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/edit-objetive`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
export async function deleteObjective(data) {
  try {
    const info = {
      objective_id: data.get("objective_id"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/destroy-objetive`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function getObjectivesByWorkspaceId(workspace) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-workspace/${workspace}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function getObjectiveById({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-objetive/${params.id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function saveNewTaskPM(data) {
  try {
    const start =
      data.get("star_date") == null ? "" : format(data.get("star_date"), "PP");
    const end =
      data.get("end_date") == null ? "" : format(data.get("end_date"), "PP");

    const task = {
      name: data.get("name"),
      description: data.get("description"),
      type: Number(data.get("type")),
      user_id: data.get("userId"),
      priority: Number(data.get("priority")),
      repeat: Number(data.get("repeat")),
      objective_id: Number(data.get("objective_id")),
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

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
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

export async function saveSharedObject(data) {
  try {
    const info = {
      objetive_id: data.get("objetive_id"),
      type_share: data.get("type_share"),
      rel_id: data.getAll("rel_id"),
      type_access: data.get("type_access"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/save-shared-objetive`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function editSharedObject(data) {
  try {
    const info = {
      id: data.get("id"),
      type_access: data.get("type_access"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/edit-shared-objetive`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function saveSharedTask(data) {
  try {
    const info = {
      task_id: data.get("task_id"),
      type_share: data.get("type_share"),
      rel_id: data.getAll("rel_id"),
      type_access: data.get("type_access"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/save-shared-task`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function editSharedTask(data) {
  try {
    const info = {
      id: data.get("id"),
      type_access: data.get("type_access"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/edit-shared-task`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function getUsers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-users`,
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

export async function getAreas() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-areas`,
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

export async function getPosition() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-puestos`,
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

export async function multiloaderMainPM({ params }) {
  const [objective, users, positions, areas] = await Promise.all([
    getObjectiveById({ params }),
    getUsers(),
    getPosition(),
    getAreas(),
  ]);

  return json({ objective, users, positions, areas });
}

export async function getProyectsByWorkspace({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-workspace-project/${params.id}
`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function getTasksByWorkspace({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-workspace-task/${params.id}
`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}

export async function multiloaderProyectsPM({ params }) {
  const [proyects] = await Promise.all([getProyectsByWorkspace({ params })]);

  return json({ proyects });
}

export async function multiloaderTasksPM({ params }) {
  const [tasks] = await Promise.all([getTasksByWorkspace({ params })]);

  return json({ tasks });
}

export async function getProjectById({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/show-project/${params.id}`,
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

export async function multiloaderProjectById({ params }) {
  const [project, users] = await Promise.all([
    getProjectById({ params }),
    getUsers(),
  ]);

  return json({ project, users });
}

// ACTIONS

export async function editProject(data) {
  const project = {
    project_id: data.get("project_id"),
    name: data.get("name"),
    priority: data.get("priority"),
    description: data.get("description"),
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

export async function editTask(data) {
  const start =
    data.get("star_date") == null
      ? ""
      : format(data.get("star_date"), "yyyy-MM-dd");
  const end =
    data.get("end_date") == null
      ? ""
      : format(data.get("end_date"), "yyyy-MM-dd");

  // const task = {
  //   name: data.get("name"),
  //   description: data.get("description"),
  //   type: Number(data.get("type")),
  //   user_id: data.get("userId"),
  //   priority: Number(data.get("priority")),
  //   repeat: Number(data.get("repeat")),
  //   objective_id: Number(data.get("objective_id")),
  //   sequence: data.get("sequence"),
  //   start: start,
  //   end: end,
  // };

  const task = {
    task_id: data.get("task_id"),
    name: data.get("name"),
    description: data.get("description"),
    user_id: data.get("userId"),
    priority: data.get("priority"),
    end: end,
    start: start,
    status: "",
    repeat: data.get("repeat"),
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

  return response.json();
}

export async function newPhase(data) {
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

export async function newActivity(data) {
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
