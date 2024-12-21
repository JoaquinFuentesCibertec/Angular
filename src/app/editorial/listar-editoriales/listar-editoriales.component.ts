import { Component, OnInit } from '@angular/core';
import { EditorialService } from '../../service/editorial.service';
import { Editorial } from '../../models/editorial';

@Component({
  selector: 'app-listar-editoriales',
  templateUrl: './listar-editoriales.component.html',
  styleUrls: ['./listar-editoriales.component.css']
})
export class ListarEditorialesComponent implements OnInit {
  editoriales: Editorial[] = [];
  nuevaEditorial: Editorial = new Editorial();

  constructor(private editorialService: EditorialService) { }

  ngOnInit(): void {
    this.obtenerEditoriales();
  }

  obtenerEditoriales(): void {
    this.editorialService.listarEditoriales().subscribe(
      (data: Editorial[]) => {
        this.editoriales = data;
      },
      (error) => {
        console.error('Error al obtener editoriales', error);
      }
    );
  }

  agregarEditorial(): void {
    this.editorialService.registrarEditorial(this.nuevaEditorial).subscribe(
      (data: Editorial) => {
        this.editoriales.push(data);
        this.nuevaEditorial = new Editorial();
      },
      (error) => {
        console.error('Error al registrar la editorial', error);
      }
    );
  }

  descargarReporteEditoriales(): void {
    this.editorialService.descargarReporteEditoriales().subscribe(
      (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_editoriales.pdf';
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
