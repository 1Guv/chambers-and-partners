import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './_pages/users/users.component';
import { PostsComponent } from './_pages/posts/posts.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'posts', component: PostsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
