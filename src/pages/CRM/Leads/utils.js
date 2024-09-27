import { getPackages, getServices, getUsers } from "@/lib/actions";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getSteps() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-leads`,
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

export async function multiLoaderStageLeads() {
  const [steps, services, users, membership] = await Promise.all([
    getSteps(),
    getServices(),
    getUsers(),
    getPackages(),
  ]);

  return json({ steps, services, users, membership });
}

export async function getLeadInfo(leadId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead/${leadId}`,
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

export async function getLeadById({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead/${params.id}`,
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

export async function multiloaderSideLayoutLead({ params }) {
  const [leadLoader, servicesLoader] = await Promise.all([
    getLeadById({ params }),
    getServices(),
  ]);

  return json({ leadLoader, servicesLoader });
}

export async function prospectLeadForm(data) {
  const prospect = {
    lead_id: Number(data.get("lead_id")),
    type_of_contact: data.get("type"),
    day_of_contact: format(new Date(data.get("date")), "yyyy-MM-dd"),
    coments: data.get("comment"),
    archive: data.get("file"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/prospect-step`,
    {
      method: "POST",
      body: JSON.stringify(prospect),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function potencialLeadForm(data) {
  const potencial = {
    lead_id: Number(data.get("lead_id")),
    payment_recurrency: data.get("payment_recurrency"),
    total_ammount: data.get("total_ammount"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/potencial-grading`,
    {
      method: "POST",
      body: JSON.stringify(potencial),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function followupLeadForm(data) {
  const followup = {
    lead_id: data.get("lead_id"),
    way_of_contact: data.get("way_of_contact"),
    date_of_contact: format(
      new Date(data.get("date_of_contact")),
      "yyyy-MM-dd",
    ),
    comments: data.get("comments"),
    archive: data.get("document"),
    next_step: data.get("next_step"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/follow-up`,
    {
      method: "POST",
      body: JSON.stringify(followup),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function proposalLeadForm(data) {
  const proposal = {
    lead_id: Number(data.get("lead_id")),
    confirm_email: data.get("confirm_email"),
    subject: format(new Date(data.get("subject")), "yyyy-MM-dd"),
    comments: data.get("comments"),
    document: data.get("document"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/proposal`,
    {
      method: "POST",
      body: JSON.stringify(proposal),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function closingLeadForm(data) {
  const closing = {
    lead_id: data.get("lead_id"),
    service_paymment: data.get("service_paymment"),
    service_agreement: data.get("service_agreement"),
    comments: data.get("comments"),
    recurrent_pay: data.get("recurrent_pay"),
    month_billing: data.get("month_billing"),
    services: data.getAll("service"),
    recurrency: data.getAll("recurrency"),
    ammount: data.getAll("ammount"),
    assigned: data.get("assigned_id"),
    type_sale: data.get("type_sale"),
    membership_id: data.get("membership_id"),
    recurrency_membership: data.get("recurrency_membership"),
    ammount_membership: data.get("ammount_membership"),
  };

  const formData = new FormData();
  formData.append("service_payment", data.get("service_payment"));
  formData.append("service_agreement", data.get("service_agreement"));
  formData.append("info", JSON.stringify(closing));

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/closing`,
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

export async function payLeadForm(data) {
  const pay = {
    lead_id: data.get("lead_id"),
    total: data.get("total"),
    comments: data.get("comments"),
    date_of_pay: data.get("recurrent_pay"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/pay`,
    {
      method: "POST",
      body: JSON.stringify(pay),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function onboardingLeadForm(data) {
  const onboarding = {
    lead_id: data.get("lead_id"),
    business_name: data.get("business_name"),
    business_phone: data.get("business_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    assigned: data.get("assigned_id"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/on-boarding`,
    {
      method: "POST",
      body: JSON.stringify(onboarding),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}

export async function editLeadForm(data) {
  const info = {
    lead_id: data.get("lead_id"),
    business_name: data.get("bussines_name"),
    business_phone: data.get("bussines_phone"),
    contact_name: data.get("contact_name"),
    contact_middle_name: data.get("contact_middle_name"),
    contact_last_name: data.get("contact_last_name"),
    contact_phone: data.get("contact_phone"),
    contact_email: data.get("contact_email"),
    services: data.getAll("services"),
  };

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/edit-lead`,
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

export async function addCommentLead(data) {
  const info = {
    lead_id: data.get("lead_id"),
    comment: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/post-lead-comment`,
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

export async function editStatusLead(data) {
  const info = {
    lead_id: data.get("lead_id"),
    status: data.get("status"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}person/change-lead_status`,
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
