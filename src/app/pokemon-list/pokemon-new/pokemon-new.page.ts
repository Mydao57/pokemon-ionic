import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-new',
  templateUrl: './pokemon-new.page.html',
  styleUrls: ['./pokemon-new.page.scss'],
})
export class PokemonNewPage implements OnInit {
  public pokemon!: Pokemon;

  constructor(
    private Pokemon: PokemonService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'New Pokemon added',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/pokemon']);
      }, 2000);
    });
  }

  add() {
    this.Pokemon.saveNewPokemon(this.pokemon).subscribe(() => {
      this.pokemon = new Pokemon();
      this.presentToast();
    });
  }
}

