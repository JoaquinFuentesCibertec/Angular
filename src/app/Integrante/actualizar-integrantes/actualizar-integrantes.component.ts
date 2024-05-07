import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IntegranteService } from '../../service/integrante.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-integrantes',
  templateUrl: './actualizar-integrantes.component.html',
  styleUrl: './actualizar-integrantes.component.css'
})
export class ActualizarIntegrantesComponent {

  integrante = this.ar.snapshot.params['integrante']
  integranteForm!: FormGroup;

  constructor(private ar: ActivatedRoute, private router: Router, private service: IntegranteService,
    private fb: FormBuilder, private snack: MatSnackBar
  ){}


  ngOnInit(): void{
    this.getIntById();
    this.integranteForm = this.fb.group({
      nomInt:[null,[Validators.required]],
      apePInt:[null,[Validators.required]],
      apeMInt:[null,[Validators.required]],
      fecha:[null,[Validators.required]]
    })
  }

  getIntById(){
    this.service.GetId(this.integrante).subscribe((res) =>{
      this.integranteForm.patchValue(res);
    })
  }

  actualizarInt(){
    this.service.actualizar(this.integrante, this.integranteForm.value).subscribe(res => {
      if(res === null){
        console.log("Error")
      }else{
        this.snack.open('Se actualizo el Integrante', 'Close',{
          duration: 3000
        })
        this.router.navigateByUrl("/integrantes")
      }
    })
  }

}
