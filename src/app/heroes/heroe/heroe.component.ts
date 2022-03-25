import {Component} from "@angular/core";




@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

  nombre: string = 'Iron-Man';
  edad: number = 45;
  nombreReal: string = 'Tony Stark';
  armaduras: string[] = ['Iron Monger', 'Mark II', 'Iron Patriot']

    get nombreCapitalizado(){
      return this.nombre.toUpperCase()
    }

    get armadurasLista(){

      return this.armaduras

    }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;

  }

  cambiarNombre(): void {
    this.nombre = 'Spider-Man'
    this.nombreReal = 'Peter Parker'
  }

  cambiarEdad(): void {
    this.edad = 16;
  }
}
