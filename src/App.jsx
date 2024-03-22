import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import MainLayout from "@/layouts/MainLayout";
import SideLayout, { Action as newLead } from "@/layouts/CRM/SideLayout";

//CRM
import MainCRM from "@/pages/CRM/MainCRM";
import DataTable from "./pages/CRM/components/Table/DataTable";

//Leads
import MainLeads from "./pages/Leads/MainLeads";
import Stages from "./pages/Leads/components/Stages";
import Timeline from "./pages/Leads/Timeline";
import { getLeadById, getSteps } from "./pages/Leads/utils";

//Lead :id
import MainLead from "./pages/Leads/Lead/MainLead";
import SidelayoutLead from "./pages/Leads/Lead/SidelayoutLead";

//Login
import Login from "./layouts/Login/LoginLayout";

//Organization
import SideLayoutOrganization from "./layouts/Organization/components/SideLayout";
import MainOrganization, {Action as newArea} from "./pages/Organization/User/MainOrganization";
import MainAccess from "./pages/Organization/Access/MainAccess";


//Progress
import MainProgress, {
  Action as newService,
} from "./pages/Progress/MainProgress";

// Project Manager
import SideLayoutPManager from "./layouts/PManager/SideLayoutPManager";
import MainPManager from "./pages/PManager/MainPManager";
import Board from "./pages/PManager/Board";
import CsfView from "./pages/PManager/CsfView";
//actions
import { getAreas, getLeads, getServices } from "./lib/actions";

//Not Found
import NotFound from "./components/NotFound";
import FormCreateUser from "./pages/Organization/User/FormCreateUser";
import FormCreatePosition from "./pages/Organization/User/FormCreatePosition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        id: "side_services",
        path: "/crm",
        element: <SideLayout />,
        loader: getServices,
        action: newLead,
        children: [
          {
            index: true,
            loader: getLeads,
            element: <MainCRM />,
          },
          // {
          //   path: "/crm/homepage",
          //   element: <MainCRM />,
          //   children: [
          //     {
          //       index: true,
          //       loader: getLeads,
          //       element: <DataTable />,
          //     },
          //   ],
          // },
          {
            path: "/crm/leads",
            element: <MainLeads />,
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
          {
            path: "/crm/progress",
            element: <MainProgress />,
            loader: getServices,
            action: newService,
            // children: [
            //     {
            //         index: true,
            //         element: <Stages />,
            //     },
            //     {
            //         path: ":id",
            //         element: <Stages />,
            //     },
            // ],
          },
        ],
      },
      //Lead ID
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
      {
        path: "/organization",
        element: <SideLayoutOrganization />,
        action: newArea,
        children: [
          {
            index: true,
            element: <MainOrganization />,
          },
          {
            path: "/organization/access",
            element: <MainAccess />,
          },
          {
            path: "/organization/create-user",
            element: <FormCreateUser />,
          },
          {
            path: "/organization/create-position",
            element: <FormCreatePosition />,
            loader: getAreas,
          },
        ],
      },
      {
        path: "/project-manager",
        element: <SideLayoutPManager />,
        children: [
          {
            path: "/project-manager",
            element: <MainPManager />,
            children: [
              {
                index: true,
                element: <Board />,
              },
              {
                path: "/project-manager/csf",
                element: <CsfView />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
