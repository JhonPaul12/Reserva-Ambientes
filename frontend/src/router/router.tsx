import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrincipalPage } from "../pages";
import { RootLayout, UserLayout } from "../layouts";
import { Reglas } from "../AsinarReglas/Reglas";
import { RegistroAmbiente } from "../RegistrarAmbientes/RegistroAmbiente";
import { VerAmbientes } from "../VerAmbientes/VerAmbientes";
import { CreacionSolicitud } from "../CrearSolicitud/CreacionSolicitud";
import { BusquedaFil } from "../BusquedaFiltros";
import { SolicitudesAceptadas } from "../VisualizarSolicitudesAcp/SolicitudesAceptadas";

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
          {
            path: "ambientes-registrados",
            element: <VerAmbientes />,
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
            element: <CreacionSolicitud />,
          },
          {
            path: "filtros",
            element: <BusquedaFil />,
          },
          {
            path: "solicitudes-aceptadas",
            element: <SolicitudesAceptadas/>,
          },
        ],
      },
    ],
  },
]);
