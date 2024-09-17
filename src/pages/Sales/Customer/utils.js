import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getCustomers() {
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

export async function saveNewCustomer(data) {
  const info = {
    client_code: Number(data.get("client_code")),
    client_type: Number(data.get("client_type")),
    rfc: data.get("rfc"),
    client_group: Number(data.get("client_group")),
    currency: data.get("currency"),
    name: data.get("fiscal_name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/create`,
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

export async function getCustomer({ params }) {
  const id = params.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}client/get/${id}`,
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

export async function editCustomer(data) {
  const info = {
    // cfdi_use: data.get("cfdi_use"),
    client_code: Number(data.get("client_code")),
    client_type: Number(data.get("client_type")),
    rfc: data.get("rfc"),
    client_group: Number(data.get("client_group")),
    currency: data.get("currency"),
    name: data.get("fiscal_name"),
    client_transactional_id: Number(data.get("client_transactional_id")),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/edit`,
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

export async function destroyCustomer(data) {
  const info = {
    client_transactional_id: data.get("customer_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/destroy`,
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

export async function createGeneralInfo(data) {
  const info = {
    client_transactional_id: Number(data.get("client_transactional_id")),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    city: data.get("city"),
    cologne: data.get("cologne"),
    state: data.get("state"),
    country: data.get("country"),
    shopping_person: 0,
    comment: data.get("comment"),
    start: data.get("start"),
    end: data.get("end"),
    active: data.get("status") == "true" ? true : false,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/create-address-info`,
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

export async function editGeneralInfo(data) {
  const info = {
    client_transactional_id: Number(data.get("client_transactional_id")),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    city: data.get("city"),
    cologne: data.get("cologne"),
    state: data.get("state"),
    country: data.get("country"),
    shopping_person: 0,
    comment: data.get("comment"),
    start: data.get("start"),
    end: data.get("end"),
    info_id: data.get("info_id"),
    active: data.get("status") == "true" ? true : false,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/edit-address-info`,
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
