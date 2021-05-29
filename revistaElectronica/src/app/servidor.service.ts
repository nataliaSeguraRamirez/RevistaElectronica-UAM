import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { usuarios } from './Modelos/usuarios.interface'
import { articulos } from './Modelos/articulos.interface'
import { analyzeAndValidateNgModules } from '@angular/compiler'

@Injectable({
  providedIn: 'root',
})
export class ServidorService {
  constructor(private conexion: HttpClient) {}
  private direccion = 'http://127.0.0.1:1337'

  public validarIngreso(correoU: any, claveU: any) {
    this.conexion
      .post(this.direccion + '/logIn', {
        correo: correoU,
        clave: claveU,
      })
      .subscribe((data: any) => {
        const usuario = data[0] as usuarios
        if (data.length != 0) {
          localStorage.setItem('user_cedula', '' + usuario.cedula)
          if (usuario.rol_id == 1) {
            localStorage.setItem('loginEditor', 'true')
            localStorage.setItem('loginAutor', 'false')
            //alert('Editor autenticado!')
            return true
          }
          if (usuario.rol_id == 2) {
            localStorage.setItem('loginAutor', 'true')
            localStorage.setItem('loginEditor', 'false')
            //alert('Autor autenticado!')
            return true
          }
        } else {
          alert('Datos incorrectos')
          localStorage.setItem('loginAutor', 'false')
          localStorage.setItem('loginEditor', 'false')
          return false
        }
        return false
      })
    return false
  }

  public obtenerArticulosTotal() {
    return this.conexion.get<articulos[]>(
      this.direccion + '/obtenerArticulosTotal',
    )
  }

  public obtenerArticulosAutor() {
    return this.conexion.get<articulos[]>(
      this.direccion +
        '/obtenerArticulosAutor/' +
        localStorage.getItem('user_cedula'),
    )
  }

  public obtenerArticulosPublicados() {
    return this.conexion.get<articulos[]>(
      this.direccion + '/obtenerArticulosPublicados',
    )
  }

  public obtenerAutores() {
    return this.conexion.get<usuarios[]>(this.direccion + '/obtenerAutores')
  }

  public calificarArticulo(id: any, evaluado: any, publicado: any) {
    this.conexion
      .post(this.direccion + '/evaluarArticulo', {
        _id: id,
        es_publicado: publicado,
        es_evaluado: evaluado,
      })
      .subscribe((data) => {})
  }
}
