import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AutenticarGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      localStorage.getItem('loginEditor') == 'false' ||
      localStorage.getItem('loginEditor') == null
    ) {
      alert('(Editor) Error de autenticación!')
      return false
    }
    if (
      localStorage.getItem('loginAutor') == 'false' ||
      localStorage.getItem('loginAutor') == null
    ) {
      alert('(Autor) Error de autenticación!')
      return false
    }
    if (localStorage.getItem('loginEditor') == 'true') {
      alert('Bienvenido al panel de Editor')
      return true
    }
    if (localStorage.getItem('loginAutor') == 'true') {
      alert('Bienvenido al panel de Autor')
      return true
    }
    return false
  }
}
