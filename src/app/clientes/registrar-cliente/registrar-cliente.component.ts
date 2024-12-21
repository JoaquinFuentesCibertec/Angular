import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../service/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrl: './registrar-cliente.component.css'
})
export class RegistrarClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

  registrar(): void {
    this.clienteService.registrarCliente(this.cliente).subscribe(
      response => {
        console.log('Cliente registrado', response);
        this.router.navigate(['/listar-clientes']);
      },
      error => {
        console.error('Error al registrar cliente', error);
      }
    );
  }

}
