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
    }
  );

  return response;
}

export async function saveNewTraining(data) {
  console.log(data, "Saquen las hipnotiq");
}

export async function newInductionExam(data) {
  const preguntas = data.get("questions");
  console.log(preguntas);
  try {
    const examen = {
      title: data.get("exam_title"),
      duration: Number(data.get("exam_duration")),
      questions: preguntas,
    };
    // console.log(examen);

    // const response = await fetch(
    //   `${import.meta.env.VITE_SERVER_URL}organization-development/store-examen`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(examen),
    //     headers: {
    //       Authorization: "Bearer " + Cookies.get("token"),
    //     },
    //   }
    // );

    // return response.json();
    return new Response("ok");
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}
