import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/class/booking';
import { ScheduleService } from 'src/app/services/schedule.service';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-shedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
 bookings: Booking[];
 booking: Booking;

  constructor(private ScheduleService:  BookingService) { }

  ngOnInit() {
    this.booking = new Booking;
    this. ScheduleService.getAll().subscribe(res => {
      this.bookings = res;
    });
  }

  private searchDestination(destination: string) {
    this. ScheduleService.searchByDestination(destination).subscribe(res => {
      this.bookings = res;
    });
  }

}
