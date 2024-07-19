import Cookies from "js-cookie";
import { json } from "react-router-dom";

/*SERVICES ACTIONS*/
export async function getAllServices() {
  const [selectedServices, services] = await Promise.all([
    getSerivicesSelected(),
    getServices(),
  ]);

  return json({ selectedServices, services });
}

export async function getSerivicesSelected() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/selected-service-get`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getServices() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-services`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multilaoderSideLayoutCRM() {
  const [services, customers] = await Promise.all([
    getServices(),
    getCustomers(),
  ]);

  return json({ services, customers });
}

export async function getServicesAgreements() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}agreements/get-agreements`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getContractsCustomer() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}agreements/get-contracts`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getContract({ params }) {
  const id = params.id;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}agreements/get-contract/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderAgreements() {
  const [services, customers, contracts] = await Promise.all([
    getServicesAgreements(),
    getCustomers(),
    getContractsCustomer(),
  ]);

  return json({ services, customers, contracts });
}

export async function getCategories() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-categories`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPackages() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-packages`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCategoriesAndServices() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-categories-with-services`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getServicesCards() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-services-card`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderServices() {
  const [
    services,
    categories,
    packages,
    positions,
    categoriesServices,
    analytic,
  ] = await Promise.all([
    getServices(),
    getCategories(),
    getPackages(),
    getPosition(),
    getCategoriesAndServices(),
    getServicesCards(),
  ]);

  return json({
    services,
    categories,
    packages,
    positions,
    categoriesServices,
    analytic,
  });
}

