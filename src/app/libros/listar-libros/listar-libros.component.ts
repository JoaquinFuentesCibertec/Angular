import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from '../../models/libro';
import { LibroService } from '../../service/libro.service';
import { Editorial } from '../../models/editorial';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  libros: Libro[] = [];
  libroConEditoriales: Libro | null = null;

  constructor(
    private libroService: LibroService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.libroService.listarLibros().subscribe(
      (data: Libro[]) => {
        this.libros = data.map(libro => ({
          ...libro,
          fecha_restock: new Date(libro.fechaRestock)
        }));
      },
      (error) => {
        console.error('Error al obtener libros', error);
      }
    );
  }

  editarLibro(id: number): void {
    this.router.navigate([`/editar-libro/${id}`]);
  }

  eliminarLibro(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      this.libroService.eliminarLibro(id).subscribe(
        () => {
          this.libros = this.libros.filter(libro => libro.id !== id);
          alert('Libro eliminado correctamente');
        },
        (error) => {
          console.error('Error al eliminar libro', error);
        }
      );
    }
  }
  obtenerLibroEditoriales(id: number): void {
    this.libroService.obtenerLibroConEditoriales(id).subscribe(
      (data: Libro) => {
        this.libroConEditoriales = data;
        console.log(this.libroConEditoriales);
      },
      (error) => {
        console.error('Error al obtener cliente con reservas', error);
      }
    );
  }

  descargarReporteLibros(): void {
    this.libroService.descargarReporteLibros().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_libros.pdf';
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
