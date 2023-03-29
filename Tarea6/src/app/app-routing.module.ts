import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { IndexComponent } from './pages/index/index.component';
import { NoPaginaComponent } from './pages/no-pagina/no-pagina.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';



const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', component: NoPaginaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
