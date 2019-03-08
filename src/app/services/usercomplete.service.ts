import { Injectable } from '@angular/core';
import { user } from '../class/bookprofile'
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class UsercompleteService {
  usercompletes: Observable<user[]>;

  usercompleteCollection: AngularFirestoreCollection<user>;
  usercompleteDocument: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) { 
    this.usercompleteCollection = this.db.collection('user');
    this.usercompletes = this.usercompleteCollection.valueChanges();
   }

   getAll(): Observable<user[]>{
     return this.usercompletes;
   }

   update(user: user): void {
    this.usercompleteDocument = this.db.doc('user/' + user.u_name);
    this.usercompleteDocument.update(user);
  }
}
