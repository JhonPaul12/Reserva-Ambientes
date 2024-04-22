import { toast } from "sonner";
import { StateCreator, create } from "zustand";
import { IAmbienteSimple } from "../interfaces/ambientes/ambiente-simple";
import { reservasDB } from "../api";
import { isAxiosError } from "axios";


interface AmbienteState{
    ambientes: IAmbienteSimple[];
}
interface Actions {
    createAmbiente:(nombre: string, capacidad: number, ubicacion: string, tipoAmbiente: string) => Promise<void>;
}

const storeApi : StateCreator<AmbienteState & Actions> = () =>({

    ambientes:[],

    createAmbiente:  async ( nombre, capacidad, ubicacion, tipoAmbiente ) => {
        
        try{
            const { data } = await reservasDB.post<{message: string}>('/ambientes', {
                nombre,
                tipoAmbiente,
                ubicacion,
                capacidad
            })
            
            toast.success('Guardado',{description: data.message })

        } catch ( error ){
            if( isAxiosError(error)){
                toast.error('Ocurrio un error')
            }
        }
    }

})

export const useAmbienteStore = create<AmbienteState & Actions>()(
    storeApi,

)