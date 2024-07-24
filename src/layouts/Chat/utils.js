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
    name: data.get("name"),
    users: data.getAll("users"),
  };

  const formData = new FormData();

  formData.append("file", data.get("group_image"));
  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/create-chat`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
