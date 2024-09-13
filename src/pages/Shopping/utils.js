import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewQuoteOrder(data) {

  let totalRow = data.getAll("totalRow[]");
  let arrayArticles = [];
  for (let i = 0; i < totalRow.length; i++) {
    arrayArticles.push({
      master_product: data.get(`master_product[${i}]`),
      variations: data.get(`variations[${i}]`),
      sub_total: data.get(`sub_total[${i}]`),
      discount: data.get(`discount[${i}]`),
      taxes: data.get(`taxes[${i}]`),
      quantity: data.get(`quantity[${i}]`),
      unit: data.get(`unit[${i}]`),
      delivery_date: data.get(`delivery_date[${i}]`),
      total: data.get(`total[${i}]`),
    });
  }

  const info = {
    document_number: data.get("document_number"),
    inventory_id: data.get("inventory_id"),
    supplier_id: data.get("supplier_id"),
    document_created: data.get("document_created"),
    delivery_date: data.get("delivery_date"),
    payment_condition: data.get("payment_condition"),
    comments: data.get("comments"),
    subtotal: data.get("subtotal"),
    taxes: data.get("taxes"),
    total: data.get("total"),
    products: arrayArticles,
  }

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/create-quotes`,
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

export async function getProducts() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}products/shopping-catalog`,
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

export async function getQuotesOrder() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-quotes`,
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

export async function destroyQuoteOrder(data) {

  const info = {
    quote_id: data.get("quote_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/destroy-quotes`,
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

export async function saveNewPurchase(data) {
 
  console.log("entra");
}