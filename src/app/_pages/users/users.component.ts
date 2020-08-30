import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user.model';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User>
  title = 'Users';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.users()
      .subscribe(users => {
        this.users = users;
      })
  }

}
