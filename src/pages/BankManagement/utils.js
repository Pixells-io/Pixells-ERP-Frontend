import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getBanks() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/get-banks`,
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

export async function saveBank(data) {
    const info = {
        country: data.get("country"),
        bank_string: data.get("bank_string"),
        type: data.get("type"),
        bank_id: data.get("bank_id"),
        name: data.get("name"),
        phone: data.get("phone"),
        mail: data.get("mail"),
        street: data.get("street"),
        int : data.get("int"),
        ext : data.get("ext"),
        cologne : data.get("cologne"),
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/save-bank`,
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
