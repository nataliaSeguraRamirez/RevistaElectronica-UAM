import { RouterModule, Routes } from '@angular/router'
import { ArticulosComponent } from './Components/articulos/articulos.component'
import { AutoresComponent } from './Components/autores/autores.component'
import { InformacionComponent } from './Components/informacion/informacion.component'
import { InicioComponent } from './Components/inicio/inicio.component'
import { LoginComponent } from './Components/login/login.component'
import { ArticuloEditorComponent } from './Components/module-editor/articulo-editor/articulo-editor.component'
import { LogoutComponent } from 'src/app/Components/logout/logout.component'
import { PanelEditorComponent } from './Components/module-editor/panel-editor/panel-editor.component'
import { RegistroComponent } from './Components/registro/registro.component'
import { AutenticarGuard } from './guards/autenticar.guard'
import { ArticuloAutorComponent } from './Components/module-autor/articulo-autor/articulo-autor.component'

const routes: Routes = [
  {
    path: 'articulo/:id',
    component: ArticuloEditorComponent,
    outlet: 'editor',
    canActivate: [AutenticarGuard],
  },
  {
    path: 'panel',
    component: PanelEditorComponent,
    outlet: 'editor',
    canActivate: [AutenticarGuard],
  },
  { path: 'inicio', component: InicioComponent, outlet: 'lector' },
  { path: 'articulos/:id', component: ArticulosComponent, outlet: 'lector' },
  { path: 'autores', component: AutoresComponent, outlet: 'lector' },
  { path: 'informacion', component: InformacionComponent, outlet: 'lector' },
  { path: 'login', component: LoginComponent, outlet: 'lector' },
  { path: 'logout', component: LogoutComponent, outlet: 'lector' },
  { path: 'registro', component: RegistroComponent, outlet: 'lector' },
  {
    path: 'articulo/:id',
    component: ArticuloAutorComponent,
    outlet: 'autor',
    canActivate: [AutenticarGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/(lector:inicio)',
  },
]

export const appRouting = RouterModule.forRoot(routes)
