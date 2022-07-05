export interface ArtistModel {
    id?: string,
    Foto: string
    Nacionalidad: string
    canciones: Canciones[]
    nombre: string
  }
  
  export interface Canciones {
    cancion: string
    puntuacion: number
  }