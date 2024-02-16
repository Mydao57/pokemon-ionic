import { Component, OnInit } from '@angular/core';
import { Type } from '../models/type.model';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.page.html',
  styleUrls: ['./type-list.page.scss'],
})
export class TypeListPage implements OnInit {

  types!: Array<Type>

  constructor(private Type: TypeService) { }

  ngOnInit() {
    this.Type.getAll().subscribe((data: any) => {
      this.types = data;
    });
  }

}
