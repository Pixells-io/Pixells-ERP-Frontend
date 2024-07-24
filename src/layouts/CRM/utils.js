import Cookies from "js-cookie";

export async function saveNewLead(data) {
  const services = [];
  for (const [key, value] of data.entries()) {
    if (key === "services") {
      services.push(Number(value));
    }
  }
  const person = {
    type: data.get("register_type"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    channel: data.get("channel"),
    service_id: services,
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/store-person`,
    {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  return response;
}

export async function saveNewClient(data) {
  const person = {
    type: data.get("register_type"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    channel: data.get("channel"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/store-client`,
    {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function saveImportClients(data) {
  const formData = new FormData();

  formData.append("file", data.get("file"));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/import-clients`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return 1;
}

export async function removeLead(data) {
  const id = data.get("lead_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/destroy_lead/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function removeClient(data) {
  const id = data.get("client_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/destroy_client/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function newSale(data) {
  const info = {
    client_id: data.get("client_id"),
    type_sale: data.get("type_sale"),
    services: data.getAll("service"),
    recurrency: data.getAll("recurrency"),
    ammount: data.getAll("ammount"),
    membership_id: data.get("membership_id"),
    recurrency_membership: data.get("recurrency_membership"),
    ammount_membership: data.get("ammount_membership"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/new-sale`,
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
