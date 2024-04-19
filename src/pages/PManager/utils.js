import Cookies from "js-cookie";

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
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
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
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}

export async function saveNewTask(data) {
  const task = {
    // name: data.get("name"),
    // description: data.get("description"),
    // type: Number(data.get("type")),
    // user_id: data.get("userId"),
    // priority: Number(data.get("priority")),
    // repeat: data.get("repeat"),
    // start_date: new Date(),
    // start_date: data.get("star_date"),
    // end_date: data.get("end_date"),
    // fce_id: Number(data.get("fce_id")),
    // sequence: data.get("sequence"),
    name: "Tarea 1",
    description: "test test test",
    type: 1,
    user_id: Number(data.get("userId")),
    priority: 2,
    repeat: 0,
    start_date: new Date(),
    end_date: null,
    fce_id: Number(data.get("fce_id")),
    sequence: 1,
  };

  console.log(task);

  // validaciones?

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}project-manager/create-task`,
    {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    }
  );
  console.log(response);

  return response;
}
