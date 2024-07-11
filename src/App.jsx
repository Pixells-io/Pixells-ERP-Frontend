import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import MainLayout from "@/layouts/MainLayout";
import SideLayout, { Action as newLead } from "@/layouts/CRM/SideLayout";

//DASHBOARD
import MainDashboard from "./pages/Dashboard/MainDashboard";

//CRM
import MainCRM from "@/pages/CRM/MainCRM";

//Leads
import MainLeads, {
  multiFormAction as ActionsLeads,
} from "./pages/CRM/Leads/MainLeads";
import Stages from "./pages/CRM/Leads/components/Stages";
import Timeline from "./pages/CRM/Leads/Timeline";
import { getLeadById, multiLoaderStageLeads } from "./pages/CRM/Leads/utils";
import MainLead from "./pages/CRM/Leads/Lead/MainLead";
import SidelayoutLead, {
  Action as LeadsEditFunction,
} from "./pages/CRM/Leads/Lead/SidelayoutLead";

//Client :id
import MainClient, {
  Action as ClientAccion,
} from "./pages/CRM/Clients/MainClient";
import MainClients from "./pages/Clients/MainClients";

// CRM Services
import MainServices, {
  Action as NewFunction,
} from "./pages/CRM/Services/MainServices";
import MainService, {
  Action as ServiceConsoleFunction,
} from "./pages/CRM/Services/MainService";
import MainPackage from "./pages/CRM/Services/MainPackage";

//CRM Email
import MainEmail from "./pages/CRM/Email/MainEmail";

//CRM Agreements
import MainAgreements, {
  Action as CreateAgreementCustomer,
} from "./pages/CRM/Agreements/MainAgreements";
import NewAgreements, {
  Action as newAgreementTemplate,
} from "./pages/CRM/Agreements/NewAgreement";
import EditAgreements, {
  Action as EditAgreementTemplate,
} from "./pages/CRM/Agreements/EditAgreements";
import NewContract, {
  Action as NewContractAction,
} from "./pages/CRM/Agreements/NewContract";
import ShowAgreements, {
  Action as EditContract,
} from "./pages/CRM/Agreements/ShowAgreements";

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
import MainArea from "./pages/Organization/User/Area/MainArea";
import MainPosition, {
  Action as UpdatePosition,
} from "./pages/Organization/User/Position/MainPosition";
import MainUser, {
  Action as UpdateUser,
} from "./pages/Organization/User/User/MainUser";

// Project Manager
import SideLayoutPManager, {
  Action as newObjective,
} from "./layouts/PManager/SideLayoutPManager";
import MainPManager, { multiFormAction } from "./pages/PManager/MainPManager";
import CsfView from "./pages/PManager/CsfView";
import Projects from "./pages/PManager/Projects";
import Today from "./pages/PManager/Today";
import Activities, {
  Action as taskFunctions,
} from "./pages/PManager/Activities";
import Status, { Action as statusPmFunction } from "./pages/PManager/Status";
import Boards from "./pages/PManager/Boards";
import MainProject, {
  Action as multiloaderProject,
} from "./pages/PManager/MainProject";

// Chat
import LayoutChat, {
  Action as chatLayoutFunction,
} from "./layouts/Chat/LayoutChat";
import MainChat, { Action as functionMasterChat } from "./pages/Chat/MainChat";
import { multiLoaderChat2, storeMensagge } from "./pages/Chat/utils";

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
  getAgreement,
  multiloaderTablesCRM,
  multiloaderProgressSteps,
  multiloaderNotifications,
  multiloaderOrganizationDevelopment,
  getMyInductions,
  multiloaderNewTraining,
  getMyTrainings,
  getExam,
  multiloaderTickets,
  getTicket,
  getEvaluations,
  getEvaluationSimple,
  getMenu360,
  getEvalsType,
  multiloaderShowTickets,
  multiLoaderAreasPositions,
  getUsers,
  getBusinessInformation,
  getArea,
  multiLoaderPositionCreate,
  multiLoaderUserCreate,
  multiloaderAgreements,
  getContractCreate,
  getContract,
  getClient,
  multiloaderCFSView,
  getProjectById,
  getTodayActivity,
  getMonthActivity,
  getMonthKanban,
  getCsfAnalityc,
  getProjectsAnalityc,
  multiloaderProjectPM,
  getCalendarData,
  getUserByToken,
  getObjectives,
  showService,
  showCategory,
  multilaoderSideLayoutCRM,
} from "./lib/actions";

