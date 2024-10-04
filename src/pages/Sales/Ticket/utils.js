import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function multiLoaderListTickets() {
  const [infoCreateSales] = await Promise.all([
    getInfoCreateSales()
  ]);

  return json({ infoCreateSales });
}

export async function multiLoaderListEditTickets() {
  const [infoCreateSales] = await Promise.all([
    getInfoCreateSales(),
  ]);

  return json({ infoCreateSales });
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
  console.log(data);
}