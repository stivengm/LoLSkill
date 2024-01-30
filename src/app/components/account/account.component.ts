import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  region = "";

  ngOnInit() {

    var location = window.location.pathname;
    var splitLocation = location.split('/');
    this.region = splitLocation[2];
    
  }

}
