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

export async function getPermission() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}google/get-permission`,
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

export async function getProfileGoogle() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}google/get-profile`,
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

export async function multiloaderGoogleIntegrations() {
  const [profile, permission] = await Promise.all([
    getProfileGoogle(),
    getPermission(),
  ]);

  return json({ profile, permission });
}

export async function savePermissionGoogle(data) {
  const info = {
    one: data.get("1"),
    two: data.get("2"),
    three: data.get("3"),
    four: data.get("4"),
    five: data.get("5"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}google/store-google-permissions`,
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

export async function destroyGoogleKeys() {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}google/destroy-apis-google`,
    {
      method: "POST",
      body: [],
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
