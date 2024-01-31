import { Component } from '@angular/core';

import { AccountModel, SummonerModel } from 'src/app/core/models/';

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

  img_profile = '';

  summoner = {}


  // {
  //   "puuid": "dkq7y-7rsgtrvnmyFuGq9emx4Dbg4q412O16SbqY855Fh4J0aSwPA63OC8IBAhlX-R8KlIjYcae82Q",
  //   "gameName": "XGameGamePlay0X",
  //   "tagLine": "LAN"
  // }


  constructor(public getAccountService: GetAccountService) {

  }

  ngOnInit() {

    this.getAccountService.getAccount().subscribe(( account: AccountModel ) => {
      console.log(account);
      this.account = account;
    });


    this.getAccountService.getSummoner().subscribe(( summoner: SummonerModel ) => {
      console.log(summoner);
      this.summoner = summoner;
      this.img_profile = "https://ddragon.leagueoflegends.com/cdn/14.2.1/img/profileicon/" + summoner.profileIconId + ".png";
    });

    this.getAccountService.getChampionsMaestry().subscribe(( championsMaestry ) => {
      console.log(championsMaestry);
    });



    var location = window.location.pathname;
    var splitLocation = location.split('/');
    this.region = splitLocation[2];
    
  }

}
