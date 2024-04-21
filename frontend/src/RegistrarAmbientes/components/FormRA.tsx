import {useState} from 'react';
import { toast } from 'sonner';
/*import { useAmbienteStore } from '../../store/ambientes/ambientes.store.ts';*/


export const FormRA = () => {


  const [inputName, setInputName] = useState('');
  const [inputCap, setInputCap] = useState('');
  const [inputUbi, setInputUbi] = useState('');
  const [inputType, setInputType] = useState('');
  const [buttonSave, setInputSave] = useState(false);
  const [buttonCancelar, setInputCancel] = useState(false);

  /*const [isLoading, setLoading] = useState(false);
  const createAmbiente = useAmbienteStore( state => state.createAmbiente */
  /*const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();

    setLoading(true);
  
if(nombre.value.trim()=== '' || capacidad.value.trim()=== '' ){
    toast.error('Es necesario llenar al menos el nombre y la capacidad del ambiente para registrarlo')
    setLoading(false);
    return;
  }
    
  const { nombre, capacidad, ubicacion, tipoAmbiente, horario } = e.target as HTMLFormElement

*/
  const onInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target as HTMLInputElement;
    if (inputValue.value.length <30) {
      setInputName(inputValue.value);
      console.log(inputValue.value);
    } else {
      toast.error('El nombre del ambiente debe tener como maximo 30 caracteres');
      console.log("El nombre del ambiente debe tener como maximo 30 caracteres");
    }
  }
  
  const onInputChangeCap = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target as HTMLInputElement;
    
      if (inputValue.value.length <= 5 || inputValue.value === '') {
        if (!isNaN(parseInt(inputValue.value))) {
            setInputCap(inputValue.value);
            console.log(inputValue.value);
          } else {
            setInputCap('');
            toast.error('La capacidad debe expresarse numericamente');
            console.log("La capacidad debe expresarse numericamente");
          }
        } else {
          toast.error('La capacidad debe tener más de 5 caracteres numericos');
          console.log("La capacidad debe tener más de 5 caracteres numericos");
        }
      }
  const onInputChangeUbi = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target as HTMLTextAreaElement;
  if (inputValue.value.length <= 150) {
        setInputUbi(inputValue.value);
        console.log(inputValue);
    } else {
      toast.error('La ubicacion del ambiente debe tener como maximo 150 caracteres');
      console.log("La ubicacion del ambiente debe tener como maximo 150 caracteres");
    }
  }

  const onInputChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = e.target as HTMLSelectElement;
        setInputType(inputValue.value);
        console.log(inputValue);
  }

  const onInputChangeSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (inputName !== '' && inputCap !== '') {
      setInputSave(true);
      console.log('true');
      console.log(buttonSave);
    } else {

      toast.error('El campo Nombre y capacidad son obligatorios');
      console.log('El campo Nombre y capacidad son obligatorios');
    }
}

const onInputChangeCancel = () => {
     setInputCancel(true);
     console.log(buttonCancelar);
}
  return (
    <div >
        <label className='text-3xl font-bold text-center text-gray-900'>REGISTRO DE AMBIENTE</label>
     <form className='mt-5 space-y-6'>
        <div className="columnaR">
        <label className='text-ms text-gray-900'>Nombre*:</label>
        <br />
        <input 
            type='text'
            name='nombre'
            className='h-full w-full rounded-md border-3 bg-gray-300 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lm  '
            value={inputName}
            style={{
              textAlign: 'center', 
              fontSize: '16px', 
              padding: '10px'
            }}
            onChange={onInputChangeName}
          />
        <br />
        <label className='text-ms text-gray-900'>Capacidad*:</label>
        <br />
        <input 
            type="number"
            name='capacidad'
            className='h-full w-full rounded-md border-3 bg-gray-300 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
            value={inputCap}
            style={{
              textAlign: 'center', 
              fontSize: '16px', 
              padding: '10px', 
            }}
            onChange={onInputChangeCap}
          />
        <br />
        
        <label className='text-ms text-gray-900'>Ubicación:</label>
        <br />
        <textarea 
            value={inputUbi}
            name='ubicacion'
            className='h-full w-full rounded-md border-3 bg-gray-300 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
            style={{
              fontSize: '16px', 
              padding: '20px', 
    
            }}
            onChange={onInputChangeUbi}
          />
        <br />
        <label className='text-ms text-gray-900'>Tipo:</label>
        <br />
        <select 
              value={inputType}
              name='tipoAmbiente'
              className='h-full w-full rounded-md border-3 bg-gray-300 py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>USD</option>
              <option>CAD</option>'
            onChange={onInputChangeType}
          >
          <option value="">Seleccionar tipo</option>
          <option value="Multifuncional">Multifuncional</option>
          <option value="Aula">Aula</option>
          <option value="Laboratorio">Laboratorio</option>
        </select>
        
        <br />
        <div className='opcions'>
        <button 
        onClick={onInputChangeCancel}
        className="mt-10 flex w-full justify-center rounded-md bg-azul p-5  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Cancelar</button>
        <button 
           onClick={onInputChangeSave}
          className="mt-2 flex w-full justify-center rounded-md bg-azul p-5 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
        </div>
        
        </div>
      </form>
    </div>
    
    )
  }