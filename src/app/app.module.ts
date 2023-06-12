import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';

// Importaciones mias para el funcionamiento de la web
import { HttpClientModule } from '@angular/common/http';
// import { NgOptimizedImage } from '@angular/common'; //Necesario para el lazy loading de las imagenes(las imagenes se iran cargando mediante el scroll este cerca - mejora el tiempo de carga de la web)


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
