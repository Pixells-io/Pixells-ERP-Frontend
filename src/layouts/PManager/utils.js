import Cookies from "js-cookie";

export async function saveNewObjective(data) {
  try {
    const objective = {
      name: data.get("objetivo"),
      year: data.get("year"),
      description: data.get("area"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/create-objetive`,
      {
        method: "POST",
        body: JSON.stringify(objective),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response;
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
