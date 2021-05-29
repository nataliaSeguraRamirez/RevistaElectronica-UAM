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
    if (localStorage.getItem('loginEditor') == 'true') {
      if (
        localStorage.getItem('loginAutor') == 'false' ||
        localStorage.getItem('loginAutor') == null
      ) {
        //alert('¡ Editor autenticado !')
        return true
      }
    }
    if (localStorage.getItem('loginAutor') == 'true') {
      if (
        localStorage.getItem('loginEditor') == 'false' ||
        localStorage.getItem('loginEditor') == null
      ) {
        //alert('¡ Autor autenticado !')
        return true
      }
    }
    alert(' Error de autenticación!')
    return false
  }
}
