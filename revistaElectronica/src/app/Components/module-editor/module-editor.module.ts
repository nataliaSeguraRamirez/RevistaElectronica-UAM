import { NgModule } from '@angular/core'
import { CommonModule, formatCurrency } from '@angular/common'
import { ArticuloEditorComponent } from './articulo-editor/articulo-editor.component'
import { PanelEditorComponent } from './panel-editor/panel-editor.component'
import { appEditorRouting } from './app.routes'
import { FormsModule } from '@angular/forms';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component'

@NgModule({
  declarations: [ArticuloEditorComponent, PanelEditorComponent, ListaArticulosComponent],
  imports: [CommonModule, appEditorRouting, FormsModule],
})
export class ModuleEditorModule {}
