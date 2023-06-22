import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-detalle-pers',
  templateUrl: './detalle-pers.component.html',
  styleUrls: ['./detalle-pers.component.scss']
})
export class DetallePersComponent {

  id:string = '';
  personaje:any ={} ;
  // keys:any
  
  constructor(private rutaId: ActivatedRoute, private datosHP: DataHarryPotterApiService, private location: Location){}

  ngOnInit():void {
    // ? con esto obtendria el valor de id que vendria en la url
    this.id = this.rutaId.snapshot.params['id'];
    
       
    this.datosHP.obtenerPersonajes().subscribe(data=>{

      data.forEach((persona:any) => {
        if(persona.id == this.id){
          // console.log(Object.keys(persona));  //! Metodo para obtener las keys(claves) de un objeto
          this.personaje = persona;
          // this.keys = Object.keys(persona)
        }
      });
    })

    //? Esto seria para trabajar con la url de la api pero falta completarla y averiguar más, ademas no aparecerian las img que yo les puse a las cards
    // this.datosHP.buscarPersonaje(this.id).subscribe(data => {
    //   console.log(data);
    //   this.personaje = data
    // }) 
  }

  volverAtras(){
  //?  metodo especial en Angular (se debe importar Location de angular/common), en JS seria window.history.back() 
    this.location.back()
  }
}
