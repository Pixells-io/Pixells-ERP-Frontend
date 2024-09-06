import Cookies from "js-cookie";
import { json } from "react-router-dom";


//SAVE PRODUCTS
export async function saveNewProduct(data) {
  const info = {
    code: data.get("code"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-product`,
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

export async function getCategories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/get-categories`,
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

export async function destroyCategory(data) {
  const info = {
    category_id: data.get("category_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/destroy-categories`,
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

export async function editCategory(data) {
  const info = {
    category_id: data.get("category_id"),
    code: data.get("code"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/edit-categories`,
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

export async function getSuppliers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}supplier/get`,
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

export async function multiloaderArticle() {
  const [categories, warehouses,suppliers,attributes] = await Promise.all([
    getCategories(),
    getWarehouses(),
    getSuppliers(),
    getAttributes(),
  ]);
  return json({categories, warehouses, suppliers,attributes });
}

export async function multiloaderInventory() {
  const [categories, attributes] = await Promise.all([
    getCategories(),
    getAttributes(),
  ]);
  return json({ categories, attributes,  });
}

export async function getAttributes() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/get-attributes`,
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

export async function saveAttribute(data) {
  const names = data.getAll("name[]");
  const statuses = names.map(
    (name, index) => data.get(`status-${index + 1}`) || "0",
  );

  const info = {
    name: names,
    status: statuses,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-attributes`,
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

export async function editAttribute(data) {
  const attribute_id = data.get("attribute_id");
  const name = data.get("name");
  const status = !!data.get("status") ? "1" : "0";

  const info = {
    attribute_id: attribute_id,
    name: name,
    status: status,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/edit-attributes`,
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

export async function destroyAttribute(data) {
  const info = {
    attribute_id: data.get("attribute_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/destroy-attributes`,
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

export async function saveAttributeSlots(data) {
  const names = data.getAll("name[]");
  const codes = data.getAll("code[]");
  const attribute_id = data.get("attribute_id");

  const info = {
    name: names,
    code: codes,
    attribute_id: attribute_id,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-attributes-slots`,
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

export async function updateAttributeSlot(data) {
  const name = data.get("name");
  const code = data.get("code");
  const slot_id = data.get("slot_id");

  const info = {
    name: name,
    code: code,
    slot_id: slot_id,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/edit-attributes-slots`,
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

export async function destroyAttributeSlot(data) {
  const info = {
    attribute_id: data.get("attribute_id"),
    slot_id: data.get("slot_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/destroy-attributes-slots`,
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