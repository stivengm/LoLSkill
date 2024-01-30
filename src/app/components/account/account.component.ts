import { Component } from '@angular/core';
import { AccountModel } from 'src/app/core/models/account.model';

import { GetAccountService } from 'src/app/core/services/get-account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  region = "";

  account: AccountModel = {
    gameName: '',
    puuid: '',
    tagLine: ''
  };


  constructor(public getAccountService: GetAccountService) {

  }

  ngOnInit() {

    this.getAccountService.getAccount().subscribe(( account: AccountModel ) => {
      console.log(account);
      this.account = account;
    })

    var location = window.location.pathname;
    var splitLocation = location.split('/');
    this.region = splitLocation[2];
    
  }

}
