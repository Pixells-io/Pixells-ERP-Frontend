import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getSuppliers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}supplier/get`,
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

export async function saveNewSuppliers(data) {
  const info = {
    rfc: data.get("rfc"),
    cfdi_use: data.get("cfdi_use"),
    type_supplier: data.get("type_supplier"),
    group_supplier: data.get("group_supplier"),
    fiscal_name: data.get("fiscal_name"),
    currency: data.get("currency"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/create`,
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

export async function getSupplier({params}) {
  const id = params.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}supplier/get-supplier/${id}`,
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

export async function editSupplier(data) {
  const info = {
    rfc: data.get("rfc"),
    cfdi_use: data.get("cfdi_use"),
    type_supplier: data.get("type_supplier"),
    group_supplier: data.get("group_supplier"),
    fiscal_name: data.get("fiscal_name"),
    currency: data.get("currency"),
    supplier_id: data.get("supplier_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/edit`,
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
    supplier_id: data.get("supplier_id"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    city: data.get("city"),
    cologne: data.get("cologne"),
    state: data.get("state"),
    country: data.get("country"),
    shopping_person: data.get("shopping_person"),
    comment: data.get("comment"),
    start: data.get("start"),
    end: data.get("end"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/create-general-info`,
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