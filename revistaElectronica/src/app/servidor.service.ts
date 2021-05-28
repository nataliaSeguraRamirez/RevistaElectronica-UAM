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
      .post('http://127.0.0.1:1337/logIn', {
        correo: correoU,
        clave: claveU,
      })
      .subscribe((data:any) => {
        const usuario = (data [0]) as usuarios;
        console.log(data)
        if (data.length != 0) {
          alert('me enviaron: ' + usuario.nombre)
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
          alert('Datos incorrectos')
          localStorage.setItem('login', 'False')
          return false
        }
        return false
      })
  }
}
