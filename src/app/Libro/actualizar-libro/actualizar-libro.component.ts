import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LibroService } from '../../service/libro.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../service/proveedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-libro',
  templateUrl: './actualizar-libro.component.html',
  styleUrl: './actualizar-libro.component.css'
})
export class ActualizarLibroComponent {

  proveedores: Proveedor[]=[];
  libro = this.ar.snapshot.params['libro']
  libroForm! : FormGroup;

  constructor(private ar: ActivatedRoute, private router: Router, private service: LibroService, private fb: FormBuilder,
     private proveedorService: ProveedorService, private snack: MatSnackBar
  ){}

  ngOnInit(): void {
    this.getLibroById();
    this.libroForm = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [null, [Validators.required]],
      codProv: [null, [Validators.required]],
    })
    this.getProveedores();
  }

  getLibroById(){
    this.service.GetId(this.libro).subscribe((res) =>{
      this.libroForm.patchValue(res);
    })
  }

  getProveedores(){
    this.proveedorService.lista().subscribe(data => {
      this.proveedores = data
    })
  }

  actualizarLibros(){
    this.service.actualizar(this.libro, this.libroForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      } else {
        this.snack.open('Se actualizo el Libro correctamente', 'Close' , {
          duration: 3000
        })
        this.router.navigateByUrl("/listado")
      }
    })
  }


}
