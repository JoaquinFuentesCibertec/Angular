import { Component } from '@angular/core';
import { Integrante } from '../../models/integrante';
import { IntegranteService } from '../../service/integrante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';

@Component({
  selector: 'app-listar-integrantes',
  templateUrl: './listar-integrantes.component.html',
  styleUrl: './listar-integrantes.component.css'
})
export class ListarIntegrantesComponent {

  integrantes : Integrante[] = [];

  constructor(private integranteService: IntegranteService, private snack: MatSnackBar){}

  ngOnInit(): void{
    this.cargarintegrantes();
  }

  cargarintegrantes(){
    this.integranteService.lista().subscribe(data => {this.integrantes = data},
      err => {console.log(err)}
    )
  }

  eliminarInt(productId: any){
    this.integranteService.eliminar(productId).subscribe(res =>{
      this.snack.open('Se Elimino Correctamente', 'Close',{
        duration: 3000
      })
      this.cargarintegrantes();
    },error =>{
      
    })
  }

}
