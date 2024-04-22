import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrincipalPage } from "../pages";
import { RootLayout, UserLayout } from "../layouts";
import { Reglas } from "../AsinarReglas/Reglas";
import { RegistroAmbiente } from "../RegistrarAmbientes/RegistroAmbiente";

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
      {
        path: "auth",
        element: <RootLayout />,
        children: [
          {
            path: "registroambiente",
            element: <RegistroAmbiente />,
          },
        ],
      },
      //Rutas Usuario
      {
        path: "user",
        element: <UserLayout />,
      },
    ],
  },
]);
