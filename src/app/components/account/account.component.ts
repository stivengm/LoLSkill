import { Component } from '@angular/core';

import { GetAccountService } from 'src/app/core/services/get-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  region = "";
  summonerName = "XGameGamePlay0X"

  constructor(public getAccountService: GetAccountService) {

  }

  ngOnInit() {

    this.getAccountService.getAccount().subscribe(( data ) => {
      console.log(data);
      
    })

    var location = window.location.pathname;
    var splitLocation = location.split('/');
    this.region = splitLocation[2];
    
  }

}
