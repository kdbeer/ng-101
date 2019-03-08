import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/class/bookprofile';
import { UsercompleteService } from 'src/app/services/usercomplete.service';


@Component({
  selector: 'app-usercomplete',
  templateUrl: './usercomplete.component.html',
  styleUrls: ['./usercomplete.component.css']
})
export class UsercompleteComponent implements OnInit {
  users: user[];
  user: user;
  editMode = 'add';

  constructor(private usercompleteService: UsercompleteService) { }

  ngOnInit() {
    this.user = new user;
    this.usercompleteService.getAll().subscribe(res => {
      this.users = res;
    })
  }

  private selectusercomplete(user: user): void {
    this.user = user;
  }

  private editusercomplete(user: user): void {
    this.usercompleteService.update(this.user)
  }

}
