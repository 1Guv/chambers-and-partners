import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ApiService } from 'src/app/_services/api.service';
import { MatDialog } from '@angular/material';
import { UsersDialogComponent } from '../users-dialog/users-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>
  title = 'Users';

  constructor(
    private api: ApiService, 
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.api.users()
      .subscribe(users => {
        this.users = users;
      })
  }

  public openDialog(user: User) {
    const dialogRef = this.dialog.open(UsersDialogComponent, {
      data: user,
      height: '550px',
      width: '450px'
    });
  }

}
