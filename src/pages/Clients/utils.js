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
