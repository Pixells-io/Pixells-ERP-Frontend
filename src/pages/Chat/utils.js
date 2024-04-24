import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getChat({ params }) {
  const id = params.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/get-messages/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    return response.json();
  } catch (error) {
    return new Response("Ups", { status: 500 });
  }
}

export async function getAuthUser() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-user`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderChat2({ params }) {
  const [chat, user] = await Promise.all([getChat({ params }), getAuthUser()]);

  return json({ chat, user });
}

export async function storeMensagge(chat, msg) {
  const info = {
    chat: chat,
    msg: msg,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/create-message`,
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
