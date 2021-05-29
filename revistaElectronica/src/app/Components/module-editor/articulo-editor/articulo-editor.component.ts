import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { articulos } from 'src/app/Modelos/articulos.interface'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-articulo-editor',
  templateUrl: './articulo-editor.component.html',
  styleUrls: ['./articulo-editor.component.css'],
})
export class ArticuloEditorComponent implements OnInit {
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
    this.servidor.obtenerArticulosPublicados().subscribe((data) => {
      this.articulos1 = data as articulos[]
      this.activatedRoute.params.subscribe((params) => {
        this.articulo = this.articulos1[params['id']]
        this.index = params['id']
      })
    })
  }
  public calificarArticulo(id: any, evaluado: any, publicado: any) {
    this.servidor.calificarArticulo(id, evaluado, publicado)
  }
}
