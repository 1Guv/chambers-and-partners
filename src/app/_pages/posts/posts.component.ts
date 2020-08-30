import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/_models/post.model';
import { ApiService } from 'src/app/_services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Array<Post>;
  title = 'Posts';

  constructor(
    private api: ApiService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
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

  public showPostDialog(post: Post) {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      data: post,
      height: '400px',
      width: '450px'
    });
  }

}
