import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { AutoresComponent } from './Components/autores/autores.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/login/login.component';


const routes: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'articulos', component: ArticulosComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'informacion', component: InformacionComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);
