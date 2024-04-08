import { format } from "date-fns";

export async function getSteps() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-leads`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getLeadById({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead/${params.id}`
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
    }
  );
  console.log(response);

  return response;
}
