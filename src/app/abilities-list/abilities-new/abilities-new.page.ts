import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Abilities } from 'src/app/models/abilities.model';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-abilities-new',
  templateUrl: './abilities-new.page.html',
  styleUrls: ['./abilities-new.page.scss'],
})
export class AbilitiesNewPage implements OnInit {

  public abilities!: Abilities;

  constructor(
    private Abilities: AbilitiesService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.abilities = new Abilities();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Pokémon enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/abilities']);
      }, 2000);
    });
  }

  add() {
    this.Abilities.saveNewAbilities(this.abilities).subscribe(() => {
      this.abilities = new Abilities();
      this.presentToast();
    });
  }

}
