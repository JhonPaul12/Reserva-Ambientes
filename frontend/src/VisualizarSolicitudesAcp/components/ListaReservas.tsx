import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";
import { useSolicitudStore } from "../store/solicitud.store";
import { useEffect } from "react";

export const ListaReservas = () => {

  const solicitudes = useSolicitudStore((state) => state.solicitudes);
  const getSolicitudes = useSolicitudStore((state) => state.getSolicitudes);

  
  const fetchSolicitud = async () => {
    console.log(solicitudes.length);
    await getSolicitudes();
  };
  useEffect(() => {
    fetchSolicitud();
    console.log(solicitudes);
  }, []);
  
  
  return (
    <div className=" contenedor-table ">
      <label className='ml-10 text-3xl font-bold text-center text-gray-900'>SOLICITUDES ACEPTADAS</label>
      <section className="mx-6 my-4  ">
        <Table
          className="custom-table"
          aria-label="Example table with client side sorting"
        >
          <TableHeader>
            <TableColumn className="text-center text-3xl bg-slate-300">
              Id
            </TableColumn>
            <TableColumn className="text-center text-3xl bg-slate-300">
            Motivo
            </TableColumn>
            <TableColumn className="text-center text-3xl bg-slate-300">
            Hora Inicio
            </TableColumn>
            <TableColumn className="text-center text-3xl bg-slate-300">
            Hora Fin
            </TableColumn>
            <TableColumn className="text-center text-3xl bg-slate-300">
            Estado
            </TableColumn>
          </TableHeader>
          <TableBody>
            {solicitudes.map((solicitud) => (
              <TableRow key={solicitud.id}>
                <TableCell className=" text-base text-black">{solicitud.id}</TableCell>
                <TableCell className=" text-base text-black ">{solicitud.motivo}</TableCell>
                <TableCell className=" text-base text-black">
                  {solicitud.hora_inicio}
                </TableCell>
                <TableCell className=" text-base text-black">
                  {solicitud.hora_fin}
                </TableCell>
                <TableCell className="text-base text-black">{solicitud.estado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  )
}
