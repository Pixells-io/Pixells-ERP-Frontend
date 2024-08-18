import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function storeChangeNewPassword(data) {
  const changePasswordInfo = {
    current_password: data.get("current_password"),
    new_password: data.get("new_password"),
    confirm_new_password: data.get("confirm_new_password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}auth/change-my-password`,
    {
      method: "POST",
      body: JSON.stringify(changePasswordInfo),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function loginGoogleToken() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}google/google`,
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

export async function getEmails() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}google/emails`,
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
