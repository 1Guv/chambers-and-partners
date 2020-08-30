import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  isSideNaveMenuOpen = true;

  constructor() { }

  ngOnInit() {
  }

  togSideNav(event: any) {
    // console.log("AppComponent -> toggleSideNav -> event", event)
    this.isSideNaveMenuOpen = !this.isSideNaveMenuOpen;
    // console.log("AppComponent -> toggleSideNav -> this.isSideNaveMenuOpen", this.isSideNaveMenuOpen);
  }

}
