import { Component, OnInit } from '@angular/core'
import { articulos } from 'src/app/Modelos/articulos.interface'
import { usuarios } from 'src/app/Modelos/usuarios.interface'
import { ServidorService } from 'src/app/servidor.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  public articulos1 = [] as articulos[]
  public autores = [] as usuarios[]
  constructor(private servidor: ServidorService) {
    this.obtenerAutores()
    this.obtenerArticulos()
  }

  ngOnInit(): void {}

  public obtenerAutores() {
    this.servidor.obtenerAutores().subscribe((data) => {
      this.autores = data as usuarios[]
    })
  }

  public obtenerArticulos() {
    this.servidor.obtenerArticulos().subscribe((data) => {
      const articulos_todos = data as articulos[]
      for (let index = 0; index < articulos_todos.length; index++) {
        if (articulos_todos[index].es_publicado == 1) {
          this.articulos1.push(articulos_todos[index])
        }
      }
    })
  }
}
