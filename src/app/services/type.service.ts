import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Abilities } from '../models/abilities.model';
import { Observable, map } from 'rxjs';
import { Type } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private dbPath = '/types';
  typeRef: AngularFirestoreCollection<Type>;

  constructor(private db: AngularFirestore) {
    this.typeRef = db.collection(this.dbPath);
  }

  getAll(): any {
    return this.typeRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
        });
      })
    );
  }

  saveNewType(type: Type): any {
    return new Observable((obs) => {
      this.typeRef.add({ ...type }).then(() => {
        obs.next();
      });
    });
  }

  get(id: any): any {
    return new Observable((obs) => {
      this.typeRef
        .doc(id)
        .get()
        .subscribe((res) => {
          obs.next({ id: res.id, ...res.data() });
        });
    });
  }

  update(type: Type) {
    return new Observable((obs) => {
      this.typeRef.doc(type.id).update(type);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`type/${id}`).delete();
  }
}
