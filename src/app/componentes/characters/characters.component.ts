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

  //? Controles adicionales para la pagination 
  p:number = 1;  //* Variable usada para la paginación
  responsive:boolean = true;
  maxSize:number = 5;
  autoHide:boolean = true;

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

    // ! ahora el filtro por search se podra usar al checkear una categoria
    this.filtroSearch()
  }

  //*  el filtro por search se guardo en una función para que pueda ser usado para otro tipo de categorias a futuro, por eso no guardo como una variable dentro de categActiva()
  filtroSearch(){
    let primerFiltro = this.BackupPersonajes.filter(ev =>
      ev.name.toLowerCase().includes(this.inputSearch.toLowerCase())
    )
    // console.log(primerFiltro);
    
    //! Movi este condicional desde el categActiva()
    if (this.categorias.length > 0) {
      if (this.categorias.includes("otras") ) {
        this.Personajes = primerFiltro.filter(pers => this.categorias.includes(pers.house) || (!pers.house && pers.wizard))
      }
       else{
        this.Personajes = primerFiltro.filter(pers => this.categorias.includes(pers.house ) )
      }
    } else {
      this.Personajes = primerFiltro;
    }
    // return this.Personajes
    
    return this.Personajes
    // return this.Personajes = primerFiltro
  }

  catMuggles(){
    this.categorias = [] //? Con esto se desmarcaran los checkbox de las casas
    this.inputSearch = "" //? Hara que el input search este vacio
    this.Personajes = this.BackupPersonajes.filter(per => !per.wizard && per.species == 'human')
  }

  catOtrasEsp(){
    this.categorias = [] //? Con esto se desmarcaran los checkbox de las casas
    this.inputSearch = "" //? Hara que el input search este vacio
    this.Personajes = this.BackupPersonajes.filter(per => per.species != 'human')
  }
}
