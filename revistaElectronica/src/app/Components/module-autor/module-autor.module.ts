import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PanelAutorComponent } from './panel-autor/panel-autor.component';
import { ArticuloAutorComponent } from './articulo-autor/articulo-autor.component'
import { appAutorRouting } from './app.routes';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';

@NgModule({
  declarations: [PanelAutorComponent, ArticuloAutorComponent, CrearArticuloComponent],
  imports: [CommonModule, appAutorRouting],
})
export class ModuleAutorModule {}
