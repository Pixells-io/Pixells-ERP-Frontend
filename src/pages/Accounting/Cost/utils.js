import Cookies from "js-cookie";

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

export async function saveCostCenter(data) {
  const info = {
    code: data.get("code"),
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/create-cost-center`,
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

export async function updateCostCenter(data) {
  const info = {
    cost_center_id: data.get("cost_center_id"),
    code: data.get("code"),
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/edit-cost-center`,
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

export async function destroyCostCenter(data) {
  const info = {
    cost_center_id: data.get("cost_center_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}accounting/destroy-cost-center`,
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
