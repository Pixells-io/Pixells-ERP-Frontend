import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import MainLayout from "@/layouts/MainLayout";
import SideLayout from "@/layouts/CRM/SideLayout";

//CRM
import MainCRM from "@/pages/CRM/MainCRM";
import DataTable from "./pages/CRM/components/Table/DataTable";

//Leads
import MainLeads from "./pages/Leads/MainLeads";
import Stages from "./pages/Leads/components/Stages";

//actions
import { getLeads } from "./lib/actions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/crm",
        element: <SideLayout />,
        children: [
          {
            path: "/crm/homepage",
            element: <MainCRM />,
            children: [
              {
                index: true,
                // loader: getLeads,
                element: <DataTable />,
              },
            ],
          },
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
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
