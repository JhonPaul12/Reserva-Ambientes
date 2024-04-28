import axios from "axios";
import { useEffect, useState } from "react";

interface Solicitud {
  id: number;
  motivo: string;
  fecha_solicitud: string;
  hora_inicio: string;
  hora_fin: string;
  estado: string;
  numero_estudiantes: number;
  ambiente_id: number;
  created_at: string | null;
  updated_at: string | null;
  ambiente: {
    id: number;
    nombre: string;
    tipo: string;
    ubicacion: string;
    capacidad: number;
    created_at: string;
    updated_at: string;
  };
}

export const VerSolicitudes = () => {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);

  useEffect(() => {
    getSolicitudes();
  }, []);

  const getSolicitudes = async () => {
    try {
      const respuesta = await axios.get(`http://127.0.0.1:8000/api/solicitud/`);
      if (respuesta.data && Array.isArray(respuesta.data.solicitudes)) {
        setSolicitudes(respuesta.data.solicitudes);
      } else {
        console.error(
          "Los datos de solicitud no contienen un array de solicitudes:",
          respuesta.data
        );
      }
    } catch (error) {
      console.error("Error al obtener solicitudes:", error);
    }
  };

  return (
    <div className="contenedor">
      <table className="tabla">
        <thead>
          <tr className="trr">
            <th className="thh">Id</th>
            <th className="thh">Motivo</th>
            <th className="thh">Fecha Solicitud</th>
            <th className="thh">Hora Inicio</th>
            <th className="thh">Hora Fin</th>
            <th className="thh">Estado</th>
            <th className="thh">Numero Estudiantes</th>
            <th className="thh">Ambiente Id</th>
            <th className="thh">Ambiente Nombre</th>
            <th className="thh">Ambiente Tipo</th>
            <th className="thh">Ambiente Ubicacion</th>
            <th className="thh">Ambiente Capacidad</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => {
            return (
              <tr className="trr" key={solicitud.id}>
                <td className="tdd">{solicitud.id}</td>
                <td className="tdd">{solicitud.motivo}</td>
                <td className="tdd">{solicitud.fecha_solicitud}</td>
                <td className="tdd">{solicitud.hora_inicio}</td>
                <td className="tdd">{solicitud.hora_fin}</td>
                <td className="tdd">{solicitud.estado}</td>
                <td className="tdd">{solicitud.numero_estudiantes}</td>
                <td className="tdd">{solicitud.ambiente_id}</td>
                <td className="tdd">{solicitud.ambiente.nombre}</td>
                <td className="tdd">{solicitud.ambiente.tipo}</td>
                <td className="tdd">{solicitud.ambiente.ubicacion}</td>
                <td className="tdd">{solicitud.ambiente.capacidad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
