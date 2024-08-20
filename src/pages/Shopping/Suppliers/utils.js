import Cookies from "js-cookie";
import { json } from "react-router-dom";

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

export async function saveNewSuppliers(data) {
  const info = {
    rfc: data.get("rfc"),
    cfdi_use: data.get("cfdi_use"),
    type_supplier: data.get("type_supplier"),
    group_supplier: data.get("group_supplier"),
    fiscal_name: data.get("fiscal_name"),
    currency: data.get("currency"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}supplier/create`,
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
