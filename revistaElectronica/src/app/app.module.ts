import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { MenuNavegacionComponent } from './Components/menu-navegacion/menu-navegacion.component'
import { ArticulosComponent } from './Components/articulos/articulos.component'
import { AutoresComponent } from './Components/autores/autores.component'
import { InformacionComponent } from './Components/informacion/informacion.component'
import { LoginComponent } from './Components/login/login.component'
import { InicioComponent } from './Components/inicio/inicio.component'
import { appRouting } from './app.routes'
import { HeaderComponent } from './Components/header/header.component'
import { SearchBarComponent } from './Components/search-bar/search-bar.component'
import { RegistroComponent } from './Components/registro/registro.component'
import { PieDePaginaComponent } from './Components/pie-de-pagina/pie-de-pagina.component'
import { ServidorService } from './servidor.service'
import { HttpClientModule } from '@angular/common/http'
import { ModuleEditorModule } from './Components/module-editor/module-editor.module'
import { ModuleAutorModule } from './Components/module-autor/module-autor.module'

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    ArticulosComponent,
    AutoresComponent,
    InformacionComponent,
    LoginComponent,
    InicioComponent,
    PieDePaginaComponent,
    HeaderComponent,
    SearchBarComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    ModuleAutorModule,
    ModuleEditorModule,
  ],
  providers: [ServidorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
