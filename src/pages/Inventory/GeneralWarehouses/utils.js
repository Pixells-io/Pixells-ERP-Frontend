import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewWarehouse(data) {

   
  const info = {
    name: data.name,
    street: data.street,
    ext: data.ext,
    int: data.int,
    cp: data.cp,
    city: data.city,
    colony: data.colony,
    state: data.state,
    country: data.country,
  };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/save-inventory`,
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

  export async function getWarehouses() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-inventories`,
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