//Not Found
import NotFound from "./components/NotFound";

// Tickets
import SideLayoutTickets, {
  Action as CreateTicketFunction,
} from "./layouts/Tickets/SideLayoutTickets";
import SideLayoutTicketsShow, {
  Action as FollowUpTicket,
} from "./layouts/Tickets/SideLayoutTicketsShow";
import MainTickets from "./pages/Tickets/MainTickets";
import ShowTickets from "./pages/Tickets/ShowTickets";

//MyProfile
import SideLayoutMyProfile, {
  Action as ChangeMyPassword,
} from "./layouts/MyProfile/SideLayoutMyProfile";
import MainMyProfile from "./layouts/MyProfile/MainMyProfile";
import MainSecurity from "./layouts/MyProfile/MainSecutiry";
import MainNotifications from "./layouts/MyProfile/MainNotifications";

//Configurations
import SideLayoutConfiguration, {
  Action as UpdateBusinessInformation,
} from "./layouts/Configuration/SideLayoutConfiguration";
import InformationShow from "./pages/Configurations/InformationShow";
import InformationCreateShow from "./pages/Configurations/InformationCreateShow";

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
import MainEvaluations, {
  Action as newEvaluation,
} from "./pages/OrgDev/Evaluation/MainEvaluations";
import MainEDI from "./pages/OrgDev/Evaluation/MainEDI";
import Main360 from "./pages/OrgDev/Evaluation/Main360";
import MainEvalCreate, {
  Action as newEvalExam,
} from "./pages/OrgDev/Evaluation/MainEvalCreate";
import ExamShow from "./pages/OrgDev/Exam/ExamShow";
import MainExamAnswer, {
  Action as ExamFunction,
} from "./pages/OrgDev/Exam/MainExamAnswer";
import EvalExams from "./pages/OrgDev/Evaluation/components/EvalExams";

//Calendar
import MainCalendar from "./pages/Calendar/MainCalendar";
import LayoutCalendar, {
  Action as createMeetCalendar,
} from "./pages/Calendar/LayoutCalendar";

