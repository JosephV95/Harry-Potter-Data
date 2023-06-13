import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { SpellListComponent } from './componentes/spell-list/spell-list.component';
import { AboutComponent } from './componentes/about/about.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'characters', component:CharactersComponent},
  {path:'spells', component:SpellListComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
