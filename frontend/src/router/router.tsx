import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrincipalPage } from "../pages";
import { RootLayout } from "../layouts";
import { Reglas } from "../AsinarReglas/Reglas";

export const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      //Rutas Admin
      {
        path: "admin",
        element: <RootLayout />,
        children: [
          {
            path: "inicio",
            element: <PrincipalPage />,
          },
          {
            path: "asignar-reglas",
            element: <Reglas />,
          },
        ],
      },
      //Rutas Auth
      //Rutas Usuario
    ],
  },
]);
