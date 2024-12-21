import { Editorial } from "./editorial";

export class Libro {
    id!: number;
    nombre!: string;
    autor!: string;
    pais!: string;
    stock!: number;
    fechaRestock!: Date;
    editoriales!: Editorial[];
}
