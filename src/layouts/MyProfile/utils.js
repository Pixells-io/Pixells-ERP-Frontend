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

export async function getProfileAzure() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}azure/get-user`,
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

export async function getPermissionsAzure() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}azure/get-permissions`,
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
  const [profile, permission, azureUser, permissionAzure] = await Promise.all([
    getProfileGoogle(),
    getPermission(),
    getProfileAzure(),
    getPermissionsAzure(),
  ]);

  return json({ profile, permission, azureUser, permissionAzure });
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

export async function savePermissionAzure(data) {
  const info = {
    one: data.get("1"),
    two: data.get("2"),
    three: data.get("3"),
    four: data.get("4"),
    five: data.get("5"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}azure/save-permissions`,
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

//AZURE
export async function loginAzureToken() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}azure/login`,
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

//META
export async function loginMetaToken() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}meta/login`,
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
