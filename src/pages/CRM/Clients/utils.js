import Cookies from "js-cookie";

export async function storeCustomerAdress(data) {
  const info = {
    master: data.get("master"),
    street: data.get("street"),
    ext: data.get("ext"),
    int: data.get("int"),
    cp: data.get("cp"),
    city: data.get("city"),
    country: data.get("country"),
    state: data.get("state"),
    primary: data.get("primary"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/store-adress`,
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

export async function storeCustomerContacts(data) {
  const info = {
    master: data.get("master"),
    name: data.get("name"),
    middle_name: data.get("middle_name"),
    last_name: data.get("last_name"),
    phone: data.get("phone"),
    position: data.get("position"),
    mail: data.get("mail"),
    primary: data.get("primary"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/store-contact`,
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

export async function storeCustomerDocuments(data) {
  const formData = new FormData();

  formData.append("document_file", data.get("document_file"));
  formData.append("master", data.get("master"));
  formData.append("name", data.get("name"));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/store-document`,
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

export async function deleteAddress(data) {
  const id = data.get("address_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/destroy-address/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function getClientInfoId(id) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/get-client/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteContact(data) {
  const id = data.get("contact_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/destroy-contact/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function deleteDocument(data) {
  const id = data.get("document_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/destroy-document/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editClientInfo(data) {
  const edit = {
    lead_id: data.get("client_id"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/edit-client-info`,
    {
      method: "POST",
      body: JSON.stringify(edit),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editAccessInfo(data) {
  const edit = {
    client_id: data.get("client_id"),
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/edit-client-access`,
    {
      method: "POST",
      body: JSON.stringify(edit),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function assignInterview(data) {
  const edit = {
    client_id: data.get("client_id"),
    interview_id: data.get("interview_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/interview-assign`,
    {
      method: "POST",
      body: JSON.stringify(edit),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function changeStatusClient(data) {
  const client_id = data.get("client_id");

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/change-client-status/${client_id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
