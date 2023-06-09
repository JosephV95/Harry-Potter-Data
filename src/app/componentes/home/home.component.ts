import { Component } from '@angular/core';
import { DataHarryPotterApiService } from 'src/app/servicios/data-harry-potter-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  Personajes: any[] = [];

  constructor(private datosHarryP: DataHarryPotterApiService){  }

  ngOnInit(): void{
    this.datosHarryP.obtenerPersonajes().subscribe(data => {   

      for (let i = 0; i <= 16; i++) {
        this.Personajes.push(data[i]);
        
      }
    })
  }

}
