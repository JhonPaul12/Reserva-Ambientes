import { LuHome, LuLayers, LuUserCircle2 } from "react-icons/lu";
import { BsBuildingsFill } from "react-icons/bs";

export const sideMenuOptions = [
  {
    path: "inicio",
    name: "Inicio",
    icon: <LuHome />,
  },
  {
    path: "Solicitudes",
    name: "Solicitudes",
    submenu: true,
    icon: <LuLayers />,
    subMenuOptions: [
      {
        path: "solicitudes-aceptadas",
        name: "Solicitudes Aceptadas",
      },
      {
        path: "solicitudes-rechazadas",
        name: "Solicitudes Rechazadas",
      },
    ],
  },
  {
    path: "Docentes",
    name: "Docentes",
    submenu: true,
    icon: <LuUserCircle2 />,
    subMenuOptions: [
      {
        path: "lista-docentes",
        name: "Docentes Registrados",
      },
      {
        path: "modificar-docentes",
        name: "Modificar Docentes",
      },
      {
        path: "crear-docente",
        name: "Crear Docente ",
      },
    ],
  },
  {
    path: "Ambientes",
    name: "Ambientes",
    submenu: true,
    icon: <BsBuildingsFill />,
    subMenuOptions: [
      {
        path: "ambientes-registrado",
        name: "Ambientes Registrados",
      },
      {
        path: "registrar-ambientes",
        name: "Registrar Ambientes",
      },
      {
        path: "asignar-reglas",
        name: "Asignar reglas ",
      },
    ],
  },
];
