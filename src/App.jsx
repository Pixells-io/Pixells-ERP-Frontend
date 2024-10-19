import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Layouts
import MainLayout from "@/layouts/MainLayout";
import SideLayout, { Action as newLead } from "@/layouts/CRM/SideLayout";

//DASHBOARD
import MainDashboard from "./pages/Dashboard/MainDashboard";

//CRM
import MainCRM from "@/pages/CRM/MainCRM";

//Leads
import {
  multiloaderSideLayoutLead,
  multiLoaderStageLeads,
} from "./pages/CRM/Leads/utils";
import MainLead from "./pages/CRM/Leads/Lead/MainLead";
import SidelayoutLead, {
  Action as LeadsEditFunction,
} from "./pages/CRM/Leads/Lead/SidelayoutLead";

//Client :id
import MainClient, {
  Action as ClientAccion,
} from "./pages/CRM/Clients/MainClient";
import MainClients, {
  Action as ClientPlatformClient,
} from "./pages/Clients/MainClients";

// CRM Services
import MainServices, {
  Action as NewFunction,
} from "./pages/CRM/Services/MainServices";
import MainService, {
  Action as ServiceConsoleFunction,
} from "./pages/CRM/Services/MainService";
import MainPackage, {
  Action as PackageEditFunction,
} from "./pages/CRM/Services/MainPackage";

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
  action as newArea,
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
import Completed, {
  Action as CompletedAction,
} from "./pages/PManager/Completed";

// Chat
import LayoutChat, {
  Action as chatLayoutFunction,
} from "./layouts/Chat/LayoutChat";
import MainChat, { Action as functionMasterChat } from "./pages/Chat/MainChat";
import {
  getChatInfo,
  multiLoaderChat2,
  multiloaderChatLibrary,
  storeMensagge,
} from "./pages/Chat/utils";
import WelcomeToChat from "./layouts/Chat/Components/WelcomeToChat";

