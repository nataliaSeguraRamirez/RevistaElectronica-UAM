import { NgModule } from '@angular/core'
import { CommonModule, formatCurrency } from '@angular/common'
import { ArticuloEditorComponent } from './articulo-editor/articulo-editor.component'
import { PanelEditorComponent } from './panel-editor/panel-editor.component'
import { appEditorRouting } from './app.routes'

@NgModule({
  declarations: [ArticuloEditorComponent, PanelEditorComponent],
  imports: [CommonModule, appEditorRouting],
})
export class ModuleEditorModule {}
