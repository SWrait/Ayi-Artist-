import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageService } from '../../page.service';
import { ArtistModel } from '../../models/artista.model';
import { map, subscribeOn } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agregar',
  templateUrl: './crud.component.html',
  styles: [
  ]
})
export class CrudComponent implements OnInit {

  artistForm!: FormGroup
  artist: ArtistModel[] = [];


  constructor(private formBuilder: FormBuilder,
    private pageSvc: PageService,
    public _router: Router,
     public _location: Location
    ) { }
    
    ngOnInit(): void {
      this.creatForm("", "", "", "", "", undefined)
      
      this.getInfo()
      this.artistForm.controls['id'].disable()
            
    }
    
  getInfo(){
    this.pageSvc.getArtist().subscribe((res)=>{
      this.crearArreglo(res);
    });
  }
  
   crearArreglo(artistasObj: any) {
    Object.keys(artistasObj).forEach((key) => {
      const artista: ArtistModel = artistasObj[key];
      artista.id = key;
      this.artist.push(artista);
    });
  }
        
        creatForm(
          id: string,
          nombre: string,
          nacionalidad: string,
          foto: string,
          cancion: string,
          puntuacion: number
    ) {
      this.artistForm = this.formBuilder.group({
        id: [id, [Validators.required]],
        nombre: [nombre, [Validators.required, Validators.minLength(3)]],
        nacionalidad: [nacionalidad, [Validators.required,Validators.minLength(4)]],
        foto: [foto, [Validators.required, ]],
        cancion: [cancion, [Validators.required, Validators.minLength(2)]],
        puntuacion: [puntuacion, [Validators.required, Validators.min(1), Validators.max(5)]]
      })
    }
    // Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")
    
    
  deleteArtist( artista: ArtistModel, i: number) {
    this.artist.splice(i,1);
    this.pageSvc.deleteArtista(artista.id)
    .subscribe();
}


  update: boolean= false
  
  Test: string= ''
  
  saveInfo(){
    
    this.Test = this.artistForm.controls['id'].value;
    console.log(this.Test)

    const newArtist: ArtistModel={
      id: this.artistForm.value.id,
      nombre: this.artistForm.value.nombre,
      Nacionalidad: this.artistForm.value.nacionalidad,
      Foto: this.artistForm.value.foto,
      canciones: [
        {
          cancion: this.artistForm.value.cancion,
          puntuacion: this.artistForm.value.puntuacion,
        },
      ],
    
    }
    const id= this.Test
    // Va a cargar los datos del form en el crud sin relog
    this.artist.map(function(dato){

      if(dato.id == id ){
         dato.nombre= newArtist.nombre;
         dato.Nacionalidad= newArtist.Nacionalidad
         dato.Foto= newArtist.Foto
         console.log(dato)
        }
        // this.refreshTest()
        return console.log(dato)
  })
    if(this.update == false){
      this.pageSvc.postArtist(newArtist).subscribe((res)=>{
      this.artist.push(newArtist)
      })
    }else {
      this.pageSvc.putArtista(this.Test, newArtist).subscribe((resp)=>{
        this.update = false
        this.artistForm.reset()
        // this.refreshTest()
      })
      
      
          
        }}
        uploadArtist(id:string ) {
        
        this.update = true;
        this.pageSvc.getIdArtist(id).subscribe((resp:any) => {

          this.artistForm.controls['id'].setValue(id),

          this.artistForm.controls['nombre'].setValue(resp.nombre),
          
          this.artistForm.controls['nacionalidad'].setValue(resp.Nacionalidad),
          
          this.artistForm.controls['foto'].setValue(resp.Foto), 
          
          this.artistForm.controls['cancion'].setValue(resp.canciones[0].cancion),
          
          this.artistForm.controls['puntuacion'].setValue(resp.canciones[0].puntuacion)
          
        })
        // this.refreshTest()
     }
     

     validfield( campo: string ) {

      return this.artistForm.controls[campo].errors 
              && this.artistForm.controls[campo].touched;
    }
    

    refreshTest(): void {
      this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
      });
    }
  
  }