import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  titulo = 'Centros educativos';

  colegio = 'Colegio Madre de la Vida';

  mostrarColegio = true;

  datos = [1,2,4,5,6];

  colegios = ['Nara', 'Greco', 'Mayol', 'Sefarad'];

  constructor() { }

  ngOnInit(): void {
  }


  mostrarOcultar(): void {

    this.mostrarColegio = !this.mostrarColegio;
  }

}
