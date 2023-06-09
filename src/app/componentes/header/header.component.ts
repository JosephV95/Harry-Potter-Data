import { Component } from '@angular/core';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  Personajes:any = [];

  constructor(private datosHarryP: DataHarryPotterApiService){  }
  
  ngOnInit(): void{
    this.datosHarryP.obtenerDatos().subscribe(data => {
      console.log(data[0]);
      // this.Personajes = data      

      for (let i = 0; i <= 20; i++) {
        this.Personajes.push(data[i]);
        
      }
    })
  }

}
