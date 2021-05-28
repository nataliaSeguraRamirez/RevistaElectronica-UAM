import { Component, OnInit } from '@angular/core'
import { articulos } from 'src/app/Modelos/articulos'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public articulos1 = []
  public autores = []
  constructor(private servidor: ServidorService) {
    this.obtenerArticulos()
    this.obtenerAutores()
  }

  ngOnInit(): void {}
  public obtenerArticulos() {
    
    this.servidor.obtenerArticulos()
  }

  public obtenerAutores() {
    
    this.servidor.obtenerAutores()
  }
}
