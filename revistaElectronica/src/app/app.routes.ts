import { RouterModule, Routes } from '@angular/router'
import { ArticulosComponent } from './Components/articulos/articulos.component'
import { AutoresComponent } from './Components/autores/autores.component'
import { InformacionComponent } from './Components/informacion/informacion.component'
import { InicioComponent } from './Components/inicio/inicio.component'
import { LoginComponent } from './Components/login/login.component'
import { RegistroComponent } from './Components/registro/registro.component'

const routes: Routes = [
  { path: 'inicio', component: InicioComponent,outlet:'lector' },
  { path: 'articulos/:id', component: ArticulosComponent, outlet:'lector'},
  { path: 'autores', component: AutoresComponent, outlet:'lector'},
  { path: 'informacion', component: InformacionComponent, outlet:'lector' },
  { path: 'login', component: LoginComponent, outlet:'lector'},
  { path: 'registro', component: RegistroComponent, outlet:'lector'},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
]

export const appRouting = RouterModule.forRoot(routes)
