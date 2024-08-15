import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ErrorPage } from "./pages/error-page";
import { Clothes } from "./pages/clothes";
import { About } from "./pages/about";
import { Contacts } from "./pages/contacts";
import { Cadastro } from "./components/forms/CadastroUser";
import { AdminDashboard } from "./pages/administrador";
import { DonationForm } from "./components/forms/donationForm";
import { UserManagement } from "./components/admin/UserManagement";
import { DonationManagement } from "./components/admin/DonationManagement";
import { RequestManagement } from "./components/admin/RequestManagement";
import { InventoryManagement } from "./components/admin/InventoryManagement";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chothes",
    element: <Clothes />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/users",
    element: <UserManagement />,
  },
  {
    path: "/admin/donations",
    element: <DonationManagement />,
  },
  {
    path: "/admin/requests",
    element: <RequestManagement />,
  },
  {
    path: "/admin/inventory",
    element: <InventoryManagement />,
  },
  {
    path: "/donate",
    element: <DonationForm />,
  },

  {
    path: "/register",
    element: <Cadastro />,
  },
]);
