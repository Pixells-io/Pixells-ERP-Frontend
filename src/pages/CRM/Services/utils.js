import Cookies from "js-cookie";

export async function saveCategory(data) {
  const category = {
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-category`,
    {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function saveService(data) {
  const service = {
    category_id: data.get("category"),
    position_id: data.get("position_id"),
    name: data.get("name"),
    description: data.get("description"),
    color: data.get("color"),
    price: data.get("price"),
    process: data.getAll("process"),
    process_action: data.getAll("process_action"),
    category: data.getAll("category"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-services`,
    {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function saveInterview(data) {
  const service = {
    service_id: data.get("service_id"),
    name: data.get("name"),
    input: data.getAll("input"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/interview-template-store`,
    {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function destroyProcess(data) {
  let id = data.get("process_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/service-step-destroy/${id}`,
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

export async function destroyService(data) {
  let id = data.get("service_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/destroy-service/${id}`,
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

export async function savePackage(data) {
  const services = [];

  for (const [key, value] of data.entries()) {
    if (key === "service") {
      services.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    description: data.get("description"),
    price: data.get("price"),
    service: services,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/store-package`,
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

export async function editCategory(data) {
  const info = {
    category_id: data.get("category_id"),
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-category`,
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

export async function addCategoryService(data) {
  const info = {
    category_id: data.get("category_id"),
    service: data.get("service"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/add-category-service`,
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

export async function destroyServiceCategory(data) {
  let id = data.get("service_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/destroy-category-service/${id}`,
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
export async function destroyCategory(data) {
  let id = data.get("category_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/destroy-category/${id}`,
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

export async function editPackage(data) {
  const info = {
    package_id: data.get("package_id"),
    name: data.get("name"),
    description: data.get("description"),
    price: data.get("price"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-packages`,
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

export async function addPackageService(data) {
  const info = {
    package_id: data.get("package_id"),
    service_id: data.get("service_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-packages-services`,
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

export async function destroySelectedServices(data) {
  let id = data.get("service_id");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/destroy-package-service/${id}`,
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

  return response;
}

export async function editService(data) {
  const info = {
    service_id: data.get("service_id"),
    name: data.get("name"),
    description: data.get("description"),
    price: data.get("price"),
    position: data.get("position"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/edit-services`,
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

export async function createServiceProcess(data) {
  const info = {
    service_id: data.get("service_id"),
    process: data.get("process"),
    process_action: data.get("process_action"),
    category: data.get("category"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/service-add-step`,
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
