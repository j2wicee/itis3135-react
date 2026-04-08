import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { CRAPPY_PAGE_TO, JOSHUA_EVANS_DEV_TO } from "./routes";
import { CardsPage } from "./pages/CardsPage";
import { ContractPage } from "./pages/ContractPage";
import { CrappyPage } from "./pages/CrappyPage";
import { DocumentationPage } from "./pages/DocumentationPage";
import { HomePage } from "./pages/HomePage";
import { IntroFormPage } from "./pages/IntroFormPage";
import { InventoryPage } from "./pages/InventoryPage";
import { JoshuaEvansDevPage } from "./pages/JoshuaEvansDevPage";
import { ProductPage } from "./pages/ProductPage";
import { ProjectOverviewPage } from "./pages/ProjectOverviewPage";
import { SurveyPage } from "./pages/SurveyPage";
import { WebsiteEvaluationsPage } from "./pages/WebsiteEvaluationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contract", element: <ContractPage /> },
      { path: "survey", element: <SurveyPage /> },
      { path: "cards", element: <CardsPage /> },
      { path: "inventory", element: <InventoryPage /> },
      { path: "documentation", element: <DocumentationPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "website_evaluations", element: <WebsiteEvaluationsPage /> },
      { path: "intro_form", element: <IntroFormPage /> },
      { path: "project_overview", element: <ProjectOverviewPage /> },
    ],
  },
  { path: CRAPPY_PAGE_TO, element: <CrappyPage /> },
  { path: JOSHUA_EVANS_DEV_TO, element: <JoshuaEvansDevPage /> },
]);
