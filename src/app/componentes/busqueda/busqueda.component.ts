import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @Output() enviarPelicula: EventEmitter<any> = new EventEmitter<any>();
  public peliculas : Peliculas[];

  constructor(private servicio: ServicioService)
   {
    this.peliculas = this.servicio.traerPeliculas();
  }

  ngOnInit(): void {
  }
  
  Buscar()
  {
    this.enviarPelicula.emit(this.peliculas);
  }

}
