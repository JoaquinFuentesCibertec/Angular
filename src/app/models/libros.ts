import { Proveedor } from "./proveedor";

export class Libros {

    codLib: number;
    nombre: string;
    descripcion: string;
    precio: number;
    codProv: number;
    proveedor: Proveedor;

    constructor(codLib: number, nombre: string,descripcion: string, precio: number,codProv: number, proveedor: Proveedor){
        this.codLib = codLib;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.codProv = codProv;
        this.proveedor = proveedor;
    }
}
