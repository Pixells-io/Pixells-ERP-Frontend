import Cookies from "js-cookie";

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
