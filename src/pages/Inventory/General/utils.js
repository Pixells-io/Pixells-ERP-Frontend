import Cookies from "js-cookie";
import { json } from "react-router-dom";


//SAVE PRODUCTS
export async function saveNewProduct(formData) {
  const type = parseInt(formData.get("type"));

  const info = {
    type,
    code: formData.get("code"),
    name: formData.get("name"),
    costCenterId: parseInt(formData.get("cost_center_id")),
    preferred_warehouse_id: parseInt(formData.get("preferred_warehouse_id")),
    price: formData.get("price"),
    category_id: parseInt(formData.get("category_id")),
    barcode: formData.get("barcode"),
    measure: formData.get("measure"),
    rawMaterial: formData.get("raw_material"),
    buys: formData.get("buys"),
    sale: formData.get("sale"),
    subject_to_tax: formData.get("subject_to_tax"),
    available_for_return: formData.get("available_for_return"),
    manufacturing_available: formData.get("manufacturing_available"),
    manufacturer: formData.get("manufacturer"),
    active: formData.get("active") === "true",
    from_active: formData.get("from_active"),
    to_active: formData.get("to_active"),
    principal_image: formData.get("principal_image"),
    valuation_method: formData.get("valuation_method"),
    min_stock: formData.get("min_stock"),
    max_stock: formData.get("max_stock"),
    default_supplier: parseInt(formData.get("default_supplier")),
  };

  if (type === 1) {
    info.variables = formData.get("variable_groups") ? JSON.parse(formData.get("variable_groups")) : [];
    info.second_images = formData.get("images") ? JSON.parse(formData.get("images")) : [];
  }
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