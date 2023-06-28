import { Component } from '@angular/core';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  Personajes :any[] =[];

  p:number = 1;

  constructor(private datosHP: DataHarryPotterApiService){}

  ngOnInit(){
    this.datosHP.obtenerPersonajes().subscribe(data =>{
      this.Personajes = data
    })

  }
}
