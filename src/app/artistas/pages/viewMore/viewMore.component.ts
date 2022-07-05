import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { ArtistModel } from '../../models/artista.model';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-artista',
  templateUrl: './viewMore.component.html',
  styles: [
  ]
})
export class ViewMoreComponent implements OnInit {

artist!: ArtistModel

  constructor(
    private activatedRout: ActivatedRoute,
    private pageSvc: PageService 
      
    
   ) { }

  ngOnInit(): void {
    this.obtainId()

  }

private obtainId(){
  this.activatedRout.params
  .pipe(
    switchMap( ({id}) => this.pageSvc.getIdArtist(id)),
    tap(console.log)
  )
  .subscribe(resp => this.artist= resp)
}
round(){
  Math.floor(this.artist.canciones[0].puntuacion)
}
}
