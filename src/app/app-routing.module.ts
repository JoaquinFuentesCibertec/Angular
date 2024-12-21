import { RouterModule, Routes } from "@angular/router";
import { EditarClienteComponent } from "./clientes/editar-cliente/editar-cliente.component";
import { ListarClientesComponent } from "./clientes/listar-clientes/listar-clientes.component";
import { RegistrarClienteComponent } from "./clientes/registrar-cliente/registrar-cliente.component";
import { ListarEditorialesComponent } from "./editorial/listar-editoriales/listar-editoriales.component";
import { InicioComponent } from "./inicio/inicio.component";
import { EditarLibroComponent } from "./libros/editar-libro/editar-libro.component";
import { ListarLibrosComponent } from "./libros/listar-libros/listar-libros.component";
import { RegistrarLibroComponent } from "./libros/registrar-libro/registrar-libro.component";
import { ListarMantenimientoComponent } from "./mantenimiento/listar-mantenimiento/listar-mantenimiento.component";
import { ListarReservasComponent } from "./reserva/listar-reservas/listar-reservas.component";
import { EditarSucursalComponent } from "./sucursales/editar-sucursal/editar-sucursal.component";
import { ListarSucursalesComponent } from "./sucursales/listar-sucursales/listar-sucursales.component";
import { RegistrarSucursalComponent } from "./sucursales/registrar-sucursal/registrar-sucursal.component";
import { NgModule } from "@angular/core";
import { ContactosComponent } from "./contactos/contactos.component";



const routes: Routes = [
  {path: '',component: InicioComponent},
  { path: 'listar-clientes', component: ListarClientesComponent },
  { path: 'registrar-cliente', component: RegistrarClienteComponent },
  { path: 'editar-cliente/:id', component: EditarClienteComponent },
  { path: 'listar-libros', component: ListarLibrosComponent },
  { path: 'registrar-libro', component: RegistrarLibroComponent },
  { path: 'editar-libro/:id', component: EditarLibroComponent },
  { path: 'listar-sucursales', component: ListarSucursalesComponent },
  { path: 'registrar-sucursal', component: RegistrarSucursalComponent },
  { path: 'editar-sucursal/:id', component: EditarSucursalComponent },
  {path: 'listar-reserva', component: ListarReservasComponent},
  { path: 'listar-editorial', component: ListarEditorialesComponent },
  { path: 'listar-mantenimiento', component: ListarMantenimientoComponent },
  {path: 'contactos', component: ContactosComponent },
  {path:'**', redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
