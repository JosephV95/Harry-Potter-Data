import { Component } from '@angular/core';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  Personajes :any[] =[];

  p:number = 1;  //* Variable usada para la paginación


  categorias:any[] =[];

  constructor(private datosHP: DataHarryPotterApiService){}

  ngOnInit(){
    this.datosHP.obtenerPersonajes().subscribe(data =>{
      this.Personajes = data
    })
  }

  categActiva(evento:any){
    // console.log(evento.target.checked);
    if (evento.target.checked) {
      this.categorias.push(evento.target.value)
    } else {
      this.categorias = this.categorias.filter(ev => ev != evento.target.value)
    }
    console.log(this.categorias);
  }
}
