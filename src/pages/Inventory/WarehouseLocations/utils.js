import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewConfigure(data) {
    const names = data.getAll('name[]');
    const statuses = names.map((name, index) => data.get(`status-${index + 1}`) || '0');

  const info = {
    name: names,
    status:statuses
  };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-sublocation-var`,
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



  export async function getsubLocation() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-sublocations`,
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