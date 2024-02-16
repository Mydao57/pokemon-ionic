import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { AlertController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  edit: boolean = false;
  pokemon!: Pokemon;


  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Pokemon: PokemonService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Pokemon.get(id).subscribe((value: any) => {
      this.pokemon = value;
    });
  }
  async setEdit() {
    if(!this.edit) {
      const alert = await this.alertCtrl.create({
        header : 'Are you sure you want to edit ?',
        buttons : [
          {
            text: 'Cancel',
            role: 'Cancel'
          }, {
            text: 'Configure',
            handler: () => {this.edit = !this.edit}
          }
        ]
      });
      await alert.present();
    } else {
      this.edit = !this.edit;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Edit successfull !',
      duration: 2000
    });
    (await toast).present();
  }

  onEdit() {
    this.Pokemon.update(this.pokemon).subscribe(() => {
      this.presentToast();
      this.edit = false;
    });
  }

  onDelete(id: any) {
    this.Pokemon.delete(id);
    this.router.navigate(['/pokemon']);
  }
}

