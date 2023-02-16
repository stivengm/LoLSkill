import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isVisibleSearch = false;
  ngOnInit() {
    if (window.location.pathname != '/') {
      this.isVisibleSearch = true;
    } else {
      this.isVisibleSearch = false;
    }
  }

}
