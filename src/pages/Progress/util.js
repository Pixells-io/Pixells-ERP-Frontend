export async function saveService(data) {
  console.log(data);
  const service = {
    name: data.get("name"),
    description: data.get("description"),
    type: Number(data.get("type")),
    color: data.get("color"),
  };

  console.log(service);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-services`,
    {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);

  if (!response.ok) {
    throw response;
  }
}
