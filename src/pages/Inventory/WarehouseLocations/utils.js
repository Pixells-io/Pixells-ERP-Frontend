import Cookies from "js-cookie";
import { json } from "react-router-dom";


//SAVE SUBLEVES
export async function saveNewConfigure(data) {
  const names = data.getAll("name[]");
  const statuses = names.map(
    (name, index) => data.get(`status-${index + 1}`) || "0",
  );

  const info = {
    name: names,
    status: statuses,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/save-sublocation-var`,
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


//SAVE SLOTS
export async function saveNewConfigSlots(data) {
  const info = {
    code: data.getAll("code[]"),
    name: data.getAll("name[]"),
    variable_id: data.get("variable_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/save-sublocation-var-slots`,
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


//GET SUBLEVES
export async function getsubLocation() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-sublocation-var`,
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



//SAVE SUBLOCATIONS 
export async function saveNewUbication(data) {
  
      // Aquí puedes procesar los datos del formulario
      // formData.getAll('var_id[]') te dará el array de var_id
      // formData.getAll('from[]') te dará el array de from
      // formData.getAll('to[]') te dará el array de to
      // formData.get('active') te dará '1' o '0'

 /* const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/save-sublocation`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );*/

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


export async function multiLoaderData() {
  const [subLocationData, warehousesData] = await Promise.all([
    getsubLocation(),
    getWarehouses(),
  ]);
  return json({subLocationData, warehousesData });
}
