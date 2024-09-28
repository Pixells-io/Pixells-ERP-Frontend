import Cookies from "js-cookie";
import { json } from "react-router-dom";
import { format } from "date-fns";

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

  const [whareHouses, costCenter, priceList, storeDetail, users, positions, bankAccounts] = await Promise.all([
    getWarehouses(),
    getCostCenter(),
    getPriceList(),
    getStoreById(id),
    getUsers(),
    getPosition(),
    getBankAccounts(),
  ]);
  return json({ whareHouses, costCenter, priceList, storeDetail, users, positions, bankAccounts });
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
  
  const startDate = !!data.get("start") ? format(data.get("start"), "yyyy-MM-dd") : "";
  const endDate = !!data.get("end") ? format(data.get("end"), "yyyy-MM-dd") : "";


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
    status: !!data.get("status") ? "1" : "0",
    start: startDate,
    end: endDate,
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

export async function updateGeneralBranchTab(data) {

  const startDate = !!data.get("start") ? format(data.get("start"), "yyyy-MM-dd") : "";
  const endDate = !!data.get("end") ? format(data.get("end"), "yyyy-MM-dd") : "";

  const info = {
    info_id: data.get("info_id"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cologne: data.get("cologne"),
    city: data.get("city"),
    state: data.get("state"),
    cp: data.get("cp"),
    country: data.get("country"),
    status: !!data.get("status") ? "1" : "0",
    start: startDate,
    end: endDate,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/edit-store-information`,
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

export async function getPosition() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-puestos`,
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

export async function createUsersBranchTab(data) {
 
  const usersIds = JSON.parse(data.get("users")).map(user => {
    return {id: user.id}
  });
  
  const info = {
    store_id: data.get("store_id"),
    users: usersIds,
    
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/create-store-user`,
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

export async function updateUserBranchTab(data) {
  const startDate = !!data.get("start") ? format(data.get("start"), "yyyy-MM-dd") : "";
  const endDate = !!data.get("end") ? format(data.get("end"), "yyyy-MM-dd") : "";

  const info = {
    store_user_id: data.get("store_user_id"),
    position_id: data.get("position"),
    pos_password: data.get("pos_password"),
    principal_pos_id: data.get("principal_pos_id"),
    active: !!data.get("active") ? "1" : "0",
    start: startDate,
    end: endDate,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/edit-store-user`,
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

export async function deleteUserBranchTab(data) {

  const info = {
    store_user_id: data.get("store_user_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/destroy-store-user`,
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

export async function createCashBoxesBranchTab(data) {
  const startDate = !!data.get("start") ? format(data.get("start"), "yyyy-MM-dd") : "";
  const endDate = !!data.get("end") ? format(data.get("end"), "yyyy-MM-dd") : "";

  const info = {
    store_id: data.get("store_id"),
    name: data.get("name"),
    code: data.get("code"),
    user_id: data.get("user_id"),
    active: !!data.get("active") ? "1" : "0",
    start: startDate,
    end: endDate,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/create-store-pos`,
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

export async function updateCashBoxesBranchTab(data) {
  const startDate = !!data.get("start") ? format(data.get("start"), "yyyy-MM-dd") : "";
  const endDate = !!data.get("end") ? format(data.get("end"), "yyyy-MM-dd") : "";

  const info = {
    pos_id: data.get("pos_id"),
    name: data.get("name"),
    code: data.get("code"),
    user_id: data.get("user_id"),
    active: !!data.get("active") ? "1" : "0",
    start: startDate,
    end: endDate,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/edit-store-pos`,
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

export async function destroyCashBoxesBranchTab(data) {
 
  const info = {
    pos_id: data.get("pos_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}stores/destroy-store-pos`,
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

export async function createPaymentBranchTab(data) {
 
  const info = {
    store_id: data.get("store_id"),
    type: data.get("type"),
    bankAccounts: JSON.parse( data.get("bankAccounts")),
  };

  console.log(info);

}

export async function getBankAccounts() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/get-bank-accounts`,
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
