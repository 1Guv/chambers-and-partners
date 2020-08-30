import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api.service';
import { Post } from 'src/app/_models/post.model';
import { User } from 'src/app/_models/user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  posts: Array<Post>;
  users: Array<User>

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.posts()
      .subscribe(data => {
        this.posts = data;
        console.log('Posts', this.posts);
      }, error => {
        console.log(error);
      })

      // this.api.users()
      // .subscribe(data => {
      //   this.users = data;
      //   console.log('Users', this.users);
      // }, error => {
      //   console.log(error);
      // })
  }

}
