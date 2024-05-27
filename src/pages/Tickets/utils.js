import Cookies from "js-cookie";

export async function saveNewTicket(data) {
  const users = [];
  const areas = [];
  for (const [key, value] of data.entries()) {
    if (key === "user_id") {
      users.push(Number(value));
    }
    if (key === "area_id") {
      areas.push(Number(value));
    }
  }
  const info = {
    issue: data.get("issue"),
    description: data.get("description"),
    importance: data.get("importance"),
    category_ticket: data.get("category_ticket"),
    users: users,
    areas: areas,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/store-ticket`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response;
}
