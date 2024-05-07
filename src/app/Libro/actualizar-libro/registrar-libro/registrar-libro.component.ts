import { Component } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { ProveedorService } from '../../../service/proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from '../../../service/libro.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrl: './registrar-libro.component.css'
})
export class RegistrarLibroComponent {


  proveedores: Proveedor[]=[];
  libroForm! : FormGroup;
  
  constructor(private proveedorService: ProveedorService, private fb: FormBuilder, private libroService: LibroService,
    private router: Router, private snack: MatSnackBar
  ){}

  ngOnInit(): void{
    this.getProveedores();
    this.libroForm = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      codProv: [null, [Validators.required]],
    })
  }

  getProveedores(){
    this.proveedorService.lista().subscribe(data => {
      this.proveedores = data
    })
  }

  registrarLibros(){
    this.libroService.guardar(this.libroForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      } else {
        this.snack.open('Se Registro el Libro correctamente', 'Close' , {
          duration: 3000
        })
        console.log(console.log(res))
        this.router.navigateByUrl("/listado")
      }
    })
  }

}
