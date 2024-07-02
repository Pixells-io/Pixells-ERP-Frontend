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
