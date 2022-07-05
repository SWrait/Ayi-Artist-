import { Component, Input, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/artistas/models/artista.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() artist: ArtistModel[]=[]
  @Input() comparacion: boolean
  constructor() { }

  ngOnInit(): void {
    console.log(this.artist)
  }
}
// // Forzamos la variable a boolean
// // Si name existe y no es un string vacío, entonces devuelve true
// public showDiv(): boolean {
  // const name = corp?.employee?.name;
  // return !!name;
  
// }