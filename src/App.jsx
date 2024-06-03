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
import { getLeadById, multiLoaderStageLeads } from "./pages/CRM/Leads/utils";

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
import MainPackage from "./pages/CRM/Services/MainPackage";

//CRM Email
import MainEmail from "./pages/CRM/Email/MainEmail";

//CRM Agreements
import MainAgreements from "./pages/CRM/Agreements/MainAgreements";
import NewAgreements, {
  Action as newAgreementTemplate,
} from "./pages/CRM/Agreements/NewAgreement";
import EditAgreements, {
  Action as EditAgreementTemplate,
} from "./pages/CRM/Agreements/EditAgreements";
import NewContract, {
  Action as NewContractAction,
} from "./pages/CRM/Agreements/NewContract";

//CRM Progress
import MainProgress, {
  Action as setServices,
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
import MainChat from "./pages/Chat/MainChat";
import { multiLoaderChat2 } from "./pages/Chat/utils";

//actions
import {
  getAreas,
  getLeads,
  getServices,
  multiLoaderServices,
  multiLoaderOrganization,
  multiLoaderChat,
  multiLoaderCSF,
  multiLoaderSideLayoutPM,
  getAllServices,
  categoryShow,
  getPackageById,
  getServicesAgreements,
  getAgreement,
  multiloaderNewContract,
  multiloaderTablesCRM,
  multiloaderProgressSteps,
  multiloaderNotifications,
  multiloaderOrganizationDevelopment,
  getMyInductions,
  multiloaderNewTraining,
  getMyTrainings,
} from "./lib/actions";

//Not Found
import NotFound from "./components/NotFound";

// Prueba
import Sopas, { Action as newImage } from "./pages/Organization/Sopas";

// DEV ORG
import SideLayoutDevOrg from "./layouts/OrgDev/SideLayoutDevOrg";
import MainOrgDev, {
  Action as OrgDevSaveInduction,
} from "./pages/OrgDev/MainOrgDev";
import MainMyInductions from "./pages/OrgDev/Inductions/MainMyInductions";
import MainInduction from "./pages/OrgDev/Inductions/MainInduction";
import MainCapacitations, {
  Action as newCapacitacion,
} from "./pages/OrgDev/Capacitation/MainCapacitations";
import MainCapacitation from "./pages/OrgDev/Capacitation/MainCapacitation";
import MainMyCapacitations from "./pages/OrgDev/Capacitation/MainMyCapacitations";
import CreateExamenInduction, {
  Action as newInductionExam,
} from "./pages/OrgDev/Inductions/CreateExamenInduction";
import CreateExamCapacitation from "./pages/OrgDev/Capacitation/CreateExamCapacitation";
import MainEvaluations from "./pages/OrgDev/Evaluation/MainEvaluations";
import MainEDI from "./pages/OrgDev/Evaluation/MainEDI";
import Main360 from "./pages/OrgDev/Evaluation/Main360";
import MainEvalCreate from "./pages/OrgDev/Evaluation/MainEvalCreate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: multiloaderNotifications,
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
        // errorElement: <NotFound />,
        loader: getServices,
        action: newLead,
        children: [
          //crm home
          {
            index: true,
            loader: multiloaderTablesCRM,
            element: <MainCRM />,
          },
          {
            //crm leads
            path: "/crm/leads",
            element: <MainLeads />,
            loader: getLeads,
            action: ActionsLeads,
            children: [
              {
                index: true,
                element: <Stages />,
                loader: multiLoaderStageLeads,
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
            loader: getAllServices,
            action: setServices,
            children: [
              {
                path: "/crm/progress/:id",
                element: <StepsProgress />,
                loader: multiloaderProgressSteps,
                action: newStepService,
              },
            ],
          },
          //crm services
          {
            path: "/crm/services/packages/:id",
            element: <MainPackage />,
            loader: getPackageById,
          },
          {
            path: "/crm/services",
            element: <MainServices />,
            action: NewFunction,
            loader: multiLoaderServices,
          },
          {
            path: "/crm/services/:id",
            element: <MainService />,
            loader: categoryShow,
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
            loader: getServicesAgreements,
          },
          {
            path: "/crm/agreements/create",
            element: <NewAgreements />,
            action: newAgreementTemplate,
            loader: getAllServices,
          },
          {
            path: "/crm/agreements/edit/:id",
            element: <EditAgreements />,
            loader: getAgreement,
            action: EditAgreementTemplate,
          },
          {
            path: "/crm/agreements/new-contract/:id",
            element: <NewContract />,
            loader: multiloaderNewContract,
            action: NewContractAction,
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
        // errorElement: <NotFound />,
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
          {
            path: "/organization/sopas",
            element: <Sopas />,
            action: newImage,
          },
        ],
      },
      // project manager
      {
        path: "/project-manager",
        element: <SideLayoutPManager />,
        // errorElement: <NotFound />,
        loader: multiLoaderSideLayoutPM,
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
                loader: multiLoaderCSF,
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
        children: [
          { index: true },
          {
            path: "/chat/:id",
            element: <MainChat />,
            loader: multiLoaderChat2,
          },
        ],
      },
      //ORG DEV
      {
        path: "/org-development",
        element: <SideLayoutDevOrg />,
        children: [
          { index: true },
          //Induccion
          {
            path: "/org-development/induction",
            element: <MainOrgDev />,
            loader: multiloaderOrganizationDevelopment,
            action: OrgDevSaveInduction,
          },
          {
            path: "/org-development/induction/create/:id",
            element: <CreateExamenInduction />,
            action: newInductionExam,
          },
          {
            path: "/org-development/induction/:id",
            element: <MainInduction />,
          },
          {
            path: "/org-development/induction/my-inductions",
            element: <MainMyInductions />,
            loader: getMyInductions,
          },
          //Capacitacion
          {
            path: "/org-development/capacitation",
            element: <MainCapacitations />,
            loader: multiloaderNewTraining,
            action: newCapacitacion,
          },
          {
            path: "/org-development/capacitation/:id",
            element: <MainCapacitation />,
          },
          {
            path: "/org-development/capacitation/create/:id",
            element: <CreateExamCapacitation />,
          },
          {
            path: "/org-development/capacitation/my-capacitations",
            element: <MainMyCapacitations />,
            loader: getMyTrainings,
          },
          //Evaluation
          {
            path: "/org-development/evaluation",
            element: <MainEvaluations />,
          },
          {
            path: "/org-development/evaluation/create",
            element: <MainEvalCreate />,
          },
          {
            path: "/org-development/evaluation/edi",
            element: <MainEDI />,
          },
          {
            path: "/org-development/evaluation/360",
            element: <Main360 />,
          },
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
