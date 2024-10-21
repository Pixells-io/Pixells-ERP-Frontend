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
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-objetive/${params.id}
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

    return response, json();
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

export async function multiloaderMainPM({ params }) {
  const [objective, users] = await Promise.all([
    getObjectiveById({ params }),
    getUsers(),
  ]);

  return json({ objective, users });
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
