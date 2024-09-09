import Cookies from "js-cookie";
import { json } from "react-router-dom";


//SAVE PRODUCTS
export async function saveNewProduct(data) {
  // Crear el objeto FormData para enviar los datos
  const formData = new FormData();

  // Convertir los valores booleanos correctamente
  const convertToBoolean = (value) =>
    value === "true" ? true : value === "false" ? false : value;

  // Recoger la información del producto en el objeto FormData
  formData.append("type", parseInt(data.get("type")));
  formData.append("code", data.get("code"));
  formData.append("name", data.get("name"));
  formData.append("cost_center_id", parseInt(data.get("cost_center_id")));
  formData.append("preferred_warehouse_id", parseInt(data.get("preferred_warehouse_id")));
  formData.append("price", data.get("price"));
  formData.append("category_id", parseInt(data.get("category_id")));
  formData.append("barcode", data.get("barcode"));
  formData.append("measure", data.get("measure"));
  formData.append("raw_material", convertToBoolean(data.get("raw_material")));
  formData.append("buys", convertToBoolean(data.get("buys")));
  formData.append("sale", convertToBoolean(data.get("sale")));
  formData.append("subject_to_tax", convertToBoolean(data.get("subject_to_tax")));
  formData.append("available_for_return", convertToBoolean(data.get("available_for_return")));
  formData.append("manufacturing_available", convertToBoolean(data.get("manufacturing_available")));
  formData.append("manufacturer", data.get("manufacturer"));
  formData.append("active", convertToBoolean(data.get("active")));
  formData.append("from_active", data.get("from_active"));
  formData.append("to_active", data.get("to_active"));
  formData.append("valuation_method", data.get("valuation_method"));
  formData.append("min_stock", data.get("min_stock"));
  formData.append("max_stock", data.get("max_stock"));
  formData.append("default_supplier", parseInt(data.get("default_supplier")));

  // Añadir la imagen principal al FormData
  if (data.get("principal_image")) {
    formData.append("primary_img", data.get("principal_image"));
  }

  // Si es un producto variable, añadir imágenes secundarias y variables
  if (parseInt(data.get("type")) === 1) {
    const variableGroups = data.get("variable_groups")
      ? JSON.parse(data.get("variable_groups"))
      : [];

    formData.append("variable_groups", JSON.stringify(variableGroups));

    // Agregar cada imagen secundaria al formData como array
    const second_images = data.getAll("images[]");  // Recoger todas las imágenes del array
    second_images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });
  }

  // Realizar la solicitud de creación del producto
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}products/create-product`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
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