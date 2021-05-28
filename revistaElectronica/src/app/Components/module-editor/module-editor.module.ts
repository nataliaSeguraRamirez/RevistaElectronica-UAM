import { NgModule } from '@angular/core';
import { CommonModule, formatCurrency } from '@angular/common';
import { ArticuloEditorComponent } from './articulo-editor/articulo-editor.component';
import { PanelEditorComponent } from './panel-editor/panel-editor.component'



@NgModule({
  declarations: [ArticuloEditorComponent, PanelEditorComponent],
  imports: [
    CommonModule
  ]
})
export class ModuleEditorModule { }
