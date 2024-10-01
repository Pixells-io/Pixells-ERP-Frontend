import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";

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
    cfdi: data.get("cfdi"),
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

  const startDate = !!data.get("start")
    ? format(data.get("start"), "yyyy-MM-dd")
    : "";
  const endDate = !!data.get("end")
    ? format(data.get("end"), "yyyy-MM-dd")
    : "";

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
    shopping_person: data.get("shopping_person"),
    comment: data.get("comment"),
    start: startDate,
    end: endDate,
    active: !!data.get("status") ? "1" : "0",
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

export async function createContact(data) {
  const info = {
    client_transactional_id: Number(data.get("client_transactional_id")),
    name: data.get("name"),
    middle_name: data.get("middle_name"),
    last_name: data.get("last_name"),
    email: data.get("email"),
    phone: data.get("phone"),
    position: data.get("position"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/create-contact`,
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

export async function editContact(data) {
  const info = {
    name: data.get("name"),
    middle_name: data.get("middle_name"),
    last_name: data.get("last_name"),
    email: data.get("email"),
    phone: data.get("phone"),
    position: data.get("position"),
    contact_id: data.get("contact_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/edit-contact`,
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

export async function destroyContact(data) {
  const info = {
    contact_id: data.get("contact_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/destroy-contact`,
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
    client_transactional_id: Number(data.get("client_transactional_id")),
    regimen_fiscal: data.get("regimen_fiscal"),
    uso_cfdi: data.get("uso_cfdi"),
    metodo_pago: data.get("metodo_pago"),
    email: data.get("email"),
    forma_pago: data.get("forma_pago"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/create-billing-info`,
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

export async function editBillingInfo(data) {
  const info = {
    client_transactional_id: Number(data.get("client_transactional_id")),
    billing_id: data.get("billing_id"),
    regimen_fiscal: data.get("regimen_fiscal"),
    uso_cfdi: data.get("uso_cfdi"),
    metodo_pago: data.get("metodo_pago"),
    email: data.get("email"),
    forma_pago: data.get("forma_pago"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/edit-billing-info`,
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

export async function destroyBillingInfo(data) {
  const info = {
    billing_id: data.get("billing_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}info/destroy-billing-info`,
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
    client_transactional_id: Number(data.get("client_transactional_id")),
    conditions: data.get("conditions"),
    interest: data.get("interest"),
    days_of_credit: data.get("days_of_credit"),
    credit_limit: data.get("credit_limit"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/create-payment-conditions`,
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

export async function editPaymentConditions(data) {
  const info = {
    payment_id: Number(data.get("payment_id")),
    conditions: data.get("conditions"),
    interest: data.get("interest"),
    days_of_credit: data.get("days_of_credit"),
    credit_limit: data.get("credit_limit"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client/edit-payment-conditions`,
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

