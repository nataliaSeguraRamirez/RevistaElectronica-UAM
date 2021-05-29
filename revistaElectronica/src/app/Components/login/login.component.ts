import { Component, OnInit } from '@angular/core'
import { ServidorService } from 'src/app/servidor.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private servidor: ServidorService,
              private router: Router) {}

  ngOnInit(): void {}
  public login(correo: any, clave: any) {

    this.servidor.validarIngreso(correo.value, clave.value)
    if (localStorage.getItem('loginEditor') == 'true'){
      this.router.navigate(['/panel'])
    }
    if (localStorage.getItem('loginAutor') == 'true'){

    }
  }
}
