import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewQuoteOrder(data) {
 
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}shopping/create-quotes`,
    {
      method: "POST",
      body: data,
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