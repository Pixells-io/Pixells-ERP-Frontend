import Cookies from "js-cookie";

export async function SearchAction(data) {
  const info = {
    chat: data.get("chat"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/search`,
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

export async function saveGroup(data) {
  const info = {
    chat: data.get("chat"),
  };

  console.log(data);

  /*const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/search`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;*/

  return 1;
}
