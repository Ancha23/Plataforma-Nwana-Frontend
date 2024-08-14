import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ErrorPage } from "./pages/error-page";
import { Clothes } from "./pages/clothes";
import { About } from "./pages/about";
import { Contacts } from "./pages/contacts";
import { Administrador } from "./pages/administrador";
import { Cadastro } from "./components/forms/CadastroUser";

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
    path: "/administrador",
    element: <Administrador />,
  },

  {
    path: "/register",
    element: <Cadastro />,
  },

]);
