import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../service/reserva.service';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-listar-reservas',
  templateUrl: './listar-reservas.component.html',
  styleUrls: ['./listar-reservas.component.css']
})
export class ListarReservasComponent implements OnInit {
  reservas: Reserva[] = [];
  nuevaReserva: Reserva = new Reserva();

  constructor(private reservaService: ReservaService) { }

  ngOnInit(): void {
    this.obtenerReservas();
  }

  obtenerReservas(): void {
    this.reservaService.listarReservas().subscribe(
      (data: Reserva[]) => {
        this.reservas = data;
      },
      (error) => {
        console.error('Error al obtener reservas', error);
      }
    );
  }

  agregarReserva(): void {
    this.reservaService.agregarReserva(this.nuevaReserva).subscribe(
      (data: Reserva) => {
        this.reservas.push(data);
        this.nuevaReserva = new Reserva();
      },
      (error) => {
        console.error('Error al agregar reserva', error);
      }
    );
  }
  descargarReporteReservas(): void {
    this.reservaService.descargarReporteReservas().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_reservas.pdf';
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
