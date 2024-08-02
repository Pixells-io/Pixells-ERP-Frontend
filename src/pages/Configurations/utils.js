import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveBusinessInformation(data) {
  const info = {
    business_email: data.get("business_email"),
    user_master_id: data.get("user_master_id"),
    legal_name: data.get("legal_name"),
    id_fiscal: data.get("id_fiscal"),
    street: data.get("street"),
    location: data.get("location"),
    state: data.get("state"),
    country: data.get("country"),
    comercial_name: data.get("comercial_name"),
    ext: data.get("ext"),
    int: data.get("int"),
    city: data.get("city"),
    cp: data.get("cp"),
    phone: data.get("phone"),
    sector: data.get("sector"),
    employee_number: data.get("employee_number"),
    currency: data.get("currency"),
    more_info: data.get("more_info"),
  };

  const formData = new FormData();

  formData.append("logo", data.get("logo"));

  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}configuration/store-business-information`,
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

export async function saveCalendarApiInfo(data) {
  const info = {
    id: data.get("id"),
    impersonate: data.get("impersonate"),
  };

  const formData = new FormData();

  formData.append("keys", data.get("keys"));

  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}configuration/post-google-calendar`,
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
