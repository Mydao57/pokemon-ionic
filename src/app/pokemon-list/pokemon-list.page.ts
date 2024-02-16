import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  pokemons!: Array<Pokemon>

  constructor(private Pokemon: PokemonService) { }

  ngOnInit() {
    this.Pokemon.getAll().subscribe((data: any) => {
      this.pokemons = data;
    });
  }


}
