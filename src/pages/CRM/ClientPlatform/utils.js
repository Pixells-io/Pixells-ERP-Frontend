import Cookies from "js-cookie";

export async function loginClient(data) {
  const info = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/login`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}
