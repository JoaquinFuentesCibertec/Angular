import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLibrosComponent } from './Libro/actualizar-libro/listar-libros/listar-libros.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarLibroComponent } from './Libro/actualizar-libro/registrar-libro/registrar-libro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarProveedoresComponent } from './Proveedor/listar-proveedores/listar-proveedores.component';
import { RegistrarProveedoresComponent } from './Proveedor/registrar-proveedores/registrar-proveedores.component';
import { ActualizarLibroComponent } from './Libro/actualizar-libro/actualizar-libro.component';
import { ActualizarProveedorComponent } from './Proveedor/actualizar-proveedor/actualizar-proveedor.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    ListarLibrosComponent,
    RegistrarLibroComponent,
    InicioComponent,
    ListarProveedoresComponent,
    RegistrarProveedoresComponent,
    ActualizarLibroComponent,
    ActualizarProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
