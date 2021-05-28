import { RouterModule, Routes } from '@angular/router'
import { ArticuloEditorComponent } from './articulo-editor/articulo-editor.component'
import { PanelEditorComponent} from './panel-editor/panel-editor.component'

const routes: Routes = [
  {path: 'articulo/:id', component: ArticuloEditorComponent},
  {path: 'panel', component: PanelEditorComponent},
  { path: '**', pathMatch:'full', redirectTo: 'panel' }
];

export const appRouting = RouterModule.forRoot(routes)
