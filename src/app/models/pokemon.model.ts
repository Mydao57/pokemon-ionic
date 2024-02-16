import { Abilities } from "./abilities.model";
import { Type } from "./type.model";

export class Pokemon {
  id?: string;
  name: string;
  imageUrl: string;

  constructor() {
    this.name = '';
    this.imageUrl = '';
  }
}
