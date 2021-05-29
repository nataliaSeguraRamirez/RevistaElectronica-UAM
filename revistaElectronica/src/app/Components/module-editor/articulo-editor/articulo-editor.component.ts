import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { articulos } from 'src/app/Modelos/articulos.interface'
import { ServidorService } from 'src/app/servidor.service'
import { Router } from '@angular/router'

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
    private router: Router,
  ) {
    this.obtenerArticulos()
  }

  ngOnInit(): void {
    this.obtenerArticulos()
  }

  public obtenerArticulos() {
    this.servidor.obtenerArticulosTotal().subscribe((data) => {
      this.articulos1 = data as articulos[]
      this.activatedRoute.params.subscribe((params) => {
        this.articulo = this.articulos1[params['id']]
        this.index = params['id']
      })
    })
  }
  public calificarArticulo(id: any, evaluado: any, publicado: any) {
    this.servidor.calificarArticulo(id, evaluado, publicado)
    //this.ngOnInit();
    alert('Articulo calificado')
    this.router.navigate([{ outlets: { editor: ['panel-editor'] } }])
  }
}
