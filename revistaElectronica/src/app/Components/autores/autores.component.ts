import { Component, OnInit } from '@angular/core';
import { ServidorService } from '../../servidor.service'
import {usuarios} from '../../Modelos/usuarios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {
  public usuario: any [] = []
  constructor(private servidor: ServidorService,
              private router:Router) { }

  ngOnInit(): void {

    //this.usuario = this.servidor.obtenerAutores();
  }

}
