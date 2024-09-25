import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function multiLoaderListBranch() {
  const [whareHouses, costCenter, priceList] = await Promise.all([
    getWarehouses(),
    getCostCenter(),
    getPriceList(),
  ]);
  return json({ whareHouses, costCenter, priceList });
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

export async function multiLoaderBranchPointsSale() {
  const [stores] = await Promise.all([getStores()]);
  return json({ stores });
}

export async function getStores() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}stores/get-stores`,
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

export async function multiLoaderListBranchDetails({ params }) {
  const id = params.id;

  const [whareHouses, costCenter, priceList, storeDetail, users] = await Promise.all([
    getWarehouses(),
    getCostCenter(),
    getPriceList(),
    getStoreById(id),
    getUsers(),
  ]);
  return json({ whareHouses, costCenter, priceList, storeDetail, users });
}

export async function getStoreById(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}stores/get-stores/${id}`,
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

export async function saveBranchPointSale(data) {
  const info = {
    store_code: data.get("store_code"),
    name: data.get("name"),
    cost_center_id: data.get("cost_center_id"),
    price_list_id: data.get("price_list_id"),
    inventory_id: data.get("inventory_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/create-store`,
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

export async function updatePrincipalBranchTab(data) {
  const info = {
    store_id: data.get("store_id"),
    store_code: data.get("store_code"),
    name: data.get("name"),
    cost_center_id: data.get("cost_center_id"),
    price_list_id: data.get("price_list_id"),
    inventory_id: data.get("inventory_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/edit-store`,
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

export async function createGeneralBranchTab(data) {
  const info = {
    store_id: data.get("store_id"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cologne: data.get("cologne"),
    city: data.get("city"),
    state: data.get("state"),
    cp: data.get("cp"),
    country: data.get("country"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/create-store-information`,
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
