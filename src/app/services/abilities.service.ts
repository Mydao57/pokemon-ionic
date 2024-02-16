import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Abilities } from '../models/abilities.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbilitiesService {
  private dbPath = '/abilities';
  abilitiesRef: AngularFirestoreCollection<Abilities>;

  constructor(private db: AngularFirestore) {
    this.abilitiesRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.abilitiesRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
        });
      })
    );
  }

  saveNewAbilities(abilities: Abilities): any {
    return new Observable((obs) => {
      this.abilitiesRef.add({ ...abilities }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable((obs) => {
      this.abilitiesRef
        .doc(id)
        .get()
        .subscribe((res) => {
          obs.next({ id: res.id, ...res.data() });
        });
    });
  }

  update(abilities: Abilities) {
    return new Observable((obs) => {
      this.abilitiesRef.doc(abilities.id).update(abilities);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`abilities/${id}`).delete();
  }
}
