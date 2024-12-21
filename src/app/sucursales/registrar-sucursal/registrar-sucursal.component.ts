import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from '../../models/sucursal';
import { SucursalService } from '../../service/sucursal.service';

@Component({
  selector: 'app-registrar-sucursal',
  templateUrl: './registrar-sucursal.component.html',
  styleUrls: ['./registrar-sucursal.component.css']
})
export class RegistrarSucursalComponent {
  sucursal: Sucursal = new Sucursal();

  constructor(private sucursalService: SucursalService, private router: Router) { }

  registrarSucursal(): void {
    this.sucursalService.registrarSucursal(this.sucursal).subscribe(
      (response) => {
        console.log('Sucursal registrada:', response);
        this.router.navigate(['/listar-sucursales']);
      },
      (error) => {
        console.error('Error al registrar sucursal', error);
      }
    );
  }
}
