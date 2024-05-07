import { Component } from '@angular/core';
import { LibroService } from '../../../service/libro.service';
import { Libros } from '../../../models/libros';
import { Proveedor } from '../../../models/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';
import { error } from 'console';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrl: './listar-libros.component.css'
})
export class ListarLibrosComponent {

  Libros : Libros[]=[];
  proveedores: Proveedor[]=[];

  
  constructor(private libroService: LibroService, private proveedorService: ProveedorService, private snack: MatSnackBar){}

  ngOnInit(): void{
    this.cargarlibros();
    this.getProveedore();
  }

  cargarlibros(){
    this.libroService.lista().subscribe(data => {this.Libros = data}
      ,err => {console.log(err)}
    );
  }

  getProveedore(){
    this.proveedorService.lista().subscribe(data => {
      this.proveedores = data
    })
  }

  eliminarLibro(productId: any){
    this.libroService.eliminar(productId).subscribe(res =>{
      this.snack.open('Se Elimino el Libro correctamente', 'Close' , {
        duration: 3000
      })
      this.cargarlibros();
    }, error => {
      console.log("Error en la eliminación")
    })
  }

}
