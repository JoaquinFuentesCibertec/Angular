import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntegranteService } from '../../service/integrante.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-integrantes',
  templateUrl: './registrar-integrantes.component.html',
  styleUrl: './registrar-integrantes.component.css'
})
export class RegistrarIntegrantesComponent {

  integranteForm!: FormGroup;

  constructor(private integranteService: IntegranteService, private fb: FormBuilder,
    private router: Router, private snack: MatSnackBar
  ){}

  ngOnInit(): void{
    this.integranteForm = this.fb.group({
      nomInt:[null,[Validators.required]],
      apePInt:[null,[Validators.required]],
      apeMInt:[null,[Validators.required]],
      fecha:[null,[Validators.required]]
    })
  }

  registrarInt(){
    this.integranteService.guardar(this.integranteForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      }else{
        this.snack.open('Se Registro Correctamente', 'Close',{
          duration: 3000
        })
        console.log(console.log(res))
        this.router.navigateByUrl("/integrantes")
      }
    })
  }

}
