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

export async function saveNewTask(data) {
  const task = {
    name: data.get("name"),
    description: data.get("description"),
    type: Number(data.get("type")),
    user_id: data.get("userId"),
    priority: Number(data.get("priority")),
    repeat: data.get("repeat"),
    //start date
    //end date
    //fce_id  int
    sequence: data.get("sequence"),
  };

  console.log(task);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-task`,
    {
      method: "POST",
      body: JSON.stringify(task),
    }
  );
  console.log(response);

  return response;
}
