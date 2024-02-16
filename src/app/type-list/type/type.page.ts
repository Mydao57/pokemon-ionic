import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Type } from 'src/app/models/type.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

  edit: boolean = false;
  type!: Type;


  constructor(
    private alertCtrl : AlertController,
    private route: ActivatedRoute,
    private Type: TypeService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Type.get(id).subscribe((value: any) => {
      this.type = value;
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
    this.Type.update(this.type).subscribe(() => {
      this.presentToast();
      this.edit = false;
    });
  }

  onDelete(id: any) {
    this.Type.delete(id);
    this.router.navigate(['/type']);
  }

}
