import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrincipalPage } from "../pages";
import { RootLayout, UserLayout } from "../layouts";
import { Reglas } from "../AsinarReglas/Reglas";
import { RegistroAmbiente } from "../RegistrarAmbientes/RegistroAmbiente";
import { CreacionSolicitud } from "../CrearSolicitud/CreacionSolicitud";

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
          {
            path: "registrar-ambiente",
            element: <RegistroAmbiente />,
          },
        ],
      },
      //Rutas Auth
      //Rutas Usuario
      {
        path: "user",
        element: <UserLayout />,
        children: [
          {
            path: "crear-solicitud",
            element: <CreacionSolicitud/>,
          }
        ],
      },
    ],
  },
]);
