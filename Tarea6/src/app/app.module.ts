import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './pages/index/index.component';
import { NoPaginaComponent } from './pages/no-pagina/no-pagina.component';
import { EducacionComponent } from './pages/educacion/educacion.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CursosComponent } from './pages/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    ContactoComponent,
    IndexComponent,
    NoPaginaComponent,
    EducacionComponent,
    ProyectosComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
