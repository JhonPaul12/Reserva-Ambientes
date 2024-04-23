import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { ISimpleAmbiente } from "../interfaces/simple-ambientes";
import "./tabla.css";

interface Props {
  ambientes: ISimpleAmbiente[];
}
export const TablaAmbientes = ({ ambientes }: Props) => {
  return (
    <div className="contenedor-table ">
      <section className=" pt-10 mx-10 ">
        <Table removeWrapper aria-label="Tabla de Ambientes">
          <TableHeader>
            <TableColumn>Id</TableColumn>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Ubicacion</TableColumn>
            <TableColumn>Capaciodad</TableColumn>
            <TableColumn>Tipo</TableColumn>
          </TableHeader>
          <TableBody>
            {ambientes.map((ambiente) => (
              <TableRow key={ambiente.id}>
                <TableCell>{ambiente.id}</TableCell>
                <TableCell>{ambiente.nombre}</TableCell>
                <TableCell>{ambiente.ubicacion}</TableCell>
                <TableCell>{ambiente.capacidad}</TableCell>
                <TableCell>{ambiente.tipo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
};
