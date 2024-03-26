export async function saveNewObjective(data) {
  try {
    const objective = {
      name: data.get("objetivo"),
      description: data.get("area"),
    };

    console.log(objective);

    // validaciones?

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/create-objetive`,
      {
        method: "POST",
        body: JSON.stringify(objective),
      }
    );
    console.log(response);

    return response;
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
}
