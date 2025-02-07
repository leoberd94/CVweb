import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DatosComponent } from "../datos/datos.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReferenciasComponent } from "../referencias/referencias.component";
import { AppComponent } from "../../app.component";
import { EducacionComponent } from '../educacion/educacion.component';
import { HabilidadesComponent } from "../habilidades/habilidades.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, DatosComponent, ReferenciasComponent, FooterComponent, HeaderComponent, EducacionComponent, HabilidadesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