//BankManagement
import MainBankManagement from "./pages/BankManagement/MainBankManagement";
import SideLayoutBankManag from "./layouts/BankManagement/SideLayoutBankManag";
import MainCollectionBankManag from "./pages/BankManagement/Collections/MainCollectionBankManag";
import AddNewCollection from "./pages/BankManagement/Collections/AddNewCollection";
import MainCategory, {
  Action as MainCategoryFunction,
} from "./pages/CRM/Services/MainCategory";

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
        loader: multilaoderSideLayoutCRM,
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
            loader: showService,
            action: ServiceConsoleFunction,
          },
          {
            path: "/crm/category/:id",
            element: <MainCategory />,
            loader: showCategory,
            action: MainCategoryFunction,
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
            loader: multiloaderAgreements,
            action: CreateAgreementCustomer,
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
            path: "/crm/agreements/show/:id",
            element: <ShowAgreements />,
            loader: getContract,
            action: EditContract,
          },
          {
            path: "/crm/agreements/new-contract/:id/:customer",
            element: <NewContract />,
            loader: getContractCreate,
            action: NewContractAction,
          },

          //crm client :id
          {
            path: "/crm/client/:id",
            element: <MainClient />,
            loader: getClient,
            action: ClientAccion,
          },
        ],
      },
      // crm - lead id
      {
        path: "/crm/leads/:id",
        element: <SidelayoutLead />,
        action: LeadsEditFunction,
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
            loader: multiLoaderAreasPositions,
            action: newPosition,
          },
          {
            path: "/organization/area/:id",
            element: <MainArea />,
            loader: getArea,
          },
          {
            path: "/organization/position/:id",
            element: <MainPosition />,
            loader: multiLoaderPositionCreate,
            action: UpdatePosition,
          },
          {
            path: "/organization/user/:id",
            element: <MainUser />,
            loader: multiLoaderUserCreate,
            action: UpdateUser,
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
            loader: getTodayActivity,
          },
          {
            path: "/project-manager/activities",
            element: <Activities />,
            loader: getMonthActivity,
            action: taskFunctions,
          },
          {
            path: "/project-manager/status",
            element: <Status />,
            loader: getMonthKanban,
            action: statusPmFunction,
          },
          {
            path: "/project-manager/:id",
            element: <MainPManager />,
            loader: getObjectives,
            action: multiFormAction,
            children: [
              {
                index: true,
                loader: multiLoaderCSF,
                element: <Boards />,
              },
              {
                path: "/project-manager/:id/csf",
                loader: getCsfAnalityc,
                element: <CsfView />,
              },
              {
                path: "/project-manager/:id/projects",
                loader: getProjectsAnalityc,
                element: <Projects />,
              },
              {
                path: "/project-manager/:id/projects/:projectId",
                element: <MainProject />,
                loader: multiloaderProjectPM,
                action: multiloaderProject,
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
        action: chatLayoutFunction,
        children: [
          {
            path: "/chat/:id",
            element: <MainChat />,
            loader: multiLoaderChat2,
            action: functionMasterChat,
          },
        ],
      },
      //ORG DEV
      {
        path: "/org-development",
        element: <SideLayoutDevOrg />,
        children: [
          //Induccion
          {
            path: "/org-development/induction",
            element: <MainOrgDev />,
            index: true,
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
            action: newEvaluation,
            loader: getEvaluations,
          },
          {
            path: "/org-development/evaluation/create/:id",
            element: <MainEvalCreate />,
            loader: getEvaluationSimple,
            action: newEvalExam,
          },
          {
            path: "/org-development/evaluation/edi",
            element: <MainEDI />,
          },
          {
            path: "/org-development/evaluation/360",
            element: <Main360 />,
            loader: getMenu360,
            children: [
              {
                path: "/org-development/evaluation/360/:id",
                element: <EvalExams />,
                // loader: getEvalsType,
                loader: getEvalsType,
              },
            ],
          },
          //Exam
          {
            path: "/org-development/exam/:id",
            element: <ExamShow />,
            loader: getExam,
          },
          {
            path: "/org-development/answer-exam/:id",
            element: <MainExamAnswer />,
            loader: getExam,
            action: ExamFunction,
          },
        ],
      },
      // Tickets
      {
        path: "/tickets",
        element: <SideLayoutTickets />,
        action: CreateTicketFunction,
        children: [
          {
            index: true,
            element: <MainTickets />,
            loader: multiloaderTickets,
          },
        ],
      },
      {
        path: "/tickets/:id",
        element: <SideLayoutTicketsShow />,
        loader: getTicket,
        action: FollowUpTicket,
        children: [
          {
            index: true,
            element: <ShowTickets />,
            loader: multiloaderShowTickets,
          },
        ],
      },
      // Configuration
      {
        path: "/configuration",
        element: <SideLayoutConfiguration />,
        children: [
          {
            index: true,
            element: <InformationShow />,
            loader: getBusinessInformation,
          },
        ],
      },
      {
        path: "/configuration/create",
        element: <SideLayoutConfiguration />,
        action: UpdateBusinessInformation,
        children: [
          {
            index: true,
            element: <InformationCreateShow />,
            loader: getUsers,
          },
        ],
      },
      // Calendar
      {
        path: "/calendar",
        element: <LayoutCalendar />,
        loader: getUsers,
        action: createMeetCalendar,
        children: [
          {
            index: true,
            element: <MainCalendar />,
            loader: getCalendarData,
          },
        ],
      },
      // Profile
      {
        path: "/my-profile",
        element: <SideLayoutMyProfile />,
        action: ChangeMyPassword,
        children: [
          {
            index: true,
            element: <MainMyProfile />,
            loader: getUserByToken,
          },
          {
            path: "/my-profile/security",
            element: <MainSecurity />,
          },
          {
            path: "/my-profile/notifications",
            element: <MainNotifications />,
          },
        ],
      },
      //BANK MANAGEMENT
      {
        path: "/bank-management",
        element: <SideLayoutBankManag />,
        children: [
          {
            index: true,
            element: <MainBankManagement />,
          },
          {
            path: "/bank-management/collection",
            element: <MainCollectionBankManag />,
          },
          {
            path: "/bank-management/collection/create",
            element: <AddNewCollection />,
          },
        ],
      },
    ],
  },
  //Login
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
