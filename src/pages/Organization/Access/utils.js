import Cookies from "js-cookie";
import { json } from "react-router-dom"

export async function restorePermission(formData) {
    const info = {
    module:parseInt(formData.get("module_id")),
    positions: parseInt(formData.getAll("positions[]"))
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/set-permissions`,
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