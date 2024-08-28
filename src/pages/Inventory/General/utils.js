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
  const [categories] = await Promise.all([
    getCategories(),
  ]);
  return json({ categories });
}