import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellsAPIService {

  //? ruta para el backup local de la api 
  urlSpells = 'assets/dataAPI/spellsApiES.json'

  // urlSpells = 'https://hp-api.onrender.com/api/spells'
  
  constructor(private httpSpells: HttpClient) { }

  obtenerSpells(){
    return this.httpSpells.get(this.urlSpells)
  }
}
