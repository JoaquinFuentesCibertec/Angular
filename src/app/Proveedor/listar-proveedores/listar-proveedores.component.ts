import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { ProveedorService } from '../../service/proveedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrl: './listar-proveedores.component.css'
})
export class ListarProveedoresComponent implements OnInit {

  proveedores : Proveedor[] = [];

  constructor(private proveedorService: ProveedorService, private snack: MatSnackBar){}
    ngOnInit(): void{
      this.cargarproveedores();
    }

    cargarproveedores(){
      this.proveedorService.lista().subscribe(data => {this.proveedores = data}
        ,err => {console.log(err)}
      )
    }

    eliminarProv(productId: any){
      this.proveedorService.eliminar(productId).subscribe(res =>{
        this.snack.open('Se Elimino el Proveedor correctamente', 'Close' , {
          duration: 3000
        })
        this.cargarproveedores();
      }, error =>{
        
      } )
    }

}
