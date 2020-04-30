import { Injectable } from '@angular/core';
import {Peliculas} from '../../app/clases/peliculas'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public peliculas:Peliculas[] = [{"id": 1, "nombre": "La guerra de las galaxias","tipo": 4,"fechaDeEstreno":"27/02/1990","cantidadDePublico":1450000,"fotoDeLaPelicula":"c/sarasa/carpeta"},
  {"id": 2, "nombre": "La guerra de las galaxias","tipo": 4,"fechaDeEstreno":"27/02/1990","cantidadDePublico":1450000,"fotoDeLaPelicula":"c/sarasa/carpeta"}]

  constructor(private http:HttpClient) { }

  public traerPeliculas()
  {
    return this.peliculas;
  }
}
