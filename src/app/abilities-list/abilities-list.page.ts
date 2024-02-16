import { Component, OnInit } from '@angular/core';
import { Abilities } from '../models/abilities.model';
import { AbilitiesService } from '../services/abilities.service';

@Component({
  selector: 'app-abilities-list',
  templateUrl: './abilities-list.page.html',
  styleUrls: ['./abilities-list.page.scss'],
})
export class AbilitiesListPage implements OnInit {

  abilities!: Array<Abilities>

  constructor(private Abilities: AbilitiesService) { }

  ngOnInit() {
    this.Abilities.getAll().subscribe((data: any) => {
      this.abilities = data;
    });
  }

}
