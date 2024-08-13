import Cookies from "js-cookie";

export async function saveNewAgreementTemplate(data) {
  const info = {
    name: data.get("name"),
    comments: data.get("comments"),
    category: data.get("category"),
    template: data.get("template"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}agreements/template-store`,
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

export async function saveEditAgreementTemplate(data) {
  const info = {
    id: data.get("id"),
    name: data.get("name"),
    comments: data.get("comments"),
    template: data.get("template"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}agreements/template-edit`,
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

export async function saveEditContractTemplate(data) {
  const info = {
    id: data.get("id"),
    template: data.get("template"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}agreements/contract-edit`,
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

export async function saveNewContract(data) {
  const info = {
    person_id: data.get("customer_id"),
    service_id: data.get("service_id"),
    template_id: data.get("template_id"),
    contract_template: data.get("template"),
    comments: data.get("comments"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}agreements/create-contract`,
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
