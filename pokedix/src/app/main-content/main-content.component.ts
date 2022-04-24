import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import * as pokedex from 'src/assets/data/pokedex.json';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  pokedex!: string;
  tempPokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
    this.pokedex = JSON.stringify(pokedex);
    this.getPokemonFromJson("Bulbasaur");
  }

  
  getPokemonFromJson(name: string) {
    JSON.parse(this.pokedex, (key, value) => {
      if (key === name) {
      }
    });
}

}
