export async function saveNewGoal(data, id) {
  const goal = {
    name: data.get("goal"),
    strategic_objetive_id: Number(id),
  };

  console.log(goal);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-goal`,
    {
      method: "POST",
      body: JSON.stringify(goal),
    }
  );
  console.log(response);

  return response;
}

export async function saveNewCsf(data) {
  const csf = {
    name: data.get("csf"),
    goal_id: Number(data.get("goalId")),
  };

  console.log(csf);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-fce`,
    {
      method: "POST",
      body: JSON.stringify(csf),
    }
  );
  console.log(response);

  return response;
}

export async function saveNewTask() {}
