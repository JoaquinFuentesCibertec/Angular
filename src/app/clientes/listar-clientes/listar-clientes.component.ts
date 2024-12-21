import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../models/cliente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteConReservas: Cliente | null = null;

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes(): void {
    this.clienteService.listarClientes().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
      },
      (error) => {
        console.error('Error al obtener clientes', error);
      }
    );
  }

  editarCliente(id: number): void {
    this.router.navigate([`/editar-cliente/${id}`]);
  }

  eliminarCliente(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(
        () => {
          this.clientes = this.clientes.filter(cliente => cliente.id !== id);
          alert('Cliente eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar cliente', error);
        }
      );
    }
  }

  obtenerClienteReservas(id: number): void {
    this.clienteService.obtenerClienteConReservas(id).subscribe(
      (data: Cliente) => {
        this.clienteConReservas = data;
        console.log(this.clienteConReservas);
      },
      (error) => {
        console.error('Error al obtener cliente con reservas', error);
      }
    );
  }

  descargarReporteClientes(): void {
    this.clienteService.descargarReporteClientes().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_clientes.pdf';
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
