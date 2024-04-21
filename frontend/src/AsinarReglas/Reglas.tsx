import { Calendario } from './components/Calendario';
import "./reglas.css"
export const Reglas = () => {
  return (
    //Contenedor Reglas
    <div className=' w-screen m-10  flex  items-center justify-center flex-col text-negro ' >
      {/* Contenedor Titulo */}
      <div className=''>
        <h1 className=''>Agregar reglas de ambientes</h1>
        <h1 className=''>Agregar reglas de ambientes</h1>

      </div>
      <Calendario/>
    </div>
  )
}
