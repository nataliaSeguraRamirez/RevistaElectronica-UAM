import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { articulos } from 'src/app/Modelos/articulos.interface'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-articulo-autor',
  templateUrl: './articulo-autor.component.html',
  styleUrls: ['./articulo-autor.component.css'],
})
export class ArticuloAutorComponent implements OnInit {
  public articulos1 = [] as articulos[]
  public articulo: any = {}
  public index: number = 0
  constructor(
    private servidor: ServidorService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.obtenerArticulos()
  }

  ngOnInit(): void {}

  public obtenerArticulos() {
    this.servidor.obtenerArticulosAutor().subscribe((data) => {
      this.articulos1 = data as articulos[]
      this.activatedRoute.params.subscribe((params) => {
        console.log(params['id'])
        this.articulo = this.articulos1[params['id']]
        this.index = params['id']
      })
    })
  }
}
