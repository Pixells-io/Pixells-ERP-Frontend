import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewWarehouse(data) {
console.log(data)
  const info = {
    name: data.get("name"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    city: data.get("city"),
    colony: data.get("colony"),
    state: data.get("state"),
    country: data.get("country"),
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

  export async function getWarehouseById(id) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-inventory/${id}`,
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

  export async function editWarehouse(data) {

    const info = {
      name: data.get("name"),
      street: data.get("street"),
      ext: data.get("ext"),
      int: data.get("int"),
      cp: data.get("cp"),
      city: data.get("city"),
      colony: data.get("colony"),
      state: data.get("state"),
      country: data.get("country"),
      inventory_id: data.get("inventory_id")
    };
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/edit-inventory`,
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

  export async function destroyWarehouse(data) {
    const info = {
      inventory_id_id: data.get("inventory_id"),
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/destroy-inventory`,
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
  