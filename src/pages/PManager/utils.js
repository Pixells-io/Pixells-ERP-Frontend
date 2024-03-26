export async function saveNewGoal(data) {
  const goal = {
    name: data.get("goal"),
    strategic_objetive_id: Number(data.get("id")),
  };

  console.log(goal);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-goal`,
    {
      method: "POST",
      body: JSON.stringify(person),
    }
  );
  console.log(response);

  return response;
}