export async function categoryShow({ params }) {
  const category_id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/show-category/${category_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function showService({ params }) {
  const service_id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-service/${service_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function showCategory({ params }) {
  const category_id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/get-category/${category_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

/* MULTILOADER CHAT */
export async function getChats() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}chat/get-chats`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderChat() {
  const [chats, users, user] = await Promise.all([
    getChats(),
    getUsers(),
    getUserByToken(),
  ]);

  return json({ chats, users, user });
}

/*CRM ACTIONS*/
export async function getLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-lead`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getDashboardCrmAnalytics() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/crm-homepage-analytics`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getProcessLeads() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}person/get-process-lead`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getObjectives() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-objetive`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getGoals(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-goal/${id}/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCSF({ params }) {
  const objectiveId = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }project-manager/get-fce/${objectiveId}/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getServiceSteps(id) {
  const serviceId = id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }process-services/get-process/${serviceId}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getServiceStepsId({ id }) {
  const serviceId = id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }process-services/get-process/${serviceId}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
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
      `${import.meta.env.VITE_SERVER_URL}organization/get-areas`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPosition() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-puestos`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getUsers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-users`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function counterAnalyticsOrganization() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/counter-analytics`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderOrganization() {
  const [areas, positions, users, counter] = await Promise.all([
    getAreas(),
    getPosition(),
    getUsers(),
    counterAnalyticsOrganization(),
  ]);

  return json({ areas, positions, users, counter });
}

export async function multiLoaderAreasPositions() {
  const [areas, positions] = await Promise.all([getAreas(), getPosition()]);

  return json({ areas, positions });
}

export async function getUserByToken() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-user`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getUserDashboardData() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-dashboard-data`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderDashboard() {
  const [user, dashboard] = await Promise.all([
    getUserByToken(),
    getUserDashboardData(),
  ]);

  return json({ user, dashboard });
}

export async function multiLoaderCSF({ params }) {
  const id = params.id;
  const [goals, users, goalsMaster] = await Promise.all([
    getGoals(id),
    getUsers(),
    getGoalsMaster(id),
  ]);

  return json({ goals, users, goalsMaster });
}

export async function multiloaderCFSView({ params }) {
  const [goals, csfs, goalsMaster] = await Promise.all([
    getGoals({ params }),
    getCSF({ params }),
    getGoalsMaster({ params }),
  ]);

  return json({ goals, csfs, goalsMaster });
}

export async function multiLoaderSideLayoutPM() {
  const [objectives, areas] = await Promise.all([getObjectives(), getAreas()]);

  return json({ objectives, areas });
}

export async function getGoalsMaster(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-goals/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPackageById({ params }) {
  const packageId = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}services/show-package/${packageId}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCustomers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}process-services/get-clients`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function muliloaderProgress({ params }) {
  const [steps, customers] = await Promise.all([
    getServiceSteps({ params }),
    getCustomers(),
  ]);

  return json({ steps, customers });
}

/* Agreements Functions */
export async function getAgreement({ params }) {
  const agreement_id = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }agreements/get-agreement/${agreement_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPersonsContracts() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}agreements/get-persons`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getContractCreate({ params }) {
  const contract = params.id;
  const customer = params.customer;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}agreements/get-contract-create/${contract}/${customer}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getClients() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}process-services/get-clients`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getClient({ params }) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}process-services/get-client/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderTablesCRM() {
  const [leads, clients, dashboard] = await Promise.all([
    getLeads(),
    getClients(),
    getDashboardCrmAnalytics(),
  ]);
  return json({ leads, clients, dashboard });
}

export async function multiloaderProgressSteps({ params }) {
  const serviceId = params.id;
  const [services, steps, users] = await Promise.all([
    getSerivicesSelected(),
    getServiceSteps(serviceId),
    getUsers(),
  ]);

  return json({ services, steps, users });
}
/* Notifications Loader */
export async function getNotificationsChat() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}notifications/get-chats`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function destroyNotificationsChat(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}notifications/destroy-chat/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getNotifications() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}notifications/get-notifications`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderNotifications() {
  const [chat, userAuth, notificationsData] = await Promise.all([
    getNotificationsChat(),
    getUserByToken(),
    getNotifications(),
  ]);
  return json({ chat, userAuth, notificationsData });
}

export async function logOutRequest() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/logout`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

//Organization Development Options
export async function getInductions() {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-inductions`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMyInductions() {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-my-inductions`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTrainings() {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-trainings`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMyTrainings() {
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-my-trainings`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderOrganizationDevelopment() {
  const [positions, areas, inductions] = await Promise.all([
    getPosition(),
    getAreas(),
    getInductions(),
  ]);
  return json({ positions, areas, inductions });
}

export async function multiloaderNewTraining() {
  const [areas, positions, users, trainings] = await Promise.all([
    getAreas(),
    getPosition(),
    getUsers(),
    getTrainings(),
  ]);
  return json({ areas, positions, users, trainings });
}

export async function getExam({ params }) {
  const exam_id = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-exam/${exam_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getInductionResume({ params }) {
  const ind_id = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-induction-resume/${ind_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTrainingResume({ params }) {
  const ind_id = params.id;
  try {
    const response = await fetch(
      `${
        import.meta.env.VITE_SERVER_URL
      }organization-development/get-training-resume/${ind_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMyTickets() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}tickets/get-my-tickets`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getAssignedTickets() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}tickets/get-assigned-tickets`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function inProcessTickets() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}tickets/get-in-process-tickets`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderTickets() {
  const [areas, users, myTickets, assignedTickets, processTickets] =
    await Promise.all([
      getAreas(),
      getUsers(),
      getMyTickets(),
      getAssignedTickets(),
      inProcessTickets(),
    ]);
  return json({ areas, users, myTickets, assignedTickets, processTickets });
}

export async function getTicket({ params }) {
  const ticket_id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}tickets/get-ticket/${ticket_id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderShowTickets({ params }) {
  const [areas, users, myTicket] = await Promise.all([
    getAreas(),
    getUsers(),
    getTicket({ params }),
  ]);
  return json({ areas, users, myTicket });
}

export async function getEvaluations() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/get-evaluation`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getEvaluationSimple({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/get-specific-evaluation/${params.id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMenu360() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/get-360-menu`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getEvalsType({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization-development/get-evaluations-type/${params.id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

//CONFIGURATION ROUTES
export async function getBusinessInformation() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}configuration/get-business-information`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
          // "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

//Organization GETS ID

export async function getArea(id) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-area/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
          // "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getPuesto({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-puesto/${params.id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
          // "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getUserOrg({ params }) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/get-user/${params.id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
          // "Content-Type": "application/json",
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiLoaderPositionCreate({ params }) {
  const [areas, positions, position] = await Promise.all([
    getAreas(),
    getPosition(),
    getPuesto({ params }),
  ]);

  return json({ areas, positions, position });
}

export async function multiLoaderUserCreate({ params }) {
  const [areas, positions, users, user] = await Promise.all([
    getAreas(),
    getPosition(),
    getUsers(),
    getUserOrg({ params }),
  ]);

  return json({ areas, positions, users, user });
}

export async function permissionValidate(position, permision, module) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}organization/permission-validate/${position}/${permision}/${module}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function multiloaderProjectPM({ params }) {
  const projectId = params.projectId;
  const [project, users] = await Promise.all([
    getProjectById(projectId),
    getUsers(),
  ]);

  return json({ project, users });
}

export async function getProjectById(projectId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/show-project/${projectId}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getTodayActivity() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/today-activities/0/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function searchTodayActivity(type, date) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/today-activities/${type}/${date}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMonthActivity() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/month-activities/0/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function searchMonthActivity(type, month) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/month-activities/${type}/${month}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getMonthKanban() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/kanban-activities/0/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function searchMonthKanban(type, month) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/kanban-activities/${type}/${month}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCsfAnalityc({ params }) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-csf-analityc/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getProjectsAnalityc({ params }) {
  const id = params.id;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}project-manager/get-project-analityc/${id}`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function getCalendarData() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}calendar/get-data/0`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );
    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}
