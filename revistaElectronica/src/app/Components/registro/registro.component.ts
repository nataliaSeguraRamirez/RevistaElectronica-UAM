import { Component, OnInit } from '@angular/core'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private servidor: ServidorService) {}

  ngOnInit(): void {}

  public registrar(
    nombre: any,
    apellido: any,
    cedula: any,
    correo: any,
    clave: any,
  ) {
    this.servidor
      .registrarAutor(
        nombre.value,
        apellido.value,
        cedula.value,
        correo.value,
        clave.value,
      )
      .subscribe((data) => {
        console.log(data)
        if (data) {
          alert('Se ha registrado con éxito')
          this.limpiar(nombre, apellido, cedula, correo, clave)
        } else {
          alert('Error de registro!')
        }
      })
  }

  public limpiar(
    nombre: any,
    apellido: any,
    cedula: any,
    correo: any,
    clave: any,
  ) {
    nombre.value = ''
    apellido.value = ''
    cedula.value = ''
    correo.value = ''
    clave.value = ''
  }
}
