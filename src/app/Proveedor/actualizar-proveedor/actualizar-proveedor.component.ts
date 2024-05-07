import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../../service/proveedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrl: './actualizar-proveedor.component.css'
})
export class ActualizarProveedorComponent {

  proveedor = this.ar.snapshot.params['proveedor']
  proveedorForm!: FormGroup;

  constructor(private ar: ActivatedRoute, private router: Router, private service: ProveedorService, 
  private fb: FormBuilder, private snack: MatSnackBar){}

  ngOnInit(): void{
    this.getProvById();
    this.proveedorForm = this.fb.group({
      nomProv:[null,[Validators.required]]
    })
  }

  getProvById(){
    this.service.GetId(this.proveedor).subscribe((res) =>{
      this.proveedorForm.patchValue(res);
    })
  }

  actualizarProv(){
    this.service.actualizar(this.proveedor,this.proveedorForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      }else{
        this.snack.open('Se actualizo el proveedor correctamente', 'Close' , {
          duration: 3000
        })
        this.router.navigateByUrl("/proveedores")
      }
    })
  }
  
}
