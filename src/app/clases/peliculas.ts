export class Peliculas {
    public id:number
    public nombre:string
    public tipo:EnumTipo
    public fechaDeEstreno :string
    public cantidadDePublico : number
    public fotoDeLaPelicula : string


    constructor(id:number, nombre:string, tipo:EnumTipo, fechaDeEstreno:string, cantidadDePublico:number,fotoDeLaPelicula:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
    }


}

export enum EnumTipo
{
    terror = 1,
    comedia = 2,
    amor = 3,
    otros = 4
}