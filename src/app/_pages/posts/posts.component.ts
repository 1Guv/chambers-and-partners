import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post.model';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.posts()
      .subscribe(data => {
        this.posts = data;
        console.log("PostsComponent -> getPosts -> this.posts", this.posts)
      })
  }

}
