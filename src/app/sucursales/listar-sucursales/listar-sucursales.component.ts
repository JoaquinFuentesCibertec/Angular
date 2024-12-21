import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SucursalService } from '../../service/sucursal.service';
import { Sucursal } from '../../models/sucursal';

@Component({
  selector: 'app-listar-sucursales',
  templateUrl: './listar-sucursales.component.html',
  styleUrls: ['./listar-sucursales.component.css']
})
export class ListarSucursalesComponent implements OnInit {
  sucursales: Sucursal[] = [];
  sucursalConMantenimientos: Sucursal | null = null;

  constructor(private sucursalService: SucursalService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerSucursales();
  }

  obtenerSucursales(): void {
    this.sucursalService.listarSucursales().subscribe(
      (data: Sucursal[]) => {
        this.sucursales = data;
      },
      (error) => {
        console.error('Error al obtener sucursales', error);
      }
    );
  }

  editarSucursal(id: number): void {
    this.router.navigate([`/editar-sucursal/${id}`]);
  }

  eliminarSucursal(id: number): void {
    this.sucursalService.eliminarSucursal(id).subscribe(
      () => {
        this.sucursales = this.sucursales.filter(s => s.id !== id);
        alert('Sucursal eliminada correctamente');
      },
      (error) => {
        console.error('Error al eliminar sucursal', error);
      }
    );
  }

  obtenerSucursalConMantenimientos(id: number): void {
    this.sucursalService.obtenerSucursalConMantenimientos(id).subscribe(
      (data: Sucursal) => {
        this.sucursalConMantenimientos = data;
      },
      (error) => {
        console.error('Error al obtener sucursal con mantenimientos', error);
      }
    );
  }

  descargarReporteSucursales(): void {
    this.sucursalService.descargarReporteSucursales().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_sucursales.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error al descargar el reporte', error);
      }
    );
  }

}
