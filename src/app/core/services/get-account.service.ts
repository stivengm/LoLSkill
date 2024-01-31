import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ENVIRONMENT } from 'src/environments/environment';

import { AccountModel, SummonerModel } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class GetAccountService {

  url = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/XGameGamePlay0X/LAN?api_key=" + ENVIRONMENT.apiKey;

  constructor(private http: HttpClient) { }

  getAccount() {

    return this.http.get<AccountModel>(this.url);

  }

  getSummoner() {
    var api = "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/XGameGamePlay0X?api_key=" + ENVIRONMENT.apiKey;
    return this.http.get<SummonerModel>(api);
  }

  getChampionsMaestry() {
    var api = "https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/dkq7y-7rsgtrvnmyFuGq9emx4Dbg4q412O16SbqY855Fh4J0aSwPA63OC8IBAhlX-R8KlIjYcae82Q?api_key=" + ENVIRONMENT.apiKey;
    return this.http.get(api);
  }

  getLeague() {
    var api = "https://la1.api.riotgames.com/lol/league/v4/entries/by-summoner/Anff-N-IQVmc57c47bHkDYWEO5i5bAJ4_jM5g-U6h6H_ag?api_key=" + ENVIRONMENT.apiKey;
  }


}
