export class Type {
  id?: string;
  name: string;
  imageUrl: string;
  strongAgainst: Type[];
  weakAgainst: Type[];

  constructor() {
    this.name = '';
    this.imageUrl = '';
    this.strongAgainst = [];
    this.weakAgainst = [];
  }
}
