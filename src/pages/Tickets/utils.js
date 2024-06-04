import Cookies from "js-cookie";

export async function saveNewTicket(data) {
  const users = [];
  const areas = [];
  for (const [key, value] of data.entries()) {
    if (key === "user_id") {
      users.push(Number(value));
    }
    if (key === "area_id") {
      areas.push(Number(value));
    }
  }
  const info = {
    issue: data.get("issue"),
    description: data.get("description"),
    importance: data.get("importance"),
    category_ticket: data.get("category_ticket"),
    users: users,
    areas: areas,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/store-ticket`,
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

export async function saveFollowUpTicket(data) {
  const info = {
    type: data.get("type"),
    ticket: data.get("ticket"),
    comments: data.get("comments"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/store-follow-up`,
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

export async function saveFollowUpTicketComments(data) {
  const info = {
    follow_up_id: data.get("follow_up_id"),
    comment: data.get("comment"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/save-follow-up-comment`,
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

export async function saveTicketResponsible(data) {
  const info = {
    ticket_id: data.get("ticket_id"),
    area_id: data.get("area_id"),
    user_id: data.get("user_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/save-responsible`,
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

export async function saveTicketFinish(data) {
  const info = {
    ticket_id: data.get("ticket_id"),
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}tickets/finish-ticket`,
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
