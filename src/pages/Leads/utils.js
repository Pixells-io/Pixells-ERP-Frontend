export async function getSteps() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-leads`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}
