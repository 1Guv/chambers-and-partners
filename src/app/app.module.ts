import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './_pages/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './_elements/header/header.component';
import { MatSnackBarModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSidenavModule } from '@angular/material';
import { UsersComponent } from './_pages/users/users.component';
import { PostsComponent } from './_pages/posts/posts.component';
import { HomeComponent } from './_pages/home/home.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    UsersComponent,
    PostsComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
