import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PanelAutorComponent } from './panel-autor/panel-autor.component';
import { ArticuloAutorComponent } from './articulo-autor/articulo-autor.component'
import { appAutorRouting } from './app.routes';

@NgModule({
  declarations: [PanelAutorComponent, ArticuloAutorComponent],
  imports: [CommonModule, appAutorRouting],
})
export class ModuleAutorModule {}
