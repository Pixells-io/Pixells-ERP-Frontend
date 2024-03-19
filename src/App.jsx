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
import Login from "./layouts/Login/LoginLayout";
import MainOrganization from "./pages/Organization/MainOrganization";

//Progres
import MainProgress, {
  Action as newService,
} from "./pages/Progress/MainProgress";

//actions
import { getLeads, getServices } from "./lib/actions";

//Not Found
import NotFound from "./components/NotFound";

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
                // loader: getSteps,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/organization",
    element: <MainOrganization />,
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
