import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";

//SAVE SERVICE PRINCIPAL
export async function saveNewService(data) {
  const info = {
    name: data.get("name"),
    description: data.get("description"),
    category_id: parseInt(data.get("categories_id")),
    color: data.get("color"),
    price: parseFloat(data.get("price")),
    code: data.get("code"),
    sale: data.get("sale") == "on" ? 1 : 0,
    shopping: data.get("shopping") == "on" ? 1 : 0,
    cost_center_id: parseInt(data.get("cost_center_id")),
    price_list: parseInt(data.get("price_list_id")),
    bar_code: data.get("barcode"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-principal-information-service`,
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

//SAVE SERVICE GENERAL
export async function saveNewGeneralTab(data) {
  const info = {
    service_id: data.get("id"),
    taxes: data.get("taxes") == "on" ? 1 : 0,
    return: data.get("return") == "on" ? 1 : 0,
    processes:data.get("processes") == "on" ? 1 : 0,
    manufacturer: data.get("manufacturer"),
    comments: data.get("code"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-general-information-service`,
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


//EDIT SERVICE PRINCIPAL
export async function updatePrincipalTab(data) {
  const info = {
    service_id:data.get("id"),
    name: data.get("name"),
    description: data.get("description"),
    category_id: parseInt(data.get("categories_id")),
    color: data.get("color"),
    price: parseFloat(data.get("price")),
    code: data.get("code"),
    sale: data.get("sale") == "on" ? 1 : 0,
    shopping: data.get("shopping") == "on" ? 1 : 0,
    cost_center_id: parseInt(data.get("cost_center_id")),
    price_list: parseInt(data.get("price_list_id")),
    bar_code: data.get("barcode"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-principal-information-service`,
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

//EDIT SERVICE GENERAL
export async function updateGeneralTab(data) {
  const info = {
    service_id: data.get("id"),
    taxes: data.get("taxes") == "on" ? 1 : 0,
    return: data.get("return") == "on" ? 1 : 0,
    processes:data.get("processes") == "on" ? 1 : 0,
    manufacturer: data.get("manufacturer"),
    comments: data.get("code"),
  };
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-general-information-service`,
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

//GET SERVICES
export async function getServices() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-services`,
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

//GET SERVICES BY ID 
export async function getServiceById(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-service/${id}`,
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

//GET USER
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
//GET CONST_CENTER
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

//GET PRICE_LIST
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

//GET CATEGORIES
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

//GET COMBOS
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

//GET INFO TO COMBOS
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

//MULTILOADER TO CREATE
export async function multiLoaderServiceGeneral() {

  
  const [ categories, costCenter, priceList, users] = await Promise.all([

    getCategories(),
    getCostCenter(),
    getPriceList(),
    getUsers(),
  ]);
  return json({categories, costCenter, priceList, users });
}

//MULTILOADER TO MAIN GENERAL SERVICES
export async function multiLoaderServiceGeneral2() {
  const [services, categories, packages, categoriesServices] = await Promise.all([
    getServices(),
    getCategories(),
    getPackages(),
    getCategoriesAndServices(),
  ]);

  return json({
    services,
    categories,
    packages,
    categoriesServices,
  });
}

//MULTILOADER TO EDIT
export async function multiLoaderServiceGeneralDetails({ params }) {

  const id = params.id;
  const [servicesDetails, categories, costCenter, priceList, users] = await Promise.all([
    getServiceById(id),
    getCategories(),
    getCostCenter(),
    getPriceList(),
    getUsers(),
  ]);
  return json({ servicesDetails, categories, costCenter, priceList, users });
}