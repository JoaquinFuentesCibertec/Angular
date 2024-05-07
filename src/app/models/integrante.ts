export class Integrante {
    codInt: number;
    nomInt: string;
    apePInt: string;
    apeMInt: string;
    fecha: string;

    constructor(codInt: number, nomInt: string, apePInt: string, apeMInt: string,
        fecha: string){
            this.codInt = codInt;
            this.nomInt = nomInt;
            this.apePInt = apePInt;
            this.apeMInt = apeMInt;
            this.fecha = fecha;
        }

}
