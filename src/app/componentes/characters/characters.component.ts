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

  constructor(private datosHP: DataHarryPotterApiService){}

  ngOnInit(){
    this.datosHP.obtenerPersonajes().subscribe(data =>{
      this.Personajes = data;
      this.BackupPersonajes = data;
    })
  }
  // ngOnChanges(){
  //   this.Personajes
  // }

  categActiva(evento:any){
    // console.log(evento.target.checked);
    if (evento.target.checked) {
      this.categorias.push(evento.target.value)
    } else {
      this.categorias = this.categorias.filter(ev => ev != evento.target.value)
    }
    console.log(this.categorias);
    this.p = 1  //* Esto hara que seleccionar o no un categoria vuelva a la pagination 1

    if (this.categorias.length > 0) {
      if (this.categorias.includes("otras") ) {
        this.Personajes = this.BackupPersonajes.filter(pers => this.categorias.includes(pers.house) || (!pers.house && pers.wizard))
      } else{
        this.Personajes = this.BackupPersonajes.filter(pers => this.categorias.includes(pers.house ) )
      }
    } else {
      this.Personajes = this.BackupPersonajes;
    }
    // if(this.categorias.includes('otras')){
    //   this.Personajes = this.BackupPersonajes.filter(pers => !pers.house && pers.wizard )
    // }
    // console.log(this.Personajes);
  }
}
