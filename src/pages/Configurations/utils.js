import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveBusinessInformation(data, formDataLogo) {
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

  const logo = data.get("logo");

  console.log(formDataLogo);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}configuration/store-business-information`,
    {
      method: "POST",
      body: formDataLogo,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
