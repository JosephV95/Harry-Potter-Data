import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHarryPotterApiService {

  // Url original de la API, se copiara sus datos en json para ahorar recursos y trabajar de forma local
  // urlApi = 'https://hp-api.onrender.com/api/characters';
  
  urlApi = 'assets/dataAPI/harryApiES.json';
  
  constructor(private httpApi:HttpClient) { }

  obtenerPersonajes(): Observable<any>{

    // console.log("Todo esta funcionando");
    
    //*Se debio indicar el tipo de response para que el hosting de firebase(creo) lo reconosca como json y pueda mostrar la información en la web online y no salte errores
    return this.httpApi.get(this.urlApi, {responseType: 'json'}) 
  }

  // ! esta seria la funcion para traer un personaje desde la api, pero no traeria las img que puse a las cards que no tenian
  // buscarPersonaje(id:string){
  //   return this.httpApi.get('https://hp-api.onrender.com/api/character/'+id)
  // }
}
