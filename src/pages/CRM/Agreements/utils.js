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
    }
  );

  return response;
}
