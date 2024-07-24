import { getChats } from "@/lib/actions";
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
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Ups", { status: 500 });
  }
}

export async function getChatWithId(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/get-messages/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
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
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getChatInfo({ params }) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/get-chat-info/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderChat2({ params }) {
  const [chat, user, chats] = await Promise.all([
    getChat({ params }),
    getAuthUser(),
    getChats(),
  ]);

  return json({ chat, user, chats });
}

export async function storeMensagge(data) {
  const info = {
    chat: data.get("chat_id"),
    msg: data.get("message"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/create-message`,
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

export async function storeMensaggeFile(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/create-message-file`,
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

export async function storeMensaggeResend(data) {
  const msg_id = data.get("msg_id");
  const chat_id = data.get("chat_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/resend-message/${msg_id}/${chat_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function storeMensaggeReply(data) {
  const info = {
    message_id: data.get("message_id"),
    message: data.get("message"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}chat/reply-mesagge`,
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
