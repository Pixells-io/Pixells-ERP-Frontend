import Cookies from "js-cookie";
import { json } from "react-router-dom";

export async function saveNewInduction(data) {
  const areas = [];

  for (const [key, value] of data.entries()) {
    if (key === "areas") {
      areas.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    tipo: data.get("tipo"),
    description: data.get("description"),
    responsable: data.get("responsable"),
    areas: areas,
  };

  const response = await fetch(
    `${
      import.meta.env.VITE_SERVER_URL
    }organization-development/store-induction`,
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

export async function saveNewTraining(data) {
  const areas = [];
  const positions = [];
  const users = [];

  for (const [key, value] of data.entries()) {
    if (key === "areas") {
      areas.push(Number(value));
    }
    if (key === "positions") {
      positions.push(Number(value));
    }
    if (key === "users") {
      users.push(Number(value));
    }
  }

  const info = {
    name: data.get("name"),
    type: data.get("type"),
    class_type: data.get("class_type"),
    location: data.get("location"),
    teacher_name: data.get("teacher_name"),
    teacher_last_name: data.get("teacher_last_name"),
    teacher_second_last_name: data.get("teacher_second_last_name"),
    class_date: data.get("class_date"),
    class_real_date: data.get("class_real_date"),
    areas: areas,
    positions: positions,
    users: users,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization-development/store-training`,
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

export async function newInductionExam(data) {
  try {
    const examen = {
      rel_id: data.get("rel_id"),
      exam_type: 1, // 1 - Induccion, 2 - Capacitacion
      title: data.get("exam_title"),
      duration: Number(data.get("exam_duration")),
      questions: data.get("questions"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/store-examen`,
      {
        method: "POST",
        body: JSON.stringify(examen),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return "No batea";
    // return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function newCapacitationExam(data) {
  try {
    const examen = {
      rel_id: data.get("rel_id"),
      exam_type: 2, // 1 - Induccion, 2 - Capacitacion
      title: data.get("exam_title"),
      duration: Number(data.get("exam_duration")),
      questions: data.get("questions"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/store-examen`,
      {
        method: "POST",
        body: JSON.stringify(examen),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return "No batea";
    // return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function storeAnswerExam(data, arreglo) {
  try {
    const answer = {
      type: data.get("type"),
      exam_id: data.get("exam_id"),
      answers: arreglo,
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/answer-exam`,
      {
        method: "POST",
        body: JSON.stringify(answer),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return "No batea";
    // return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function storeNewEvaluation(data) {
  try {
    const info = {
      name: data.get("name"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/create-evaluation`,
      {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return "No batea";
    // return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function storeNewEvaluationExam(data) {
  try {
    const examen = {
      eval_id: data.get("eval_id"),
      questions: data.get("questions"),
    };

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/store-evaluation-exam
      `,
      {
        method: "POST",
        body: JSON.stringify(examen),
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return "No batea";
    // return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function storeDocumentExam(data) {
  try {
    const formData = new FormData();

    const info = {
      rel_id: data.get("rel_id"),
      type: "1",
      title: data.get("title"),
    };

    formData.append("document", data.get("document"));
    formData.append("rel_id", data.get("rel_id"));
    formData.append("type", "1");
    formData.append("title", data.get("title"));
    formData.append("info", JSON.stringify(info));

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/store-document
      `,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response;
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function removeDocumentExam(data) {
  const id = data.get("document_id");
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}organization-development/destroy-document/${id}`,
    {
      method: "get",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response;
}
