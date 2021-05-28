import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { usuarios } from './Modelos/usuarios'
import { articulos } from './Modelos/articulos'
import { roles } from './Modelos/roles'

@Injectable({
  providedIn: 'root',
})
export class ServidorService {
  constructor(private conexion: HttpClient) {}
  private direccion = 'http://127.0.0.1:1337'

  public validarIngreso(correoU: any, claveU: any) {
    alert('datos guardados: ' + correoU + ' , ' + claveU)
    this.conexion
      .post('http://127.0.0.1:1337/logIn', {
        correo: correoU,
        clave: claveU,
      })
      .subscribe((data) => {
        alert('me enviaron: ' + data)
      })
  }
}
