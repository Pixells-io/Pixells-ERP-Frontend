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
