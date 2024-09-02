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

export async function getAccountingAccountsById(level) {
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
