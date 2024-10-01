//Stocks
import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getInventories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-inventories-catalog`,
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

export async function getProductCatalog() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-products-catalog`,
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

export async function getInventoryStock({ params }) {
  try {
    const id = params.id;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-inventory-stock/${id}`,
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

export async function getProductStock({ params }) {
  try {
    const id = params.id;
    const type = params.type;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-product-stock/${type}/${id}`,
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

export async function multiloaderStock() {
  const [inventoriesData, productsData] = await Promise.all([
    getInventories(),
    getProductCatalog(),
  ]);
  return json({ inventoriesData, productsData });
}
