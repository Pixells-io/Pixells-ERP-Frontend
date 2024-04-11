export async function saveCategory(data) {
  const category = {
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-category`,
    {
      method: "POST",
      body: JSON.stringify(category),
    }
  );

  return response;
}

export async function saveService(data) {
  const service = {
    category_id: data.get("category"),
    position_id: data.get("position_id"),
    name: data.get("name"),
    description: data.get("description"),
    color: data.get("color"),
    //participants: data.get("participants"),
    //process: data.get("process"),
    //process_action: data.get("process_action"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-services`,
    {
      method: "POST",
      body: JSON.stringify(service),
    }
  );

  return response;
}
