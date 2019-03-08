import { Injectable } from '@angular/core';
import { Booking } from '../class/booking';
import { Observable } from 'rxjs';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookings: Observable<Booking[]>;

  bookingCollection: AngularFirestoreCollection<Booking>;
  bookingDocument: AngularFirestoreDocument;

  constructor(private db: AngularFirestore) {
    this.bookingCollection = this.db.collection('booking');
    this.bookings = this.bookingCollection.valueChanges();
  }

  getAll(): Observable<Booking[]> {
    return this.bookings;
  }

  searchByDestination(destination: string): Observable<any> {
    return this.db
      .collection('booking', ref => ref.where('destination', '==', destination))
      .valueChanges();
  }
}
