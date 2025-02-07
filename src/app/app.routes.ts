import { Routes, RouterModule } from '@angular/router';
import path from 'path';
import { HomeComponent } from './components/home/home.component';
import { DatosComponent } from './components/datos/datos.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReferenciasComponent } from './components/referencias/referencias.component';
import { EducacionComponent } from './components/educacion/educacion.component';

export const routes: Routes = [

    {path: '', component:HomeComponent },  
    {path: '', component:HeaderComponent },
    {path: '', component:DatosComponent },
    {path: '', component:FooterComponent},
    {path:'',component:ReferenciasComponent},
    {path:'',component:EducacionComponent}
  
];
