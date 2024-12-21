import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InicioComponent } from './inicio/inicio.component';
import { ListarClientesComponent } from './clientes/listar-clientes/listar-clientes.component';
import { RegistrarClienteComponent } from './clientes/registrar-cliente/registrar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { ListarLibrosComponent } from './libros/listar-libros/listar-libros.component';
import { RegistrarLibroComponent } from './libros/registrar-libro/registrar-libro.component';
import { EditarLibroComponent } from './libros/editar-libro/editar-libro.component';
import { ListarSucursalesComponent } from './sucursales/listar-sucursales/listar-sucursales.component';
import { RegistrarSucursalComponent } from './sucursales/registrar-sucursal/registrar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { ListarReservasComponent } from './reserva/listar-reservas/listar-reservas.component';
import { ListarEditorialesComponent } from './editorial/listar-editoriales/listar-editoriales.component';
import { ListarMantenimientoComponent } from './mantenimiento/listar-mantenimiento/listar-mantenimiento.component';
import { ContactosComponent } from './contactos/contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarClientesComponent,
    RegistrarClienteComponent,
    EditarClienteComponent,
    ListarLibrosComponent,
    RegistrarLibroComponent,
    EditarLibroComponent,
    ListarSucursalesComponent,
    RegistrarSucursalComponent,
    EditarSucursalComponent,
    ListarReservasComponent,
    ListarEditorialesComponent,
    ListarMantenimientoComponent,
    ContactosComponent,
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
