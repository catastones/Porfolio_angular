import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ELaboralComponent } from './componentes/e-laboral/e-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CursosComponent } from './componentes/educacion/cursos/cursos.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaComponent,
    ELaboralComponent,
    EducacionComponent,
    CursosComponent,
    SkillComponent,
    ProyectosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
