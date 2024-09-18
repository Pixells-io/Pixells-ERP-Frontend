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
      unit: data.get(`unitHidden[${i}]`),
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

export async function getQuoteOrder({ params }) {
  try {
    const id = params.id;

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-quote/${id}`,
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

export async function updateQuoteOrder(data) {

  let totalRow = data.getAll("totalRow[]");
  let arrayArticlesNew = [];
  for (let i = 0; i < totalRow.length; i++) {
    if(data.get(`id_product[${i}]`) == ""){
      arrayArticlesNew.push({
        master_product: data.get(`master_product[${i}]`),
        variations: data.get(`variations[${i}]`),
        sub_total: data.get(`sub_total[${i}]`),
        discount: data.get(`discount[${i}]`),
        taxes: data.get(`taxes[${i}]`),
        quantity: data.get(`quantity[${i}]`),
        unit: data.get(`unitHidden[${i}]`),
        delivery_date: data.get(`delivery_date[${i}]`),
        total: data.get(`total[${i}]`),
      });
    }
  }

  let arrayArticlesDelete = [];
  let productsDelete = data.getAll("productDelete[]");
 
  for (let i = 0; i < productsDelete.length; i++) {
    arrayArticlesDelete.push({slot_id: productsDelete[i]});
  }

  const info = {
    quote_id: data.get("quote_id"),
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
    products: arrayArticlesNew,
    destroy_products: arrayArticlesDelete,
  }


  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/edit-quotes`,
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

export async function acceptQuoteOrder(data) {

  const info = {
    quote_id: data.get("quote_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/accept-quotes`,
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

export async function cancelQuoteOrder(data) {

  const info = {
    quote_id: data.get("quote_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/cancel-quotes`,
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


/* ordenes de compra */

export async function saveNewPurchase(data) {
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
      unit: data.get(`unitHidden[${i}]`),
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
    `${import.meta.env.VITE_SERVER_URL}shopping/create-orders`,
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

export async function getPurchases() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-orders`,
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

export async function getPurchase({ params }) {
  try {
    const id = params.id;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-order/${id}`,
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

export async function updatePurchase(data) {

  let totalRow = data.getAll("totalRow[]");
  let arrayArticlesNew = [];
  for (let i = 0; i < totalRow.length; i++) {
    if(data.get(`id_product[${i}]`) == ""){
      arrayArticlesNew.push({
        master_product: data.get(`master_product[${i}]`),
        variations: data.get(`variations[${i}]`),
        sub_total: data.get(`sub_total[${i}]`),
        discount: data.get(`discount[${i}]`),
        taxes: data.get(`taxes[${i}]`),
        quantity: data.get(`quantity[${i}]`),
        unit: data.get(`unitHidden[${i}]`),
        delivery_date: data.get(`delivery_date[${i}]`),
        total: data.get(`total[${i}]`),
      });
    }
  }

  let arrayArticlesDelete = [];
  let productsDelete = data.getAll("productDelete[]");
 
  for (let i = 0; i < productsDelete.length; i++) {
    arrayArticlesDelete.push({slot_id: productsDelete[i]});
  }

  const info = {
    order_id: data.get("order_id"),
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
    products: arrayArticlesNew,
    destroy_products: arrayArticlesDelete,
  }


  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/edit-orders`,
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

export async function acceptPurchase(data) {

  const info = {
    order_id: data.get("order_id"),
    payment_type: data.get("payment_type"),
    limit_credit_date: data.get("limit_credit_date"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/accept-orders`,
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

export async function cancelPurchase(data) {

  const info = {
    order_id: data.get("order_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/cancel-orders`,
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

export async function destroyPurchase(data) {

  const info = {
    order_id: data.get("order_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/destroy-orders`,
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

/* ordenes*/
export async function getRequestOrders() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-buys`,
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

export async function getRequestOrder({ params }) {
  try {
    const id = params.id;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}shopping/get-buy/${id}`,
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

export async function saveNewRequestOrder(data) {

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
      unit: data.get(`unitHidden[${i}]`),
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
    payment_type: data.get("payment_type"),
    limit_credit_date: data.get("limit_credit_date"),
    products: arrayArticles,
  }

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/create-buys`,
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

export async function destroyRequestOrder(data) {

  const info = {
    buy_id: data.get("buy_id"),
  };
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/destroy-buys`,
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