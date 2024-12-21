// editar-cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.clienteService.obtenerCliente(id).subscribe(
      (cliente) => (this.cliente = cliente),
      (error) => console.error('Error al obtener el cliente:', error)
    );
  }

  actualizarCliente(): void {
    this.clienteService.updateCliente(this.cliente).subscribe(
      () => {
        alert('Cliente actualizado con éxito');
        this.router.navigate(['/listar-clientes']);
      },
      (error) => console.error('Error al actualizar el cliente:', error)
    );
  }
}
