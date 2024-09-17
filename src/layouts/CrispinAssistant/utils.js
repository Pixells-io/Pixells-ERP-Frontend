import Cookies from "js-cookie";

export async function SendQuestion(question) {
  const info = {
    question: question,
  };

  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}assistant/send-question`,
    {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}
