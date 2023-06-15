import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageDefault]'
})
export class ImageDefaultDirective {

//? Se debe importar el ElementRef(ver otras formas de usarlo, ej: elemRef.style.text-decoration) en este caso para poner un url por defecto a las img de las cards.
  constructor(private elemRef: ElementRef) { }

  @HostListener('error')  //Escucha eventos del DOM o de un elemento, en este caso el error en una imagen
  onError() {
    this.elemRef.nativeElement.src = 'https://w0.peakpx.com/wallpaper/588/500/HD-wallpaper-harry-potter-logo-team.jpg'    
  }

}
