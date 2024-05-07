import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from '../../service/proveedor.service';

@Component({
  selector: 'app-registrar-proveedores',
  templateUrl: './registrar-proveedores.component.html',
  styleUrl: './registrar-proveedores.component.css'
})
export class RegistrarProveedoresComponent {

  proveedorForm!: FormGroup;

  constructor(private proveedorService: ProveedorService, private fb: FormBuilder,
    private router: Router
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
        console.log(console.log(res))
        this.router.navigateByUrl("/proveedores")
      }
    })
  }
}
