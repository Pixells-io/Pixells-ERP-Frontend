import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";

export async function getSalesTicket() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}sales/get-sales`,
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

export async function multiLoaderListTickets() {
  const [infoCreateSales] = await Promise.all([getInfoCreateSales()]);

  return json({ infoCreateSales });
}

export async function multiLoaderListEditTickets({ params }) {
  const id = params.id;
  const [infoCreateSales/*, ticketSale*/] = await Promise.all([
    getInfoCreateSales(),
    // getTicketSale(id),
  ]);

  return json({ infoCreateSales/*, ticketSale*/ });
}

export async function getInfoCreateSales() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}sales/get-info-create-sales`,
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

export async function getTicketSale(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}sales/get-sale/${id}`,
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

export async function getProductsByWharehouse(wharehouse) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}sales/get-info-create-sales-products/${wharehouse}`,
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

export async function saveNewTicketSale(data) {
  const products = JSON.parse(data.get("productsOrService")).map((p) => {
    return {
      type: p.type,
      inventory_stock_id: p.inventory_stock_id,
      service_id: p.service_id,
      price: p.value,
      discount: p.discount,
      tax: p.taxes,
      total: p.total,
      quantity: p.quantity,
      delivery_date: format(p.delivery_date, "yyyy-MM-dd"),
    };
  });

  const info = {
    price_list: data.get("price_list"),
    seller_id: data.get("seller_id"),
    client_id: data.get("client_id"),
    credit: data.get("credit"),
    expiration_date: format(data.get("expiration_date"), "yyyy-MM-dd"),

    productService: data.get("productService"),
    wharehouse: data.get("wharehouse"),

    sales_slots: products,
    comments: data.get("comments"),
    subtotal: data.get("subtotal"),
    taxes: data.get("taxes"),
    total: data.get("total"),
    shipping: data.get("shipping") == null ? "0" : data.get("shipping"),
    discount: data.get("totalDiscount"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}sales/store-sale`,
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
