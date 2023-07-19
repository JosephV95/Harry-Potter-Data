import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CharactersComponent } from './componentes/characters/characters.component';
import { SpellListComponent } from './componentes/spell-list/spell-list.component';
import { AboutComponent } from './componentes/about/about.component';
import { DetallePersComponent } from './componentes/detalle-pers/detalle-pers.component';
import { NotPageFoundComponent } from './componentes/not-page-found/not-page-found.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'characters', component:CharactersComponent},
  {path:'spells', component:SpellListComponent},
  {path:'about', component:AboutComponent},
  {path:'detail/:id', component:DetallePersComponent},
  {path:'**', component:NotPageFoundComponent}   //*  Se debe poner al final la ruta para el erros 404 para que no afecte el funcionamiento de la web
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
