import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHarryPotterApiService {

  // Url original de la API, se copiara sus datos en json para ahorar recursos y trabajar de forma local
  // urlApi = 'https://hp-api.onrender.com/api/characters';
  
  urlApi = 'assets/dataAPI/harryApi.json';
  

  constructor(private httpApi:HttpClient) { }

  obtenerDatos(): Observable<any>{

    console.log("Todo esta funcionando");

    return this.httpApi.get(this.urlApi)

    
   
  }
}
