import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getCatalogsTransformation() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}transformation/get-catalog-formula-create`,
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
