import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import MainLayout from "@/layouts/MainLayout";
import SideLayout, { Action as newLead } from "@/layouts/CRM/SideLayout";

//DASHBOARD
import MainDashboard from "./pages/Dashboard/MainDashboard";

//CRM
import MainCRM from "@/pages/CRM/MainCRM";
import DataTable from "./pages/CRM/components/Table/DataTable";

//Leads
import MainLeads, {
  multiFormAction as ActionsLeads,
} from "./pages/CRM/Leads/MainLeads";
import Stages from "./pages/CRM/Leads/components/Stages";
import Timeline from "./pages/CRM/Leads/Timeline";
import { getLeadById, getSteps } from "./pages/CRM/Leads/utils";

//Lead
import MainLead from "./pages/CRM/Leads/Lead/MainLead";
import SidelayoutLead from "./pages/CRM/Leads/Lead/SidelayoutLead";

//Client :id
import MainClient from "./pages/CRM/Clients/MainClient";

// CRM Services
import MainServices, {
  Action as NewFunction,
} from "./pages/CRM/Services/MainServices";
import MainService from "./pages/CRM/Services/MainService";

//CRM Email
import MainEmail from "./pages/CRM/Email/MainEmail";

//CRM Agreements
import MainAgreements from "./pages/CRM/Agreements/MainAgreements";

//CRM Progress
import MainProgress, {
  Action as newService,
} from "./pages/CRM/Progress/MainProgress";
import StepsProgress, {
  Action as newStepService,
} from "./pages/CRM/Progress/StepsProgress";

//Login
import Login, { action as loginAction } from "./layouts/Login/LoginLayout";

//Organization
import SideLayoutOrganization from "./layouts/Organization/components/SideLayout";
import MainOrganization, {
  Action as newArea,
} from "./pages/Organization/User/MainOrganization";
import MainAccess from "./pages/Organization/Access/MainAccess";
import FormCreateUser, {
  Action as newUser,
} from "./pages/Organization/User/FormCreateUser";
import FormCreatePosition, {
  Action as newPosition,
} from "./pages/Organization/User/FormCreatePosition";

import NewCategoryForm from "./pages/CRM/Services/components/Forms/NewCategoryForm";

// Project Manager
import SideLayoutPManager, {
  Action as newObjective,
} from "./layouts/PManager/SideLayoutPManager";
import MainPManager, { multiFormAction } from "./pages/PManager/MainPManager";
import CsfView from "./pages/PManager/CsfView";
import Projects from "./pages/PManager/Projects";
import Today from "./pages/PManager/Today";
import Activities from "./pages/PManager/Activities";
import Status from "./pages/PManager/Status";
import Boards from "./pages/PManager/Boards";
import MainClients from "./pages/Clients/MainClients";

// Chat
import LayoutChat from "./layouts/Chat/LayoutChat";
import MainChat, {
  Action as ChatFunction,
} from "./pages/Chat/MainChat";

//actions
import {
  getAreas,
  getGoals,
  getLeads,
  getObjectives,
  getServices,
  multiLoaderServices,
  getServiceSteps,
  multiLoaderOrganization,
  multiLoaderChat,
} from "./lib/actions";

//Not Found
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainDashboard />,
      },
      {
        path: "/clients",
        element: <MainClients />,
      },
      // crm
      {
        id: "side_services",
        path: "/crm",
        element: <SideLayout />,
        errorElement: <NotFound />,
        loader: getServices,
        action: newLead,
        children: [
          //crm home
          {
            index: true,
            loader: getLeads,
            element: <MainCRM />,
          },
          {
            //crm leads
            path: "/crm/leads",
            element: <MainLeads />,
            action: ActionsLeads,
            children: [
              {
                index: true,
                element: <Stages />,
                loader: getSteps,
              },
              {
                path: "/crm/leads/timeline",
                element: <Timeline />,
              },
            ],
          },
          // crm progress
          {
            path: "/crm/progress",
            element: <MainProgress />,
            loader: getServices,
            action: newService,
            children: [
              {
                path: "/crm/progress/:id",
                element: <StepsProgress />,
                loader: getServiceSteps,
                action: newStepService,
              },
            ],
          },
          //crm services
          {
            path: "/crm/services",
            element: <MainServices />,
            action: NewFunction,
            loader: multiLoaderServices,
          },
          {
            path: "/crm/services/:id",
            element: <MainService />,
          },

          //crm email
          {
            path: "/crm/email",
            element: <MainEmail />,
          },
          //crm agreements
          {
            path: "/crm/agreements",
            element: <MainAgreements />,
          },
          //crm client :id
          {
            path: "/crm/client/:id",
            element: <MainClient />,
          },
        ],
      },
      // crm - lead id
      {
        path: "/crm/leads/:id",
        element: <SidelayoutLead />,
        loader: getLeadById,
        children: [
          {
            index: true,
            element: <MainLead />,
          },
        ],
      },
      // organization
      {
        path: "/organization",
        element: <SideLayoutOrganization />,
        errorElement: <NotFound />,
        action: newArea,
        children: [
          {
            index: true,
            loader: multiLoaderOrganization,
            element: <MainOrganization />,
          },
          {
            path: "/organization/access",
            element: <MainAccess />,
            loader: multiLoaderOrganization,
          },
          {
            path: "/organization/create-user",
            element: <FormCreateUser />,
            loader: multiLoaderOrganization,
            action: newUser,
          },
          {
            path: "/organization/create-position",
            element: <FormCreatePosition />,
            loader: getAreas,
            action: newPosition,
          },
        ],
      },
      // project manager
      {
        path: "/project-manager",
        element: <SideLayoutPManager />,
        errorElement: <NotFound />,
        loader: getObjectives,
        action: newObjective,
        children: [
          {
            index: true,
            element: <Today />,
          },
          {
            path: "/project-manager/activities",
            element: <Activities />,
          },
          {
            path: "/project-manager/status",
            element: <Status />,
          },
          {
            path: "/project-manager/:id",
            element: <MainPManager />,
            action: multiFormAction,
            children: [
              {
                index: true,
                loader: getGoals,
                element: <Boards />,
              },
              {
                path: "/project-manager/:id/csf",
                element: <CsfView />,
              },
              {
                path: "/project-manager/:id/projects",
                element: <Projects />,
              },
            ],
          },
        ],
      },
      //Chat
      {
        path: "/chat",
        element: <LayoutChat />,
        loader: multiLoaderChat,
        action: ChatFunction,
        children: [
          { index: true, element: <MainChat /> },
          { path: "/chat/:id" },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
