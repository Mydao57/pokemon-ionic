import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Abilities } from 'src/app/models/abilities.model';
import { AbilitiesService } from 'src/app/services/abilities.service';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.page.html',
  styleUrls: ['./abilities.page.scss'],
})
export class AbilitiesPage implements OnInit {

  modif: boolean = false;
  abilities!: Abilities;


  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Abilities: AbilitiesService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Abilities.get(id).subscribe((value: any) => {
      this.abilities = value;
    });
  }
  async setModif() {
    if(!this.modif) {
      const alert = await this.alertCtrl.create({
        header : 'Etes vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons : [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Configurer',
            handler: () => {this.modif = !this.modif}
          }
        ]
      });
      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Abilities.update(this.abilities).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Abilities.delete(id);
    this.router.navigate(['/abilities']);
  }

}
