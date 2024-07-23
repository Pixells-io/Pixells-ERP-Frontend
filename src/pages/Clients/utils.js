import Cookies from "js-cookie";

export async function getAuthClient() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}client-platform/get-auth-info`,
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

export async function storeDocument(data) {
  const formData = new FormData();

  formData.append("document_file", data.get("document_file"));
  formData.append("master", data.get("master"));
  formData.append("name", data.get("name"));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/store-documents`,
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

export async function editClientData(data) {
  const edit = {
    client_id: data.get("client_id"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/edit-info`,
    {
      method: "POST",
      body: JSON.stringify(edit),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function storeRequiredDocument(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/require-document-store`,
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

export async function storeRequiredInterview(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/interview-question-save`,
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
