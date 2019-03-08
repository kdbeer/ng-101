import { Injectable } from '@angular/core';
import { user } from '../class/bookprofile';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BookprofileService {
  bookprofiles: Observable<user[]>;

  bookprofileCollection: AngularFirestoreCollection<user>;
  bookprofileDocument: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.bookprofileCollection = this.db.collection('user');
    this.bookprofiles = this.bookprofileCollection.valueChanges();
  }

  getAll(): Observable<user[]> {
    return this.bookprofiles;
  }

  add(newBookingprofile: user): void {
    this.bookprofileCollection
      .doc(newBookingprofile.u_email.toString())
      .set(JSON.parse(JSON.stringify(newBookingprofile))); //แปลงจากobjectเป็นJSON
  }

  getBookingUserInfo(bookingID: string) {
    console.log(bookingID);

    // get user data by your condition
    return this.db.collection('user').get({
      /* condition */
    });
  }
}
