import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-empleados', pathMatch: 'full' }, //Ordena a cargar el componente list-empleados
  { path: 'list-empleados', component: ListEmpleadosComponent },
  { path: 'create-empleados', component: CreateEmpleadosComponent },
  { path: 'edit-empleados/:id', component: CreateEmpleadosComponent },

  { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' }, //WildCard -> Si la dirección web tiene errores redirecciona al componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
