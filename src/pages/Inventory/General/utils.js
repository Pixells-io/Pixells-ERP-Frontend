import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getCategories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/get-categories`,
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

export async function saveCategory(data) {
  const info = {
    code: data.get("code"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/save-categories`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function destroyCategory(data) {
  const info = {
    category_id: data.get("category_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/destroy-categories`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function editCategory(data) {
  const info = {
    category_id: data.get("category_id"),
    code: data.get("code"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/edit-categories`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function multiloaderInventory() {
  const [categories, attributes] = await Promise.all([
    getCategories(),
    getAttributes(),
  ]);
  return json({ categories, attributes });
}

export async function getAttributes() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/get-attributes`,
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

export async function saveAttribute(data) {
  const names = data.getAll("name[]");
  const statuses = names.map(
    (name, index) => data.get(`status-${index + 1}`) || "0",
  );

  const info = {
    name: names,
    status: statuses,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-attributes`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function saveAttributeSlots(data) {
  const names = data.getAll("name[]");
  const codes = data.getAll("code[]");
  const attribute_id = data.get("attribute_id");

  const info = {
    name: names,
    code: codes,
    attribute_id: attribute_id,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-attributes-slots`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function updateAttributeSlot(data) {
  const name = data.get("name");
  const code = data.get("code");
  const slot_id = data.get("slot_id");

  const info = {
    name: name,
    code: code,
    slot_id: slot_id,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/edit-attributes-slots`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function destroyAttributeSlot(data) {
  const info = {
    attribute_id: data.get("attribute_id"),
    slot_id: data.get("slot_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/destroy-attributes-slots`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}