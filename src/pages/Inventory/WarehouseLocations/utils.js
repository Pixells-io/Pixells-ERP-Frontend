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


//ONE FORM SAVE SLOTS
export async function saveSlots(data){
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
    return response.json()
}

//SAVE SLOTS
export async function saveNewConfigSlots(sublevelData) {
  for (const data of sublevelData) {
    const { codes, names, variable_id } = data;

    await fetch(  `${import.meta.env.VITE_SERVER_URL}inventory/save-sublocation-var-slots`, {
      method: 'POST',
      body: JSON.stringify({
        code: codes,
        name: names,
        variable_id: variable_id
      }),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    });
  }
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



//SAVE LOCATIONS 
export async function saveNewUbication(data) {
  
  const info={
    var_id:data.getAll("var_id[]"),
    from:data.getAll("from[]"),
    to:data.getAll("to[]"),
    inventory_id:data.get("inventory_id"),
    name:data.get("name"),
    active:data.get("active"),
    sales_available:data.get("sales_available"),
    min_quantity:data.get("min_quantity"),
    max_quantity:data.get("max_quantity"),
    max_weight:data.get("max_weight"),
    barcode:data.get("barcode")
  };
  
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/save-sublocation`,
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

//GET LOCATIONS
export async function getLocations() {
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

export async function multiLoaderUbication() {
  const [locationData, subLocationData] = await Promise.all([
    getLocations(),
    getsubLocation(),
  ]);
  return json({locationData, subLocationData });
}

export async function multiLoaderData() {
  const [subLocationData, warehousesData] = await Promise.all([
    getsubLocation(),
    getWarehouses(),
  ]);
  return json({subLocationData, warehousesData });
}
