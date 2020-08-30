import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user.model';
import { Post } from '../_models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com';
  private urlToGetPostsByUser = 'https://jsonplaceholder.typicode.com/posts?userId=';
  private urlToGetUser = 'https://jsonplaceholder.typicode.com/users?id=';

  constructor(private http: HttpClient) { }

  public posts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + '/posts');
  }

  public users(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users');
  }

  public postsByUserId(id: number): any {
    return this.http.get(this.urlToGetPostsByUser+id);
  }

  public individualUser(id: number): any {
    return this.http.get(this.urlToGetUser+id);
  }

}
