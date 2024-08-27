import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getBanks() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/get-banks`,
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

export async function saveBank(data) {
    const info = {
        country: data.get("country"),
        bank_key: data.get("bank_key"),
        type: data.get("type"),
        bank_id: data.get("bank_id"),
        name: data.get("name"),
        phone: data.get("phone"),
        mail: data.get("mail"),
        street: data.get("street"),
        int : data.get("int"),
        ext : data.get("ext"),
        cologne : data.get("cologne"),
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/save-bank`,
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

export async function destroyBank(data) {
    const info = {
      bank_id: data.get("bank_id"),
    };
  
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/destroy-bank`,
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

export async function getBank({params}) {
  try {
    const id = params.id;

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/get-bank/${id}`,
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

export async function editBank(data) {
  const info = {
      id: data.get("id"),
      country: data.get("country"),
      bank_key: data.get("bank_key"),
      type: data.get("type"),
      bank_id: data.get("bank_id"),
      name: data.get("name"),
      phone: data.get("phone"),
      mail: data.get("mail"),
      street: data.get("street"),
      int : data.get("int"),
      ext : data.get("ext"),
      cologne : data.get("cologne"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}bank-management/edit-bank`,
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


export async function multiloaderTableBankManag() {
  const [banks, bankAccounts] = await Promise.all([
    getBanks(),
    getBankAccounts(),
  ]);
  return json({ banks, bankAccounts });
}

export async function multiloaderOwnAndBankAccount(params) {
  
  const [banks, bankAccount] = await Promise.all([
    getBanks(),
    getBankAccount(params),
  ]);
  return json({ banks, bankAccount });
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

export async function getBankAccount({params}) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}bank-management/get-bank-account/${id}`,
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

export async function saveBankAccount(data) {
  const info = {
      bank_id: data.get("bank_id"),
      account_id: data.get("account_id"),
      account_name: data.get("account_name"),
      account_number: data.get("account_number"),
      countable_account_id: data.get("countable_account_id"),
      currency: data.get("currency"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}bank-management/save-bank-account`,
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

export async function editBankAccount(data) {
  const info = {
      bank_account_id: data.get("bank_account_id"),
      bank_id: data.get("bank_id"),
      account_id: data.get("account_id"),
      account_name: data.get("account_name"),
      account_number: data.get("account_number"),
      countable_account_id: data.get("countable_account_id"),
      currency: data.get("currency"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}bank-management/edit-bank-account`,
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

export async function destroyBankAccount(data) {
  const info = {
    bank_account_id: data.get("bank_account_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}bank-management/destroy-bank-account`,
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