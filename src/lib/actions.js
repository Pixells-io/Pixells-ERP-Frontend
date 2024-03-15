export async function getCsrf() {
  try {
    const response = await fetch("http://127.0.0.1:8000/get-csrf");
    return response;
  } catch (error) {
    throw new Response("Something whent wrong...", { status: 500 });
  }
}

export async function getServices() {
  try {
    const response = await fetch("http://127.0.0.1:8000/services/get-services");
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead`
    );
    console.log(response);
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getProcessLeads() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/person/get-process-lead"
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}
