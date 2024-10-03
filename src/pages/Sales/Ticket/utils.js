import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function multiLoaderListTickets() {
  const [clients, listPrice, costCenter, users] = await Promise.all([
    getClients(),
    getListPrice(),
    getCostCenter(),
    getUsers(),
  ]);

  return json({ clients, listPrice, costCenter, users });
}

export async function multiLoaderListEditTickets() {
  const [clients, listPrice, costCenter, users] = await Promise.all([
    getClients(),
    getListPrice(),
    getCostCenter(),
    getUsers(),
  ]);

  return json({ clients, listPrice, costCenter, users });
}

export async function getClients() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}client/get`,
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

export async function getListPrice() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-price-lists`,
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

export async function getCostCenter() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}accounting/get-cost-center`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Ups", { status: 500 });
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
