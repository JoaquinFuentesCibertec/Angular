import { Component, OnInit } from '@angular/core';
import { MantenimientoService } from '../../service/mantenimiento.service';
import { Mantenimiento } from '../../models/mantenimiento';

@Component({
  selector: 'app-listar-mantenimiento',
  templateUrl: './listar-mantenimiento.component.html',
  styleUrls: ['./listar-mantenimiento.component.css']
})
export class ListarMantenimientoComponent implements OnInit {
  mantenimientos: Mantenimiento[] = [];
  nuevaMantenimiento: Mantenimiento = new Mantenimiento();

  constructor(private mantenimientoService: MantenimientoService) { }

  ngOnInit(): void {
    this.listarMantenimientos();
  }

  listarMantenimientos(): void {
    this.mantenimientoService.listarMantenimientos().subscribe(
      (data: Mantenimiento[]) => {
        this.mantenimientos = data;
      },
      (error) => {
        console.error('Error al obtener mantenimientos', error);
      }
    );
  }

  agregarMantenimiento(): void {
    this.mantenimientoService.registrarMantenimiento(this.nuevaMantenimiento).subscribe(
      (data: Mantenimiento) => {
        this.mantenimientos.push(data);
        this.nuevaMantenimiento = new Mantenimiento();
      },
      (error) => {
        console.error('Error al registrar mantenimiento', error);
      }
    );
  }

  descargarReporteMantenimientos(): void {
    this.mantenimientoService.descargarReporteMantenimientos().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_mantenimientos.pdf';
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
