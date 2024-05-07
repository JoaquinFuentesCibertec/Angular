import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from '../../service/proveedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-proveedores',
  templateUrl: './registrar-proveedores.component.html',
  styleUrl: './registrar-proveedores.component.css'
})
export class RegistrarProveedoresComponent {

  proveedorForm!: FormGroup;

  constructor(private proveedorService: ProveedorService, private fb: FormBuilder,
    private router: Router, private snack: MatSnackBar
  ){}


  ngOnInit(): void{
    this.proveedorForm = this.fb.group({
      nomProv:[null,[Validators.required]]
    })
  }

  registrarProv(){
    this.proveedorService.guardar(this.proveedorForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      }else{
        this.snack.open('Se Registro el Proveedor correctamente', 'Close' , {
          duration: 3000
        })
        console.log(console.log(res))
        this.router.navigateByUrl("/proveedores")
      }
    })
  }
}
