import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";


//SAVE SERVICE
export async function saveNewService(data) {
  const info = {
    description: data.get("description"),
    category_id: parseInt(data.get("categories_id")), 
    type:2, 
    color:data.get("color"), 
    price:parseFloat(data.get("price")), 
    code:data.get("code"),
    sale:data.get("sale") == 'on'? true:false,
    shopping:data.get("shopping") == 'on'? true:false,
    cost_center_id:parseInt(data.get("shopping")),
    price_list:parseInt(data.get("shopping")),
    bar_code:data.get("barcode"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-principal-information-service`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );

  return response.json();
}

export async function getUsers() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}organization/get-users`,
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
  
  export async function getCostCenter() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}accounting/get-cost-center`,
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        },
      );
      return response.json();
    } catch (error) {
      return new Response("Ups", { status: 500 });
    }
  }
  export async function getPriceList() {
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

  export async function multiLoaderServiceGeneral() {
    const [ categories,
      costCenter,
      priceList,users] = await Promise.all([
        getCategories(),
      getCostCenter(),
      getPriceList(),
      getUsers()
    ]);
    return json({ categories, costCenter, priceList,users });
  }


  export async function getCategories() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}services/get-categories`,
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
  
  export async function getPackages() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}services/get-packages`,
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

  export async function getCategoriesAndServices() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}services/get-categories-with-services`,
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
  

  export async function multiLoaderServiceGeneral2() {
    const [
      categories,
      packages,
      categoriesServices,
    ] = await Promise.all([
      getCategories(),
      getPackages(),
      getCategoriesAndServices(),
    ]);
  
    return json({
      categories,
      packages,
      categoriesServices,
    });
  }