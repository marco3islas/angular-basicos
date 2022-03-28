import { Injectable } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interface';

  @Injectable()
  export class DbzService {

  private _personajes: Personaje [] = [
    {
      nombre: 'Bulma',
      poder: 0
    },
    {
      nombre: 'Androide 18',
      poder: 7000
    }
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];
  }
    
    constructor() {
    }

    agregarPersonaje(personaje: Personaje){
      this._personajes.push( personaje );
    }



  }
