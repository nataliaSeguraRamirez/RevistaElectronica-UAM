import { Component, OnInit } from '@angular/core'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.css'],
})
export class CrearArticuloComponent implements OnInit {
  constructor(private servidor: ServidorService) {}

  ngOnInit(): void {}

  public enviarArticulo(titulo: any, descripcion: any, contenido: any) {
    this.servidor
      .crearArticulo(titulo.value, descripcion.value, contenido.value)
      .subscribe((data) => {
        if (data) {
          alert('Artículo enviado con éxito')
          this.limpiar(titulo, descripcion, contenido)
        } else {
          alert('El artículo no fue enviado ')
        }
      })
  }

  public limpiar(titulo: any, descripcion: any, contenido: any) {
    titulo.value = ''
    descripcion.value = ''
    contenido.value = ''
  }
}
