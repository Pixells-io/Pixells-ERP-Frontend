import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewInduction(data) {
  const areas = [];

  for (const [key, value] of data.entries()) {
    if (key === "areas") {
      areas.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    tipo: data.get("tipo"),
    description: data.get("description"),
    responsable: data.get("responsable"),
    areas: areas,
  };

  const response = await fetch(
    `${
      import.meta.env.VITE_SERVER_URL
    }organization-development/store-induction`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response;
}

export async function saveNewTraining(data) {
  const areas = [];
  const positions = [];
  const users = [];

  for (const [key, value] of data.entries()) {
    if (key === "areas") {
      areas.push(Number(value));
    }
    if (key === "positions") {
      positions.push(Number(value));
    }
    if (key === "users") {
      users.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    type: data.get("type"),
    class_type: data.get("class_type"),
    location: data.get("location"),
    teacher_name: data.get("teacher_name"),
    teacher_last_name: data.get("teacher_last_name"),
    teacher_second_last_name: data.get("teacher_second_last_name"),
    class_date: data.get("class_date"),
    class_real_date: data.get("class_real_date"),
    areas: areas,
    positions: positions,
    users: users,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization-development/store-training`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response;
}
