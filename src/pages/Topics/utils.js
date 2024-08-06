import Cookies from "js-cookie";

export async function saveNewTopic(data) {

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}topics/create-topic`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}