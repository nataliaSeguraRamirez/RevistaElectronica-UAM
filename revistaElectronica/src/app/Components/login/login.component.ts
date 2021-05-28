import { Component, OnInit } from '@angular/core'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private servidor: ServidorService) {}

  ngOnInit(): void {}
  public login(correo: any, clave: any) {
    
    this.servidor.validarIngreso(correo.value, clave.value)
  }
}
