import { Mantenimiento } from "./mantenimiento";

export class Sucursal {

    id!: number;
    nombre!: string;
    direccion!: string;
    tecnico!: string;
    telefono!: string;
    mantenimientos!: Mantenimiento[];
}
