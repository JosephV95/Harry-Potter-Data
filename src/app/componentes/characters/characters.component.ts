import { Component } from '@angular/core';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  Personajes :any[] = [];
  BackupPersonajes:any[] = [];

  p:number = 1;  //* Variable usada para la paginación

  categorias:any[] =[];
  inputSearch:string = "";

  constructor(private datosHP: DataHarryPotterApiService){}

  ngOnInit(){
    this.datosHP.obtenerPersonajes().subscribe(data =>{
      this.Personajes = data;
      this.BackupPersonajes = data;
    })
  }

  categActiva(evento:any){
    // console.log(evento.target.checked);
    if (evento.target.checked) {
      this.categorias.push(evento.target.value)
    } else {
      this.categorias = this.categorias.filter(ev => ev != evento.target.value)
    }
    // console.log(this.categorias);
    this.p = 1  //* Esto hara que seleccionar o no un categoria vuelva a la pagination 1

    if (this.categorias.length > 0) {
      if (this.categorias.includes("otras") ) {
        this.Personajes = this.filtroSearch().filter(pers => this.categorias.includes(pers.house) || (!pers.house && pers.wizard))
      }
       else{
        this.Personajes = this.filtroSearch().filter(pers => this.categorias.includes(pers.house ) )
      }
    } else {
      this.Personajes = this.filtroSearch();
    }
    // console.log(this.Personajes);
  }

  //*  el filtro por search se guardo en una función para que pueda ser usado para otro tipo de categorias a futuro, por eso no guardo como una variable dentro de categActiva(),   
  filtroSearch(){
    let primerFiltro = this.BackupPersonajes.filter(ev =>
      ev.name.toLowerCase().includes(this.inputSearch.toLowerCase())
    )
    // console.log(primerFiltro);
    
    return this.Personajes = primerFiltro
  }

  catMuggles(){
    this.categorias = [] //? Con esto se desmarcaran los checkbox de las casas
    this.Personajes = this.BackupPersonajes.filter(per => !per.wizard && per.species == 'human')
  }

  catOtrasEsp(){
    this.categorias = [] //? Con esto se desmarcaran los checkbox de las casas
    this.Personajes = this.BackupPersonajes.filter(per => per.species != 'human')
  }
}
