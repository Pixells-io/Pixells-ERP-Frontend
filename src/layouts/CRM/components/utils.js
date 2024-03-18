export async function saveNewLead(data) {
  const services = [];
  for (const [key, value] of data.entries()) {
    if (key === "services") {
      services.push(Number(value));
    }
  }
  const person = {
    type: Number(data.get("type")),
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

  console.log(person);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/store-person`,
    {
      method: "POST",
      body: JSON.stringify(person),
    }
  );
  console.log(response);

  return response;
}
