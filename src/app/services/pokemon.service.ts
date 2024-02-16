import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Pokemon } from '../models/pokemon.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private dbPath = '/pokemons';
  pokemonsRef: AngularFirestoreCollection<Pokemon>;

  constructor(private db: AngularFirestore) {
    this.pokemonsRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.pokemonsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
        });
      })
    );
  }

  saveNewPokemon(pokemon: Pokemon): any {
    return new Observable((obs) => {
      this.pokemonsRef.add({ ...pokemon }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable((obs) => {
      this.pokemonsRef
        .doc(id)
        .get()
        .subscribe((res) => {
          obs.next({ id: res.id, ...res.data() });
        });
    });
  }

  update(pokemon: Pokemon) {
    return new Observable((obs) => {
      this.pokemonsRef.doc(pokemon.id).update(pokemon);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`pokemon/${id}`).delete();
  }
}
