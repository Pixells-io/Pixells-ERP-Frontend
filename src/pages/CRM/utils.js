import { format } from "date-fns";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

//Leads
export async function getLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-leads`,
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

export async function getOneLead({ params }) {
  try {
    const id = params.id;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-lead/${id}`,
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

export async function getOneLeadId(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-lead/${id}`,
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

export async function functionSaveNewLead(data) {
  const info = {
    type: data.get("register_type"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    channel: data.get("channel"),
    type_process_sale: data.get("type_process_sale"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/store-lead`,
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

export async function destroyLead(data) {
  const info = {
    lead_id: data.get("lead_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/delete-lead`,
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

export async function editLead(data) {
  const info = {
    lead_id: data.get("lead_id"),
    status: data.get("status"),
    type: data.get("type"),
    type_process_sale: data.get("type_process_sale"),
    tax_id: data.get("tax_id"),
    business_name: data.get("bussines_name"),
    business_phone: data.get("bussines_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    channel: data.get("channel"),
    email: data.get("email"),
    assigned_id: data.get("assigned_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/edit-lead`,
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

//Sales Proces
export async function getSalesProcess() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-sale-process`,
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

export async function functionCreateNewSaleProcess(data) {
  const info = {
    name: data.get("name"),
    description: data.get("description"),
    color: "N/A",
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/store-sale-process`,
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

export async function functionEditSaleProcess(data) {
  const info = {
    sale_process_id: data.get("sale_process_id"),
    name: data.get("name"),
    description: data.get("description"),
    color: "",
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/edit-sale-process`,
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

export async function functionDestroyNewSaleProcess(data) {
  const info = {
    sale_process_id: data.get("process_sale_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/delete-sale-process`,
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

//Dashboard
export async function getSelectedProcess() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-selected-process`,
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

export async function functionUpdateSelectedProcess(data) {
  const info = {
    process_ids: data.getAll("process_ids"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/store-selected-process`,
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

export async function functionCreateSaleProcessStage(data) {
  const info = {
    sale_process_id: data.get("sale_process_id"),
    color: data.get("color"),
    name: data.get("name"),
    description: data.get("description"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/store-sale-process-stage`,
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

export async function functionEditSaleProcessStage(data) {
  const info = {
    stage_id: data.get("stage_id"),
    color: data.get("color"),
    name: data.get("name"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/edit-sale-process-stage`,
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

export async function functionDestroySaleProcessStage(data) {
  const info = {
    stage_id: data.get("stage_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/destroy-sale-process-stage`,
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

export async function getAuthUser() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-user`,
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

export async function getProcessInfo({ params }) {
  try {
    const id = params.id;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-selected-process/${id}`,
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

export async function getProcessInfoId(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}crm/get-selected-process/${id}`,
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

export async function changeLeadStage(process, lead) {
  const info = {
    step_id: process,
    lead_id: lead,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/change-lead-stage`,
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

export async function saveLeadComments(data) {
  const info = {
    lead_id: data.get("lead_id"),
    comments: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/save-lead-comments`,
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

export async function saveLeadActivity(data) {
  const info = {
    type: data.get("type"),
    lead_id: data.get("lead_id"),
    title: data.get("title"),
    comment: data.get("comment"),
    mail: data.get("mail"),
    date: data.get("date"),
    hour: data.get("hour"),
    select: data.get("select"),
    size: data.get("size"),
    products: data.getAll("products"),
    services: data.getAll("services"),
  };

  const formData = new FormData();

  formData.append("document", data.get("document"));
  formData.append("info", JSON.stringify(info));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/save-lead-activity`,
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

export async function modalConvertClient(data) {
  const info = {
    lead_id: data.get("lead_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}crm/convert-to-client`,
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

//Multiloaders
export async function multiLoaderCrmTables() {
  const [leads, process, permissions] = await Promise.all([
    getLeads(),
    getSalesProcess(),
    crmPermissions(),
  ]);

  return json({ leads, process, permissions });
}

export async function multiLoaderCrmLayout() {
  const [process, permissions] = await Promise.all([
    getSalesProcess(),
    crmPermissions(),
  ]);

  return json({ process, permissions });
}

export async function multiLoaderCrmDasboard() {
  const [process, selected, user] = await Promise.all([
    getSalesProcess(),
    getSelectedProcess(),
    getAuthUser(),
  ]);

  return json({ process, selected, user });
}

//Others
export async function crmPermissions() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/permission-validate-module/3`,
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

/*
export async function getDashboardCrmAnalytics() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/crm-homepage-analytics`,
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
}*/
