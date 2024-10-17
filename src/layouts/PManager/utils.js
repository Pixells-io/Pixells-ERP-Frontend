import Cookies from "js-cookie";
import { json } from "react-router-dom";

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
