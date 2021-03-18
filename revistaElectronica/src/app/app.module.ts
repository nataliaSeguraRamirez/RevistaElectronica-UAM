import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './Components/menu-navegacion/menu-navegacion.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { AutoresComponent } from './Components/autores/autores.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import{appRouting} from "./app.routes";
import { PieDePaginaComponent } from './Components/pie-de-pagina/pie-de-pagina.component';
import { HeaderComponent } from './Components/header/header.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component'

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
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