//actions
import {
  getLeads,
  multiLoaderServices,
  multiLoaderOrganization,
  multiLoaderChat,
  multiLoaderCSF,
  multiLoaderSideLayoutPM,
  getAllServices,
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
  getTodayActivity,
  getMonthActivity,
  getMonthKanban,
  getCsfAnalityc,
  getProjectsAnalityc,
  multiloaderProjectPM,
  getCalendarData,
  getUserByToken,
  showService,
  showCategory,
  multilaoderSideLayoutCRM,
  multiLoaderDashboard,
  getInductionResume,
  getTrainingResume,
  getCompletedActivity,
  multiLoaderObjetivesPm,
  getNotifications,
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
import IntegrationPanel, {
  Action as PostIntegrationsData,
} from "./pages/Configurations/Integrations";

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
import CreateExamCapacitation, {
  Action as createExamCapacitationFunction,
} from "./pages/OrgDev/Capacitation/CreateExamCapacitation";
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

//Accounting
import SideLayoutAccounting, {
  Action as AccountingCatalogActions,
} from "./layouts/Accounting/SideLayoutAccounting";
import MainCatalog from "./pages/Accounting/Catalog/MainCatalog";
import MainPolicy from "./pages/Accounting/Policy/MainPolicy";
import CreateAccount from "./pages/Accounting/Policy/New/newAccounting";
import AccountDetail from "./pages/Accounting/Policy/Details/AccountDetails";
import MainBook from "./pages/Accounting/Book/MainBook";
import MainCost, {
  Action as ActionCostCenter,
} from "./pages/Accounting/Cost/MainCost";
import AccountingAccount, {
  Action as AccountingAccountActions,
} from "./pages/Accounting/components/AccountingAccount";
import {
  getAccountingAccounts,
  getAccountingAccountsById,
} from "./pages/Accounting/Catalog/utils";
import AccountingAccountEmpty from "./pages/Accounting/components/AccountingAccountEmpty";
import { getCostCenter } from "./pages/Accounting/Cost/utils";

//BankManagement
import MainBankManagement, {
  Action as CreateNewBank,
} from "./pages/BankManagement/MainBankManagement";
import SideLayoutBankManag from "./layouts/BankManagement/SideLayoutBankManag";
import MainBankDetailsGeneral from "./pages/BankManagement/BankDetails/BankInformation";
import MainCollectionBankManag from "./pages/BankManagement/Collections/MainCollectionBankManag";
import AddNewCollection from "./pages/BankManagement/Collections/AddNewCollection";
import MainCategory, {
  Action as MainCategoryFunction,
} from "./pages/CRM/Services/MainCategory";
import CollectionRecord from "./pages/BankManagement/Collections/CollectionRecord";
import MainPaymentBankManag from "./pages/BankManagement/Payments/MainPaymentBankManag";
import AddNewPayment from "./pages/BankManagement/Payments/AddNewPayment";
import PaymentRecord from "./pages/BankManagement/Payments/PaymentRecord";
import {
  getBank,
  multiloaderOwnAndBankAccount,
  multiloaderTableBankManag,
} from "./pages/BankManagement/Accounts/utils";
import EditBank, {
  Action as updateBank,
} from "./pages/BankManagement/Accounts/Edit/EditBank";
import EditBankAccount, {
  Action as updateBankAccount,
} from "./pages/BankManagement/Accounts/Edit/EditBankAccount";
import MainPlan from "./pages/BankManagement/Plan/MainPlan";

//Client Platform
import LoginClient, {
  Action as LoginClientFunction,
} from "./pages/CRM/ClientPlatform/LoginClient";
import { getAuthClient } from "./pages/Clients/utils";

//Analytics
import SideLayoutAnalytic from "./layouts/Analytic/SideLayoutAnalytic";
import MainAnalytic from "./pages/Analytic/MainAnalytic";
import { multiloaderAnalytics } from "./pages/Analytic/utils";
import UserMediaLibrary, {
  action as multiActionsMedia,
} from "./pages/Chat/Components/UserMediaLibrary";

//Inventory
import SideLayoutInventory from "./layouts/Inventory/SideLayoutInventory";
import MainGeneral, {
  Action as CreateNewCategory,
} from "./pages/Inventory/General/MainGeneral";
import {
  getProduct,
  multiloaderArticle,
  multiloaderArticle2,
} from "./pages/Inventory/General/utils";
import CreateArticle, {
  Action as createArticle,
} from "./pages/Inventory/General/NewArticle/NewArticle";
import EditArticle, {
  Action as editProduct,
} from "./pages/Inventory/General/EditArticle/EditArticle";
import MainGeneralServices, {
  Action as multiFunctionService,
} from "./pages/Inventory/GeneralServices/MainGeneralServices";
import EditCategory, {
  Action as multiFunctionCategories,
} from "./pages/Inventory/GeneralServices/Category/MainCategory";
import EditCombo, {
  Action as multiFunctionCombos,
} from "./pages/Inventory/GeneralServices/Combos/MainCombo";
import {
  multiLoaderServiceGeneral,
  multiLoaderServiceGeneral2,
  multiLoaderServiceGeneralDetails,
  ReadCategory,
  getComboById,
} from "./pages/Inventory/GeneralServices/utils";
import CreateService, {
  Action as SaveNewGeneralService,
} from "./pages/Inventory/GeneralServices/NewService/CreateService";
import EditService, {
  Action as MultiSaveService,
} from "./pages/Inventory/GeneralServices/EditServices/EditService";
import MainWL, {
  Action as saveSlotsConfigs,
} from "./pages/Inventory/WarehouseLocations/MainWL";
import { multiLoaderUbication } from "./pages/Inventory/WarehouseLocations/utils";
import { multiLoaderData } from "./pages/Inventory/WarehouseLocations/utils";
import MainGW from "./pages/Inventory/GeneralWarehouses/MainGW";
import WLSlots, {
  Action as createNewConfigure,
} from "./pages/Inventory/WarehouseLocations/CreateConfig/WLSlots";
import CreateLocation, {
  Action as createNewLocation,
} from "./pages/Inventory/WarehouseLocations/NewLocation/CreateLocation";
import WLConfig, {
  Action as saveSlotsConfig,
} from "./pages/Inventory/WarehouseLocations/CreateConfig/WLConfig";

import CreateWH, {
  Action as createWarehouses,
} from "./pages/Inventory/GeneralWarehouses/NewWarehouse/CreateWarehouse";
import EditWH, {
  Action as editWarehouses,
} from "./pages/Inventory/GeneralWarehouses/EditWarehouse/EditWarehouse";
import {
  getWarehouses,
  getWarehouse,
} from "./pages/Inventory/GeneralWarehouses/utils";
import MainMerchandiseMovements, {
  Action as multiActionsInventoryMovements,
} from "./pages/Inventory/MerchandiseMovements/MainMerchandiseMovements";
import {
  getCatalogs,
  getInfoTransfer,
  getStocksMovement,
  getStocksMovements,
  getTransfer,
  multiLoaderMovements,
} from "./pages/Inventory/MerchandiseMovements/utils";
import TraceabilityDetails from "./pages/Inventory/MerchandiseMovements/Entry/New/MovTraceability/Traceability";
import NewTransfer from "./pages/Inventory/MerchandiseMovements/Transfer/New/NewTransfer";
import NewDirectTransfer, {
  Action as saveStockTransfer,
} from "./pages/Inventory/MerchandiseMovements/Transfer/Direct/DirectTransfer";
import TransferDetails from "./pages/Inventory/MerchandiseMovements/Transfer/Record/TransferDetails";
import TransferEntry, {
  Action as stockTransferEntryActions,
} from "./pages/Inventory/MerchandiseMovements/Transfer/Entry/TransferEntry";
import TraceabilityTransfer from "./pages/Inventory/MerchandiseMovements/Transfer/Record/MovTraceability/Traceability";
import MaterialWarehouse from "./pages/Inventory/StockItems/RawMaterial/RawMaterial";
import MainGoodsReceipt from "./pages/Inventory/GoodsReceipt/MainGoodsReceipt";
import DeliveryDetails from "./pages/Inventory/GoodsReceipt/DetailsDelivery/PendingDelivery";
import CreateTraceability from "./pages/Inventory/TraceabilityReports/NewTraceability/CreateTraceability";
import MainPriceList from "./pages/Inventory/PriceList/MainPriceList";
import CreatePriceList, {
  Action as newPriceList,
} from "./pages/Inventory/PriceList/NewPriceList/CreatePList";
import ViewPL, {
  Action as deletePriceList,
} from "./pages/Inventory/PriceList/ReadPriceList/ReadPriceList";
import { multiloaderInventory } from "./pages/Inventory/General/utils";
import {
  getBaseList,
  getList,
  multiloaderList,
  multiloaderListBase,
} from "./pages/Inventory/PriceList/utils";
import MainBranchPointSale from "./pages/Inventory/BranchPointSale/MainBranchPointSale/MainBranchPointSale";
import NewBranch, {
  Action as SaveBranchPointSale,
} from "./pages/Inventory/BranchPointSale/MainBranchPointSale/New/NewBranch";
import {
  multiLoaderBranchPointsSale,
  multiLoaderListBranch,
  multiLoaderListBranchDetails,
} from "./pages/Inventory/BranchPointSale/utils";
import EditBranch, {
  Action as MultiActionBranchDetails,
} from "./pages/Inventory/BranchPointSale/MainBranchPointSale/Edit/EditBranch";

//Sales
import SideLayoutSale from "./layouts/Sales/SideLayoutSales";
import MainCustomer from "./pages/Sales/Customer/MainCustomer";
import CreateCustomer, {
  Action as createNewCustomer,
} from "./pages/Sales/Customer/NewCustomer/CreateCustomer";
import EditCustomer, {
  Action as editCustomer,
} from "./pages/Sales/Customer/EditCustomer/CustomerEditor";
import MainInvoice from "./pages/Sales/Invoice/MainInvoices";
import InvoiceForm from "./pages/Sales/Invoice/NewInvoice/InvoiceForm";
import InvoicesDetails from "./pages/Sales/Invoice/EditInvoice/InvoiceEditor";
import InvoicePDF from "./pages/Sales/Components/DocFormat/DocumentPreview";
import MainSalesTicket from "./pages/Sales/Ticket/MainTicket";
import TicketDetails from "./pages/Sales/Ticket/EditTicket/TicketEditor";
import TicketForm, {
  Action as createSaleTickets,
} from "./pages/Sales/Ticket/NewTicket/TicketForm";
import TicketPDF from "./pages/Sales/Components/DocFormat/DocumentTicket";
import MainQtGeneral from "./pages/Sales/Quotes/MainQuotesGeneral";
import QuotesDetails from "./pages/Sales/Quotes/EditQuotes/QuotesEditor";
import QuotePDF from "./pages/Sales/Components/DocFormat/DocumentQuote";
import { getCustomer, getCustomers } from "./pages/Sales/Customer/utils";
import {
  getSalesTicket,
  multiLoaderListEditTickets,
  multiLoaderListTickets,
} from "./pages/Sales/Ticket/utils";
import Summary from "./pages/Sales/Customer/Summary/Summary";
import Information from "./pages/Sales/Customer/EditCustomer/Information/Information";
import MainOrders from "./pages/Sales/Order/MainOrders";
import OrderForm, {
  Action as createSaleOrders,
} from "./pages/Sales/Order/NewOrder/OrderForm";
import { multiLoaderListOrders } from "./pages/Sales/Order/utils";
import QuotesForm, {
  Action as createSaleQuotes,
} from "./pages/Sales/Quotes/New/QuotesForm";
import { multiLoaderListQuotes } from "./pages/Sales/Quotes/utils";
import OrderEditor from "./pages/Sales/Order/EditOrder/OrderEditor";
import OrderPDF from "./pages/Sales/Components/DocFormat/DocumentOrder";

//Shopping
import SideLayoutShopping from "./layouts/Shopping/SideLayoutShopping";
import MainSupplier from "./pages/Shopping/Suppliers/MainSuppliers";
import CreateSupplier, {
  Action as createNewSupplier,
} from "./pages/Shopping/Suppliers/New/CreateSupplier";
import CustomerProfile from "./pages/Shopping/Suppliers/New/CustomerProfile";
import MainRequestOrder, {
  Action as RequestOrderAction,
} from "./pages/Shopping/Orders/MainRequest";
import CreateOrder, {
  Action as CreateRequestOrder,
} from "./pages/Shopping/Orders/NewOrder/CreateOrder";
import MainPurchase, {
  Action as PurchaseAction,
} from "./pages/Shopping/Orders/MainPurchase";
import CreateRequest, {
  Action as createPurchase,
} from "./pages/Shopping/Orders/NewOrder/CreateOrderRequest";
import MainQuotesOrder, {
  Action as QuotesOrderAction,
} from "./pages/Shopping/Orders/MainQuotes";
import CreateQuoteOrder, {
  Action as createQuotesOrder,
} from "./pages/Shopping/Orders/NewOrder/CreateOrderQuote";
import DocumentPDF from "./pages/Shopping/Orders/NewOrder/DocFormat/DocumentView";
import MainInvoices from "./pages/Shopping/Orders/MainInvoice";
import CreateInvoices from "./pages/Shopping/Orders/NewOrder/CreateInvoice";
import EditOrders, {
  Action as PurchaseEditAction,
} from "./pages/Shopping/Orders/NewOrder/EditOrder/EditPurchase";
import EditInvoices from "./pages/Shopping/Orders/NewOrder/EditOrder/EditInvoice";
import EditRequests, {
  Action as RequestOrderEditAction,
} from "./pages/Shopping/Orders/NewOrder/EditOrder/EditRequest";
import EditQuotes, {
  Action as QuoteOrderEditAction,
} from "./pages/Shopping/Orders/NewOrder/EditOrder/EditQuotes";
import EditSupplier, {
  Action as editSupllier,
} from "./pages/Shopping/Suppliers/Edit/EditSupplier";
import EditSupplierInfo from "./pages/Shopping/Suppliers/Edit/Information/Information";
import SummaryShopping from "./pages/Shopping/Suppliers/Components/Summary";
import {
  getProducts,
  getPurchase,
  getPurchases,
  getQuoteOrder,
  getQuotesOrder,
  getRequestOrder,
  getRequestOrders,
  multiloadesGetPurchase,
  multiloadesGetQuote,
  multiloadesGetRequestOrder,
} from "./pages/Shopping/utils";

//Transformation
import MainGeneralFormula from "./pages/Transformation/GeneralFormula/MainGeneralFormula";
import SideLayoutTransformation from "./layouts/Transformation/SideLayoutTransformation";
import NewFormula from "./pages/Transformation/GeneralFormula/New/NewFormula";
import ManufacturingOrder from "./pages/Transformation/ManufacturingOrder/ManufacturingOrder";
import WorkOrder from "./pages/Transformation/WorkOrder/WorkOrder";
import OrderProcess from "./pages/Transformation/WorkOrder/OrderProcess/OrderProcess";
import OrderCut from "./pages/Transformation/WorkOrder/OrderCut/OrderCut";
import MainKardex from "./pages/Transformation/Kardex/MainKardex";
import FormulaRecords from "./pages/Transformation/GeneralFormula/Records/FormulaRecords";

//Topics
import SideLayoutTopics, {
  Action as NewTopicFunction,
} from "./layouts/Topics/SideLayoutTopics";
import MainTopics, { Action as ActionTopic } from "./pages/Topics/MainTopics";
import { Toaster } from "./components/ui/toaster";
import NewEntry, {
  Action as SaveMovement,
} from "./pages/Inventory/MerchandiseMovements/Entry/New/NewEntry";
import MerchandiseMovRecord from "./pages/Inventory/MerchandiseMovements/Entry/Records/MerchandiseMovRecord";
import NewEgress from "./pages/Inventory/MerchandiseMovements/Egress/New/NewEgress";
import MerchandiseMovRecordEgress from "./pages/Inventory/MerchandiseMovements/Egress/Records/MerchandiseMovRecordEgress";
import MainStockItem from "./pages/Inventory/StockItems/MainStockItem";
import StockWarehouse from "./pages/Inventory/StockItems/StockWarehouse/StockWarehouse";
import {
  getTopicSaved,
  multiLoaderTopics,
  multiLoaderTopics2,
} from "./pages/Topics/utils";

//POS
import MainPos from "./pages/Pos/MainPos/MainPos";
import SideLayoutPos from "./layouts/Pos/SideLayoutPos";
import ProductsPos from "./pages/Pos/MainPos/Components/ProductsPos";
import SavedTopics, {
  Action as SavedTopicsActions,
} from "./layouts/MyProfile/SavedTopics";
import { getSuppliers } from "./pages/Shopping/Suppliers/utils";
import { getSupplier } from "./pages/Shopping/Suppliers/utils";
import MainIntegrations from "./layouts/MyProfile/MainIntegrations";
import { multiloaderGoogleIntegrations } from "./layouts/MyProfile/utils";
import { getMails } from "./pages/CRM/Email/utils";
import {
  getCatalogsTransformation,
  multiloaderNewFormula,
} from "./pages/Transformation/utils";
import {
  getInventoryStock,
  getProductStock,
  multiloaderStock,
} from "./pages/Inventory/StockItems/utils";
import MainTraceabilityReport from "./pages/Inventory/TraceabilityReports/MainTraceabilityReport";
import {
  getOneLead,
  getProcessInfo,
  multiLoaderCrmDasboard,
  multiLoaderCrmLayout,
  multiLoaderCrmTables,
} from "./pages/CRM/utils";
import CrmDashboard, {
  Action as MultiFunctionsDashboardCrm,
} from "./pages/CRM/Leads/CrmDashboard";
import MainDashboardCrm, {
  Action as FuncionsDashboardCrm,
} from "./pages/CRM/Leads/Dashboard/MainDashboardCrm";
import ConfigurationPos from "./pages/Pos/Configuration/ConfigurationPos";

//PM 2.0
import SideLayoutPM, {
  Action as multiActionsPM,
} from "./layouts/PManager/SideLayoutPM";
import MainPM, { Action as multiActionsMainPM } from "./pages/PManager/MainPM";
import {
  getObjectiveById,
  getWorkspace,
  multiloaderMainPM,
  multiloaderPM,
} from "./layouts/PManager/utils";
import AllProjects from "./pages/PManager/Test/AllProjects/AllProjects";
import PlaceholderPM from "./pages/PManager/components2/PlaceholderPM";
import AllActivities from "./pages/PManager/Test/AllActivities/AllActivities";
import MainObjetives from "./pages/PManager/Test/Objectives/MainObjetives";
import ObjectiveAll from "./pages/PManager/Test/Objectives/ObjectiveAll";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: multiloaderNotifications,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <MainDashboard />,
        loader: multiLoaderDashboard,
      },
      // crm
      {
        id: "side_services",
        path: "/crm",
        element: <SideLayout />,
        // errorElement: <NotFound />,
        loader: multiLoaderCrmLayout,
        action: newLead,
        children: [
          //crm home
          {
            index: true,
            loader: multiLoaderCrmTables,
            element: <MainCRM />,
          },
          {
            //crm Dashboard
            path: "/crm/dashboard",
            element: <CrmDashboard />,
            loader: multiLoaderCrmDasboard,
            action: MultiFunctionsDashboardCrm,
            children: [
              {
                path: "/crm/dashboard/:id",
                element: <MainDashboardCrm />,
                loader: getProcessInfo,
                action: FuncionsDashboardCrm,
              },
            ],
          },
          //crm services
          {
            path: "/crm/services/packages/:id",
            element: <MainPackage />,
            loader: getPackageById,
            action: PackageEditFunction,
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
            loader: getMails,
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
      //Show Lead
      {
        path: "/crm/leads/:id",
        element: <SidelayoutLead />,
        action: LeadsEditFunction,
        loader: getOneLead,
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
            element: <MainOrganization />,
            loader: multiLoaderOrganization,
            action: newArea,
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
      // project manager 2.0
      {
        path: "/project-manager2",
        element: <SideLayoutPM />,
        loader: multiloaderPM,
        action: multiActionsPM,
        children: [
          {
            index: true,
            element: <PlaceholderPM />,
          },
          {
            path: "/project-manager2/:id",
            loader: multiloaderMainPM,
            action: multiActionsMainPM,
            element: <MainPM />,
          },
          {
            path: "/project-manager2/proyects/:id",
            element: <AllProjects />,
          },
          {
            path: "/project-manager2/activities/:id",
            element: <AllActivities />,
          },
          {
            path: "/project-manager2/objectives",
            element: <MainObjetives />,
            children: [
              {
                path: "/project-manager2/objectives/:id",
                element: <ObjectiveAll />,
              },
            ]
          },
        ],
      },
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
            loader: multiLoaderObjetivesPm,
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
          {
            path: "/project-manager/completed",
            element: <Completed />,
            loader: getCompletedActivity,
            action: CompletedAction,
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
            index: true,
            element: <WelcomeToChat />,
          },
          {
            path: "/chat/:id",
            element: <MainChat />,
            loader: multiLoaderChat2,
            action: functionMasterChat,
          },
          {
            path: "/chat/:id/user-media-library",
            element: <UserMediaLibrary />,
            loader: multiloaderChatLibrary,
            action: multiActionsMedia,
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
            loader: getInductionResume,
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
            loader: getTrainingResume,
          },
          {
            path: "/org-development/capacitation/create/:id",
            element: <CreateExamCapacitation />,
            action: createExamCapacitationFunction,
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
          {
            path: "/configuration/integrations",
            element: <IntegrationPanel />,
            action: PostIntegrationsData,
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
            loader: getNotifications,
          },
          {
            path: "/my-profile/integrations",
            element: <MainIntegrations />,
            loader: multiloaderGoogleIntegrations,
          },
          {
            path: "/my-profile/topic-saved",
            element: <SavedTopics />,
            loader: getTopicSaved,
            action: SavedTopicsActions,
          },
        ],
      },
      //BANK MANAGEMENT
      {
        path: "/bank-management",
        element: <SideLayoutBankManag />,
        action: CreateNewBank,
        children: [
          {
            index: true,
            element: <MainBankManagement />,
            action: CreateNewBank,
            loader: multiloaderTableBankManag,
          },
          {
            path: "/bank-management/edit-bank/:id",
            element: <EditBank />,
            loader: getBank,
            action: updateBank,
          },
          {
            path: "/bank-management/edit-bank-account/:id",
            element: <EditBankAccount />,
            loader: multiloaderOwnAndBankAccount,
            action: updateBankAccount,
          },
          {
            path: "/bank-management/collection",
            element: <MainCollectionBankManag />,
          },
          {
            path: "/bank-management/detail-balances/bank/:id",
            element: <MainBankDetailsGeneral />,
          },
          {
            path: "/bank-management/collection/create",
            element: <AddNewCollection />,
          },
          {
            path: "/bank-management/collection/record/:id", //BankDetailsGeneral
            element: <CollectionRecord />,
          },
          {
            path: "/bank-management/payment",
            element: <MainPaymentBankManag />,
          },
          {
            path: "/bank-management/payment/create",
            element: <AddNewPayment />,
          },
          {
            path: "/bank-management/payment/record/:id",
            element: <PaymentRecord />,
          },
          {
            path: "/bank-management/plan",
            element: <MainPlan />,
          },
        ],
      },
      //Acounting
      {
        path: "/accounting",
        element: <SideLayoutAccounting />,
        action: AccountingCatalogActions,
        children: [
          {
            element: <MainCatalog />,
            loader: getAccountingAccounts,
            children: [
              {
                index: true,
                element: <AccountingAccountEmpty />,
              },
              {
                path: "/accounting/:level",
                element: <AccountingAccount />,
                action: AccountingAccountActions,
                loader: getAccountingAccountsById,
              },
              //   // {
              //   //   path: "/accounting/equity-account",
              //   //   element: <AccountingAccount />,
              //   // },
              //   // {
              //   //   path: "/accounting/income-account",
              //   //   element: <AccountingAccount />,
              //   // },
              //   // {
              //   //   path: "/accounting/cost-account",
              //   //   element: <AccountingAccount />,
              //   // },
              //   // {
              //   //   path: "/accounting/expense-account",
              //   //   element: <AccountingAccount />,
              //   // },
              //   // {
              //   //   path: "/accounting/financial-account",
              //   //   element: <AccountingAccount />,
              //   // },
              //   // {
              //   //   path: "/accounting/other-account",
              //   //   element: <AccountingAccount />,
              //   // },
            ],
          },
          {
            //account Policy
            path: "/accounting/policy",
            element: <MainPolicy />,
          },
          {
            path: "/accounting/policy/create",
            element: <CreateAccount />,
          },
          {
            path: "/accounting/policy/details",
            element: <AccountDetail />,
          },
          {
            //account book
            path: "/accounting/book",
            element: <MainBook />,
          },
          {
            path: "/accounting/cost",
            element: <MainCost />,
            loader: getCostCenter,
            action: ActionCostCenter,
          },
        ],
      },
      //Analitycs
      {
        path: "/analytics",
        element: <SideLayoutAnalytic />,
        children: [
          {
            index: true,
            element: <MainAnalytic />,
            loader: multiloaderAnalytics,
          },
        ],
      },
      //inventory
      {
        path: "/inventory",
        element: <SideLayoutInventory />,
        action: CreateNewCategory,
        children: [
          {
            index: true,
            element: <MainGeneral />,
            loader: multiloaderInventory,
          },
          {
            path: "/inventory/create",
            element: <CreateArticle />,
            loader: multiloaderArticle,
            action: createArticle,
          },
          {
            path: "/inventory/edit/:id",
            element: <EditArticle />,
            loader: multiloaderArticle2,
            action: editProduct,
          },
          {
            path: "/inventory/general-services",
            element: <MainGeneralServices />,
            loader: multiLoaderServiceGeneral2,
            action: multiFunctionService,
          },
          {
            path: "/inventory/general-services/category/:id",
            element: <EditCategory />,
            loader: ReadCategory,
            action: multiFunctionCategories,
          },
          {
            path: "/inventory/general-services/combo/:id",
            element: <EditCombo />,
            loader: getComboById,
            action: multiFunctionCombos,
          },
          {
            path: "/inventory/general-services/service/new",
            element: <CreateService />,
            loader: multiLoaderServiceGeneral,
            action: SaveNewGeneralService,
          },
          {
            path: "/inventory/general-services/service/edit/:id",
            element: <EditService />,
            loader: multiLoaderServiceGeneralDetails,
            action: MultiSaveService,
          },
          {
            path: "/inventory/general-warehouses",
            element: <MainGW />,
            loader: getWarehouses,
          },
          {
            path: "/inventory/general-warehouses/create",
            element: <CreateWH />,
            action: createWarehouses,
          },
          {
            path: "/inventory/general-warehouses/edit/:id",
            element: <EditWH />,
            action: editWarehouses,
            loader: getWarehouse,
          },
          {
            path: "/inventory/warehouse-locations",
            element: <MainWL />,
            loader: multiLoaderUbication,
            action: saveSlotsConfigs,
          },
          {
            path: "/inventory/warehouse-locations/config/:id",
            element: <WLConfig />,
            action: saveSlotsConfig,
          },
          {
            path: "/inventory/warehouse-locations/config",
            element: <WLSlots />,
            action: createNewConfigure,
          },

          {
            path: "/inventory/warehouse-locations/create",
            element: <CreateLocation />,
            loader: multiLoaderData,
            action: createNewLocation,
          },
          {
            path: "/inventory/merchandise-movements",
            element: <MainMerchandiseMovements />,
            loader: getStocksMovements,
            action: multiActionsInventoryMovements,
          },
          {
            path: "/inventory/merchandise-movements/entry/new",
            element: <NewEntry />,
            loader: multiLoaderMovements,
            action: SaveMovement,
          },
          {
            path: "/inventory/merchandise-movements/entry/record/:id",
            element: <MerchandiseMovRecord />,
            loader: getStocksMovement,
          },
          {
            path: "/inventory/merchandise-movements/entry/traceability/:id",
            element: <TraceabilityDetails />,
          },
          {
            path: "/inventory/merchandise-movements/egress/new",
            element: <NewEgress />,
          },
          {
            path: "/inventory/merchandise-movements/egress/record/:id",
            element: <MerchandiseMovRecordEgress />,
          },
          {
            path: "/inventory/merchandise-movements/transfer/new",
            element: <NewTransfer />,
          },
          {
            path: "/inventory/merchandise-movements/transfer/direct/new",
            element: <NewDirectTransfer />,
            loader: getInfoTransfer,
            action: saveStockTransfer,
          },
          {
            path: "/inventory/merchandise-movements/transfer/entry/:id",
            element: <TransferEntry />,
            loader: getTransfer,
            action: stockTransferEntryActions,
          },
          {
            path: "/inventory/merchandise-movements/transfer/record/:id",
            element: <TransferDetails />,
            loader: getTransfer,
          },
          {
            path: "/inventory/merchandise-movements/transfer/traceability/:id",
            element: <TraceabilityTransfer />,
          },
          {
            path: "/inventory/goods-receipt",
            element: <MainGoodsReceipt />,
          },
          {
            path: "/inventory/goods-receipt/deliveries/details/:id",
            element: <DeliveryDetails />,
          },
          {
            path: "/inventory/traceability-reports/create",
            element: <CreateTraceability />,
          },
          {
            path: "/inventory/prices-lists",
            element: <MainPriceList />,
            loader: getList,
          },
          {
            path: "/inventory/prices-lists/create",
            element: <CreatePriceList />,
            loader: multiloaderList,
            action: newPriceList,
          },
          {
            path: "/inventory/prices-lists/details/:id",
            element: <ViewPL />,
            loader: multiloaderListBase,
            action: deletePriceList,
          },
          {
            path: "/inventory/stock-items",
            element: <MainStockItem />,
            loader: multiloaderStock,
          },
          {
            path: "/inventory/stock-items/product/show/:type/:id",
            element: <StockWarehouse />,
            loader: getProductStock,
          },
          {
            path: "/inventory/stock-items/warehouse/show/:id",
            element: <MaterialWarehouse />,
            loader: getInventoryStock,
          },
          {
            path: "/inventory/branch-points-sale",
            element: <MainBranchPointSale />,
            loader: multiLoaderBranchPointsSale,
          },
          {
            path: "/inventory/branch-points-sale/create",
            element: <NewBranch />,
            loader: multiLoaderListBranch,
            action: SaveBranchPointSale,
          },
          {
            path: "/inventory/branch-points-sale/edit/:id",
            element: <EditBranch />,
            loader: multiLoaderListBranchDetails,
            action: MultiActionBranchDetails,
          },
        ],
      },
      //Sales
      {
        path: "/sales",
        element: <SideLayoutSale />,
        children: [
          {
            index: true,
            element: <MainCustomer />,
            loader: getCustomers,
          },
          {
            path: "/sales/customer/new",
            element: <CreateCustomer />,
            action: createNewCustomer,
          },
          {
            path: "/sales/customer/edit/:id",
            element: <EditCustomer />,
            loader: getCustomer,
            action: editCustomer,
            children: [
              {
                index: true,
                element: <Information />,
              },
              {
                path: "/sales/customer/edit/:id/resumen",
                element: <Summary />,
              },
            ],
          },
          {
            path: "/sales/invoices",
            element: <MainInvoice />,
          },
          {
            path: "/sales/invoices/new",
            element: <InvoiceForm />,
          },
          {
            path: "/sales/invoices/edit/:id",
            element: <InvoicesDetails />,
          },
          {
            path: "/sales/invoices/document/:id",
            element: <InvoicePDF />,
          },
          {
            path: "/sales/tickets",
            element: <MainSalesTicket />,
            loader: getSalesTicket,
          },
          {
            path: "/sales/tickets/new",
            element: <TicketForm />,
            loader: multiLoaderListTickets,
            action: createSaleTickets,
          },
          {
            path: "/sales/tickets/edit/:id",
            element: <TicketDetails />,
            loader: multiLoaderListEditTickets,
          },
          {
            path: "/sales/tickets/document/:id",
            element: <TicketPDF />,
          },
          {
            path: "/sales/orders/",
            element: <MainOrders />,
          },
          {
            path: "/sales/orders/edit/:id",
            element: <OrderEditor />,
            loader: multiLoaderListOrders,
          },
          {
            path: "/sales/orders/new",
            element: <OrderForm />,
            loader: multiLoaderListOrders,
            action: createSaleOrders,
          },
          {
            path: "/sales/orders/document/:id",
            element: <OrderPDF />,
          },
          {
            path: "/sales/quotes",
            element: <MainQtGeneral />,
          },
          {
            path: "/sales/quotes/new",
            element: <QuotesForm />,
            loader: multiLoaderListQuotes,
            action: createSaleQuotes,
          },
          {
            path: "/sales/quotes/edit/:id",
            element: <QuotesDetails />,
            loader: multiLoaderListQuotes,
          },
          {
            path: "/sales/quotes/document/:id",
            element: <QuotePDF />,
          },
          //crm agreements
          {
            path: "/sales/agreements",
            element: <MainAgreements />,
            loader: multiloaderAgreements,
            action: CreateAgreementCustomer,
          },
          {
            path: "/sales/agreements/create",
            element: <NewAgreements />,
            action: newAgreementTemplate,
            loader: getAllServices,
          },
          {
            path: "/sales/agreements/edit/:id",
            element: <EditAgreements />,
            loader: getAgreement,
            action: EditAgreementTemplate,
          },
          {
            path: "/sales/agreements/show/:id",
            element: <ShowAgreements />,
            loader: getContract,
            action: EditContract,
          },
          {
            path: "/sales/agreements/new-contract/:id/:customer",
            element: <NewContract />,
            loader: getContractCreate,
            action: NewContractAction,
          },
          // crm progress
          {
            path: "/sales/progress",
            element: <MainProgress />,
            loader: getAllServices,
            action: setServices,
            children: [
              {
                path: "/sales/progress/:id",
                element: <StepsProgress />,
                loader: multiloaderProgressSteps,
                action: newStepService,
              },
            ],
          },
        ],
      },
      //Shopping
      {
        path: "/shopping",
        element: <SideLayoutShopping />,
        children: [
          {
            index: true,
            element: <MainSupplier />,
            loader: getSuppliers,
          },
          {
            path: "/shopping/supplier/create",
            element: <CreateSupplier />,
            action: createNewSupplier,
          },
          {
            path: "/shopping/supplier/edit/:id",
            element: <EditSupplier />,
            action: editSupllier,
            loader: getSupplier,
            children: [
              {
                index: true,
                element: <EditSupplierInfo />,
                loader: getSupplier,
              },
              {
                path: "/shopping/supplier/edit/:id/resumen",
                element: <SummaryShopping />,
              },
            ],
          },
          {
            path: "/shopping/customer/create",
            element: <CustomerProfile />,
          },
          {
            path: "/shopping/invoices-orders",
            element: <MainInvoices />,
          },
          {
            path: "/shopping/invoices-orders/create",
            element: <CreateInvoices />,
          },
          {
            path: "/shopping/invoices-orders/edit/:id",
            element: <EditInvoices />,
          },
          {
            path: "/shopping/request-orders",
            element: <MainRequestOrder />,
            loader: getRequestOrders,
            action: RequestOrderAction,
          },
          {
            path: "/shopping/request-orders/create",
            element: <CreateOrder />,
            action: CreateRequestOrder,
            loader: getProducts,
          },
          {
            path: "/shopping/request-orders/edit/:id",
            element: <EditRequests />,
            loader: multiloadesGetRequestOrder,
            action: RequestOrderEditAction,
          },
          {
            path: "/shopping/purchase/",
            element: <MainPurchase />,
            loader: getPurchases,
            action: PurchaseAction,
          },
          {
            path: "/shopping/purchase/create",
            element: <CreateRequest />,
            action: createPurchase,
            loader: getProducts,
          },
          {
            path: "/shopping/purchase/edit/:id",
            element: <EditOrders />,
            loader: multiloadesGetPurchase,
            action: PurchaseEditAction,
          },
          {
            path: "/shopping/quotes-orders",
            element: <MainQuotesOrder />,
            loader: getQuotesOrder,
            action: QuotesOrderAction,
          },
          {
            path: "/shopping/quotes-orders/create",
            element: <CreateQuoteOrder />,
            action: createQuotesOrder,
            loader: getProducts,
          },
          {
            path: "/shopping/quotes-orders/edit/:id",
            element: <EditQuotes />,
            loader: multiloadesGetQuote,
            action: QuoteOrderEditAction,
          },
          {
            path: "/shopping/document/:type/:id",
            element: <DocumentPDF />,
          },
        ],
      },
      //TRANSFORMATIONS
      {
        path: "/transformation",
        element: <SideLayoutTransformation />,
        children: [
          {
            index: true,
            element: <MainGeneralFormula />,
          },
          {
            path: "/transformation/manufacturing-order",
            element: <ManufacturingOrder />,
          },
          {
            path: "/transformation/create",
            element: <NewFormula />,
            loader: multiloaderNewFormula,
          },
          {
            path: "/transformation/record/:id",
            element: <FormulaRecords />,
          },
          {
            path: "/transformation/work-orders",
            element: <WorkOrder />,
          },
          {
            path: "/transformation/work-orders/order-process/:id",
            element: <OrderProcess />,
          },
          {
            path: "/transformation/work-orders/order-cut/:id",
            element: <OrderCut />,
          },
          {
            path: "/transformation/kardex",
            element: <MainKardex />,
          },
        ],
      },
      {
        path: "/topics/",
        element: <SideLayoutTopics />,
        action: NewTopicFunction,
        loader: multiLoaderTopics2,
        children: [
          {
            path: "/topics/:id",
            element: <MainTopics />,
            action: ActionTopic,
            loader: multiLoaderTopics,
          },
        ],
      },
      {
        path: "/pos",
        element: <SideLayoutPos />,
        children: [
          {
            index: true,
            element: <MainPos />,
          },
          {
            path: "/pos/:id",
            element: <MainPos />,
            children: [
              {
                index: true,
                element: <ProductsPos />,
              },
            ],
          },
          {
            path: "/pos/configuration",
            element: <ConfigurationPos />,
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
  //Client Login
  {
    path: "/login-client",
    element: <LoginClient />,
    action: LoginClientFunction,
  },
  {
    path: "/client-platform",
    element: <MainClients />,
    loader: getAuthClient,
    action: ClientPlatformClient,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
