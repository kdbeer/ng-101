import { Component, OnInit, Input } from '@angular/core';
import { user } from 'src/app/class/bookprofile';
import { BookprofileService } from 'src/app/services/bookprofile.service';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/class/booking';

@Component({
  selector: 'app-bookprofile',
  templateUrl: './bookprofile.component.html',
  styleUrls: ['./bookprofile.component.css'],
})
export class BookprofileComponent implements OnInit {
  @Input() data;
  users: user[];
  user: user;
  bookingID: string;
  editMode = 'add';

  constructor(
    private bookprofileService: BookprofileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = new user();
    this.bookprofileService.getAll().subscribe(res => {
      this.users = res;
    });

    this.route.params.subscribe(params => {
      const bookingID = params['id'];
      if (bookingID === '') {
        return;
      }

      this.bookprofileService
        .getBookingUserInfo(bookingID)
        .subscribe(bookInfo => {
          console.log(bookInfo);
          // Any you want to do
        });
    });
  }

  private addUser(): void {
    this.bookprofileService.add(this.user);
  }
}
