import { json } from "react-router-dom";

/*SERVICES ACTIONS*/
export async function getServices() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-services`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCategories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-categories`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPackages() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-packages`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCategoriesAndServices() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-categories-with-services`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderServices() {
  const [services, categories, packages, positions, categoriesServices] =
    await Promise.all([
      getServices(),
      getCategories(),
      getPackages(),
      getPosition(),
      getCategoriesAndServices(),
    ]);

  return json({
    services,
    categories,
    packages,
    positions,
    categoriesServices,
  });
}

/*CRM ACTIONS*/
export async function getLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getProcessLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-lead`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getObjectives() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-objetive`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getGoals({ params }) {
  const objectiveId = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }project-manager/get-goal/${objectiveId}/0`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getServiceSteps({ params }) {
  const serviceId = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }process-services/get-process/${serviceId}`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

/*Organization Functions*/
export async function getAreas() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-areas`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPosition() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-puestos`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getUsers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-users`
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderOrganization() {
  const [areas, positions, users] = await Promise.all([
    getAreas(),
    getPosition(),
    getUsers(),
  ]);

  return json({ areas, positions, users });
}
