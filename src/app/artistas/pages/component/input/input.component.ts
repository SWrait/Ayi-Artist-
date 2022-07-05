import { Component, Input, OnInit, Output } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { ArtistModel, Canciones } from 'src/app/artistas/models/artista.model';
import { PageService } from 'src/app/artistas/page.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  
  // @ViewChild('txtsearch') searchArtist!:ElementRef <HTMLInputElement>;

  // @Input() resultado: Canciones[];
  // @Output() artistEmit : EventEmitter<Canciones> = new EventEmitter();
  // @Input() comparacion: boolean = false;

  private debounceTimer?: NodeJS.Timeout

  @Output() onEnter : EventEmitter <string> = new EventEmitter 
    
  @Output() onDebounce : EventEmitter <string> = new EventEmitter
  termino: string=''
  debouncer: Subject<string> = new Subject();


  constructor(private pageSvc:PageService){}
  
  ngOnInit(): void {
    
  }
  // componente cambie una propiedad con ng model
  // output e input llegue a la comparacion 
  
  // search(){
    
  //   const valor= this.searchArtist.nativeElement.value
    
  //   if(valor.trim().length === 0){
  //     return;
  //   }
    
  //   this.pageSvc.searchSong(valor)
    
  //   console.log(this.searchArtist.nativeElement.value)
    
  //   console.log(this.resultado)
    
    
    
  //   for (let index = 0; index < this.resultado.length; index++) {
  //     console.log('hola')
  //     console.log(this.resultado[index])
  //   }
    
    
  //   if(this.resultado[0].cancion == this.searchArtist.nativeElement.value){
      
  //     this.comparacion= true
      
  //     this.searchArtist.nativeElement.value = ''
  //     console.log('si mi rey')
  //   }
    
  
  // else{
  //   this.searchArtist.nativeElement.value = ''

  //   console.log('no mi rey')
  // }

  //   console.log(this.comparacion)
  // }
      
    search(){
      this.onEnter.emit(this.termino)
      this.debouncer.subscribe
      console.log(this.termino)
    }
    
    // ngOnInit(): void {
    //   this.debouncer
    //   .pipe(debounceTime(250))
    //   .subscribe(valor => {
    //     console.log(valor)
    //     this.onDebounce.emit(valor)
    //   })
    //   }
      
    //   tecleo(){
    //     this.debouncer.next(this.termino)
    // }
    // }
  
  
}