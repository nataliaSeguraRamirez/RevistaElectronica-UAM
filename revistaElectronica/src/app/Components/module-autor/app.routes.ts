import { RouterModule, Routes } from '@angular/router'
import { AutenticarGuard } from 'src/app/guards/autenticar.guard'
import { ArticuloAutorComponent } from './articulo-autor/articulo-autor.component'
import { PanelAutorComponent } from './panel-autor/panel-autor.component'

const routes: Routes = [
  {
    path: 'articulo/:id',
    component: ArticuloAutorComponent,
    outlet: 'autor',
    canActivate: [AutenticarGuard],
  },
  {
    path: 'panel-autor',
    component: PanelAutorComponent,
    outlet: 'autor',
    canActivate: [AutenticarGuard],
  },
]

export const appAutorRouting = RouterModule.forRoot(routes)
