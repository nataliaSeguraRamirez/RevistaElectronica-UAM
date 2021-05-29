import { RouterModule, Routes } from '@angular/router'
import { AutenticarGuard } from 'src/app/guards/autenticar.guard'
import { ArticuloEditorComponent } from './articulo-editor/articulo-editor.component'
import { PanelEditorComponent } from './panel-editor/panel-editor.component'

const routes: Routes = [
  {
    path: 'articulo/:id',
    component: ArticuloEditorComponent,
    outlet: 'editor',
    canActivate: [AutenticarGuard],
  },
  {
    path: 'panel-editor',
    component: PanelEditorComponent,
    outlet: 'editor',
    canActivate: [AutenticarGuard],
  },
]

export const appEditorRouting = RouterModule.forRoot(routes)
