import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { articulos } from 'src/app/Modelos/articulos.interface'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-panel-editor',
  templateUrl: './panel-editor.component.html',
  styleUrls: ['./panel-editor.component.css'],
})
export class PanelEditorComponent implements OnInit {
  // Seleccionamos o iniciamos el valor '0' del <select>

  public opcionSeleccionado: string = '0'
  public verSeleccion: string = ''

  public articulos1 = [] as articulos[]
  constructor(private servidor: ServidorService, private router: Router) {
    if (this.verSeleccion == '' || this.verSeleccion == '0') {
      this.obtenerArticulos(this.verSeleccion)
    }
  }
  ngOnInit(): void {}

  public obtenerArticulos(opcion: any) {
    //console.log(this.verSeleccion)
    if (opcion == '' || opcion == '0' || opcion == '1') {
      this.servidor.obtenerArticulosTotal().subscribe((data) => {
        //alert('Todos')
        this.articulos1.splice(0, this.articulos1.length)
        this.articulos1 = data as articulos[]
      })
    } else {
      if (opcion == '2') {
        this.servidor.obtenerArticulosPublicados().subscribe((data) => {
          //alert('Publicados')
          this.articulos1.splice(0, this.articulos1.length)
          this.articulos1 = data as articulos[]
        })
      } else {
        if (opcion == '3') {
          this.servidor.obtenerArticulosTotal().subscribe((data) => {
            //alert('Rechazados')
            this.articulos1.splice(0, this.articulos1.length)
            const articulos_temp = data as articulos[]
            for (let index = 0; index < articulos_temp.length; index++) {
              if (
                articulos_temp[index].es_evaluado == 1 &&
                articulos_temp[index].es_publicado == 0
              ) {
                this.articulos1.push(articulos_temp[index])
              }
            }
          })
        }
        if (opcion == '4') {
          this.servidor.obtenerArticulosTotal().subscribe((data) => {
            //alert('Nuevos')
            this.articulos1.splice(0, this.articulos1.length)
            const articulos_temp = data as articulos[]
            for (let index = 0; index < articulos_temp.length; index++) {
              if (
                articulos_temp[index].es_evaluado == 0 &&
                articulos_temp[index].es_publicado == 0
              ) {
                this.articulos1.push(articulos_temp[index])
              }
            }
          })
        }
      }
    }
  }

  public verArticulo(index: number) {
    console.log(index)
    this.router.navigate([{ outlets: { editor: ['articulo', index] } }])
  }

  public seleccionar() {
    this.verSeleccion = this.opcionSeleccionado
    this.obtenerArticulos(this.verSeleccion)
    this.ngOnInit()
  }
}
