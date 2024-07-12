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
