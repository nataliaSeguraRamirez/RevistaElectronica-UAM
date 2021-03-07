import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuNavegacionComponent } from './Components/menu-navegacion/menu-navegacion.component';
import { ArticulosComponent } from './Components/articulos/articulos.component';
import { AutoresComponent } from './Components/autores/autores.component';
import { InformacionComponent } from './Components/informacion/informacion.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavegacionComponent,
    ArticulosComponent,
    AutoresComponent,
    InformacionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
