import { Calendario } from "./components/Calendario";
import MenuCheckBox from "./components/MenuCheckBox";
import "./reglas.css"; // Importa el archivo CSS

export const Reglas = () => {
  return (
    <div className="reglas-container ">
      <div className="flex flex-col  text-negro mx-10 my-10  ">
        <div className="flex flex-row justify-center ">
          <p className="text-2xl font-bold mt-5 mx-5 ">Fecha Inicial</p>
          <Calendario />
          <p className="text-2xl font-bold mt-5 mx-5">Fecha Final</p>
          <Calendario />
        </div>
        <MenuCheckBox />
      </div>
    </div>
  );
};
