import { Reserva } from "./reserva";

export class Cliente {
    id!: number;
    nombre!: string;
    apellidoPaterno!: string;
    apellidoMaterno!: string;
    direccion!: string;
    correo!: string;
    fechaIngreso!: Date;
    reservas!: Reserva[];
}
