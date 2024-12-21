import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../service/libro.service';
import { Libro } from '../../models/libro';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {
  libro!: Libro;

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerLibro();
  }

  obtenerLibro(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.obtenerLibroPorId(id).subscribe(
      (data: Libro) => {
        this.libro = data;
      },
      (error) => {
        console.error('Error al obtener libro', error);
      }
    );
  }

  actualizarLibro(): void {
    this.libroService.actualizarLibro(this.libro).subscribe(
        () => {
            alert('Libro actualizado correctamente');
            this.router.navigate(['/listar-libros']);
        },
        (error) => {console.error('Error al actualizar libro', error);
        }
    );
}
}
