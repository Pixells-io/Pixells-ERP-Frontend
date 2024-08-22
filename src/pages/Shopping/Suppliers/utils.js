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
    status: data.get("status") == "true" ? "1" : "0" ,
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

export async function createBillingInfo(data) {
  const info = {
    supplier_id: data.get("supplier_id"),
    regimen_fiscal: data.get("regimen_fiscal"),
    uso_cfdi: data.get("uso_cfdi"),
    metodo_pago: data.get("metodo_pago"),
    email: data.get("email"),
    forma_pago: data.get("forma_pago"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/create-billing-info`,
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

export async function createPaymentConditions(data) {
  const info = {
    supplier_id: data.get("supplier_id"),
    conditions: data.get("conditions"),
    interest: data.get("interest"),
    days_of_credit: data.get("days_of_credit"),
    credit_limit: data.get("credit_limit"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/create-payment-conditions`,
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