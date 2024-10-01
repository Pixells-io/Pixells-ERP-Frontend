import Cookies from "js-cookie";
import { json } from "react-router-dom";

//MOVEMENTS
export async function getStocksMovements() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-stocks-movements`,
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

//SAVE ENTRY
export async function saveStockMovement(formData) {
  const info = {
    category: parseInt(formData.get("category")),
    rel_id: parseInt(formData.get("rel_id")),
    movement_type: formData.get("movement_type"),
    inventory_in: parseInt(formData.get("inventory_in")),
    inventory_out: parseInt(formData.get("inventory_out")),
    comment: formData.get("comment"),
    urgency: parseInt(formData.get("urgency")),
    receive_date: formData.get("receive_date"),
    products: JSON.parse(formData.get("products")),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/save-stock-movement`,
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

//GET CATALOGS
export async function getCatalogs() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-catalogs`,
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

export async function getCatalogById(data) {
  const INFO = data;
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/get-catalog-info`,
    {
      method: "POST",
      body: JSON.stringify(INFO),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  return response.json();
}

export async function getProductCatalog() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-price-list-products-catalog`,
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

//GET WAREHOUSES
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

//GET CATEGORIES
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

export async function multiLoaderMovements() {
  const [warehouses, categories, catalogs, products, locations] =
    await Promise.all([
      getWarehouses(),
      getCategories(),
      getCatalogs(),
      getProductCatalog(),
      getLocations(),
    ]);
  return json({ warehouses, categories, catalogs, products, locations });
}
