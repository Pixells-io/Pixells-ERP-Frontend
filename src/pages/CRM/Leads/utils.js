import { format } from "date-fns";
import Cookies from "js-cookie";

export async function getSteps() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-leads`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getLeadInfo(leadId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead/${leadId}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
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
      }
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function prospectLeadForm(data) {
  const prospect = {
    lead_id: Number(data.get("lead_id")),
    type_of_contact: data.get("type"),
    day_of_contact: format(new Date(data.get("date")), "yyyy-MM-dd"),
    coments: data.get("comment"),
    archive: data.get("file"),
  };

  console.log(prospect);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/prospect-step`,
    {
      method: "POST",
      body: JSON.stringify(prospect),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function potencialLeadForm(data) {
  const potencial = {
    lead_id: Number(data.get("lead_id")),
    payment_recurrency: data.get("payment_recurrency"),
    total_ammount: data.get("total_ammount"),
  };

  console.log(potencial);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/potencial-grading`,
    {
      method: "POST",
      body: JSON.stringify(potencial),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function followupLeadForm(data) {
  const followup = {
    lead_id: Number(data.get("lead_id")),
    way_of_contact: Number(data.get("way_of_contact")),
    date_of_contact: format(
      new Date(data.get("date_of_contact")),
      "yyyy-MM-dd"
    ),
    comments: data.get("comments"),
    archive: data.get("document"),
    next_step: data.get("next_step"),
  };

  console.log(followup);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/follow-up`,
    {
      method: "POST",
      body: JSON.stringify(followup),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function proposalLeadForm(data) {
  const proposal = {
    lead_id: Number(data.get("lead_id")),
    confirm_email: data.get("confirm_email"),
    subject: format(new Date(data.get("subject")), "yyyy-MM-dd"),
    comments: data.get("comments"),
    document: data.get("document"),
  };

  console.log(proposal);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/proposal`,
    {
      method: "POST",
      body: JSON.stringify(proposal),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function closingLeadForm(data) {
  const closing = {
    lead_id: data.get("lead_id"),
    service_paymment: data.get("service_paymment"),
    service_agreement: data.get("service_agreement"),
    comments: data.get("comments"),
    recurrent_pay: data.get("recurrent_pay"),
    month_billing: Number(data.get("month_billing")),
  };

  console.log(closing);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/closing`,
    {
      method: "POST",
      body: JSON.stringify(closing),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function payLeadForm(data) {
  const pay = {
    lead_id: data.get("lead_id"),
    total: data.get("total"),
    comments: data.get("comments"),
    date_of_pay: data.get("recurrent_pay"),
  };

  console.log(pay);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/pay`,
    {
      method: "POST",
      body: JSON.stringify(pay),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

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
  };

  console.log(onboarding);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}process/on-boarding`,
    {
      method: "POST",
      body: JSON.stringify(onboarding),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}
