import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articulos } from 'src/app/Modelos/articulos.interface'
import { usuarios } from 'src/app/Modelos/usuarios.interface'
import { ServidorService } from 'src/app/servidor.service'
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public articulos1 = [] as articulos[];
  public articulo: any = {}
  public index: number = 0
  constructor(private servidor: ServidorService,
              private activatedRoute: ActivatedRoute,) {
    this.obtenerArticulos()
    /*this.activatedRoute.params.subscribe(params => {
      this.articulo = this.articulos1[0];
      this.index = params['id']
    });
    this.articulo = this.articulos1 [this.index];*/
  }

  ngOnInit(): void {

  }
  public obtenerArticulos() {
    this.servidor.obtenerArticulosPublicados().subscribe((data) => {
      this.articulos1 = data as articulos[]
      this.activatedRoute.params.subscribe(params => {
        this.articulo = this.articulos1[params['id']];
        this.index = params['id']
      });
    })
  }
}
