import { Abilities } from "./abilities.model";
import { Type } from "./type.model";

export class Pokemon {
  id?: string;
  name: string;
  imageUrl: string;
  types: Type[];
  abilities: Abilities[];

  constructor() {
    this.name = '';
    this.imageUrl = '';
    this.types = [];
    this.abilities = [];
  }
}
