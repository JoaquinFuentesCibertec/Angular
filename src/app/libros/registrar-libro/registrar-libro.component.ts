import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../../models/libro';
import { LibroService } from '../../service/libro.service';

@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrls: ['./registrar-libro.component.css']
})
export class RegistrarLibroComponent {
  libro: Libro = new Libro();

  constructor(
    private libroService: LibroService, private router: Router
  ) { }

  registrarLibro(): void {
    this.libroService.registrarLibro(this.libro).subscribe(
      (data) => {
        alert('Libro registrado correctamente');
        this.router.navigate(['/listar-libros']);
      },
      (error) => {
        console.error('Error al registrar libro', error);
      }
    );
  }
}
