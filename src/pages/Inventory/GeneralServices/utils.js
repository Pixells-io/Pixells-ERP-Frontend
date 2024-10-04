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
    service_id: parseInt(data.get("info_id")),
    taxes: data.get("taxes") == "on" ? 1 : 0,
    return: data.get("return") == "on" ? 1 : 0,
    processes: data.get("processes") == "on" ? 1 : 0,
    status:data.get("status") == "on" ? 1 : 0,
    manufacturer: data.get("manufacturer"),
    comments: data.get("comments"),
  };

  const formData = new FormData();
  formData.append("image", data.get("image"));
  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-general-information-service`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  return response.json();
}

//SAVE USERS LISTS 
export async function saveNewUsersTab(data) {
  const info = {
    service_id: parseInt(data.get("info_id")),
    users: JSON.parse(data.get("users")),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-service-user`,
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

//SAVE PROCESS
export async function saveNewProcess(data) {
  const info = {
    service_id:parseInt(data.get("service_id")),
    name:data.get("title"), 
    category:parseInt(data.get("category_id")),
    description:data.get("description"),
    area:1
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/save-service-process`,
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
    service_id: parseInt(data.get("info_id")),
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
    service_id: parseInt(data.get("info_id")),
    taxes: data.get("taxes") == "on" ? 1 : 0,
    return: data.get("return") == "on" ? 1 : 0,
    processes: data.get("processes") == "on" ? 1 : 0,
    status:data.get("status") == "on" ? 1 : 0,
    manufacturer: data.get("manufacturer"),
    comments: data.get("comments"),
  };

  const formData = new FormData();
  formData.append("image", data.get("image"));
  formData.append("info", JSON.stringify(info));
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-general-information-service`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

//EDIT SERVICE USER
export async function EditServiceUserTab(data) {
  const info = {
    service_user: parseInt(data.get("service_user")),
    responsible: parseInt(data.get("responsible")),
  };
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-service-user`,
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

//EDIT SERVICE PROCCESS
export async function EditProcessTab(data) {
  const info = {
    service_step_id:parseInt(data.get("service_step_id")),
    last_step:parseInt(data.get("last_step")),
    category:parseInt(data.get("category_id")),
    name:data.get("title"),
    description:parseInt(data.get("description")),
    area:1,
  };
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-service-process`,
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

//DESTROY SERVICE USER 
export async function DestroytServiceUserTab(data) {
  const info = {
    service_user: parseInt(data.get("service_user")),
  };
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/destroy-service-user`,
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

//DESTROY PROCESS
export async function DestroytProcessTab(data) {
  const info = {
    service_step_id:parseInt(data.get("service_step_id")),
  };
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/destroy-service-process`,
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

//GET AREAS
export async function getAreas() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/organization/get-areas`,
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
  const [categories, costCenter, priceList, users] = await Promise.all([
    getCategories(),
    getCostCenter(),
    getPriceList(),
    getUsers(),
  ]);
  return json({ categories, costCenter, priceList, users });
}

//MULTILOADER TO MAIN GENERAL SERVICES
export async function multiLoaderServiceGeneral2() {
  const [services, categories, packages, categoriesServices] =
    await Promise.all([
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
  const [servicesDetails, categories, costCenter, priceList, users] =
    await Promise.all([
      getServiceById(id),
      getCategories(),
      getCostCenter(),
      getPriceList(),
      getUsers(),
    ]);
  return json({ servicesDetails, categories, costCenter, priceList, users });
}
