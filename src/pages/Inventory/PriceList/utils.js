
import Cookies from "js-cookie";
import { json } from "react-router-dom";


export async function getList(){
  try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}inventory/get-price-lists`,
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
export async function getBaseList({ params }) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-price-list/${id}`,
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
export async function getBaseListById({id}) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}inventory/get-price-list/${id}`,
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

export async function multiloaderList() {
    const [base_list, products] = await Promise.all([
      getList(),
      getProductCatalog(),
    ]);
    return json({base_list, products});

}

export async function multiloaderListBase({ params }) {
  const [list,products] = await Promise.all([
    getBaseList({params}),
    getProductCatalog(),
  ]);
  return json({list,products});
}

export async function savePriceList(data) {

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}inventory/create-price-list`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  return response;
}
