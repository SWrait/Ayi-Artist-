import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ArtistModel, Canciones } from './models/artista.model';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private url = 'https://artist-ab0d4-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient,
    public _router: Router,
    public _location: Location ) { }
  
  getIdArtist (id:string ) {
    
    return this.http.get(`${ this.url }/artistas/${ id }.json`);
  }
  //trae todos los artistas
  getArtist (){

    return this.http.get(`${ this.url }/artistas.json`)
  }
  
  postArtist( artista: ArtistModel) {

    return this.http.post(`${ this.url}/artistas.json`, artista)
  
  }

  deleteArtista ( id:string  ) {
    

  return this.http.delete(`${ this.url }/artistas/${ id }.json`);
  
  }

  putArtista (id:string, putArtist: ArtistModel){

    return this.http.put(`${ this.url }/artistas/${ id }.json`, putArtist)

  }

  // private _historial: string[]=[]
  // public resultado: string
  // test: string

  searchSong(pais: string):Observable<Canciones[]>{

    const url = `${this.url} /Name/${pais}`

    return this.http.get<Canciones[]>(url)

  }
//   searchSong(query:string =''){

        
//     query = query.trim()

//     if(!this._historial.includes(query)){

//     this._historial.unshift(query)

//     this._historial = this._historial.splice(0,9)

//     localStorage.setItem('historial', JSON.stringify(this._historial))
// }


// console.log(this._historial)

//     this.http.get<Canciones>(`${ this.url }/artistas.json`)
// .subscribe((resp) =>{
//   this.resultado = resp.cancion;
//   localStorage.setItem('resultado', JSON.stringify( this.resultado))
//   console.log(this.resultado)
// })
// }

// refreshTest(): void {
//   this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
//   console.log(decodeURI(this._location.path()));
//   this._router.navigate([decodeURI(this._location.path())]);
//   });
// }

}
