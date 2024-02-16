import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Type } from 'src/app/models/type.model';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-type-new',
  templateUrl: './type-new.page.html',
  styleUrls: ['./type-new.page.scss'],
})
export class TypeNewPage implements OnInit {

  public types!: Type;

  constructor(
    private Type: TypeService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.types = new Type();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'New type added',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/type']);
      }, 2000);
    });
  }

  add() {
    this.Type.saveNewType(this.types).subscribe(() => {
      this.types = new Type();
      this.presentToast();
    });
  }

}
