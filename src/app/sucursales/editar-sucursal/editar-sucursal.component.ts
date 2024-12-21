import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from '../../service/sucursal.service';
import { Sucursal } from '../../models/sucursal';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
  sucursal!: Sucursal;

  constructor(
    private sucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerSucursal();
  }

  obtenerSucursal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sucursalService.obtenerSucursalPorId(id).subscribe(
      (data: Sucursal) => {
        this.sucursal = data;
      },
      (error) => {
        console.error('Error al obtener la sucursal', error);
      }
    );
  }

  actualizarSucursal(): void {
    this.sucursalService.actualizarSucursal(this.sucursal.id, this.sucursal).subscribe(
      () => {
        this.router.navigate(['/listar-sucursales']);
      },
      (error) => {
        console.error('Error al actualizar la sucursal', error);
      }
    );
  }
}
