import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-profesor',
  templateUrl: './tabla-profesor.component.html',
  styleUrls: ['./tabla-profesor.component.css']
})
export class TablaProfesorComponent implements OnInit {

  public headers = ["ID", "Nombre", "Tipo", "Fecha De Estreno", "Cantidad de Publico", "Foto De la Pelicula"];
  public rows = [
    {
      "ID" : "1",
      "Nombre" : "Rapido Y Furioso",
      "Tipo" : "otros",
      "Fecha De Estreno" : "22/07/2004",
      "Cantidad de Publico" : "1450450",
      "Foto De la Pelicula" : "C/Fotos/"
    },
    {
      "ID" : "1",
      "Nombre" : "Ted",
      "Tipo" : "otros",
      "Fecha De Estreno" : "14/07/200",
      "Cantidad de Publico" : "1450450",
      "Foto De la Pelicula" : "C/Fotos/"
    }
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
