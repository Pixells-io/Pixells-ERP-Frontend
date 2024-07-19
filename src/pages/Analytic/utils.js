import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function getCrmAnalytics() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}analytics/crm`,
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

export async function getTicketsAnalytics() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}analytics/tickets`,
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

export async function getProjectManagerAnalytics() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}analytics/project-manager`,
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

export async function multiloaderAnalytics() {
  const [crm, ticket, pm] = await Promise.all([
    getCrmAnalytics(),
    getTicketsAnalytics(),
    getProjectManagerAnalytics(),
  ]);

  return json({ crm, ticket, pm });
}
