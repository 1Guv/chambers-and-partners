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
  title = 'Posts';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.api.posts()
      .subscribe(posts => {
        this.posts = posts;
        console.log("PostsComponent -> getPosts -> this.posts", this.posts)
        this.addUsersToPosts(this.posts);
      })      
  }

  public addUsersToPosts(posts: Array<Post>) {
    posts.forEach(post => {
      this.api.individualUser(post.userId)
        .subscribe(user => {
          post.user = user[0];
        })
    })
    console.log("posts with users", this.posts)
  }

}
