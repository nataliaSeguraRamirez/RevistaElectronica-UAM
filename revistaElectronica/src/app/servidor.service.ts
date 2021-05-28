import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { usuarios } from './Modelos/usuarios'
import { ModuleEditorModule } from './Components/module-editor/module-editor.module'
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
      .post(this.direccion + '/logIn', {
        correo: correoU,
        clave: claveU,
      })
      .subscribe((data: any) => {
        const usuario = data[0] as usuarios
        console.log(data)
        if (data.length != 0) {
          /*alert('me enviaron: ' + usuario.nombre)*/
          localStorage.setItem('user_cedula', JSON.stringify(usuario.cedula))
          if (usuario.rol_id == 1) {
            localStorage.setItem('loginEditor', 'true')
            alert('Editor autenticado!')
            return true
          }
          if (usuario.rol_id == 2) {
            localStorage.setItem('loginAutor', 'true')
            alert('Autor autenticado!')
            return true
          }
        } else {
          /*alert('Datos incorrectos')*/
          localStorage.setItem('loginAutor', 'False')
          localStorage.setItem('loginEditor', 'False')
          return false
        }
        return false
      })
  }

  public obtenerArticulos() {
    console.log('Solicitar articulos')
    const articulos1 = this.conexion.get<articulos[]>(
      this.direccion + '/obtenerArticulos',
    )
    console.log(articulos1)
    return articulos1
  }

  public obtenerAutores() {
    console.log('Solicitar autores')
    const autores1 = this.conexion.get<usuarios[]>(
      this.direccion + 'obtenerAutores',
    )
    console.log(autores1)
    return autores1
  }
}
