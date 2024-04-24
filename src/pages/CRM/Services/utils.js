import Cookies from "js-cookie";

export async function saveCategory(data) {
  const category = {
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-category`,
    {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response;
}

export async function saveService(data) {
  const service = {
    category_id: data.get("category"),
    position_id: data.get("position_id"),
    name: data.get("name"),
    description: data.get("description"),
    color: data.get("color"),
    //participants: data.get("participants"),
    //process: data.get("process"),
    //process_action: data.get("process_action"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-services`,
    {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response;
}

export async function savePackage(data) {
  console.log(data);
  const services = [];

  for (const [key, value] of data.entries()) {
    if (key === "service") {
      services.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    service: services,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-package`,
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
