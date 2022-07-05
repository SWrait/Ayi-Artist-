import { Component, OnInit } from '@angular/core';

import { ArtistModel, Canciones } from '../../models/artista.model';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styles: [

  ]
})
export class RankingComponent implements OnInit {
  artist: ArtistModel[] = [];

  hayError:boolean=false
  

  respuestaError: string=''

  constructor(private pageSvc: PageService) { }

  ngOnInit(): void {
    this.obtenerArtistas()
    console.log(this.artist);
    
  }



  obtenerArtistas() {
    this.pageSvc.getArtist().subscribe((res) => {
      this.crearArreglo(res);
      this.ordenarPorPuntaje()
    });
  }

  //El objeto obtenido de firebase lo transformo en array para poder manipular los datos

  private crearArreglo(obj: object) {
    let valores = Object.values(obj);
    let ids = Object.keys(obj);
    for (let i = 0; i < valores.length; i++) {
      let newObject: ArtistModel = {
        id: ids[i],
        nombre: valores[i].nombre,
        Nacionalidad: valores[i].Nacionalidad,
        Foto: valores[i].Foto,
        canciones: valores[i].canciones,
      };
    
      this.artist.push(newObject);

    }

    
  }



  private ordenarPorPuntaje(){

    this.artist.sort((a,b)=>b.canciones[0].puntuacion-a.canciones[0].puntuacion)

  }
  
  // buscar(termino: string){
  //   this.respuestaError= termino
  
  //   this.hayError= false;
    
  //   console.log(termino)
  
  //   this.pageSvc.searchSong(termino)
  //       .subscribe((resp) =>{
    
  //         console.log(resp)
    
  //         this.artist = resp;
    
  //       },
    
  //       (err)=>{
    
  //         console.log(err)
    
  //         this.hayError=true
    
  //         this.artist=[];
  
  //       }
  //       )
  
  //     }
  
  //     tecleo(termino: string) {
  //       this.hayError = false
  //     }


// y: boolean
// artistUpdate(x:boolean){

//   x= this.y
//   console.log(x)
// }




  // get resultado(){
  //   return this.pageSvc.resultado
  // }
  




}
