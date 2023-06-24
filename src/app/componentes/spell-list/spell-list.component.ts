import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpellsAPIService } from 'src/app/servicios/spells-api.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.scss']
})
export class SpellListComponent {

  Hechizos:any = []

  constructor(private spellsApi: SpellsAPIService){}

  ngOnInit():void{
    this.spellsApi.obtenerSpells().subscribe(data =>{
      this.Hechizos = data;
    })
  }

}
