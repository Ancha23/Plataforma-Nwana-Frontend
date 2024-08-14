import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { ErrorPage } from "./pages/error-page";
import { Clothes } from "./pages/clothes";
import { About } from "./pages/about";
import { Contacts } from "./pages/contacts";

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
]);
