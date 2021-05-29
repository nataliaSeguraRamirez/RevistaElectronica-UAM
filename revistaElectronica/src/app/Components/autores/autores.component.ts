import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servidor.service'
import { Router } from '@angular/router';
import { usuarios } from 'src/app/Modelos/usuarios.interface';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  public autores = [] as usuarios[]
  constructor(private servidor: ServidorService,private router:Router) {
    this.obtenerAutores()
  }

  ngOnInit(): void {

  }
  public obtenerAutores() {
    this.servidor.obtenerAutores().subscribe((data) => {
      this.autores = data as usuarios[]
    })
  }


}
