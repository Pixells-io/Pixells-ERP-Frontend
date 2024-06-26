import Cookies from "js-cookie";

export async function saveNewMeet(data) {
  const meet = {
    title: data.get("name"),
    date: data.get("date"),
    start: data.get("start"),
    end: data.get("end"),
    users: data.getAll("users"),
    place: data.get("place"),
    meet_url: data.get("meet_url"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}calendar/store-meet`,
    {
      method: "POST",
      body: JSON.stringify(meet),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
