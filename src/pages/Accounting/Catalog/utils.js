import Cookies from "js-cookie";

export async function saveImportAccountingAccounts(data) {
  const formData = new FormData();

  formData.append("document", data.get("document"));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/import-accounting-accounts`,
    {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function getAccountingAccounts() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}accounting/get-accounting-accounts/0`,
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

export async function getAccountingAccountsById({ params }) {
  const level = params.level;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}accounting/get-accounting-accounts/${level}`,
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

export async function saveAccountingAccount(data) {
  const info = {
    accounting_account: data.get("accounting_account"),
    name: data.get("name"),
    level: data.get("level"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/create-accounting-account`,
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

export async function getAccountingAccountById(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}accounting/get-accounting-account/${id}`,
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

export async function UpdateAccountingAccount(data) {
  const info = {
    account_id: data.get("account_id"),
    type: data.get("type"),
    accounting_account: data.get("accounting_account"),
    name: data.get("name"),
    level: data.get("level"),
    currency: data.get("currency"),
    type_of_account: data.get("type_of_account"),
    sat_code: data.get("sat_code"),
    status: data.get("status"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/edit-accounting-account`,
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

export async function destroyAccountingAccount(data) {
  const info = {
    account_id: data.get("account_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/destroy-accounting-account`,
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