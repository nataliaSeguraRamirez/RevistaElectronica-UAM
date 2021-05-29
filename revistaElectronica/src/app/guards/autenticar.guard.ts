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
      (localStorage.getItem('loginEditor') == 'true' &&
        localStorage.getItem('loginAutor') == 'false') ||
      localStorage.getItem('loginAutor') == null ||
      (localStorage.getItem('loginAutor') == 'true' &&
        localStorage.getItem('loginEdito') == 'false') ||
      localStorage.getItem('loginAutor') == null
    ) {
      if (
        (localStorage.getItem('loginEditor') == 'true' &&
          localStorage.getItem('loginAutor') == 'false') ||
        localStorage.getItem('loginAutor') == null
      ) {
        return true
      }
      if (
        (localStorage.getItem('loginAutor') == 'true' &&
          localStorage.getItem('loginEdito') == 'false') ||
        localStorage.getItem('loginAutor') == null
      ) {
        return true
      }
    }
    alert(' Error de autenticación!')
    return false
  }
}
