import Cookies from "js-cookie";

export async function setSelectedService(data) {
  const service = {
    service_id: data.getAll("serviceId"),
  };
  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/selected-service`,
    {
      method: "POST",
      body: JSON.stringify(service),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  if (!response.ok) {
    throw response;
  }

  return response;
}

export async function saveService(data) {
  const service = {
    name: data.get("name"),
    description: data.get("description"),
    type: Number(data.get("type")),
    color: data.get("color"),
  };

  console.log(service);

  // validaciones?

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
  console.log(response);

  if (!response.ok) {
    throw response;
  }

  return response;
}

export async function removeSelectedService(data) {
  const id = data.get("service_id");
  console.log(id);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/remove-selected-service/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function saveNewServiceStep(id, data) {
  const step = {
    service_id: Number(id),
    order: Number(data.get("order")),
    name: data.get("name"),
    description: data.get("description"),
    category: data.get("category"),
    area: Number("0"),
    type: Number("0"),
  };

  console.log(step);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/create-step`,
    {
      method: "POST",
      body: JSON.stringify(step),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  if (!response.ok) {
    throw response;
  }

  return response;
}

export async function progressStepAdvance(data) {
  // console.log(JSON.stringify(data.values()));
  // console.log(data.values());
  let info = {};
  for (let [name, value] of data) {
    info[name] = value;
  }
  console.log(info);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/store-process-customer`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  console.log(response);

  if (!response.ok) {
    throw response;
  }

  return response;
}

export async function moveProgressColumn(data) {
  const info = {
    step_id: data.get("step_id"),
    step_index: data.get("step_index"),
  };

  console.log(info);

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/edit-step/`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  if (!response.ok) {
    throw response;
  }
  return response;
}

export async function requireDocument(data) {
  const info = {
    customer_id: data.get("customer_id"),
    service_id: data.get("service_id"),
    name: data.get("name"),
    comment: data.get("comment"),
    required_date: data.get("required_date"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}client-platform/require-document`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  if (!response.ok) {
    throw response;
  }
  return response;
}

export async function editStepProcess(data) {
  const info = {
    step_id: data.get("step_id"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/edit-process-customer`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  if (!response.ok) {
    throw response;
  }
  return response;
}

export async function deleteStepProcess(data) {
  const step_id = data.get("step_id");

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process-services/destroy-process/${step_id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );
  if (!response.ok) {
    throw response;
  }
  return response;
}

export async function addCommentClient(data) {
  const info = {
    client_id: data.get("client_id"),
    comment: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/store-client-comment`,
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

export async function setClientServices(data) {
  const client_id = data.get("client_id");

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}services/get-selected-filter/${client_id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
