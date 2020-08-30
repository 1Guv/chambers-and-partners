import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ApiService } from 'src/app/_services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputSideNav: MatSidenav;
  @Output() toggle = new EventEmitter();
  users: Array<User>
  randomUser: User;

  constructor(
    private api: ApiService,
    private snackBar: MatSnackBar    ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.api.users()
      .subscribe(data => {
        this.users = data;
        console.log('Users', this.users);
        this.getRandomUser();
      }, error => {
        console.log(error);
        this.snackBar.open('User Service Error', 'Close', {
          duration: 5000
        })
      })
  }

  public getRandomUser() {
    const randomNumber = Math.floor(Math.random() * this.users.length) + 1;
    this.randomUser = this.users[randomNumber];
    console.log('randomUser', this.randomUser);
  }

  public tog(event: any) {
    this.toggle.emit(event);
  }

}
