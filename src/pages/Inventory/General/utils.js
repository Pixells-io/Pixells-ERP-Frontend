import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveCategory(data) {
    const info = {
        code: data.get("code"),
        name: data.get("name"),
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/save-categories`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
  
    return response.json();
}
