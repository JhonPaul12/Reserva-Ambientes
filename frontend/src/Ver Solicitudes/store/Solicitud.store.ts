import { StateCreator, create } from "zustand";
import { ISolicitudResponse } from "../interfaces/solicitud-response";
import { solicitudesDB } from "../api/solicitudesDB";
import { ISimpleSolicitud } from "../interfaces/simple-solicitud";

interface SolicitudState {
  solicitudes: ISimpleSolicitud[];
}

interface Actions {
  getSolicitudes: () => Promise<void>;
}

const storeApi: StateCreator<SolicitudState & Actions> = (set) => ({
  solicitudes: [],

  getSolicitudes: async () => {
    try {
      const { data } = await solicitudesDB.get<ISolicitudResponse>(
        "/solicitud"
      );
      console.log(data);
      // Mapear la data a una lista de ISimpleSolicitud
      const solicitudes: ISimpleSolicitud[] = Object.values(data).map(
        (solicitud: ISimpleSolicitud) => ({
          id: solicitud.id,
          motivo: solicitud.motivo,
          fecha_solicitud: solicitud.fecha_solicitud,
          hora_inicio: solicitud.hora_inicio,
          hora_fin: solicitud.hora_fin,
          estado: solicitud.estado,
          numero_estudiantes: solicitud.numero_estudiantes,
          ambiente_id: solicitud.ambiente_id,
          created_at: new Date(solicitud.created_at),
          updated_at: new Date(solicitud.updated_at),
          ambiente: solicitud.ambiente,
        })
      );
      console.log(solicitudes);
      // Actualizar el estado con la lista de solicitudes
      set(() => ({
        solicitudes: solicitudes,
      }));
    } catch (error) {
      console.log(error);
    }
  },
});

export const useSolicitudesStore = create<SolicitudState & Actions>()(storeApi);
