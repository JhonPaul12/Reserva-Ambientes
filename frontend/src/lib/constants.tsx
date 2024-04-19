import { LuHome, LuLayers, LuUserCircle2 } from "react-icons/lu";
import { BsBuildingsFill } from "react-icons/bs";

export const sideMenuOptions = [
  {
    path: "inicio",
    name: "Inicio",
    icon: <LuHome />,
    subMenuOptions: [
      {
        path: "subopcion1",
        name: "Subopción 1",
      },
      {
        path: "subopcion2",
        name: "Subopción 2",
      },
    ],
  },
  {
    path: "Solicitudes",
    name: "Solicitudes",
    icon: <LuLayers />,
    subMenuOptions: [
      {
        path: "subopcion3",
        name: "Subopción 3",
      },
      {
        path: "subopcion4",
        name: "Subopción 4",
      },
    ],
  },
  {
    path: "Docentes",
    name: "Docentes",
    icon: <LuUserCircle2 />,
    subMenuOptions: [
      {
        path: "subopcion5",
        name: "Subopción 5",
      },
      {
        path: "subopcion6",
        name: "Subopción 6",
      },
    ],
  },
  {
    path: "Ambientes",
    name: "Ambientes",
    icon: <BsBuildingsFill />,
    subMenuOptions: [
      {
        path: "subopcion7",
        name: "Subopción 7",
      },
      {
        path: "subopcion8",
        name: "Subopción 8",
      },
    ],
  },
];
