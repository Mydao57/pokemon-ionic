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

  edit: boolean = false;
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
    this.Abilities.update(this.abilities).subscribe(() => {
      this.presentToast();
      this.edit = false;
    });
  }

  onDelete(id: any) {
    this.Abilities.delete(id);
    this.router.navigate(['/abilities']);
  }

}
