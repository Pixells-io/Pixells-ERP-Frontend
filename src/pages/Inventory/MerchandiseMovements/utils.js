import Cookies from "js-cookie";
import { json } from "react-router-dom";

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

export async function getProductCatalog(){
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

export async function multiLoaderMovements() {
    const [catalogs, products] = await Promise.all([
        getCatalogs(),
        getProductCatalog(),
      ]);
      return json({catalogs, products});
}