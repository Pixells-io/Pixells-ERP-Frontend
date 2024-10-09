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
